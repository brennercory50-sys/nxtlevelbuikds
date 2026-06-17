import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { escapeHtml } from '@/lib/escape';
import { contactSchema } from '@/lib/schemas';
import { rateLimit } from '@/lib/rate-limit';
import { validateOrigin, csrfError } from '@/lib/csrf';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  if (!validateOrigin(req)) return csrfError();
  const ip = req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? 'unknown';
  const { allowed, remaining } = rateLimit(`contact:${ip}`, 5, 60000);
  if (!allowed) {
    return NextResponse.json({ error: 'Too many requests. Please wait before submitting again.' }, { status: 429, headers: { 'X-RateLimit-Remaining': '0' } });
  }

  const body = await req.json();
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', details: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const { name, email, phone, service, budget, timeline, message } = parsed.data;

  const resend = new Resend(process.env.RESEND_API_KEY);

  const safe = (s: string) => escapeHtml(s);

  try {
    await resend.emails.send({
      from: 'NXT Level Builds <hello@nxtlevelbuilds.com>',
      to: 'hello@nxtlevelbuilds.com',
      replyTo: email,
      subject: `New Lead: ${safe(name)} — ${safe(service) || 'General Inquiry'}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#1a6eff;border-bottom:2px solid #1a6eff;padding-bottom:8px;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;font-weight:bold;color:#374151;width:120px;">Name:</td><td style="padding:8px 0;color:#111;">${safe(name)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#374151;">Email:</td><td style="padding:8px 0;color:#111;"><a href="mailto:${safe(email)}">${safe(email)}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#374151;">Phone:</td><td style="padding:8px 0;color:#111;">${safe(phone) || 'Not provided'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#374151;">Service:</td><td style="padding:8px 0;color:#111;">${safe(service) || 'Not selected'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#374151;">Budget:</td><td style="padding:8px 0;color:#111;">${safe(budget) || 'Not specified'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#374151;">Timeline:</td><td style="padding:8px 0;color:#111;">${safe(timeline) || 'Not specified'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#374151;vertical-align:top;">Message:</td><td style="padding:8px 0;color:#111;">${safe(message)}</td></tr>
          </table>
          <div style="margin-top:24px;padding:16px;background:#f0f6ff;border-radius:8px;border-left:4px solid #1a6eff;">
            <p style="margin:0;font-size:13px;color:#374151;">Reply directly to this email to respond to ${safe(name)}.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
