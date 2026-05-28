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
    icon: '⚡',
    title: '50/50 Split',
    desc: '50% upfront, 50% on launch. The most common choice for one-time projects.',
    featured: false,
  },
  {
    icon: '📅',
    title: '3-Payment Plan',
    desc: 'Break your project into 3 equal payments over 3 months. Zero interest, no credit check.',
    tag: 'Most Flexible',
    featured: true,
  },
  {
    icon: '🔄',
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
        <Image fill src="/images/pricing-bg.jpg" alt="" className="object-cover object-center" priority quality={95} sizes="100vw" />
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
                <div className="text-3xl mb-4">{p.icon}</div>
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
