'use client';
import { useState } from 'react';
import Link from 'next/link';

const steps = [
  {
    range: [100, 299],
    label: 'Consultation',
    emoji: '☎️',
    price: 'Free',
    title: 'Strategy Call',
    accent: '#6b7280',
    bg: '#f9fafb',
    border: '#e5e7eb',
    dark: false,
    desc: "Not sure what you need yet? Start with a free call. We'll figure out the best path forward together.",
    includes: [
      'Free 30-Min Consultation',
      'Business Goal Assessment',
      'Competitive Analysis Overview',
      'Custom Recommendation',
    ],
  },
  {
    range: [300, 599],
    label: '$300–$599',
    emoji: '📄',
    price: '$397',
    title: 'Landing Page',
    accent: '#1a6eff',
    bg: '#f0f7ff',
    border: '#bfdbfe',
    dark: false,
    desc: 'A single high-converting page — perfect for a promo, service, or offer that needs to capture leads fast.',
    includes: [
      '1-Page Custom Design',
      'Mobile-Responsive',
      'Contact / Lead Capture Form',
      'Basic On-Page SEO',
    ],
  },
  {
    range: [600, 999],
    label: '$600–$999',
    emoji: '🌐',
    price: '$797',
    title: 'Starter Website',
    accent: '#1a6eff',
    bg: '#eff6ff',
    border: '#93c5fd',
    dark: false,
    desc: 'A clean, professional 5-page site that gives your business a sharp online presence and starts generating calls.',
    includes: [
      '5-Page Custom Website',
      'Mobile-First Design',
      'Google Business Profile Setup',
      'Basic On-Page SEO',
      'Contact Form + Map Embed',
      'Fast Hosting Setup',
    ],
  },
  {
    range: [1000, 1999],
    label: '$1K–$1.9K',
    emoji: '🏗️',
    price: '$1,497',
    title: 'Professional Site',
    accent: '#1a6eff',
    bg: '#eff6ff',
    border: '#1a6eff',
    dark: false,
    featured: true,
    desc: 'A polished, fully custom website built to rank locally and convert visitors into paying customers.',
    includes: [
      '8-Page Custom Website',
      'Full On-Page SEO Setup',
      'Google Business Profile Optimization',
      'Speed & Core Web Vitals',
      'Blog / News Section',
      'Lead Capture & CRM Hook',
      '30-Day Post-Launch Support',
    ],
  },
  {
    range: [2000, 3999],
    label: '$2K–$3.9K',
    emoji: '📊',
    price: '$2,997',
    title: 'Growth Website',
    accent: '#0047cc',
    bg: '#1e3a6e',
    border: '#1a6eff',
    dark: true,
    desc: 'A 10+ page powerhouse with full SEO, Google Ads setup, and everything wired to bring in consistent leads every month.',
    includes: [
      '10+ Page Custom Website',
      'Full SEO Strategy & Setup',
      'Google Ads Campaign Launch',
      'CallRail Call Tracking',
      'Conversion Rate Optimization',
      'Analytics & Reporting Dashboard',
      '60-Day Post-Launch Support',
    ],
  },
  {
    range: [4000, 10000],
    label: '$4K+',
    emoji: '⚡',
    price: 'Custom',
    title: 'Full Digital System',
    accent: '#1a6eff',
    bg: '#0d0f14',
    border: '#1a6eff',
    dark: true,
    desc: "The complete build — a custom website with AI automation, CRM, e-commerce, and integrations all working together. Built once, runs forever.",
    includes: [
      'Everything in Growth Website',
      'AI Automation & Lead Nurturing',
      'CRM Setup & Integration',
      'E-Commerce or Booking System',
      'Custom API Integrations',
      'Dedicated Account Manager',
      'Priority Support & Training',
    ],
  },
];

function getStep(val: number) {
  return steps.find(s => val >= s.range[0] && val <= s.range[1]) ?? steps[steps.length - 1];
}

function formatVal(val: number) {
  if (val >= 10000) return '$10,000+';
  return '$' + val.toLocaleString();
}

