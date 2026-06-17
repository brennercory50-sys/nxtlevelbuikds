import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { escapeHtml, sanitizeUrl } from '@/lib/escape';
import { leadSchema } from '@/lib/schemas';
import { rateLimit } from '@/lib/rate-limit';
import { validateOrigin, csrfError } from '@/lib/csrf';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  if (!validateOrigin(req)) return csrfError();
  const ip = req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? 'unknown';
  const { allowed, remaining } = rateLimit(`lead:${ip}`, 5, 60000);
  if (!allowed) {
    return NextResponse.json({ error: 'Too many requests. Please wait before submitting again.' }, { status: 429, headers: { 'X-RateLimit-Remaining': '0' } });
  }

  const body = await req.json();
  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', details: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const { name, email, phone, website, businessName, city, type } = parsed.data;

  const safe = (s: string) => escapeHtml(s);
  const safeUrl = (s: string) => escapeHtml(sanitizeUrl(s));
  const resend = new Resend(process.env.RESEND_API_KEY);
  const isWebsite = type === 'website-audit';
  const subject = isWebsite
    ? `New Website Audit Request — ${safe(name)} (${website ? safe(website) : 'no URL provided'})`
    : `New SEO Audit Request — ${safe(name)} (${businessName ? safe(businessName) : 'no business name'})`;

  // Send owner notification (critical path)
  try {
    await resend.emails.send({
      from: 'NXT Level Builds <hello@nxtlevelbuilds.com>',
      to: 'hello@nxtlevelbuilds.com',
      replyTo: email,
      subject,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#1a6eff;border-bottom:2px solid #1a6eff;padding-bottom:8px;">
            ${isWebsite ? 'Website Audit Request' : 'SEO Audit Request'}
          </h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;font-weight:bold;width:140px;">Name:</td><td>${safe(name)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Email:</td><td><a href="mailto:${safe(email)}">${safe(email)}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Phone:</td><td>${safe(phone) || 'Not provided'}</td></tr>
            ${isWebsite
              ? `<tr><td style="padding:8px 0;font-weight:bold;">Website:</td><td><a href="${safeUrl(website)}">${safe(website)}</a></td></tr>`
              : `<tr><td style="padding:8px 0;font-weight:bold;">Business:</td><td>${safe(businessName)}</td></tr>
                 <tr><td style="padding:8px 0;font-weight:bold;">City:</td><td>${safe(city)}</td></tr>`
            }
          </table>
        </div>
      `,
    });
  } catch (error) {
    console.error('Resend owner notification error:', error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }

  // Confirm to lead (non-critical — owner already has the data)
  try {
    await resend.emails.send({
      from: 'Cory at NXT Level Builds <hello@nxtlevelbuilds.com>',
      to: email,
      subject: isWebsite
        ? `Got your website audit request — reviewing ${safe(website) || 'your site'} now`
        : `Got your SEO audit request — analyzing ${safe(businessName) || 'your business'} now`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#374151;">
          <p>Hey ${safe(name)},</p>
          <p>Got your ${isWebsite ? 'website audit' : 'SEO audit'} request — we're already on it.</p>
          <p>We'll ${isWebsite ? 'review your site and send back a custom Loom video' : 'pull your Google Maps rankings and put together your ranking report'} within 48 hours.</p>
          <p>In the meantime, feel free to call or text us directly:<br>
          <strong><a href="tel:+13862590178" style="color:#1a6eff;">(386) 259-0178</a></strong></p>
          <p>— Cory<br>NXT Level Builds</p>
        </div>
      `,
    });
  } catch (error) {
    console.error('Resend lead confirmation error (non-critical):', error);
  }

  return NextResponse.json({ success: true });
}
