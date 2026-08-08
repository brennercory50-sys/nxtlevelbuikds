import type { Metadata } from 'next';
import { canonical, ogImage } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Web Design Ormond Beach FL | Custom Websites',
  description: 'Custom web design in Ormond Beach, FL. Mobile-first websites built to rank locally and convert visitors into leads. Launched in 7 days. Serving zip codes 32174 & 32176.',
  alternates: { canonical: canonical('/services/web-design-ormond-beach') },
  openGraph: {
    title: 'Web Design Ormond Beach FL | Custom Websites',
    description: 'Custom web design in Ormond Beach, FL. Mobile-first websites built to rank locally and convert visitors into leads.',
    images: [ogImage()],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Ormond Beach FL | Custom Websites',
    description: 'Custom web design in Ormond Beach, FL. Mobile-first websites built to rank locally and convert visitors into leads.',
  },
};

const citySchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.nxtlevelbuilds.com/services/web-design-ormond-beach#business',
  name: 'NXT Level Builds',
  description: 'Web design and digital marketing agency serving Ormond Beach, FL.',
  url: 'https://www.nxtlevelbuilds.com/services/web-design-ormond-beach',
  telephone: '+13862590178',
  address: { '@type': 'PostalAddress', addressLocality: 'Daytona Beach', addressRegion: 'FL', addressCountry: 'US' },
  geo: { '@type': 'GeoCoordinates', latitude: 29.2858, longitude: -81.0559 },
  areaServed: { '@type': 'City', name: 'Ormond Beach' },
  serviceType: ['Web Design', 'SEO', 'Google Ads'],
  parentOrganization: { '@id': 'https://www.nxtlevelbuilds.com/#business' },
};

