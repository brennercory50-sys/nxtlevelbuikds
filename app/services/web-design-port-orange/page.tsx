import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Web Design Port Orange FL | Custom Websites',
  description: 'Custom web design in Port Orange, FL. Fast-loading, mobile-first websites built to convert visitors into leads. Launched in 7 days. Serving Volusia County businesses.',
};

const citySchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'NXT Level Builds',
  description: 'Web design and digital marketing agency serving Port Orange, FL.',
  url: 'https://nxtlevelbuilds.com/services/web-design-port-orange',
  telephone: '+13862590178',
  address: { '@type': 'PostalAddress', addressLocality: 'Port Orange', addressRegion: 'FL', addressCountry: 'US' },
  areaServed: { '@type': 'City', name: 'Port Orange' },
  serviceType: ['Web Design', 'SEO', 'Google Ads'],
};

export default function WebDesignPortOrange() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />

      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <Image fill src="/images/services-bg.jpg" alt="Web design Port Orange FL — NXT Level Builds" className="object-cover object-center" priority quality={80} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-dark/30" />
        <div className="container-site relative z-10">
          <Link href="/services/web-design" className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-[12px] font-semibold mb-6 transition-colors">← Web Design</Link>
          <p className="eyebrow" style={{ color: 'rgba(100,160,255,0.9)' }}>Web Design — Port Orange, FL</p>
          <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-tight max-w-2xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Web Design for<br />Port Orange <span className="text-accent">Businesses.</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-lg mt-5 mb-8">
            Custom websites built for Port Orange and South Daytona service businesses. Mobile-first, fast-loading, and engineered to convert local search traffic into real leads.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(26,110,255,0.4)]">Start Your Project ↗</Link>
            <Link href="/work" className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg border border-white/30 transition-all">See Our Work ↗</Link>
          </div>
          <div className="flex gap-4 flex-wrap mt-10">
            {[['7 Days','Avg Launch Time'],['100','PageSpeed Target'],['3×','Avg Lead Increase']].map(([n,l]) => (
              <div key={l} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3">
                <div className="text-[22px] font-extrabold text-white leading-none">{n}</div>
                <div className="text-[10px] font-semibold tracking-widest uppercase text-white/40 mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Content */}
      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow">Serving Port Orange</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-6">
            A Web Design Agency That<br /><span className="text-accent">Knows Volusia County.</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted text-[14px] leading-relaxed mb-4">
                Port Orange businesses compete with Daytona Beach, South Daytona, and the entire Volusia County market for the same customers. If your website isn&apos;t ranking locally and converting visitors when they land, you&apos;re handing those leads to your competition.
              </p>
              <p className="text-muted text-[14px] leading-relaxed mb-4">
                We build websites specifically optimized for Port Orange and surrounding Volusia County markets. That means local keyword targeting, Google Business Profile integration, and designs that match how Port Orange customers search and make decisions.
              </p>
              <p className="text-muted text-[14px] leading-relaxed mb-8">
                We&apos;ve built sites for contractors, service businesses, and home services companies across the 32127, 32128, and 32129 zip codes. We know the market, we know the competition, and we build accordingly.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-8 py-4 rounded-lg transition-colors">
                Get a Free Quote →
              </Link>
            </div>
            <div className="bg-[#f8f9fc] rounded-2xl p-8 border border-[#e5e7eb]">
              <h3 className="font-bold text-[16px] text-dark mb-5">What&apos;s Included in Every Port Orange Website</h3>
              <ul className="space-y-3">
                {['Custom design — built for your brand, not a template','Mobile-first build (70%+ of local searches are on phones)','On-page SEO targeting Port Orange & Volusia County keywords','Google Business Profile setup and optimization','Contact form + click-to-call button','Fast hosting setup — live in 7 days','30-day post-launch support'].map(f => (
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

      {/* Results */}
      <section className="bg-[#f8f9fc] border-y border-[#e5e7eb] py-20">
        <div className="container-site text-center">
          <p className="eyebrow">Real Results</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-12">What We&apos;ve Built for <span className="text-accent">Volusia County Businesses</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[{n:'190%',l:'Organic Lead Increase',c:"Miller's Screen & Pool — Daytona Beach"},{n:'85%',l:'More Form Submissions',c:'Summit Exteriors — Port Orange'},{n:'3×',l:'More Inquiries',c:'Elevate Developments — Ormond Beach'}].map(r => (
              <div key={r.n} className="bg-white border border-[#e5e7eb] rounded-2xl p-6 hover:border-accent/30 hover:shadow-lg transition-all">
                <div className="text-[40px] font-extrabold text-accent leading-none mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{r.n}</div>
                <div className="text-[11px] font-bold tracking-widest uppercase text-muted mb-3">{r.l}</div>
                <p className="text-[13px] text-muted">{r.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="container-site text-center">
          <h2 className="text-[28px] font-bold text-white mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Ready to Grow Your Port Orange Business Online?</h2>
          <p className="text-white/70 text-[15px] mb-8 max-w-md mx-auto">Free strategy call. We&apos;ll show you what&apos;s possible for your market.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-accent font-bold text-[14px] px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors">
            Book a Free Strategy Call →
          </Link>
        </div>
      </section>
    </main>
  );
}
