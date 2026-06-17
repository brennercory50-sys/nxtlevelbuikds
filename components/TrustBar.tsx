'use client';

import { useState } from 'react';
import Counter from '@/components/Counter';
import { trackEvent } from '@/lib/gtag';

/* ── Trust data ── */

const STATS = [
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, target: 20, suffix: '+', label: 'Projects Completed' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>, target: 100, suffix: '%', label: 'Client Retention' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, target: 50, suffix: '+', label: '5-Star Reviews' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, target: 500, suffix: 'K+', prefix: '$', label: 'Ad Spend Managed' },
];

const RESULTS_IN_ACTION = [
  { metric: '190%', label: 'Avg Organic Lead Increase', color: '#00c47a' },
  { metric: '4.2×', label: 'Avg Return on Ad Spend', color: '#1a6eff' },
  { metric: '12 hrs', label: 'Avg Time Saved Per Week', color: '#8b5cf6' },
  { metric: '7 Days', label: 'Avg Website Launch Time', color: '#f59e0b' },
];

const TESTIMONIALS = [
  {
    quote: "Before working with NXT Level Builds, nobody could find us online. Now I'm getting calls every week from people who found us on Google. The website paid for itself in the first month.",
    name: 'David Miller',
    role: "Owner, Miller's Screen & Pool",
  },
  {
    quote: "Our old site looked like every other builder's site. The new one actually reflects what we build. Inquiries tripled and the people reaching out are actually serious buyers — not just tire kickers.",
    name: 'James Harrington',
    role: 'Principal, Elevate Developments',
  },
  {
    quote: "I was spending half my week on scheduling and follow-up. Now it all runs automatically. I didn't realize how much time I was losing until it was just — gone. Best investment I've made in the business.",
    name: 'Marcus Webb',
    role: 'Owner, Ironclad Build',
  },
];

const CLIENTS = [
  "Miller's Screen & Pool", 'Elevate Developments', 'Ironclad Build',
  'Summit Exteriors', 'Premier Solutions', 'Peak Performance',
];

export type TrustMode = 'full' | 'stats' | 'compact' | 'results';

interface Props {
  mode?: TrustMode;
  title?: string;
  subtitle?: string;
  className?: string;
  hideBackground?: boolean;
}

export default function TrustBar({ mode = 'full', title, subtitle, className = '', hideBackground }: Props) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const sectionBg = hideBackground ? '' : 'bg-[#0d0f14]';
  const borderStyle = hideBackground ? '' : 'border-white/10';

  return (
    <section className={`${sectionBg} ${borderStyle} ${className}`}>
      <div className="container-site py-16 md:py-20">
        {/* Title */}
        {title && (
          <div className="text-center mb-12">
            {title && <p className="eyebrow text-center" style={{color:'rgba(100,160,255,0.8)'}}>Social Proof</p>}
            <h2 className="text-[clamp(26px,3.5vw,40px)] font-extrabold text-white text-center leading-tight">{title}</h2>
            {subtitle && <p className="text-white/40 text-[14px] text-center mt-3 max-w-lg mx-auto">{subtitle}</p>}
          </div>
        )}

        {/* ── Stats Row (all modes) ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 mb-16">
          {STATS.map((s, i) => (
            <div key={s.label} className={`text-center py-6 ${i > 0 ? 'md:border-l md:border-white/10' : ''}`}>
              <div className="text-accent/60 mb-3 hidden md:block">{s.icon}</div>
              <div className="text-[clamp(32px,3vw,44px)] font-extrabold text-white leading-none">
                <Counter target={s.target} suffix={s.suffix} prefix={s.prefix} />
              </div>
              <p className="text-[12px] text-white/40 mt-2 font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Results in Action (full mode only) ── */}
        {(mode === 'full' || mode === 'results') && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {RESULTS_IN_ACTION.map((r) => (
              <div key={r.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-white/20 transition-colors">
                <div className="text-[clamp(22px,2.5vw,32px)] font-extrabold leading-none mb-1" style={{ color: r.color }}>{r.metric}</div>
                <p className="text-[12px] text-white/40 font-medium leading-tight">{r.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* ── Testimonials (full mode only) ── */}
        {mode === 'full' && (
          <div className="mb-16">
            <p className="eyebrow text-center" style={{color:'rgba(100,160,255,0.8)'}}>Client Testimonials</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7 flex flex-col hover:bg-white/[0.07] transition-colors">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[14px] text-white/70 leading-relaxed flex-1 mb-5 italic relative pl-4 border-l-2 border-accent/40">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-[13px] font-bold text-accent flex-shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-white">{t.name}</p>
                      <p className="text-[11px] text-white/40">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Client Logo Wall (full & compact modes) ── */}
        {mode !== 'results' && mode !== 'stats' && (
          <div>
            {mode === 'full' && <hr className="border-white/10 mb-10" />}
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-center text-white/20 mb-6">
              Businesses That Trust NXT Level Builds
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {CLIENTS.map((name, i) => (
                <div key={name} className="bg-white/5 border border-white/10 rounded-xl px-4 py-5 text-center hover:bg-white/10 hover:border-white/20 transition-all group cursor-default">
                  <p className="text-[11px] font-bold text-white/30 group-hover:text-white/60 transition-colors leading-tight">
                    {name}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
              {/* Google Badge */}
              <div className="flex items-center gap-2 text-white/20 text-[12px]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                <span className="text-white/30">★★★★★</span>
                <span className="text-white/40">5.0 Google</span>
              </div>
              <div className="flex items-center gap-2 text-white/20 text-[12px]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#1877F2"/><path d="M16.67 5.33H15.2c-1.84 0-3.2.98-3.2 3.2v1.6h-1.6v2.67h1.6v6.13h2.67v-6.13h2.13l.4-2.67h-2.53V9.47c0-.8.24-1.34 1.2-1.34h1.6V5.33z" fill="white"/></svg>
                <span className="text-white/30">★★★★★</span>
                <span className="text-white/40">Facebook</span>
              </div>
              <div className="flex items-center gap-2 text-white/20 text-[12px]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#0066FF"/><path d="M12 6a6 6 0 0 0-6 6c0 3.3 2.7 6 6 6s6-2.7 6-6-2.7-6-6-6zm0 11a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm2.5-6.5H14V9h-1v1.5h-2V9h-1v1.5H9.5v1H10v1.5H9.5v1H10V15h1v-1.5h2V15h1v-1.5h.5v-1H13v-1.5h.5v-1z" fill="white"/></svg>
                <span className="text-white/30">★★★★★</span>
                <span className="text-white/40">Birdeye</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
