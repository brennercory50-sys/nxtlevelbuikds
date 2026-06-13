'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    cat: 'Websites',
    title: "Miller's Screen & Pool",
    type: 'Website Design',
    location: 'Daytona Beach, FL',
    result: '↑190% organic leads',
    bg: 'from-blue-900 to-slate-900',
    accent: '#60a5fa',
    desc: 'Full rebrand and new website for a local pool screening company. Went from zero online presence to ranking page one for key Volusia County searches in under 60 days.',
    tags: ['Next.js', 'On-Page SEO', 'Google Business'],
    stat: { number: '190%', label: 'More Organic Leads' },
  },
  {
    cat: 'Websites',
    title: 'Elevate Developments',
    type: 'Website Design',
    location: 'Ormond Beach, FL',
    result: '3× more inquiries',
    bg: 'from-zinc-800 to-zinc-900',
    accent: '#a3a3a3',
    desc: 'Custom 8-page website for a residential developer. Redesigned their site to prioritize conversion with a lead capture funnel that tripled inbound inquiry volume.',
    tags: ['Custom Design', 'Lead Capture', 'CRM Hook'],
    stat: { number: '3×', label: 'Inquiry Volume' },
  },
  {
    cat: 'Websites',
    title: 'Summit Exteriors',
    type: 'Website Design',
    location: 'Port Orange, FL',
    result: '+85% form submissions',
    bg: 'from-stone-700 to-stone-900',
    accent: '#d6b896',
    desc: 'Speed-optimized site with a mobile-first design for a roofing and exterior company. Form submission rate nearly doubled after launch.',
    tags: ['Mobile-First', 'Core Web Vitals', 'Contact Forms'],
    stat: { number: '85%', label: 'More Form Submissions' },
  },
  {
    cat: 'Automations',
    title: 'Ironclad Build',
    type: 'AI Automation',
    location: 'Daytona Beach, FL',
    result: '12 hrs/week saved',
    bg: 'from-indigo-900 to-gray-900',
    accent: '#818cf8',
    desc: 'Built a full lead nurturing and follow-up automation using GoHighLevel + Make. Every new lead gets a personalized sequence — no manual work required.',
    tags: ['GoHighLevel', 'Make', 'Lead Nurturing'],
    stat: { number: '12 hrs', label: 'Saved Per Week' },
  },
  {
    cat: 'Landing Pages',
    title: 'Premier Solutions',
    type: 'Landing Page + Ads',
    location: 'New Smyrna Beach, FL',
    result: '4.2× ROAS',
    bg: 'from-emerald-900 to-neutral-900',
    accent: '#34d399',
    desc: 'High-converting landing page paired with a Google Ads campaign for a home services company. Achieved a 4.2× return on ad spend in the first 30 days.',
    tags: ['Google Ads', 'Landing Page', 'Conversion Tracking'],
    stat: { number: '4.2×', label: 'Return on Ad Spend' },
  },
  {
    cat: 'Systems',
    title: 'Peak Performance',
    type: 'Systems & CRM',
    location: 'Deland, FL',
    result: '+82 new clients/mo',
    bg: 'from-violet-900 to-slate-900',
    accent: '#a78bfa',
    desc: 'End-to-end CRM implementation and sales pipeline build for a fitness coaching brand. Automated intake, onboarding, and payment follow-up across all channels.',
    tags: ['CRM Setup', 'Automations', 'Pipeline Build'],
    stat: { number: '82', label: 'New Clients / Month' },
  },
];

const filters = ['All', 'Websites', 'Automations', 'Landing Pages', 'Systems'];

const stats = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    number: '6+',
    label: 'Projects Delivered',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    number: '100%',
    label: 'Client Retention',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    number: '7 Days',
    label: 'Avg Website Launch',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    number: '100',
    label: 'PageSpeed Target',
  },
];

