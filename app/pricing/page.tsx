import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import BudgetMeter from '@/components/BudgetMeter';
import BudgetMeterSmall from '@/components/BudgetMeterSmall';

export const metadata: Metadata = {
  title: 'Web Design Pricing Daytona Beach FL | Transparent Packages',
  description: 'Transparent web design and digital marketing pricing for Daytona Beach businesses. One-time project builds with no monthly fees or lock-in contracts.',
};

const plans = [
  {
    name: 'Starter',
    price: '$997',
    per: '',
    label: 'one-time',
    desc: 'A clean, fast website that puts your business on the map.',
    features: [
      '5-Page Custom Website',
      'Mobile-First Design',
      'Google Business Profile Setup',
      'Basic On-Page SEO',
      'Contact Form Integration',
      'Email Support',
    ],
  },
  {
    name: 'Growth',
    price: '$2,497',
    per: '',
    label: 'one-time',
    desc: 'A full custom site built to rank, convert, and scale.',
    featured: true,
    features: [
      '10+ Page Custom Website',
      'Full SEO Setup & Strategy',
      'Google Ads Campaign Launch',
      'CallRail Call Tracking',
      'Speed & Core Web Vitals',
      'Direct Slack Access',
      '30-Day Post-Launch Support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    per: '',
    label: '',
    desc: 'Full digital system built end-to-end for your business.',
    features: [
      'Everything in Growth',
      'AI Automation & CRM Setup',
      'E-Commerce Integration',
      'Custom API Integrations',
      'Dedicated Account Manager',
      'Priority Support',
      'Ongoing Strategy Calls',
    ],
  },
];

const paymentPlans = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    title: '50/50 Split',
    desc: '50% upfront, 50% on launch. The most common choice for one-time projects.',
    featured: false,
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    title: '3-Payment Plan',
    desc: 'Break your project into 3 equal payments over 3 months. Zero interest, no credit check.',
    tag: 'Most Flexible',
    featured: true,
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>,
    title: 'Monthly Retainer',
    desc: 'Prefer to spread it out? We offer ongoing monthly plans for maintenance and growth.',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <Image fill src="/images/pricing-bg.jpg" alt="Web design pricing Daytona Beach FL — NXT Level Builds" className="object-cover object-center" priority quality={95} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-dark/30" />
        <div className="container-site relative z-10">
          <p className="eyebrow" style={{color:'rgba(100,160,255,0.9)'}}>Pricing</p>
          <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-tight max-w-2xl" style={{fontFamily:"'Bebas Neue', sans-serif"}}>
            Transparent Pricing.<br /><span className="text-accent">No Surprises.</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-lg mt-5">
            One-time project pricing. You own everything. No lock-in, no monthly fees unless you want them.
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white border-b border-[#e5e7eb] py-4">
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-[16px] leading-none">★★★★★</span>
              <span className="text-[13px] font-semibold text-dark">5.0 Google Rating</span>
            </div>
            <div className="w-px h-4 bg-[#e5e7eb] hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a6eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="text-[13px] font-semibold text-dark">20+ Projects Completed</span>
            </div>
            <div className="w-px h-4 bg-[#e5e7eb] hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a6eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="text-[13px] font-semibold text-dark">100% Client Retention</span>
            </div>
            <div className="w-px h-4 bg-[#e5e7eb] hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a6eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span className="text-[13px] font-semibold text-dark">Live in 7 Days</span>
            </div>
            <div className="w-px h-4 bg-[#e5e7eb] hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a6eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <span className="text-[13px] font-semibold text-dark">No Lock-In Contracts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Two Budget Meters */}
      <section className="bg-[#f8f9fc] py-20 border-b border-[#e5e7eb]">
        <div className="container-site">
          <p className="eyebrow text-center">Budget Calculators</p>
          <h2 className="section-title text-[clamp(24px,3.5vw,38px)] text-center mb-4">
            Find Your <span className="text-accent">Perfect Starting Point.</span>
          </h2>
          <p className="text-muted text-[14px] text-center mb-12 max-w-lg mx-auto">
            Two meters — one for any budget starting at $100, one for full project builds. Drag the slider to see exactly what you get.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BudgetMeterSmall />
            <BudgetMeter />
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow text-center">Project Packages</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] text-center mb-4">
            One-Time Builds. <span className="text-accent">You Own It All.</span>
          </h2>
          <p className="text-muted text-[14px] text-center mb-12 max-w-lg mx-auto">
            Pay once, own forever. No monthly fees, no contracts. Priced to match the Daytona Beach market.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map(p => (
              <div key={p.name}
                className={`bg-white rounded-2xl p-8 border transition-all ${
                  p.featured
                    ? 'border-2 border-accent shadow-[0_8px_40px_rgba(26,110,255,0.15)] -translate-y-2 relative'
                    : 'border-[#e5e7eb] hover:border-accent/30 hover:shadow-lg'
                }`}>
                {p.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-[11px] font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <p className="text-[12px] font-bold tracking-widest uppercase text-accent mb-2">{p.name}</p>
                <div className="flex items-end gap-1.5 mb-1">
                  <span className="text-[42px] font-extrabold text-dark leading-none">{p.price}</span>
                </div>
                {p.label && <p className="text-[12px] text-muted font-semibold mb-3">{p.label}</p>}
                <p className="text-[13px] text-muted mb-6">{p.desc}</p>
                <ul className="space-y-3 mb-8">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-[13px] text-dark">
                      <span className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5L8 3" stroke="#1a6eff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className={`block text-center font-bold text-[14px] py-3.5 rounded-xl transition-colors ${
                    p.featured
                      ? 'bg-accent hover:bg-accent2 text-white'
                      : 'border border-[#e5e7eb] hover:border-accent hover:text-accent text-dark'
                  }`}>
                  {p.price === 'Custom' ? 'Get a Quote →' : 'Get Started →'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Strip */}
      <section className="bg-[#f0f6ff] border-y border-accent/20 py-10">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                title: 'Design Approval First',
                desc: 'You sign off on every design before a single line of code gets written. No surprises.',
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
                title: 'Unlimited Revisions',
                desc: 'Not happy with the design? We revise until you are — included in every package.',
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
                title: 'You Own Everything',
                desc: 'Code, domain, hosting — it all belongs to you. No lock-in, no monthly trap, ever.',
              },
            ].map(g => (
              <div key={g.title} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">{g.icon}</div>
                <h4 className="font-bold text-[15px] text-dark">{g.title}</h4>
                <p className="text-[13px] text-muted leading-relaxed max-w-xs">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Plans */}
      <section className="bg-dark py-20">
        <div className="container-site">
          <p className="eyebrow text-center" style={{color:'rgba(100,160,255,0.8)'}}>Flexible Payments</p>
          <h2 className="text-[clamp(26px,3.5vw,40px)] font-extrabold text-white text-center leading-tight mb-4" style={{fontFamily:"'Bebas Neue', sans-serif"}}>
            Payment Plans That Work For You.
          </h2>
          <p className="text-white/45 text-[15px] text-center max-w-lg mx-auto mb-12">
            Budget matters. We offer flexible ways to pay so you can get started without the cash flow crunch.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentPlans.map(p => (
              <div key={p.title}
                className={`rounded-2xl p-7 border transition-all relative ${
                  p.featured
                    ? 'border-2 border-accent bg-accent/10 -translate-y-2'
                    : 'border-white/10 bg-white/5'
                }`}>
                {'tag' in p && p.tag && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-[11px] font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    {p.tag}
                  </span>
                )}
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-accent">{p.icon}</div>
                <h3 className="font-bold text-[18px] text-white mb-2">{p.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{color:'rgba(255,255,255,0.5)'}}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="text-[13px] font-semibold" style={{color:'rgba(255,255,255,0.35)'}}>
              0% interest · No hidden fees · Custom plans available
            </p>
            <Link href="/contact" className="bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg transition-colors">
              Talk About Payment Options →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container-site max-w-3xl mx-auto text-center">
          <h3 className="font-bold text-[22px] text-dark mb-3">Not sure which package fits?</h3>
          <p className="text-muted text-[15px] mb-7">Book a free 30-minute call and we&apos;ll put together a custom quote based on exactly what your business needs.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-8 py-4 rounded-lg transition-colors">
            Book a Free Strategy Call →
          </Link>
        </div>
      </section>
    </main>
  );
}
