import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Web Design for Contractors FL',
  description: 'Custom websites for contractors in Florida. Mobile-first, fast-loading, built to rank on Google and convert visitors into booked jobs. Serving Volusia County.',
  openGraph: {
    title: 'Web Design for Contractors FL',
    description: 'Custom websites for contractors in Florida. Mobile-first, fast-loading, built to rank on Google and convert visitors into booked jobs.',
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design for Contractors FL',
    description: 'Custom websites for contractors in Florida. Mobile-first, fast-loading, built to rank on Google and convert visitors into booked jobs.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Design for Contractors',
  provider: { '@type': 'LocalBusiness', name: 'NXT Level Builds', telephone: '+13862590178' },
  areaServed: { '@type': 'State', name: 'Florida' },
  description: 'Custom web design for contractors and construction companies in Florida.',
  serviceType: 'Web Design',
};

const features = [
  { title: 'Quote Request Forms', desc: 'Capture leads 24/7 with forms optimized for contractor inquiries — project type, location, timeline, and budget.' },
  { title: 'Service Area Pages', desc: 'Rank in every city you work in. We build individual pages targeting each market to maximize your local footprint.' },
  { title: 'Project Gallery', desc: 'Show your work with a clean, mobile-first photo gallery that builds trust before a single conversation.' },
  { title: 'Click-to-Call CTAs', desc: 'Put your phone number front and center. Most contractor leads want to call — make it frictionless.' },
  { title: 'Google Business Integration', desc: 'Sync your GBP with your site for consistent NAP data and improved map pack visibility.' },
  { title: 'Fast Load Speed', desc: 'Under 2 seconds on mobile. Slow contractor sites lose leads to whoever loads faster.' },
];

const results = [
  { n: '190%', l: 'More Organic Leads', c: "Miller's Screen & Pool — Daytona Beach" },
  { n: '85%', l: 'More Quote Requests', c: 'Summit Exteriors — Port Orange' },
  { n: '7 Days', l: 'Average Launch Time', c: 'All Contractor Projects' },
];

export default function WebDesignForContractors() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative py-28 overflow-hidden">
        <Image fill src="/images/services-bg.jpg" alt="Web design for contractors Florida — NXT Level Builds" className="object-cover object-center" priority quality={75} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-dark/30" />
        <div className="container-site relative z-10">
          <Link href="/services/web-design" className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-[12px] font-semibold mb-6 transition-colors">← Web Design</Link>
          <p className="eyebrow" style={{ color: 'rgba(100,160,255,0.9)' }}>Industry Vertical — Contractors</p>
          <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-tight max-w-2xl" style={{ fontFamily: 'var(--font-bebas)' }}>
            Websites Built for<br /><span className="text-accent">Contractors.</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-lg mt-5 mb-8">
            Your website is your best sales rep. We build contractor websites that rank on Google, load fast on mobile, and turn visitors into booked jobs — not bounced visitors.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(26,110,255,0.4)]">Get a Free Quote ↗</Link>
            <Link href="/work" className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg border border-white/30 transition-all">See Our Work ↗</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow">Built for the Trades</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-6">
            What Contractor Websites<br /><span className="text-accent">Actually Need to Do.</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-muted text-[14px] leading-relaxed mb-4">
                Most contractor websites fail for the same reasons: they load slow on mobile, they rank for nothing locally, and they make it harder than it should be to request a quote. We fix all three.
              </p>
              <p className="text-muted text-[14px] leading-relaxed mb-8">
                We&apos;ve built websites for screen enclosure contractors, exteriors companies, general contractors, and home builders across Volusia County and Florida. We know the contractor market, the search terms, and what makes a visitor pick up the phone.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-8 py-4 rounded-lg transition-colors">Get a Free Quote →</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map(f => (
                <div key={f.title} className="bg-[#f8f9fc] border border-[#e5e7eb] rounded-2xl p-5">
                  <h3 className="font-bold text-[14px] text-dark mb-2">{f.title}</h3>
                  <p className="text-[13px] text-muted leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fc] border-y border-[#e5e7eb] py-20">
        <div className="container-site text-center">
          <p className="eyebrow">Contractor Results</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-12">Real Numbers from <span className="text-accent">Contractor Clients</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {results.map(r => (
              <div key={r.n} className="bg-white border border-[#e5e7eb] rounded-2xl p-6 hover:border-accent/30 hover:shadow-lg transition-all">
                <div className="text-[40px] font-extrabold text-accent leading-none mb-1" style={{ fontFamily: 'var(--font-bebas)' }}>{r.n}</div>
                <div className="text-[11px] font-bold tracking-widest uppercase text-muted mb-3">{r.l}</div>
                <p className="text-[13px] text-muted">{r.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-16">
        <div className="container-site text-center">
          <h2 className="text-[28px] font-bold text-white mb-3" style={{ fontFamily: 'var(--font-bebas)' }}>Ready to Book More Jobs?</h2>
          <p className="text-white/70 text-[15px] mb-8 max-w-md mx-auto">Free strategy call. We&apos;ll show you what&apos;s possible for your contracting business.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-accent font-bold text-[14px] px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors">Book a Free Strategy Call →</Link>
        </div>
      </section>
    </main>
  );
}
