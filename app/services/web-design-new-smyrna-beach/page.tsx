import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Web Design New Smyrna Beach FL | Custom Websites',
  description: 'Custom web design in New Smyrna Beach, FL. Mobile-first websites built for tourism businesses, vacation rentals, art galleries, and local shops. Live in 7 days.',
};

const citySchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'NXT Level Builds',
  description: 'Web design and digital marketing agency serving New Smyrna Beach, FL.',
  url: 'https://nxtlevelbuilds.com/services/web-design-new-smyrna-beach',
  telephone: '+13862590178',
  address: { '@type': 'PostalAddress', addressLocality: 'New Smyrna Beach', addressRegion: 'FL', addressCountry: 'US' },
  areaServed: { '@type': 'City', name: 'New Smyrna Beach' },
  serviceType: ['Web Design', 'SEO', 'Google Ads'],
};

const checkIcon = (
  <span className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
      <path d="M2 5l2.5 2.5L8 3" stroke="#1a6eff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function WebDesignNewSmyrnaBeach() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />

      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <Image fill src="/images/services-bg.jpg" alt="Web design New Smyrna Beach FL — NXT Level Builds" className="object-cover object-center" priority quality={75} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-dark/30" />
        <div className="container-site relative z-10">
          <Breadcrumb crumbs={[
            { name: 'Home', href: '/' },
            { name: 'Services', href: '/services' },
            { name: 'Web Design', href: '/services/web-design' },
            { name: 'New Smyrna Beach', href: '/services/web-design-new-smyrna-beach' },
          ]} />
          <p className="eyebrow mt-4" style={{ color: 'rgba(100,160,255,0.9)' }}>Web Design — New Smyrna Beach, FL</p>
          <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-tight max-w-2xl" style={{ fontFamily: 'var(--font-bebas)' }}>
            Web Design for<br />New Smyrna Beach <span className="text-accent">Businesses.</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-lg mt-5 mb-8">
            Your customers are searching on mobile — often from out of state. We build fast, tourism-ready websites that look great on any screen and turn browsers into bookings year-round.
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

      {/* Why New Smyrna Beach */}
      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow">Why New Smyrna Beach</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-8">The NSB <span className="text-accent">Opportunity.</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-muted text-[15px] leading-relaxed mb-5">
                New Smyrna Beach's tourism-driven economy means your customers are searching on mobile — often from out of state — 365 days a year. Visitors planning a trip to Flagler Ave or Coronado Beach are searching for vacation rentals, surf lessons, gallery openings, and restaurant recommendations weeks before they arrive. If your business isn't showing up in those searches, you're leaving bookings and revenue on the table.
              </p>
              <p className="text-muted text-[15px] leading-relaxed mb-5">
                The Flagler Ave arts district and Canal Street historic area draw a sophisticated, design-conscious crowd. Your website needs to match that standard — high-quality imagery, intuitive navigation, and frictionless booking or contact flows that work flawlessly on a phone. A slow or outdated site doesn't just lose customers; it actively signals that your business isn't worth their time.
              </p>
              <p className="text-muted text-[15px] leading-relaxed mb-8">
                We build every NSB site mobile-first, with integrated photo galleries, booking or reservation hooks, and local SEO targeting zip codes 32168 and 32169. Launched in 7 business days. Every site is built to perform in both the local pack and organic results for the searches that drive real revenue.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-8 py-4 rounded-lg transition-colors">Get a Free Quote →</Link>
            </div>
            <div className="bg-[#f8f9fc] rounded-2xl p-8 border border-[#e5e7eb]">
              <h3 className="font-bold text-[16px] text-dark mb-5">What&apos;s Included</h3>
              <ul className="space-y-3">
                {[
                  'Custom design matched to your brand',
                  'Mobile-first responsive build',
                  'Local SEO targeting New Smyrna Beach (32168, 32169)',
                  'High-quality photo gallery integration',
                  'Booking or reservation system integration',
                  'Google Business Profile setup & optimization',
                  'Contact forms + click-to-call',
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
              { name: 'Flagler Ave Arts District', zip: '32169' },
              { name: 'Canal Street Historic Area', zip: '32168' },
              { name: 'Coronado Beach', zip: '32169' },
              { name: 'Bethune Beach', zip: '32169' },
              { name: 'Riverside Dr', zip: '32168' },
              { name: 'Turnbull Bay Area', zip: '32168' },
              { name: 'New Smyrna Beach 32168', zip: '32168' },
              { name: 'New Smyrna Beach 32169', zip: '32169' },
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
          <h2 className="section-title text-[clamp(22px,3vw,34px)] mb-6">Industries We Serve <span className="text-accent">in New Smyrna Beach.</span></h2>
          <p className="text-muted text-[14px] max-w-2xl mb-8">
            NSB&apos;s economy runs on tourism, arts, and outdoor recreation. We build websites that speak directly to the visitors and locals who drive revenue for these industries.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              'Art Galleries & Studios',
              'Surf & Water Sports',
              'Vacation Rentals',
              'Hospitality & Restaurants',
              'Boutique Retail',
              'Marine & Watercraft',
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
          <h2 className="section-title text-[clamp(22px,3vw,34px)] mb-10">Common Questions from <span className="text-accent">NSB Businesses.</span></h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-7">
              <h3 className="font-bold text-[16px] text-dark mb-3">Can a website help my NSB vacation rental business get more direct bookings?</h3>
              <p className="text-muted text-[14px] leading-relaxed">
                Absolutely — and the economics are compelling. Platforms like Airbnb and VRBO charge 20–30% commission on every booking. A direct booking website that ranks in local search and converts visitors eliminates that fee entirely. Even if your website captures just a fraction of your annual bookings directly, it pays for itself many times over. We build vacation rental sites with integrated booking widgets, high-quality photo galleries, and local SEO that targets searches like "New Smyrna Beach vacation rentals" and "NSB beachfront rentals" — the exact queries your future guests are typing.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-7">
              <h3 className="font-bold text-[16px] text-dark mb-3">What&apos;s different about web design for a tourism-driven business?</h3>
              <p className="text-muted text-[14px] leading-relaxed">
                Tourism businesses have three requirements that most generic websites miss. First, mobile performance is non-negotiable — visitors are searching from their phones, often while already traveling. Second, visual storytelling matters more than in most industries: high-quality photo galleries and video backgrounds convert. Third, booking friction kills revenue — your site needs fast, intuitive booking or contact flows that work on a phone without pinching and zooming. We design every NSB site with all three of these in mind, because a beautiful site that loads slowly or buries the booking button is still a site that loses business.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-7">
              <h3 className="font-bold text-[16px] text-dark mb-3">Do you work with art galleries and boutique shops on Flagler Ave?</h3>
              <p className="text-muted text-[14px] leading-relaxed">
                Yes — we&apos;ve built sites for creative and retail businesses in arts districts and have a strong understanding of what works for gallery, boutique, and experience-based businesses. For galleries, that means e-commerce or inquiry flows for artwork, artist portfolio pages, and event calendar integration. For boutiques, it means online shop functionality, Instagram feed integration, and seasonal landing pages for promotions. For any service-based business booking appointments — studios, instructors, therapists — we wire in scheduling tools that reduce no-shows and fill your calendar automatically.
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
              { label: 'DeLand', href: '/services/web-design-deland' },
              { label: 'Palm Coast', href: '/services/web-design-palm-coast' },
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
          <h2 className="text-[28px] font-bold text-white mb-3" style={{ fontFamily: 'var(--font-bebas)' }}>Ready to Grow Your New Smyrna Beach Business?</h2>
          <p className="text-white/70 text-[15px] mb-8 max-w-md mx-auto">Free 30-minute strategy call. No commitment. We&apos;ll show you exactly what&apos;s keeping your site from ranking and converting.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-accent font-bold text-[14px] px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors">Book a Free Strategy Call →</Link>
        </div>
      </section>
    </main>
  );
}
