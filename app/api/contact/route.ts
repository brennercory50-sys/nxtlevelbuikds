import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, service, budget, timeline, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'NXT Level Builds <hello@nxtlevelbuilds.com>',
      to: 'hello@nxtlevelbuilds.com',
      replyTo: email,
      subject: `New Lead: ${name} — ${service || 'General Inquiry'}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#1a6eff;border-bottom:2px solid #1a6eff;padding-bottom:8px;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;font-weight:bold;color:#374151;width:120px;">Name:</td><td style="padding:8px 0;color:#111;">${name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#374151;">Email:</td><td style="padding:8px 0;color:#111;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#374151;">Phone:</td><td style="padding:8px 0;color:#111;">${phone || 'Not provided'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#374151;">Service:</td><td style="padding:8px 0;color:#111;">${service || 'Not selected'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#374151;">Budget:</td><td style="padding:8px 0;color:#111;">${budget || 'Not specified'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#374151;">Timeline:</td><td style="padding:8px 0;color:#111;">${timeline || 'Not specified'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#374151;vertical-align:top;">Message:</td><td style="padding:8px 0;color:#111;">${message}</td></tr>
          </table>
          <div style="margin-top:24px;padding:16px;background:#f0f6ff;border-radius:8px;border-left:4px solid #1a6eff;">
            <p style="margin:0;font-size:13px;color:#374151;">Reply directly to this email to respond to ${name}.</p>
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
