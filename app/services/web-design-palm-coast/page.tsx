import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Web Design Palm Coast FL | Custom Websites',
  description: 'Custom web design in Palm Coast, FL. One of Florida\'s fastest-growing cities — get your SEO foundation in place before the market matures. Launched in 7 days.',
};

const citySchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'NXT Level Builds',
  description: 'Web design and digital marketing agency serving Palm Coast, FL.',
  url: 'https://nxtlevelbuilds.com/services/web-design-palm-coast',
  telephone: '+13862590178',
  address: { '@type': 'PostalAddress', addressLocality: 'Palm Coast', addressRegion: 'FL', addressCountry: 'US' },
  areaServed: { '@type': 'City', name: 'Palm Coast' },
  serviceType: ['Web Design', 'SEO', 'Google Ads'],
};

const checkIcon = (
  <span className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
      <path d="M2 5l2.5 2.5L8 3" stroke="#1a6eff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function WebDesignPalmCoast() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />

      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <Image fill src="/images/services-bg.jpg" alt="Web design Palm Coast FL — NXT Level Builds" className="object-cover object-center" priority quality={75} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-dark/30" />
        <div className="container-site relative z-10">
          <Breadcrumb crumbs={[
            { name: 'Home', href: '/' },
            { name: 'Services', href: '/services' },
            { name: 'Web Design', href: '/services/web-design' },
            { name: 'Palm Coast', href: '/services/web-design-palm-coast' },
          ]} />
          <p className="eyebrow mt-4" style={{ color: 'rgba(100,160,255,0.9)' }}>Web Design — Palm Coast, FL</p>
          <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-tight max-w-2xl" style={{ fontFamily: 'var(--font-bebas)' }}>
            Web Design for<br />Palm Coast <span className="text-accent">Businesses.</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-lg mt-5 mb-8">
            Palm Coast is growing faster than almost anywhere in Florida. New residents are searching for every local service category. Get your website and SEO in place now — before your competitors do.
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
              <div className="text-[11px] text-white/40 uppercase tracking-wider mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Palm Coast */}
      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow">Why Palm Coast</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-8">The Palm Coast <span className="text-accent">Opportunity.</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-muted text-[15px] leading-relaxed mb-5">
                Palm Coast is one of Florida's fastest-growing cities — and early SEO movers will dominate as the market scales. New residents are actively searching for every local service category: contractors for home builds and renovations, medical practices accepting new patients, real estate agents for resale and new construction, and professional services of every kind. The search volume is growing month over month, and the businesses that establish page-one rankings now will be the default choice for thousands of incoming residents.
              </p>
              <p className="text-muted text-[15px] leading-relaxed mb-5">
                Flagler County's explosive population growth means the competitive window for ranking locally is still wide open compared to the surrounding coastal cities. Town Center is rapidly becoming a genuine commercial hub, Grand Haven and Palm Harbor are established high-value residential areas, and the Matanzas Woods and Hammock communities are driving sustained demand for home services, healthcare, and retail. Your website needs to be the one these residents find first.
              </p>
              <p className="text-muted text-[15px] leading-relaxed mb-8">
                We build every Palm Coast site mobile-first, optimized for zip codes 32137 and 32164, with local SEO targeting the specific neighborhoods and service categories that drive your business. Launched in 7 business days — fast enough to get ahead of competitors who are still thinking about it.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-8 py-4 rounded-lg transition-colors">Get a Free Quote →</Link>
            </div>
            <div className="bg-[#f8f9fc] rounded-2xl p-8 border border-[#e5e7eb]">
              <h3 className="font-bold text-[16px] text-dark mb-5">What&apos;s Included</h3>
              <ul className="space-y-3">
                {[
                  'Custom design matched to your brand',
                  'Mobile-first responsive build',
                  'Local SEO targeting Palm Coast (32137, 32164)',
                  'Google Business Profile setup & optimization',
                  'Local citation building for Maps rankings',
                  'Schema markup for local business',
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
              { name: 'Town Center', zip: '32164' },
              { name: 'Palm Harbor', zip: '32137' },
              { name: 'Matanzas Woods', zip: '32137' },
              { name: 'Hammock', zip: '32137' },
              { name: 'Grand Haven', zip: '32137' },
              { name: 'Flagler Beach Adjacent', zip: '32136' },
              { name: 'Palm Coast 32137', zip: '32137' },
              { name: 'Palm Coast 32164', zip: '32164' },
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
          <h2 className="section-title text-[clamp(22px,3vw,34px)] mb-6">Industries We Serve <span className="text-accent">in Palm Coast.</span></h2>
          <p className="text-muted text-[14px] max-w-2xl mb-8">
            Palm Coast&apos;s growth is driven by new construction, new residents, and expanding demand for every professional and home service category in Flagler County.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              'Real Estate & Property',
              'Construction & Contractors',
              'Home Services',
              'Medical & Healthcare',
              'Professional Services',
              'Landscaping & Outdoor',
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
          <h2 className="section-title text-[clamp(22px,3vw,34px)] mb-10">Common Questions from <span className="text-accent">Palm Coast Businesses.</span></h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-7">
              <h3 className="font-bold text-[16px] text-dark mb-3">Is Palm Coast competitive for Google rankings right now?</h3>
              <p className="text-muted text-[14px] leading-relaxed">
                Growing but still early — and that makes now the best possible time to establish your rankings. Palm Coast's search volume is increasing every quarter as the population grows, but the number of businesses with fully optimized websites and Google Business Profiles hasn't kept pace. That gap is your opportunity. Businesses that invest in local SEO now will rank before the competition catches up, and Google tends to reward established, trusted sites — so early movers maintain an edge that gets harder to overcome as the market matures. In 24–36 months, the window will be much narrower. Right now it's wide open.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-7">
              <h3 className="font-bold text-[16px] text-dark mb-3">Do you do web design for Palm Coast contractors and builders?</h3>
              <p className="text-muted text-[14px] leading-relaxed">
                Yes — contractors and construction businesses are one of our strongest verticals. Palm Coast's building boom means the competition for construction-related searches is active, and contractor websites require specific elements to convert: project photo galleries, license and insurance proof, service area callouts, and clear call-to-action flows for estimates. We build contractor sites with dedicated service pages targeting specific search terms like "Palm Coast roofing contractor" or "Flagler County general contractor" — pages that capture high-intent searches from homeowners who are ready to hire. We also handle Google Business Profile optimization so your business shows up on the map when someone searches from a jobsite or model home.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-7">
              <h3 className="font-bold text-[16px] text-dark mb-3">How do I get my Palm Coast business to show up on Google Maps?</h3>
              <p className="text-muted text-[14px] leading-relaxed">
                Ranking in the Google local pack (the map results) depends on three main factors: your Google Business Profile (GBP), local citations, and your website's local relevance signals. GBP optimization means fully completed profile, accurate categories, regular posts, and active review management. Local citations mean consistent NAP (name, address, phone) data across directories like Yelp, Apple Maps, and industry directories. Website signals mean proper schema markup, location-specific pages, and content that establishes your geographic relevance. We handle all three at launch — GBP setup and optimization, citation building across 50+ directories, and schema markup embedded directly in your website code so Google can trust your location data.
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
              { label: 'Ormond Beach', href: '/services/web-design-ormond-beach' },
              { label: 'New Smyrna Beach', href: '/services/web-design-new-smyrna-beach' },
              { label: 'DeLand', href: '/services/web-design-deland' },
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
          <h2 className="text-[28px] font-bold text-white mb-3" style={{ fontFamily: 'var(--font-bebas)' }}>Ready to Grow Your Palm Coast Business?</h2>
          <p className="text-white/70 text-[15px] mb-8 max-w-md mx-auto">Free 30-minute strategy call. No commitment. We&apos;ll map out exactly how to get your Palm Coast business ranking before the competition catches up.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-accent font-bold text-[14px] px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors">Book a Free Strategy Call →</Link>
        </div>
      </section>
    </main>
  );
}
