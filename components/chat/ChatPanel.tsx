'use client';

import { useEffect, useRef, useState } from 'react';
import { ChatMessage as ChatMessageType } from '@/lib/chat/types';
import LeadForm from './LeadForm';

interface ChatPanelProps {
  messages: ChatMessageType[];
  onSend: (message: string) => void;
  onLeadSubmit: (data: any) => void;
  onLeadSkip: () => void;
  onClose: () => void;
  showLeadForm: boolean;
  leadFormLoading: boolean;
  showBooking: boolean;
  onBook: () => void;
  bookingUrl: string;
  botName: string;
}

const QUICK_ACTIONS = [
  { label: 'Web Design', value: 'Tell me about web design' },
  { label: 'SEO', value: 'Tell me about SEO' },
  { label: 'Google Ads', value: 'Tell me about Google Ads' },
  { label: 'AI Automation', value: 'Tell me about AI automation' },
  { label: 'Pricing', value: 'What are your prices?' },
  { label: 'Portfolio', value: 'Show me your work' },
];

export default function ChatPanel({
  messages, onSend, onLeadSubmit, onLeadSkip, onClose,
  showLeadForm, leadFormLoading, showBooking, onBook, bookingUrl, botName,
}: ChatPanelProps) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, showLeadForm]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleSend(e?: React.FormEvent) {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;
    onSend(text);
    setInput('');
  }

  const hasMessages = messages.length > 0;
  const showWelcome = !hasMessages && !showLeadForm;

  return (
    <div className="flex flex-col h-full bg-[#0d0f14] rounded-2xl overflow-hidden border border-[#1a1d24] shadow-2xl">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d0f14] border-b border-[#1a1d24] shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#1a6eff] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div>
            <p className="text-white text-sm font-semibold leading-tight">{botName}</p>
            <p className="text-[#00c47a] text-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00c47a]" />
              Online
            </p>
          </div>
        </div>
        <button onClick={onClose} className="text-[#6b7280] hover:text-white transition-colors p-1">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin">
        {showWelcome && (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="w-12 h-12 rounded-xl bg-[#1a6eff]/10 flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a6eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <p className="text-[#9ca3af] text-sm leading-relaxed max-w-xs">
              Hi! I&apos;m the <span className="text-white font-medium">NXTLEVELBUILDS AI</span> assistant.
              Ask me anything about web design, SEO, Google Ads, or AI automation.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2 w-full max-w-xs">
              {QUICK_ACTIONS.slice(0, 4).map(action => (
                <button
                  key={action.value}
                  onClick={() => onSend(action.value)}
                  className="text-xs bg-[#1a1d24] hover:bg-[#2a2d35] text-[#d1d5db] rounded-lg px-3 py-2 transition-colors border border-[#2a2d35]"
                >
                  {action.label}
                </button>
              ))}
            </div>
            <div className="mt-2 flex gap-2 w-full max-w-xs">
              {QUICK_ACTIONS.slice(4).map(action => (
                <button
                  key={action.value}
                  onClick={() => onSend(action.value)}
                  className="flex-1 text-xs bg-[#1a1d24] hover:bg-[#2a2d35] text-[#d1d5db] rounded-lg px-3 py-2 transition-colors border border-[#2a2d35]"
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                msg.role === 'user'
                  ? 'bg-[#1a6eff] text-white rounded-br-md'
                  : 'bg-[#1a1d24] text-[#e5e7eb] rounded-bl-md'
              }`}
            >
              {msg.content.split('\n').map((line, i) => (
                <p key={i} className={i > 0 ? 'mt-2' : ''}>
                  {line.startsWith('• ') ? (
                    <span className="flex gap-2">
                      <span className="text-[#1a6eff] shrink-0">•</span>
                      <span>{line.slice(2)}</span>
                    </span>
                  ) : line.startsWith('**') && line.endsWith('**') ? (
                    <span className="font-semibold text-white">{line.slice(2, -2)}</span>
                  ) : line.includes('**') ? (
                    <span dangerouslySetInnerHTML={{
                      __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                    }} />
                  ) : (
                    line
                  )}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* Lead Form */}
        {showLeadForm && (
          <div className="bg-[#1a1d24] rounded-2xl border border-[#2a2d35] overflow-hidden">
            <LeadForm onSubmit={onLeadSubmit} onSkip={onLeadSkip} loading={leadFormLoading} />
          </div>
        )}

        {/* Booking CTA */}
        {showBooking && !showLeadForm && (
          <div className="bg-gradient-to-r from-[#1a6eff]/10 to-transparent rounded-2xl p-4 border border-[#1a6eff]/20 text-center">
            <p className="text-white text-sm font-medium mb-2">Ready to take the next step?</p>
            <p className="text-[#9ca3af] text-xs mb-3">Book a free strategy consultation with our team</p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onBook}
              className="inline-block bg-[#1a6eff] hover:bg-[#0047cc] text-white text-sm font-medium rounded-lg px-6 py-2.5 transition-colors"
            >
              Book Free Consultation
            </a>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="flex items-center gap-2 p-3 border-t border-[#1a1d24] bg-[#0d0f14] shrink-0">
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-[#1a1d24] text-white text-sm rounded-xl px-4 py-2.5 placeholder-[#6b7280] border border-[#2a2d35] focus:border-[#1a6eff] focus:outline-none transition-colors"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="w-10 h-10 rounded-xl bg-[#1a6eff] hover:bg-[#0047cc] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors shrink-0"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </form>
    </div>
  );
}