export default function Work() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.cat === active);

  return (
    <main>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <Image fill src="/images/work-bg.jpg" alt="Our work — NXT Level Builds portfolio" className="object-cover object-center" priority quality={95} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-dark/30" />
        <div className="container-site relative z-10">
          <p className="eyebrow" style={{ color: 'rgba(100,160,255,0.9)' }}>Our Work</p>
          <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-tight max-w-2xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Projects That<br />Drive <span className="text-accent">Real Results.</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-lg mt-5">
            From high-converting websites to advanced automations — a look at what we&apos;ve built for Florida businesses that wanted to grow.
          </p>
        </div>
      </section>

      {/* Results Stats */}
      <section className="bg-dark border-b border-white/10 py-10">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {stats.map((s, i) => (
              <div key={s.label} className={`flex flex-col md:flex-row md:items-center gap-3 py-6 md:py-4 px-4 ${i < stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''}`}>
                <span className="text-accent opacity-80 flex-shrink-0">{s.icon}</span>
                <div>
                  <div className="text-[24px] md:text-[26px] font-extrabold text-white leading-none">{s.number}</div>
                  <div className="text-[10px] md:text-[11px] text-white/40 mt-0.5 font-medium">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow text-center">Portfolio</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] text-center mb-4">
            Work We&apos;re <span className="text-accent">Proud Of.</span>
          </h2>
          <p className="text-muted text-[14px] text-center mb-10 max-w-lg mx-auto">
            Every project starts with a real goal — more leads, more bookings, more revenue. Here&apos;s how we&apos;ve delivered.
          </p>

          {/* Filters */}
          <div className="flex gap-2 flex-wrap mb-10 justify-center">
            {filters.map(f => (
              <button key={f} onClick={() => setActive(f)}
                className={`text-[13px] font-semibold px-5 py-2 rounded-lg border transition-all ${active === f ? 'bg-accent text-white border-accent' : 'border-[#e5e7eb] text-muted hover:border-accent hover:text-accent bg-white'}`}>
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => (
              <div key={p.title} className="group rounded-2xl overflow-hidden border border-[#e5e7eb] hover:border-accent/40 hover:shadow-xl hover:-translate-y-1 transition-all bg-white flex flex-col">
                {/* Visual */}
                <div className={`h-44 bg-gradient-to-br ${p.bg} relative flex items-end p-4 overflow-hidden`}>
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none">
                      <rect x="220" y="0" width="50" height="200" fill="white" rx="1"/>
                      <rect x="280" y="40" width="40" height="160" fill="white" rx="1"/>
                      <rect x="330" y="20" width="60" height="180" fill="white" rx="1"/>
                      <rect x="160" y="60" width="50" height="140" fill="white" rx="1"/>
                      <rect x="100" y="80" width="50" height="120" fill="white" rx="1"/>
                    </svg>
                  </div>
                  {/* Result badge */}
                  <span className="relative z-10 text-[11px] font-bold text-white bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                    {p.result}
                  </span>
                  {/* Category pill */}
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.12)', color: p.accent }}>
                    {p.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 mb-1">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted flex-shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span className="text-[10px] text-muted font-medium">{p.location}</span>
                  </div>
                  <h4 className="font-bold text-[17px] text-dark mb-2">{p.title}</h4>
                  <p className="text-[13px] text-muted leading-relaxed mb-4 flex-1">{p.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map(t => (
                      <span key={t} className="text-[11px] font-semibold bg-[#f0f4ff] text-accent px-2.5 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>

                  {/* Stat */}
                  <div className="flex items-center gap-3 pt-3 border-t border-[#f0f0f0]">
                    <div className="text-[22px] font-extrabold text-dark leading-none">{p.stat.number}</div>
                    <div className="text-[11px] text-muted font-medium leading-tight">{p.stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="bg-[#f8f9fc] border-y border-[#e5e7eb] py-20">
        <div className="container-site">
          <p className="eyebrow text-center">Case Study</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] text-center mb-12">
            A Closer Look at <span className="text-accent">What We Do.</span>
          </h2>
          <div className="bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Visual side */}
              <div className="bg-gradient-to-br from-blue-900 to-slate-900 p-10 flex flex-col justify-between min-h-[320px]">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-blue-300">Website Design + SEO</span>
                  <h3 className="text-[clamp(24px,3vw,36px)] font-extrabold text-white mt-2 leading-tight">Miller&apos;s Screen &amp; Pool</h3>
                  <p className="text-white/50 text-[13px] mt-1">Daytona Beach, FL — Volusia County</p>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[['190%','More Organic Leads'],['Page 1','Google Ranking'],['60 Days','Time to Results']].map(([n,l]) => (
                    <div key={l}>
                      <div className="text-[24px] font-extrabold text-white leading-none">{n}</div>
                      <div className="text-[10px] text-white/40 mt-1 font-medium leading-tight">{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Copy side */}
              <div className="p-10">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                      </div>
                      <h4 className="text-[12px] font-bold uppercase tracking-widest text-muted">The Problem</h4>
                    </div>
                    <p className="text-[13px] text-muted leading-relaxed">
                      A well-established pool screening company in Volusia County with zero digital presence. Competitors were ranking for all the high-intent local search terms, and the business relied entirely on word-of-mouth.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1a6eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                      </div>
                      <h4 className="text-[12px] font-bold uppercase tracking-widest text-muted">What We Built</h4>
                    </div>
                    <p className="text-[13px] text-muted leading-relaxed">
                      Custom 5-page website with full on-page SEO, Google Business Profile optimization, and local schema markup targeting Daytona Beach, Port Orange, and surrounding areas. Launched in 7 days.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00c47a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <h4 className="text-[12px] font-bold uppercase tracking-widest text-muted">The Result</h4>
                    </div>
                    <p className="text-[13px] text-muted leading-relaxed">
                      Within 60 days, organic lead volume jumped 190%. The business now ranks on page one for &ldquo;screen enclosures Daytona Beach&rdquo; and its top 3 related terms. The owner closed 4 new jobs in the first month from website leads alone.
                    </p>
                  </div>
                </div>

                <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[13px] px-6 py-3 rounded-lg transition-colors mt-8">
                  Start a Similar Project →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Goes Into Every Project */}
      <section className="bg-dark py-20">
        <div className="container-site">
          <p className="eyebrow text-center" style={{ color: 'rgba(100,160,255,0.8)' }}>Our Process</p>
          <h2 className="text-[clamp(26px,3.5vw,40px)] font-extrabold text-white text-center leading-tight mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            How Every Project Gets Built.
          </h2>
          <p className="text-white/40 text-[14px] text-center max-w-lg mx-auto mb-14">
            No hand-offs, no surprises. You&apos;re involved every step of the way.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: '01',
                title: 'Discovery Call',
                desc: 'We learn your goals, your market, and what success looks like. 30 minutes, no fluff.',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.2a16 16 0 0 0 6.29 6.29l.61-.61a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
              },
              {
                step: '02',
                title: 'Design & Approval',
                desc: 'We design every page first. You approve the look before we write a line of code.',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
              },
              {
                step: '03',
                title: 'Build & Launch',
                desc: 'We build it fast — typically 7 days — then walk you through every detail before going live.',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
              },
              {
                step: '04',
                title: 'Results & Support',
                desc: "We track performance after launch and stay available. You're not abandoned post-delivery.",
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
              },
            ].map((item) => (
              <div key={item.step} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-accent/40 transition-all">
                <div className="text-[11px] font-bold tracking-widest text-white/25 mb-4">{item.step}</div>
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center mb-4 text-accent">{item.icon}</div>
                <h4 className="font-bold text-[16px] text-white mb-2">{item.title}</h4>
                <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container-site max-w-3xl mx-auto text-center">
          <p className="eyebrow">Ready To Start?</p>
          <h3 className="section-title text-[clamp(22px,3vw,36px)] mb-4">
            Your Business Could Be<br /><span className="text-accent">Our Next Case Study.</span>
          </h3>
          <p className="text-muted text-[15px] mb-8 max-w-lg mx-auto">
            Book a free strategy call and we&apos;ll put together a custom plan based on exactly what your business needs to grow.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-8 py-4 rounded-lg transition-colors shadow-[0_4px_20px_rgba(26,110,255,0.35)]">
              Book a Free Strategy Call →
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 border border-[#e5e7eb] hover:border-accent hover:text-accent text-dark font-semibold text-[14px] px-8 py-4 rounded-lg transition-all">
              View Pricing →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
