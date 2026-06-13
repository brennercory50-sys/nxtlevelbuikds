import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, website, businessName, city, type } = body;

  if (!name || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const isWebsite = type === 'website-audit';
  const subject = isWebsite
    ? `New Website Audit Request — ${name} (${website || 'no URL provided'})`
    : `New SEO Audit Request — ${name} (${businessName || 'no business name'})`;

  try {
    // Notify owner
    await resend.emails.send({
      from: 'NXT Level Builds <hello@nxtlevelbuilds.com>',
      to: 'hello@nxtlevelbuilds.com',
      replyTo: email,
      subject,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#1a6eff;border-bottom:2px solid #1a6eff;padding-bottom:8px;">
            ${isWebsite ? '🔍 Website Audit Request' : '📊 SEO Audit Request'}
          </h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;font-weight:bold;width:140px;">Name:</td><td>${name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Phone:</td><td>${phone || 'Not provided'}</td></tr>
            ${isWebsite
              ? `<tr><td style="padding:8px 0;font-weight:bold;">Website:</td><td><a href="${website}">${website}</a></td></tr>`
              : `<tr><td style="padding:8px 0;font-weight:bold;">Business:</td><td>${businessName}</td></tr>
                 <tr><td style="padding:8px 0;font-weight:bold;">City:</td><td>${city}</td></tr>`
            }
          </table>
        </div>
      `,
    });

    // Confirm to lead
    await resend.emails.send({
      from: 'Cory at NXT Level Builds <hello@nxtlevelbuilds.com>',
      to: email,
      subject: isWebsite
        ? `Got your website audit request — reviewing ${website || 'your site'} now`
        : `Got your SEO audit request — analyzing ${businessName || 'your business'} now`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#374151;">
          <p>Hey ${name},</p>
          <p>Got your ${isWebsite ? 'website audit' : 'SEO audit'} request — we're already on it.</p>
          <p>We'll ${isWebsite ? 'review your site and send back a custom Loom video' : 'pull your Google Maps rankings and put together your ranking report'} within 48 hours.</p>
          <p>In the meantime, feel free to call or text us directly:<br>
          <strong><a href="tel:+13862590178" style="color:#1a6eff;">(386) 259-0178</a></strong></p>
          <p>— Cory<br>NXT Level Builds</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend lead error:', error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
