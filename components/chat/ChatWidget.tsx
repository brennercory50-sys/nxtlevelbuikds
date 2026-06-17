'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChatMessage, Conversation, LeadData } from '@/lib/chat/types';
import { trackEvent } from '@/lib/gtag';
import { CHAT_CONFIG } from '@/lib/chat/config';
import ChatPanel from './ChatPanel';

function loadConversation(): { id: string; messages: ChatMessage[]; leadCaptured: boolean } | null {
  try {
    const raw = localStorage.getItem('nxt_chat');
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (Date.now() - data.updatedAt > 86400000) {
      localStorage.removeItem('nxt_chat');
      return null;
    }
    return {
      id: data.id,
      messages: data.messages || [],
      leadCaptured: !!data.lead,
    };
  } catch {
    return null;
  }
}

function saveConversation(conversation: Partial<Conversation>) {
  try {
    localStorage.setItem('nxt_chat', JSON.stringify({
      id: conversation.id,
      messages: conversation.messages,
      lead: conversation.lead,
      updatedAt: Date.now(),
    }));
  } catch { /* quota exceeded — ignore */ }
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
}

function getUTMParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) {
    const val = params.get(key);
    if (val) utm[key] = val;
  }
  return utm;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [convId, setConvId] = useState<string>('');
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadFormLoading, setLeadFormLoading] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const botRespondingRef = useRef(false);

  useEffect(() => {
    const saved = loadConversation();
    if (saved) {
      setConvId(saved.id);
      setMessages(saved.messages);
      setLeadCaptured(saved.leadCaptured);
    } else {
      const id = generateId();
      setConvId(id);
      saveConversation({ id, messages: [] });
    }
  }, []);

  const sendMessage = useCallback(async (text: string) => {
    if (botRespondingRef.current) return;

    const userMsg: ChatMessage = {
      id: generateId(),
      role: 'user',
      content: text,
      timestamp: Date.now(),
    };

    const updated = [...messages, userMsg];
    setMessages(updated);
    setHasInteracted(true);
    botRespondingRef.current = true;

    trackEvent('chat_message_sent', { message_length: text.length });

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversationId: convId,
          message: text,
          utm: getUTMParams(),
        }),
      });

      if (!res.ok) throw new Error('Chat API error');

      const data = await res.json();
      const botMsg: ChatMessage = {
        id: generateId(),
        role: 'assistant',
        content: data.response,
        timestamp: Date.now(),
      };

      const withBot = [...updated, botMsg];
      setMessages(withBot);
      saveConversation({ id: convId, messages: withBot });

      if (data.leadFormSuggested && !leadCaptured) {
        setShowLeadForm(true);
      }
      if (data.bookingSuggested && !leadCaptured) {
        setShowBooking(true);
      }
    } catch {
      const errMsg: ChatMessage = {
        id: generateId(),
        role: 'assistant',
        content: "Sorry, I'm having trouble connecting. Please try again or reach us at hello@nxtlevelbuilds.com",
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, errMsg]);
    } finally {
      botRespondingRef.current = false;
    }
  }, [messages, convId, leadCaptured]);

  const handleLeadSubmit = useCallback(async (lead: LeadData) => {
    setLeadFormLoading(true);
    try {
      const res = await fetch('/api/chat/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ conversationId: convId, lead }),
      });

      if (!res.ok) throw new Error('Lead API error');

      const data = await res.json();
      setLeadCaptured(true);
      setShowLeadForm(false);

      trackEvent('chat_lead_captured', {
        lead_score: data.score?.total,
        lead_tier: data.score?.tier,
      });

      const confirmMsg: ChatMessage = {
        id: generateId(),
        role: 'assistant',
        content: `Thanks ${lead.name}! I've sent your information to our team. Here's what I recommend based on our chat:\n\n• **Service Fit**: ${data.recommendation || 'We have several options that could work for you'}\n• **Estimated Investment**: Based on your budget of $${lead.budget.toLocaleString()}/mo\n\nWould you like to book a free consultation to discuss this in detail?`,
        timestamp: Date.now(),
      };

      const withBot = [...messages, confirmMsg];
      setMessages(withBot);
      saveConversation({ id: convId, messages: withBot, lead });

      setShowBooking(true);
    } catch {
      const errMsg: ChatMessage = {
        id: generateId(),
        role: 'assistant',
        content: "Thanks! I've received your information. Please feel free to continue the conversation or book a call with us.",
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, errMsg]);
    } finally {
      setLeadFormLoading(false);
    }
  }, [convId, messages]);

  const handleLeadSkip = useCallback(() => {
    setShowLeadForm(false);
    trackEvent('chat_lead_skipped');
  }, []);

  const handleBook = useCallback(() => {
    trackEvent('chat_booking_click');
  }, []);

  // Track open/close
  const handleOpen = useCallback(() => {
    setIsOpen(true);
    trackEvent('chat_opened');
    // Auto-send welcome message if first time
    if (messages.length === 0 && !leadCaptured) {
      // Don't send anything — the welcome screen is shown
    }
  }, [messages.length, leadCaptured]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    if (hasInteracted) trackEvent('chat_closed');
  }, [hasInteracted]);

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          aria-label="Open chat"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#1a6eff] hover:bg-[#0047cc] shadow-lg shadow-[#1a6eff]/25 hover:shadow-[#1a6eff]/40 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#1a6eff] animate-ping opacity-20" />
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <>
          {/* Desktop backdrop */}
          <div className="hidden sm:block fixed inset-0 z-40 bg-black/20" onClick={handleClose} />
          {/* Panel */}
          <div className="fixed bottom-6 right-6 z-50 w-[380px] h-[620px] max-h-[calc(100vh-120px)] sm:block max-sm:fixed max-sm:inset-0 max-sm:w-full max-sm:h-full max-sm:bottom-0 max-sm:right-0 max-sm:rounded-none">
            <ChatPanel
              messages={messages}
              onSend={sendMessage}
              onLeadSubmit={handleLeadSubmit}
              onLeadSkip={handleLeadSkip}
              onClose={handleClose}
              showLeadForm={showLeadForm}
              leadFormLoading={leadFormLoading}
              showBooking={showBooking}
              onBook={handleBook}
              bookingUrl={CHAT_CONFIG.bookingUrl}
              botName={CHAT_CONFIG.botName}
            />
          </div>
        </>
      )}
    </>
  );
}
