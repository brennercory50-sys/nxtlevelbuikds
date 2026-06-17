import { NextRequest, NextResponse } from 'next/server';
import { getConversation, updateConversation } from '@/lib/chat/store';
import { scoreLead, generateLeadEmailHtml } from '@/lib/chat/config';
import { chatLeadSchema } from '@/lib/schemas';
import { rateLimit } from '@/lib/rate-limit';
import { validateOrigin, csrfError } from '@/lib/csrf';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  if (!validateOrigin(req)) return csrfError();
  const ip = req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? 'unknown';
  const { allowed, remaining } = rateLimit(`chat-lead:${ip}`, 3, 60000);
  if (!allowed) {
    return NextResponse.json({ error: 'Too many requests. Please wait before submitting again.' }, { status: 429, headers: { 'X-RateLimit-Remaining': '0' } });
  }

  try {
    const body = await req.json();
    const parsed = chatLeadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Validation failed', details: parsed.error.flatten().fieldErrors }, { status: 400 });
    }

    const { conversationId, lead } = parsed.data;

    const conversation = getConversation(conversationId);
    if (!conversation) {
      return NextResponse.json({ error: 'Conversation not found' }, { status: 404 });
    }

    const score = scoreLead(lead, conversation);

    updateConversation(conversationId, {
      lead,
      score,
      status: score.tier === 'hot' ? 'qualified' : 'active',
    });

    const services = ['website', 'seo', 'google ads', 'automation', 'crm', 'lead generation', 'chatbot'];
    const mentionedServices = services.filter(s =>
      conversation.messages.some(m => m.content.toLowerCase().includes(s))
    );

    const recommendation = mentionedServices.length > 0
      ? `${mentionedServices.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(', ')}`
      : 'Web Design & Digital Marketing';

    // Send email notification if Resend is configured
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
          from: 'NXT Level Builds <hello@nxtlevelbuilds.com>',
          to: 'hello@nxtlevelbuilds.com',
          replyTo: lead.email,
          subject: `🔥 Chat Lead: ${lead.name} — ${lead.company} (${score.tier.toUpperCase()} — ${score.total}/100)`,
          html: generateLeadEmailHtml(lead, score),
        });
      } catch (emailError) {
        console.error('Failed to send lead email:', emailError);
      }
    }

    return NextResponse.json({
      success: true,
      score,
      recommendation,
      bookingUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/nxtlevelbuilds/consultation',
    });
  } catch (error) {
    console.error('Lead API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
