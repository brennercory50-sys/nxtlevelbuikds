'use client';
import Link from 'next/link';
import { events } from '@/lib/gtag';

export default function MobileBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-white/10" style={{ background: '#0d0f14' }}>
      <a
        href="tel:+13862590178"
        onClick={() => events.phone_click('mobile_bar')}
        className="flex-1 flex flex-col items-center justify-center py-3 gap-0.5 text-white/70 hover:text-white transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.2a16 16 0 0 0 6.29 6.29l.61-.61a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        <span className="text-[10px] font-bold tracking-wide">Call Now</span>
      </a>
      <div className="w-px bg-white/10" />
      <Link
        href="/contact"
        onClick={() => events.cta_click('mobile_bar_contact')}
        className="flex-1 flex flex-col items-center justify-center py-3 gap-0.5 text-white font-bold"
        style={{ background: '#1a6eff' }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        <span className="text-[10px] font-bold tracking-wide">Free Quote</span>
      </Link>
    </div>
  );
}
