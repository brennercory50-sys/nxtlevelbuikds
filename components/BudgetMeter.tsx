'use client';
import { useState } from 'react';
import Link from 'next/link';

const tiers = [
  {
    range: [0, 699],
    label: 'Entry',
    name: 'Free Consultation',
    price: "Let's Talk",
    emoji: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    accent: '#6b7280',
    bg: '#f9fafb',
    border: '#e5e7eb',
    desc: "Tell us about your project and we'll put together a custom quote with no pressure and no commitment.",
    includes: ['Free 30-Min Strategy Call', 'Custom Scope & Proposal', 'Flexible Payment Options', 'No Commitment Required'],
  },
  {
    range: [700, 1999],
    label: 'Starter',
    name: 'Starter Website',
    price: '$1,497',
    emoji: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    accent: '#1a6eff',
    bg: '#eff6ff',
    border: '#bfdbfe',
    desc: 'A sharp, mobile-first website that puts your business on the map and converts visitors into leads.',
    includes: ['5-Page Custom Website', 'Mobile-First Design', 'Google Business Profile Setup', 'Basic On-Page SEO', 'Contact Form Integration', 'Email Support'],
  },
  {
    range: [2000, 3499],
    label: 'Growth',
    name: 'Growth Build',
    price: '$2,997',
    emoji: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    accent: '#1a6eff',
    bg: '#eff6ff',
    border: '#1a6eff',
    featured: true,
    desc: 'A full custom website built to dominate your local market — with SEO and Google Ads strategy baked in from day one.',
    includes: ['10+ Page Custom Website', 'Full SEO Setup & Strategy', 'Google Ads Campaign Setup', 'CallRail Call Tracking', 'Speed & Core Web Vitals', 'Direct Slack Access', '30-Day Post-Launch Support'],
  },
  {
    range: [3500, 10000],
    label: 'Enterprise',
    name: 'Enterprise Build',
    price: 'Custom',
    emoji: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>,
    accent: '#1a6eff',
    bg: '#0d0f14',
    border: '#1a6eff',
    dark: true,
    desc: 'A complete digital system — custom website, AI automations, CRM, and integrations built to scale your business end to end.',
    includes: ['Everything in Growth', 'AI Automation & CRM Setup', 'E-Commerce Integration', 'Custom API Integrations', 'Dedicated Account Manager', 'Priority Support', 'Ongoing Strategy Calls'],
  },
];

function getTier(val: number) {
  return tiers.find(t => val >= t.range[0] && val <= t.range[1]) ?? tiers[tiers.length - 1];
}

function formatBudget(val: number) {
  if (val >= 10000) return '$10,000+';
  return '$' + val.toLocaleString();
}

export default function BudgetMeter() {
  const [budget, setBudget] = useState(2000);
  const tier = getTier(budget);
  const pct = Math.round(((budget - 300) / (10000 - 300)) * 100);

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-2xl p-8 md:p-10 shadow-sm">
      <div className="text-center mb-8">
        <p className="eyebrow">One-Time Project Budget</p>
        <h3 className="section-title text-[clamp(20px,3vw,30px)]">
          What Can Your Budget <span className="text-accent">Get You?</span>
        </h3>
        <p className="text-muted text-[14px] mt-2">Drag the slider to see what&apos;s included at your one-time project budget.</p>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[12px] font-semibold text-muted uppercase tracking-wide">Your Budget</span>
          <span className="text-[28px] font-extrabold text-dark leading-none">{formatBudget(budget)}</span>
        </div>
        <input
          type="range"
          min={300}
          max={10000}
          step={100}
          value={budget}
          onChange={e => setBudget(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{ background: `linear-gradient(to right, #1a6eff ${pct}%, #e5e7eb ${pct}%)` }}
        />
        <div className="flex justify-between mt-2">
          {['$300','$2K','$4K','$6K','$8K','$10K+'].map(l => (
            <span key={l} className="text-[10px] text-muted font-medium">{l}</span>
          ))}
        </div>
      </div>

      <div className="flex gap-2 flex-wrap justify-center mb-8">
        {tiers.map(t => (
          <button key={t.name}
            onClick={() => setBudget(t.range[0] === 0 ? 300 : t.range[0])}
            className={`text-[12px] font-bold px-4 py-1.5 rounded-full border transition-all ${
              tier.name === t.name ? 'bg-accent text-white border-accent' : 'border-[#e5e7eb] text-muted hover:border-accent hover:text-accent bg-white'
            }`}>
            {t.label}
          </button>
        ))}
      </div>

      <div className="rounded-2xl p-7 border-2 transition-all" style={{ background: tier.bg, borderColor: tier.border }}>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-7 h-7 flex items-center justify-center" style={{ color: tier.dark ? '#7aa8ff' : tier.accent }}>{tier.emoji}</span>
              <p className="text-[12px] font-bold tracking-widest uppercase" style={{ color: tier.dark ? '#7aa8ff' : tier.accent }}>{tier.label}</p>
              {tier.featured && <span className="text-[10px] font-bold bg-accent text-white px-2.5 py-0.5 rounded-full">Most Popular</span>}
            </div>
            <h4 className={`font-extrabold text-[22px] leading-tight ${tier.dark ? 'text-white' : 'text-dark'}`}>{tier.name}</h4>
          </div>
          <div className="text-right flex-shrink-0">
            <div className={`text-[26px] font-extrabold leading-none ${tier.dark ? 'text-white' : 'text-dark'}`}>{tier.price}</div>
            {tier.price !== "Let's Talk" && tier.price !== 'Custom' && (
              <div className="text-[11px] text-muted mt-0.5">one-time</div>
            )}
          </div>
        </div>

        <p className={`text-[13px] leading-relaxed mb-5 ${tier.dark ? 'text-white/60' : 'text-muted'}`}>{tier.desc}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
          {tier.includes.map(f => (
            <div key={f} className="flex items-center gap-2 text-[13px]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                <circle cx="7" cy="7" r="7" fill={tier.dark ? '#1a6eff' : tier.accent} fillOpacity="0.2"/>
                <path d="M4 7l2 2 4-4" stroke={tier.dark ? '#7aa8ff' : tier.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className={tier.dark ? 'text-white/80' : 'text-dark'}>{f}</span>
            </div>
          ))}
        </div>

        <Link href="/contact"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-6 py-3.5 rounded-xl transition-colors">
          {tier.price === "Let's Talk" ? 'Get a Free Quote →' : `Get Started →`}
        </Link>
      </div>

      <p className="text-center text-[11px] text-muted mt-5">
        All projects include free revisions · You own everything · No hidden fees
      </p>
    </div>
  );
}
