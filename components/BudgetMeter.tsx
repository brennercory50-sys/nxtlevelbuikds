'use client';
import { useState } from 'react';
import Link from 'next/link';

const tiers = [
  {
    range: [0, 499],
    label: 'Entry Level',
    name: 'Custom Quote',
    price: "Let's Talk",
    emoji: '💬',
    accent: '#6b7280',
    bg: '#f9fafb',
    border: '#e5e7eb',
    desc: "Your budget is a great starting point. We'll scope a custom plan that fits and won't waste a dollar.",
    includes: ['Free 30-Min Strategy Call', 'Custom Scope & Quote', 'Flexible Payment Terms', 'No Commitment Required'],
  },
  {
    range: [500, 999],
    label: 'Starter',
    name: 'Starter Plan',
    price: '$599/mo',
    emoji: '🚀',
    accent: '#1a6eff',
    bg: '#eff6ff',
    border: '#bfdbfe',
    desc: 'Perfect for small businesses that need a sharp website and a solid online presence.',
    includes: ['5-Page Custom Website', 'Google Business Profile Setup', 'Basic On-Page SEO', 'Monthly Performance Report', 'Email Support'],
  },
  {
    range: [1000, 1999],
    label: 'Growth',
    name: 'Growth Plan',
    price: '$1,597/mo',
    emoji: '📈',
    accent: '#1a6eff',
    bg: '#eff6ff',
    border: '#1a6eff',
    featured: true,
    desc: 'The full digital stack — website, ads, and SEO working together to bring in consistent leads.',
    includes: ['Custom Website (10+ Pages)', 'Google Ads Management', 'Full SEO Package', 'CallRail Call Tracking', 'Bi-Weekly Reporting', 'Direct Slack Access'],
  },
  {
    range: [2000, 5000],
    label: 'Enterprise',
    name: 'Enterprise',
    price: 'Custom',
    emoji: '⚡',
    accent: '#0d0f14',
    bg: '#0d0f14',
    border: '#1a6eff',
    dark: true,
    desc: 'Full-stack digital with AI automation, CRM, and a dedicated team focused entirely on your growth.',
    includes: ['Everything in Growth', 'AI Automation & CRM Setup', 'E-Commerce Integration', 'Dedicated Account Manager', 'Weekly Strategy Calls', 'Priority Support'],
  },
];

function getTier(val: number) {
  return tiers.find(t => val >= t.range[0] && val <= t.range[1]) ?? tiers[tiers.length - 1];
}

function formatBudget(val: number) {
  if (val >= 5000) return '$5,000+';
  return '$' + val.toLocaleString();
}

export default function BudgetMeter() {
  const [budget, setBudget] = useState(1000);
  const tier = getTier(budget);
  const pct = Math.round(((budget - 300) / (5000 - 300)) * 100);

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-2xl p-8 md:p-10 shadow-sm">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="eyebrow">Budget Calculator</p>
        <h3 className="section-title text-[clamp(20px,3vw,30px)]">
          What Can Your Budget <span className="text-accent">Get You?</span>
        </h3>
        <p className="text-muted text-[14px] mt-2">Drag the slider to see which plan fits your monthly budget.</p>
      </div>

      {/* Slider */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[12px] font-semibold text-muted uppercase tracking-wide">Monthly Budget</span>
          <span className="text-[28px] font-extrabold text-dark leading-none">{formatBudget(budget)}</span>
        </div>
        <div className="relative">
          <input
            type="range"
            min={300}
            max={5000}
            step={50}
            value={budget}
            onChange={e => setBudget(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #1a6eff ${pct}%, #e5e7eb ${pct}%)`,
            }}
          />
          {/* Tick markers */}
          <div className="flex justify-between mt-2 px-0.5">
            {['$300','$1K','$2K','$3K','$4K','$5K+'].map(l => (
              <span key={l} className="text-[10px] text-muted font-medium">{l}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Tier badges */}
      <div className="flex gap-2 flex-wrap justify-center mb-8">
        {tiers.map(t => (
          <button
            key={t.name}
            onClick={() => setBudget(t.range[0] === 0 ? 300 : t.range[0])}
            className={`text-[12px] font-bold px-4 py-1.5 rounded-full border transition-all ${
              tier.name === t.name
                ? 'bg-accent text-white border-accent'
                : 'border-[#e5e7eb] text-muted hover:border-accent hover:text-accent bg-white'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Recommendation card */}
      <div
        className="rounded-2xl p-7 border-2 transition-all"
        style={{ background: tier.bg, borderColor: tier.border }}
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{tier.emoji}</span>
              <p className="text-[12px] font-bold tracking-widest uppercase" style={{ color: tier.accent }}>
                {tier.label}
              </p>
              {tier.featured && (
                <span className="text-[10px] font-bold bg-accent text-white px-2.5 py-0.5 rounded-full">Most Popular</span>
              )}
            </div>
            <h4 className={`font-extrabold text-[22px] leading-tight ${tier.dark ? 'text-white' : 'text-dark'}`}>
              {tier.name}
            </h4>
          </div>
          <div className="text-right flex-shrink-0">
            <div className={`text-[26px] font-extrabold leading-none ${tier.dark ? 'text-white' : 'text-dark'}`}>
              {tier.price}
            </div>
            {tier.price !== "Let's Talk" && tier.price !== 'Custom' && (
              <div className="text-[11px] text-muted mt-0.5">per month</div>
            )}
          </div>
        </div>

        <p className={`text-[13px] leading-relaxed mb-5 ${tier.dark ? 'text-white/60' : 'text-muted'}`}>
          {tier.desc}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
          {tier.includes.map(f => (
            <div key={f} className="flex items-center gap-2 text-[13px]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                <circle cx="7" cy="7" r="7" fill={tier.accent} fillOpacity="0.15"/>
                <path d="M4 7l2 2 4-4" stroke={tier.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className={tier.dark ? 'text-white/80' : 'text-dark'}>{f}</span>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className={`inline-flex items-center gap-2 font-bold text-[14px] px-6 py-3.5 rounded-xl transition-colors ${
            tier.dark || tier.featured
              ? 'bg-accent hover:bg-accent2 text-white'
              : 'bg-dark hover:bg-accent text-white'
          }`}
        >
          {tier.price === "Let's Talk" ? 'Get a Free Quote →' : `Start with ${tier.name} →`}
        </Link>
      </div>

      <p className="text-center text-[11px] text-muted mt-5">
        All plans are month-to-month · No long-term contracts · Cancel anytime
      </p>

      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #1a6eff;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(26,110,255,0.4);
          cursor: pointer;
        }
        input[type='range']::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #1a6eff;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(26,110,255,0.4);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
