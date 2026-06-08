import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Web Design DeLand FL | Custom Websites | NXT Level Builds',
  description: 'Custom web design in DeLand, FL. Mobile-first websites built to rank locally and convert visitors into leads. Launched in 7 days. Serving Volusia County.',
};

const citySchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'NXT Level Builds',
  description: 'Web design and digital marketing agency serving DeLand, FL.',
  url: 'https://nxtlevelbuilds.com/services/web-design-deland',
  telephone: '+13862590178',
  address: { '@type': 'PostalAddress', addressLocality: 'DeLand', addressRegion: 'FL', addressCountry: 'US' },
  areaServed: { '@type': 'City', name: 'DeLand' },
  serviceType: ['Web Design', 'SEO', 'Google Ads'],
};

export default function WebDesignDeLand () {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <section className="relative py-28 overflow-hidden">
        <Image fill src="/images/services-bg.jpg" alt="Web design DeLand FL — NXT Level Builds" className="object-cover object-center" priority quality={95} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-dark/30" />
        <div className="container-site relative z-10">
          <Link href="/services/web-design" className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-[12px] font-semibold mb-6 transition-colors">← Web Design</Link>
          <p className="eyebrow" style={{ color: 'rgba(100,160,255,0.9)' }}>Web Design — DeLand, FL</p>
          <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-tight max-w-2xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Web Design for<br />DeLand <span className="text-accent">Businesses.</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-lg mt-5 mb-8">
            Custom websites built for DeLand service businesses. Mobile-first, fast-loading, and optimized for local search — so you rank when your customers are looking.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(26,110,255,0.4)]">Start Your Project ↗</Link>
            <Link href="/work" className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg border border-white/30 transition-all">See Our Work ↗</Link>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow">Serving DeLand</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-6">Built for <span className="text-accent">DeLand Businesses.</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted text-[14px] leading-relaxed mb-4">
                DeLand businesses compete across Volusia County for local search traffic. We build websites that rank for the searches your customers are making — and convert them when they land.
              </p>
              <p className="text-muted text-[14px] leading-relaxed mb-8">
                Every site we build is mobile-first, loads under 2 seconds, and comes with full on-page SEO targeting DeLand and surrounding areas. Launched in 7 business days.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-8 py-4 rounded-lg transition-colors">Get a Free Quote →</Link>
            </div>
            <div className="bg-[#f8f9fc] rounded-2xl p-8 border border-[#e5e7eb]">
              <h3 className="font-bold text-[16px] text-dark mb-5">What&apos;s Included</h3>
              <ul className="space-y-3">
                {['Custom design for your brand','Mobile-first responsive build','Local SEO targeting DeLand','Google Business Profile setup','Contact form + click-to-call','Fast hosting, live in 7 days','30-day post-launch support'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px] text-dark">
                    <span className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="#1a6eff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-accent py-16">
        <div className="container-site text-center">
          <h2 className="text-[28px] font-bold text-white mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Ready to Grow Your DeLand Business?</h2>
          <p className="text-white/70 text-[15px] mb-8 max-w-md mx-auto">Free 30-minute strategy call. No commitment.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-accent font-bold text-[14px] px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors">Book a Free Strategy Call →</Link>
        </div>
      </section>
    </main>
  );
}
