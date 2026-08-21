import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { canonical, ogImage } from '@/lib/seo';
import TrustBar from '@/components/TrustBar';

export const metadata: Metadata = {
  title: { absolute: 'NXT Level Builds — Web Design & Digital Marketing Agency | Daytona Beach, FL' },
  description: 'Daytona Beach digital agency specializing in custom web design, Google Ads, local SEO, and AI automation. We help local businesses get more leads and scale faster.',
  alternates: { canonical: canonical('') },
  openGraph: {
    title: 'NXT Level Builds — Web Design & Digital Marketing Agency | Daytona Beach, FL',
    description: 'Custom websites, Google Ads, SEO, and AI automation for Daytona Beach businesses. Built to convert. Launched in 7 days.',
    images: [ogImage()],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NXT Level Builds — Web Design & Digital Marketing | Daytona Beach',
    description: 'Custom websites, Google Ads, SEO, and AI automation for Daytona Beach businesses.',
  },
};

const services = [
  { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>), title: 'Custom Websites', desc: 'High-converting, modern websites that represent your brand and turn visitors into customers.', href: '/services/web-design' },
  { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>), title: 'AI Automations', desc: 'Automate follow-ups, lead nurturing, and repetitive tasks with smart AI systems.', href: '/services/ai-automation' },
  { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>), title: 'Systems & Integrations', desc: 'We connect your tech stack and build custom integrations that work together seamlessly.', href: '/services' },
  { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>), title: 'CRM & Lead Management', desc: 'Organized pipeline, automated follow-ups, and real-time insights so you never miss a lead.', href: '/services' },
  { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>), title: 'Landing Pages', desc: 'Conversion-focused landing pages built for ads, offers, and rapid growth.', href: '/services/web-design' },
  { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>), title: 'Ongoing Support', desc: "We're here to support, optimize, and scale with your business every step of the way.", href: '/contact' },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[85vh] md:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#0d0f14]">
        {/* Base layer — static image. Shows while the video loads, if it fails, and for reduced-motion users. */}
        <Image fill src="/images/about-bg.png" alt="NXT Level Builds — Daytona Beach digital agency" className="object-cover object-center" priority quality={75} sizes="100vw" />
        {/* Cinematic hero video — autoplay/loop/muted, hidden when the user prefers reduced motion */}
        <video
          className="absolute inset-0 w-full h-full object-cover object-center motion-reduce:hidden pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/about-bg.webp"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Cinematic gradients — darker behind the left/center text, lighter to the right; bottom fade for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25" />

        <div className="container-site relative z-10 flex-1 flex flex-col justify-center py-20 md:py-24">
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent mb-5">
            Websites. Automation. Growth.
          </p>
          <h1 className="text-[clamp(40px,5.6vw,74px)] font-extrabold leading-[1.05] tracking-tight text-white mb-6 max-w-2xl [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
            Websites &amp; Systems<br />Built To Grow<br /><span className="text-accent">Local Businesses.</span>
          </h1>
          <p className="text-[16px] text-white/65 leading-relaxed max-w-md mb-5">
            We build high-converting websites, automations, and growth systems that help local businesses get more leads, book more jobs, and scale with confidence.
          </p>
          <p className="text-[13px] text-white/45 mb-9 max-w-md">
            Simple sites from <span className="text-white/85 font-semibold">$599</span> with <span className="text-white/85 font-semibold">$150/mo</span> — custom builds quoted individually
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(26,110,255,0.4)]">
              Book A Strategy Call →
            </Link>
            <Link href="/work" className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm hover:bg-white/15 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg border border-white/30 transition-all">
              See Our Work →
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 border-t border-white/10 bg-black/55 backdrop-blur-sm py-5">
          <div className="container-site">
            <div className="grid grid-cols-3 md:flex md:items-center md:gap-0">
              {[
                { icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                ), number:'7 Days', label:'Avg Website Launch' },
                { icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
                  </svg>
                ), number:'90+', label:'PageSpeed Target' },
                { icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                  </svg>
                ), number:'3 Yrs', label:'Industry Experience' },
              ].map((s, i) => (
                <div key={s.label} className={`flex flex-col md:flex-row md:items-center md:gap-3 py-1 text-center md:text-left ${i > 0 ? 'border-l border-white/10 md:ml-10 md:pl-10 pl-2' : ''}`}>
                  <span className="hidden md:block text-accent opacity-80">{s.icon}</span>
                  <div>
                    <div className="text-[20px] md:text-[22px] font-extrabold text-white leading-none">{s.number}</div>
                    <div className="text-[9px] md:text-[11px] text-white/70 mt-0.5 font-medium leading-tight">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
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
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a6eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <span className="text-[13px] font-semibold text-dark">Daytona Beach, FL</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow">Our Services</p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <h2 className="section-title text-[clamp(28px,4vw,44px)]">Everything You Need<br />To <span className="text-accent">Scale And Automate.</span></h2>
            <p className="text-muted text-[15px] leading-relaxed max-w-sm flex-shrink-0">We provide end-to-end digital solutions that help your business attract more leads, convert more customers, and save time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {services.map(s => (
              <Link key={s.title} href={s.href} className="group border border-[#e5e7eb] rounded-2xl p-7 hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 transition-all block">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 text-accent">{s.icon}</div>
                <h3 className="font-bold text-[16px] text-dark mb-2">{s.title}</h3>
                <p className="text-[14px] text-muted leading-relaxed mb-4">{s.desc}</p>
                <span className="text-[13px] font-semibold text-accent">Learn More →</span>
              </Link>
            ))}
          </div>
          <div className="bg-accent rounded-2xl p-6 flex items-center justify-between">
            <div>
              <p className="font-bold text-white text-[18px]">Ready To Scale Your Business?</p>
              <p className="text-white text-[14px]">Let&apos;s build your system.</p>
            </div>
            <Link href="/contact" className="bg-white text-accent font-bold text-[14px] px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">Book a Call →</Link>
          </div>
        </div>
      </section>

      {/* ─── TRUST BUILDING SYSTEM ─── */}
      <TrustBar mode="full" title="Results That Build Trust." subtitle="Real metrics from real client work. No fluff, no filler — just what we've delivered." />

      {/* TOOLS */}
      <section className="bg-white py-14 border-b border-[#e5e7eb]">
        <div className="container-site text-center">
          <p className="eyebrow">Tools We Build With</p>
          <div className="flex items-center justify-center gap-10 flex-wrap mt-6">
            {[
              { name: 'Next.js', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
              { name: 'GoHighLevel', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
              { name: 'Make', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg> },
              { name: 'OpenAI', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg> },
              { name: 'Zapier', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
              { name: 'Google Ads', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> },
            ].map(t => (
              <div key={t.name} className="flex items-center gap-2 text-[#9ca3af]">
                <span>{t.icon}</span>
                <span className="text-[14px] font-bold tracking-wide">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