export default function BudgetMeterSmall() {
  const [budget, setBudget] = useState(1000);
  const step = getStep(budget);
  const pct = Math.round(((budget - 100) / (10000 - 100)) * 100);

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-2xl p-8 md:p-10 shadow-sm">
      <div className="text-center mb-8">
        <p className="eyebrow">Project Budget Finder</p>
        <h3 className="section-title text-[clamp(20px,3vw,30px)]">
          Start at <span className="text-accent">$100</span> — See What You Get
        </h3>
        <p className="text-muted text-[14px] mt-2">Every budget gets something. Slide to find your starting point.</p>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[12px] font-semibold text-muted uppercase tracking-wide">Budget</span>
          <div className="flex items-end gap-1.5">
            <span className="text-[28px] font-extrabold text-dark leading-none">{formatVal(budget)}</span>
            <span className="text-muted text-[13px] mb-0.5">one-time</span>
          </div>
        </div>
        <input
          type="range"
          min={100}
          max={10000}
          step={100}
          value={budget}
          onChange={e => setBudget(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{ background: `linear-gradient(to right, #1a6eff ${pct}%, #e5e7eb ${pct}%)` }}
        />
        <div className="flex justify-between mt-2">
          {['$100','$2K','$4K','$6K','$8K','$10K+'].map(l => (
            <span key={l} className="text-[10px] text-muted font-medium">{l}</span>
          ))}
        </div>
      </div>

      {/* Step pills */}
      <div className="flex gap-2 flex-wrap justify-center mb-8">
        {steps.map(s => (
          <button key={s.title}
            onClick={() => setBudget(s.range[0])}
            className={`text-[11px] font-bold px-3.5 py-1.5 rounded-full border transition-all ${
              step.title === s.title ? 'bg-accent text-white border-accent' : 'border-[#e5e7eb] text-muted hover:border-accent hover:text-accent bg-white'
            }`}>
            {s.label}
          </button>
        ))}
      </div>

      {/* Result card */}
      <div className="rounded-2xl p-7 border-2 transition-all duration-300" style={{ background: step.bg, borderColor: step.border }}>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{step.emoji}</span>
              {step.featured && <span className="text-[10px] font-bold bg-accent text-white px-2.5 py-0.5 rounded-full">Most Popular</span>}
            </div>
            <h4 className={`font-extrabold text-[22px] leading-tight ${step.dark ? 'text-white' : 'text-dark'}`}>{step.title}</h4>
          </div>
          <div className="text-right flex-shrink-0">
            <div className={`text-[26px] font-extrabold leading-none ${step.dark ? 'text-white' : 'text-dark'}`}>{step.price}</div>
            {step.price !== 'Free' && step.price !== 'Custom' && (
              <div className={`text-[11px] mt-0.5 ${step.dark ? 'text-white/40' : 'text-muted'}`}>one-time</div>
            )}
          </div>
        </div>

        <p className={`text-[13px] leading-relaxed mb-5 ${step.dark ? 'text-white/60' : 'text-muted'}`}>{step.desc}</p>

        {/* Progress bar showing how much you're getting */}
        <div className="mb-5">
          <div className="flex justify-between items-center mb-1.5">
            <span className={`text-[11px] font-semibold uppercase tracking-wide ${step.dark ? 'text-white/40' : 'text-muted'}`}>What&apos;s Included</span>
            <span className={`text-[11px] font-bold ${step.dark ? 'text-white/60' : 'text-accent'}`}>{step.includes.length} items</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-white/10" style={{ background: step.dark ? 'rgba(255,255,255,0.1)' : '#e5e7eb' }}>
            <div className="h-full rounded-full bg-accent transition-all duration-500"
              style={{ width: `${Math.round((step.includes.length / 7) * 100)}%` }} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
          {step.includes.map(f => (
            <div key={f} className="flex items-center gap-2 text-[13px]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                <circle cx="7" cy="7" r="7" fill="#1a6eff" fillOpacity="0.2"/>
                <path d="M4 7l2 2 4-4" stroke={step.dark ? '#7aa8ff' : '#1a6eff'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className={step.dark ? 'text-white/80' : 'text-dark'}>{f}</span>
            </div>
          ))}
        </div>

        <Link href="/contact"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-6 py-3.5 rounded-xl transition-colors">
          {step.price === 'Free' ? 'Book Free Call →' : step.price === 'Custom' ? 'Get a Custom Quote →' : `Start for ${step.price} →`}
        </Link>
      </div>

      <p className="text-center text-[11px] text-muted mt-5">
        No contracts · You own everything · Free revisions included
      </p>
    </div>
  );
}
