import type { Metadata } from 'next';
import { canonical, ogImage } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Web Design for Home Service Companies FL',
  description: 'Custom websites for home service businesses in Florida — HVAC, plumbing, cleaning, landscaping, and more. Built to rank locally and book more jobs.',
  alternates: { canonical: canonical('/services/web-design-for-home-services') },
  openGraph: {
    title: 'Web Design for Home Service Companies FL',
    description: 'Custom websites for home service businesses in Florida — HVAC, plumbing, cleaning, landscaping, and more.',
    images: [ogImage()],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design for Home Service Companies FL',
    description: 'Custom websites for home service businesses in Florida — HVAC, plumbing, cleaning, landscaping, and more.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Design for Home Service Companies',
  provider: { '@type': 'LocalBusiness', name: 'NXT Level Builds', telephone: '+13863483072' },
  areaServed: { '@type': 'State', name: 'Florida' },
  description: 'Custom web design for home service businesses in Florida.',
  serviceType: 'Web Design',
};

const industries = [
  'HVAC & Air Conditioning',
  'Plumbing',
  'Lawn Care & Landscaping',
  'House Cleaning',
  'Pool Service & Repair',
  'Pest Control',
  'Pressure Washing',
  'Electrical',
  'Roofing',
  'Window & Door Installation',
  'Painting',
  'Handyman Services',
];

const features = [
  { title: 'Online Booking Integration', desc: 'Let customers book appointments directly from your website — 24/7, no phone tag required.' },
  { title: 'Service Area Targeting', desc: 'We build location-specific pages for every city and zip code you serve so you rank where it matters.' },
  { title: 'Before & After Galleries', desc: 'Visual proof sells home services. Clean galleries that load fast and work on every device.' },
  { title: 'Review Showcases', desc: "Surface your best Google and Facebook reviews prominently — social proof is everything in home services." },
  { title: 'Emergency CTA Sections', desc: 'If you offer 24/7 or same-day service, we make sure visitors know it and can reach you instantly.' },
  { title: 'Local SEO Foundation', desc: 'Every page is built around the keywords your customers actually search when they need you.' },
];

const results = [
  { n: '3×', l: 'More Inquiries', c: 'Elevate Developments — Ormond Beach' },
  { n: '190%', l: 'Organic Lead Increase', c: "Miller's Screen & Pool — Daytona Beach" },
  { n: '7 Days', l: 'Average Launch Time', c: 'All Home Service Projects' },
];

export default function WebDesignForHomeServices() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative py-28 overflow-hidden">
        <Image fill src="/images/services-bg.jpg" alt="Web design for home service companies Florida — NXT Level Builds" className="object-cover object-center" priority quality={75} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-dark/30" />
        <div className="container-site relative z-10">
          <Link href="/services/web-design" className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-[12px] font-semibold mb-6 transition-colors">← Web Design</Link>
          <p className="eyebrow" style={{ color: 'rgba(100,160,255,0.9)' }}>Industry Vertical — Home Services</p>
          <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-tight max-w-2xl" style={{ fontFamily: 'var(--font-bebas)' }}>
            Websites Built for<br /><span className="text-accent">Home Service Businesses.</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-lg mt-5 mb-8">
            HVAC, plumbing, cleaning, landscaping — if you show up at someone&apos;s home to do a job, we build websites that make sure customers find you first and choose you over the competition.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(26,110,255,0.4)]">Get a Free Quote ↗</Link>
            <Link href="/work" className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg border border-white/30 transition-all">See Our Work ↗</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow">Home Service Industries We Serve</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-10">
            We Build for Every <span className="text-accent">Home Service Trade.</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-14">
            {industries.map(ind => (
              <div key={ind} className="flex items-center gap-2.5 bg-[#f8f9fc] border border-[#e5e7eb] rounded-xl px-4 py-3">
                <span className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="#1a6eff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-[13px] font-semibold text-dark">{ind}</span>
              </div>
            ))}
          </div>

          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-8">
            What&apos;s Built Into Every <span className="text-accent">Home Service Site.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(f => (
              <div key={f.title} className="bg-[#f8f9fc] border border-[#e5e7eb] rounded-2xl p-6">
                <h3 className="font-bold text-[15px] text-dark mb-2">{f.title}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fc] border-y border-[#e5e7eb] py-20">
        <div className="container-site text-center">
          <p className="eyebrow">Home Service Results</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-12">Real Numbers from <span className="text-accent">Home Service Clients</span></h2>
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
          <h2 className="text-[28px] font-bold text-white mb-3" style={{ fontFamily: 'var(--font-bebas)' }}>Ready to Get More Service Calls?</h2>
          <p className="text-white text-[15px] mb-8 max-w-md mx-auto">Free strategy call. No commitment. We&apos;ll show you exactly what&apos;s possible.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-accent font-bold text-[14px] px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors">Book a Free Strategy Call →</Link>
        </div>
      </section>
    </main>
  );
}
