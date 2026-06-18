'use client';

import { useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/gtag';

/* ── Package Data ── */
export interface PackageFeature {
  name: string;
  included: [boolean, boolean, boolean, boolean];
  note?: string;
}

export interface PackageDef {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  desc: string;
  bestFor: string;
  roi: string;
  roiIcon: string;
  highlighted: boolean;
  cta: string;
  color: string;
}

export const PACKAGES: PackageDef[] = [
  {
    id: 'website',
    name: 'Website Growth',
    subtitle: 'Custom Site Built to Convert',
    price: '$1,997',
    period: 'one-time',
    desc: 'A fully custom, conversion-optimized website that loads fast, ranks well, and drives leads — with no monthly fees.',
    bestFor: 'New businesses or those needing a modern site',
    roi: 'Clients see 3× more inquiries within 90 days',
    roiIcon: '📈',
    highlighted: false,
    cta: 'Build Your Site →',
    color: '#1a6eff',
  },
  {
    id: 'seo',
    name: 'SEO Growth',
    subtitle: 'Dominate Local Search Results',
    price: '$997',
    period: 'one-time setup',
    desc: 'Technical SEO, local optimization, keyword strategy, and Google Ads launch — everything to get found by customers searching for your services.',
    bestFor: 'Businesses that need more visibility & leads',
    roi: 'Rank on page 1 for 5+ keywords within 60 days',
    roiIcon: '🎯',
    highlighted: false,
    cta: 'Start Ranking →',
    color: '#00c47a',
  },
  {
    id: 'ai',
    name: 'AI Automation',
    subtitle: 'Automate. Scale. Grow.',
    price: '$2,997',
    period: 'one-time',
    desc: 'CRM setup, AI chatbot, workflow automation, and lead scoring — turn your business into a 24/7 growth machine.',
    bestFor: 'Businesses ready to automate and scale',
    roi: 'Save 20+ hours per week on manual tasks',
    roiIcon: '🤖',
    highlighted: false,
    cta: 'Automate Now →',
    color: '#8b5cf6',
  },
  {
    id: 'full',
    name: 'Full Growth System',
    subtitle: 'The Complete Growth Ecosystem',
    price: '$4,997',
    period: 'one-time',
    desc: 'Website + SEO + AI Automation + Dedicated Support. Everything integrated into one unified growth system for your business.',
    bestFor: 'Businesses wanting an end-to-end growth partner',
    roi: 'Average 5× ROI within 6 months',
    roiIcon: '🏆',
    highlighted: true,
    cta: 'Get the Full System →',
    color: '#1a6eff',
  },
];

export interface FeatureRow {
  category: string;
  items: PackageFeature[];
}

const FEATURES: FeatureRow[] = [
  {
    category: 'Website & Design',
    items: [
      { name: 'Custom Website (10+ pages)', included: [true, false, false, true] },
      { name: 'Mobile-First Responsive', included: [true, false, false, true] },
      { name: 'Speed Optimization (Core Web Vitals)', included: [true, true, false, true] },
      { name: 'Google Business Profile Setup', included: [true, true, false, true] },
      { name: 'Contact Form Integration', included: [true, false, false, true] },
    ],
  },
  {
    category: 'SEO & Visibility',
    items: [
      { name: 'Technical SEO Audit', included: [false, true, false, true] },
      { name: 'On-Page SEO Optimization', included: [true, true, false, true] },
      { name: 'Keyword Research & Strategy', included: [false, true, false, true] },
      { name: 'Local SEO Optimization', included: [true, true, false, true] },
      { name: 'Google Ads Campaign Launch', included: [false, true, false, true] },
      { name: 'CallRail Call Tracking', included: [false, true, false, true] },
      { name: 'Monthly Performance Reports', included: [false, true, false, true] },
    ],
  },
  {
    category: 'AI & Automation',
    items: [
      { name: 'AI Chatbot Implementation', included: [false, false, true, true] },
      { name: 'CRM Setup & Integration', included: [false, false, true, true] },
      { name: 'Workflow Automation', included: [false, false, true, true] },
      { name: 'Lead Scoring System', included: [false, false, true, true] },
      { name: 'Email / SMS Automation', included: [false, false, true, true] },
      { name: 'Analytics Dashboard', included: [false, false, true, true] },
      { name: 'Custom API Integrations', included: [false, false, true, true] },
    ],
  },
  {
    category: 'Support & Strategy',
    items: [
      { name: '30-Day Post-Launch Support', included: [true, true, true, true] },
      { name: 'Dedicated Account Manager', included: [false, false, false, true] },
      { name: 'Priority Support (24h response)', included: [false, false, false, true] },
      { name: 'Bi-Weekly Strategy Calls', included: [false, false, false, true] },
      { name: 'Direct Slack Access', included: [true, true, true, true] },
      { name: 'Unlimited Revisions', included: [true, true, true, true] },
      { name: 'Ongoing Optimization', included: [false, false, false, true] },
      { name: 'You Own Everything (No Lock-In)', included: [true, true, true, true] },
    ],
  },
];

/* ── SVG check / minus ── */
const Check = ({ color = '#00c47a' }: { color?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const Minus = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export default function PricingComparison() {
  const [hoveredPkg, setHoveredPkg] = useState<string | null>(null);
  const [showTable, setShowTable] = useState(false);

  return (
    <>
      {/* ─── Package Cards ─── */}
      <section className="bg-white py-20" id="packages">
        <div className="container-site">
          <p className="eyebrow text-center">Growth Packages</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] text-center mb-3">
            Choose Your <span className="text-accent">Growth Path.</span>
          </h2>
          <p className="text-muted text-[14px] text-center max-w-xl mx-auto mb-3">
            Pick the package that fits your stage — or go all-in with the Full Growth System and save.
          </p>

          {/* Savings callout */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green/10 text-green text-[12px] font-bold px-4 py-2 rounded-full border border-green/20">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Full Growth System saves $1,494 vs. buying separate
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PACKAGES.map((pkg) => {
              const isHovered = hoveredPkg === pkg.id;
              return (
                <div
                  key={pkg.id}
                  id={`pkg-${pkg.id}`}
                  onMouseEnter={() => setHoveredPkg(pkg.id)}
                  onMouseLeave={() => setHoveredPkg(null)}
                  className={`group relative rounded-2xl border-2 p-6 md:p-7 transition-all duration-300 ${
                    pkg.highlighted
                      ? 'border-accent bg-gradient-to-b from-accent/[0.04] to-transparent shadow-[0_8px_40px_rgba(26,110,255,0.12)]'
                      : 'border-[#e5e7eb] hover:border-accent/40 hover:shadow-lg'
                  } ${isHovered ? 'scale-[1.02]' : 'scale-100'}`}
                >
                  {/* Recommended badge */}
                  {pkg.highlighted && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-[11px] font-bold px-5 py-1.5 rounded-full whitespace-nowrap z-10 shadow-lg flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      Most Recommended
                    </div>
                  )}

                  {/* Header row: icon area + price */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: pkg.color }}>
                        {pkg.subtitle}
                      </p>
                      <h3 className="text-[20px] font-extrabold text-dark mt-0.5">{pkg.name}</h3>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-[32px] font-extrabold text-dark leading-none">{pkg.price}</div>
                      {pkg.period && <p className="text-[11px] text-muted font-medium">{pkg.period}</p>}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[13px] text-muted leading-relaxed mb-3">{pkg.desc}</p>

                  {/* Best for */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    <span className="text-[12px] text-muted">{pkg.bestFor}</span>
                  </div>

                  {/* ROI callout — animated on hover */}
                  <div
                    className={`flex items-center gap-2 rounded-xl px-3.5 py-2.5 mb-5 transition-all duration-300 ${
                      isHovered
                        ? 'bg-accent/10 shadow-inner'
                        : 'bg-[#f8f9fc]'
                    }`}
                  >
                    <span className="text-[18px] leading-none">{pkg.roiIcon}</span>
                    <div>
                      <p className="text-[10px] font-bold tracking-wider uppercase text-muted">Expected ROI</p>
                      <p className="text-[12px] font-semibold text-dark">{pkg.roi}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    onClick={() => trackEvent('pricing_select', { package: pkg.id, price: pkg.price })}
                    className={`block text-center font-bold text-[14px] py-3.5 rounded-xl transition-all duration-300 ${
                      pkg.highlighted
                        ? 'bg-accent hover:bg-accent2 text-white shadow-lg shadow-accent/25'
                        : 'border-2 border-[#e5e7eb] hover:border-accent hover:text-accent hover:bg-accent/5 text-dark'
                    } ${isHovered && !pkg.highlighted ? 'border-accent bg-accent/5' : ''}`}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Compare toggle */}
          <div className="text-center mt-10">
            <button
              onClick={() => setShowTable(!showTable)}
              className="inline-flex items-center gap-2 text-[13px] font-bold text-accent hover:text-accent2 transition-colors"
            >
              <span>{showTable ? 'Hide' : 'View'} Detailed Feature Comparison</span>
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className={`transition-transform duration-300 ${showTable ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ─── Comparison Table ─── */}
      <section
        className={`bg-[#f8f9fc] transition-all duration-500 ease-out overflow-hidden ${
          showTable ? 'max-h-[4000px] opacity-100 border-y border-[#e5e7eb]' : 'max-h-0 opacity-0 border-y-0'
        }`}
      >
        <div className="container-site py-12">
          <p className="eyebrow text-center">Compare Features</p>
          <h3 className="text-[clamp(22px,3vw,32px)] font-extrabold text-dark text-center mb-2">
            See Exactly What&apos;s Included
          </h3>
          <p className="text-muted text-[14px] text-center max-w-lg mx-auto mb-10">
            Hover over any row to highlight it. All packages include unlimited revisions, Slack access, and no lock-in contracts.
          </p>

          {/* Table wrapper — scrollable on mobile */}
          <div className="overflow-x-auto rounded-2xl border border-[#e5e7eb]">
            <table className="w-full min-w-[700px] text-left border-collapse bg-white">
              {/* Header */}
              <thead>
                <tr className="border-b-2 border-[#e5e7eb]">
                  <th className="sticky left-0 bg-white z-10 px-5 py-4 text-[11px] font-bold tracking-wider uppercase text-muted w-[200px] min-w-[180px]">
                    Feature
                  </th>
                  {PACKAGES.map((pkg) => (
                    <th
                      key={pkg.id}
                      className={`px-4 py-4 text-center text-[12px] font-bold uppercase tracking-wider min-w-[130px] ${
                        pkg.highlighted ? 'text-accent' : 'text-muted'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-0.5">
                        <span>{pkg.name}</span>
                        <span className="text-[11px] font-normal opacity-60">{pkg.price}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((group) => (
                  <>
                    {/* Category header */}
                    <tr key={`cat-${group.category}`} className="border-b border-[#e5e7eb] bg-[#f8f9fc]">
                      <td
                        colSpan={5}
                        className="px-5 py-3 text-[11px] font-bold tracking-wider uppercase text-dark/50"
                      >
                        {group.category}
                      </td>
                    </tr>
                    {/* Feature rows */}
                    {group.items.map((feat) => {
                      const hasAny = feat.included.some(Boolean);
                      return (
                        <tr
                          key={feat.name}
                          className={`border-b border-[#e5e7eb] transition-colors duration-150 ${
                            hasAny ? 'hover:bg-accent/[0.03]' : ''
                          } group/row`}
                        >
                          <td className="sticky left-0 bg-white group-hover/row:bg-accent/[0.03] transition-colors px-5 py-3.5 text-[13px] font-medium text-dark">
                            <span className="flex items-center gap-2">
                              {feat.name}
                              {feat.note && (
                                <span className="text-[10px] text-muted font-normal hidden lg:inline">({feat.note})</span>
                              )}
                            </span>
                          </td>
                          {feat.included.map((inc, idx) => (
                            <td
                              key={idx}
                              className={`px-4 py-3.5 text-center transition-colors duration-150 ${
                                PACKAGES[idx].highlighted ? 'bg-accent/[0.02]' : ''
                              } group-hover/row:bg-accent/[0.04]`}
                            >
                              <div className="flex justify-center">
                                {inc ? <Check color={idx === 1 ? '#00c47a' : '#1a6eff'} /> : <Minus />}
                              </div>
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
