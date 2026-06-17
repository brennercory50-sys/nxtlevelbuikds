import { NextRequest, NextResponse } from 'next/server';
import { getConversation, createConversation, updateConversation } from '@/lib/chat/store';
import { generateResponse } from '@/lib/chat/config';
import { chatMessageSchema } from '@/lib/schemas';
import { rateLimit } from '@/lib/rate-limit';
import { validateOrigin, csrfError } from '@/lib/csrf';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  if (!validateOrigin(req)) return csrfError();
  const ip = req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? 'unknown';
  const { allowed, remaining } = rateLimit(`chat:${ip}`, 30, 60000);
  if (!allowed) {
    return NextResponse.json({ error: 'Too many requests. Please slow down.' }, { status: 429, headers: { 'X-RateLimit-Remaining': '0' } });
  }

  try {
    const body = await req.json();
    const parsed = chatMessageSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Validation failed', details: parsed.error.flatten().fieldErrors }, { status: 400 });
    }

    const { conversationId, message, utm } = parsed.data;

    let conversation = conversationId ? getConversation(conversationId) : null;
    if (!conversation) {
      const newId = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
      conversation = createConversation(newId, utm || undefined);
    }

    const userMsg = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      role: 'user' as const,
      content: message.trim(),
      timestamp: Date.now(),
    };

    conversation = updateConversation(conversation.id, {
      messages: [...conversation.messages, userMsg],
      utm: utm || conversation.utm,
    });

    const result = generateResponse(message.trim(), conversation);

    updateConversation(conversation.id, {
      messages: [...conversation.messages, result.message],
    });

    return NextResponse.json({
      conversationId: conversation.id,
      response: result.message.content,
      leadFormSuggested: result.leadFormSuggested,
      bookingSuggested: result.bookingSuggested,
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
