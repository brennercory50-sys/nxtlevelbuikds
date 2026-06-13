import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Web Design & Development Daytona Beach FL | Custom Websites',
  description: 'Custom web design and development in Daytona Beach, FL. Fast-loading, mobile-first websites built to convert visitors into leads. Launched in 7 days.',
};

const deliverables = [
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>, title: 'Custom UI/UX Design', desc: 'Every pixel is intentional — built around your brand and your customer journey, not a template.' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, title: 'Lightning-Fast Performance', desc: 'Core Web Vitals in the green. Sites that load under 2 seconds on mobile, every time.' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>, title: 'Mobile-First Build', desc: 'Over 70% of your visitors are on phones. We build for them first, then scale up to desktop.' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>, title: 'SEO-Ready Structure', desc: 'Clean code, proper schema markup, and semantic HTML that search engines actually reward.' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>, title: 'E-Commerce Ready', desc: 'Shopify, WooCommerce, or custom — we build stores that convert browsers into buyers.' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>, title: 'CMS Integration', desc: 'Update your own content without touching code. Clean admin panel. Full control, no dependency.' },
];

const process = [
  { n: '01', title: 'Discovery Call', desc: 'We learn your business, goals, and customers. No templates — everything starts from your brand and your market.' },
  { n: '02', title: 'Design & Mockup', desc: 'You see the full design before a single line of code is written. We revise until every detail is right.' },
  { n: '03', title: 'Build & Integrate', desc: 'Clean Next.js code. CMS, forms, and third-party tools wired up and thoroughly tested.' },
  { n: '04', title: 'Launch & Support', desc: 'We handle deployment, DNS, and go-live. Then we stay to support, optimize, and improve.' },
];

const results = [
  { client: "Miller's Screen & Pool", result: '↑190%', metric: 'Organic Leads', desc: 'New website with local SEO integration tripled inbound calls within 60 days of launch.' },
  { client: 'Elevate Developments', result: '3×', metric: 'More Inquiries', desc: 'Rebuilt from a stale WordPress site to a conversion-focused Next.js build in under 2 weeks.' },
  { client: 'Summit Exteriors', result: '+85%', metric: 'Form Submissions', desc: 'New site with an optimized quote form and Google Ads landing pages drove massive form lift.' },
];

export default function WebDesign() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <Image fill src="/images/services-bg.jpg" alt="Custom web design and development — NXT Level Builds Daytona Beach" className="object-cover object-center" priority quality={95} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-dark/30" />
        <div className="container-site relative z-10">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-[12px] font-semibold mb-6 transition-colors">
            ← All Services
          </Link>
          <p className="eyebrow" style={{ color: 'rgba(100,160,255,0.9)' }}>Web Design & Development</p>
          <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-tight max-w-2xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Websites That<br />Actually <span className="text-accent">Convert.</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-lg mt-5 mb-8">
            Not another pretty template. Every site we build is custom-designed for your brand, engineered for speed, and optimized to turn visitors into leads and revenue.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(26,110,255,0.4)]">
              Start Your Project ↗
            </Link>
            <Link href="/work" className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg border border-white/30 transition-all">
              See Our Work ↗
            </Link>
          </div>
          <div className="flex gap-4 flex-wrap mt-10">
            {[['7 Days', 'Avg Launch Time'], ['100', 'PageSpeed Target'], ['3×', 'Avg Lead Increase']].map(([n, l]) => (
              <div key={l} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3">
                <div className="text-[22px] font-extrabold text-white leading-none">{n}</div>
                <div className="text-[10px] font-semibold tracking-widest uppercase text-white/40 mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow">What&apos;s Included</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-12">
            Everything You Need<br /><span className="text-accent">Built Right.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverables.map(d => (
              <div key={d.title} className="border border-[#e5e7eb] rounded-2xl p-7 hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-accent">{d.icon}</div>
                <h4 className="font-bold text-[15px] text-dark mb-2">{d.title}</h4>
                <p className="text-[13px] text-muted leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f8f9fc] border-y border-[#e5e7eb] py-20">
        <div className="container-site">
          <p className="eyebrow">How It Works</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-12">
            From Idea To<br /><span className="text-accent">Live In Days.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map(p => (
              <div key={p.n} className="bg-white border border-[#e5e7eb] rounded-2xl p-6 hover:border-accent/30 hover:shadow-lg transition-all">
                <div className="text-[42px] font-extrabold leading-none mb-3" style={{ color: 'rgba(26,110,255,0.18)', fontFamily: "'Bebas Neue', sans-serif" }}>
                  {p.n}
                </div>
                <h4 className="font-bold text-[15px] text-dark mb-2">{p.title}</h4>
                <p className="text-[13px] text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow">Real Results</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-12">
            Sites That Actually<br /><span className="text-accent">Perform.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {results.map(r => (
              <div key={r.client} className="border border-[#e5e7eb] rounded-2xl p-6 hover:border-accent/30 hover:shadow-lg transition-all">
                <div className="text-[40px] font-extrabold text-accent leading-none mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {r.result}
                </div>
                <div className="text-[11px] font-bold tracking-widest uppercase text-muted mb-4">{r.metric}</div>
                <h4 className="font-bold text-[14px] text-dark mb-2">{r.client}</h4>
                <p className="text-[13px] text-muted leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="container-site text-center">
          <h2 className="text-[28px] font-bold text-white mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Ready for a site that actually works?
          </h2>
          <p className="text-white/70 text-[15px] mb-8 max-w-md mx-auto">
            We&apos;ll build it in 7 days. No templates, no shortcuts — just results.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-accent font-bold text-[14px] px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors">
            Book a Free Strategy Call →
          </Link>
        </div>
      </section>
    </main>
  );
}