const checkIcon = (
  <span className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
      <path d="M2 5l2.5 2.5L8 3" stroke="#1a6eff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function WebDesignOrmondBeach() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />

      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <Image fill src="/images/services-bg.jpg" alt="Web design Ormond Beach FL — NXT Level Builds" className="object-cover object-center" priority quality={75} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-dark/30" />
        <div className="container-site relative z-10">
          <Breadcrumb crumbs={[
            { name: 'Home', href: '/' },
            { name: 'Services', href: '/services' },
            { name: 'Web Design', href: '/services/web-design' },
            { name: 'Ormond Beach', href: '/services/web-design-ormond-beach' },
          ]} />
          <p className="eyebrow mt-4" style={{ color: 'rgba(100,160,255,0.9)' }}>Web Design — Ormond Beach, FL</p>
          <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-tight max-w-2xl" style={{ fontFamily: 'var(--font-bebas)' }}>
            Web Design for<br />Ormond Beach <span className="text-accent">Businesses.</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-lg mt-5 mb-8">
            Custom websites built for Ormond Beach businesses. Mobile-first, fast-loading, and optimized for local search — so you rank when your customers are looking and convert them when they land.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(26,110,255,0.4)]">Start Your Project ↗</Link>
            <Link href="/work" className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg border border-white/30 transition-all">See Our Work ↗</Link>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-[#0d1220] border-y border-white/10 py-8">
        <div className="container-site grid grid-cols-3 gap-4 text-center">
          {([['7 Days', 'Avg Launch Time'], ['90+', 'PageSpeed Score'], ['3×', 'Avg Lead Increase']] as [string, string][]).map(([num, label]) => (
            <div key={label}>
              <div className="text-[28px] font-extrabold text-white">{num}</div>
              <div className="text-[11px] text-white/70 uppercase tracking-wider mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Ormond Beach */}
      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow">Why Ormond Beach</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-8">The Ormond Beach <span className="text-accent">Opportunity.</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-muted text-[15px] leading-relaxed mb-5">
                Ormond Beach's affluent residential base means higher-value customers searching locally — and less competition for page-one rankings than Daytona proper. Businesses in zip codes 32174 and 32176 sit in a sweet spot: strong purchase intent from residents who shop local, but a local search landscape that most competitors haven't fully optimized for yet.
              </p>
              <p className="text-muted text-[15px] leading-relaxed mb-5">
                Most Ormond Beach businesses still rely on word-of-mouth or an outdated website built five years ago. When a new resident moves into The Trails or Hunters Ridge and searches for a dentist, a contractor, or a real estate agent, the business with the fastest, clearest, best-optimized site wins that customer. That's the gap we close for you.
              </p>
              <p className="text-muted text-[15px] leading-relaxed mb-8">
                We build every site mobile-first, load under 2 seconds, and launch with full on-page SEO targeting Ormond Beach and surrounding Volusia County areas. No template drag-and-drops — every page is purpose-built to rank and convert.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-8 py-4 rounded-lg transition-colors">Get a Free Quote →</Link>
            </div>
            <div className="bg-[#f8f9fc] rounded-2xl p-8 border border-[#e5e7eb]">
              <h3 className="font-bold text-[16px] text-dark mb-5">What&apos;s Included</h3>
              <ul className="space-y-3">
                {[
                  'Custom design matched to your brand',
                  'Mobile-first responsive build',
                  'Local SEO targeting Ormond Beach (32174, 32176)',
                  'Google Business Profile setup & optimization',
                  'Contact forms + click-to-call integration',
                  'PageSpeed-optimized for 90+ scores',
                  'Fast hosting, live in 7 business days',
                  '30-day post-launch support included',
                ].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px] text-dark">
                    {checkIcon}
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="bg-[#f8f9fc] py-16">
        <div className="container-site">
          <p className="eyebrow">Coverage Area</p>
          <h2 className="section-title text-[clamp(22px,3vw,34px)] mb-8">Neighborhoods &amp; Areas <span className="text-accent">We Serve.</span></h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              { name: 'Granada Blvd Corridor', zip: '32176' },
              { name: 'Ormond-by-the-Sea', zip: '32176' },
              { name: 'North Peninsula', zip: '32176' },
              { name: 'Tomoka Area', zip: '32174' },
              { name: 'The Trails', zip: '32174' },
              { name: 'Hunters Ridge', zip: '32174' },
              { name: 'Ormond Beach 32174', zip: '32174' },
              { name: 'Ormond Beach 32176', zip: '32176' },
            ].map(({ name, zip }) => (
              <div key={name} className="bg-white border border-[#e5e7eb] rounded-xl px-4 py-3">
                <div className="text-[13px] font-semibold text-dark">{name}</div>
                <div className="text-[11px] text-muted mt-0.5">{zip}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-16">
        <div className="container-site">
          <p className="eyebrow">Industry Focus</p>
          <h2 className="section-title text-[clamp(22px,3vw,34px)] mb-6">Industries We Serve <span className="text-accent">in Ormond Beach.</span></h2>
          <p className="text-muted text-[14px] max-w-2xl mb-8">
            We have direct experience building conversion-focused websites for the types of businesses that dominate Ormond Beach's local economy.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              'Real Estate & Property',
              'Marine & Watercraft',
              'Medical & Dental Practices',
              'Upscale Retail & Boutiques',
              'Professional Services',
              'Hospitality & Vacation Rentals',
            ].map(industry => (
              <span key={industry} className="inline-flex items-center bg-accent/8 text-accent border border-accent/20 text-[13px] font-semibold px-4 py-2 rounded-full">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8f9fc] py-20">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title text-[clamp(22px,3vw,34px)] mb-10">Common Questions from <span className="text-accent">Ormond Beach Businesses.</span></h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-7">
              <h3 className="font-bold text-[16px] text-dark mb-3">How long does it take to rank on Google in Ormond Beach?</h3>
              <p className="text-muted text-[14px] leading-relaxed">
                For the Google local pack (the map results), most Ormond Beach businesses see meaningful movement within 60–90 days when starting from a properly optimized site and Google Business Profile. Organic rankings for service pages typically follow within 90–120 days. The local search landscape in Ormond Beach is less saturated than Daytona proper, which means well-optimized businesses move up faster. The key accelerators are on-page SEO, local citations, and consistent GBP activity — all of which we handle at launch.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-7">
              <h3 className="font-bold text-[16px] text-dark mb-3">Do Ormond Beach businesses really need a website in 2026?</h3>
              <p className="text-muted text-[14px] leading-relaxed">
                Yes — and the data backs it up. 78% of consumers search online before making a local purchase or booking a service. If your business isn't ranking in local search, you're invisible to the majority of your potential customers before they even decide who to call. In Ormond Beach specifically, the residential demographic skews toward higher-income homeowners who research before they buy. A professional, fast-loading website isn't optional — it's the first impression that decides whether someone calls you or your competitor.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-7">
              <h3 className="font-bold text-[16px] text-dark mb-3">What types of businesses in Ormond Beach benefit most from a website?</h3>
              <p className="text-muted text-[14px] leading-relaxed">
                Any business that depends on local customers benefits, but we see the strongest ROI for real estate agents and brokers, contractors and home services, medical and dental practices, marine services and boat dealers, and upscale retail boutiques. These categories all have high average transaction values, meaning a single customer acquired through search can justify the entire cost of the website. We build with those economics in mind — every page is designed to generate a phone call or form submission, not just traffic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="bg-white py-16">
        <div className="container-site">
          <p className="eyebrow">Service Area</p>
          <h2 className="section-title text-[clamp(22px,3vw,34px)] mb-8">Other Areas <span className="text-accent">We Serve.</span></h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { label: 'Port Orange', href: '/services/web-design-port-orange' },
              { label: 'New Smyrna Beach', href: '/services/web-design-new-smyrna-beach' },
              { label: 'DeLand', href: '/services/web-design-deland' },
              { label: 'Palm Coast', href: '/services/web-design-palm-coast' },
              { label: 'All of Volusia County', href: '/services/web-design-volusia-county' },
              { label: 'All Web Design Services', href: '/services/web-design' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="group bg-[#f8f9fc] hover:bg-accent/5 border border-[#e5e7eb] hover:border-accent/30 rounded-xl px-4 py-3 text-[13px] font-semibold text-dark group-hover:text-accent transition-all text-center">
                {label} <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="container-site text-center">
          <h2 className="text-[28px] font-bold text-white mb-3" style={{ fontFamily: 'var(--font-bebas)' }}>Ready to Grow Your Ormond Beach Business?</h2>
          <p className="text-white text-[15px] mb-8 max-w-md mx-auto">Free 30-minute strategy call. No commitment. We&apos;ll audit your current online presence and show you exactly what&apos;s costing you leads.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-accent font-bold text-[14px] px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors">Book a Free Strategy Call →</Link>
          <a href="tel:+13862590178" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-[14px] font-semibold ml-4 transition-colors">or call (386) 259-0178</a>
        </div>
      </section>
    </main>
  );
}
