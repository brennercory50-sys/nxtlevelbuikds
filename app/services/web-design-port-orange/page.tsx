import type { Metadata } from 'next';
import { canonical, ogImage } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Web Design Port Orange FL | Custom Websites',
  description: 'Custom web design in Port Orange, FL. Mobile-first websites built to rank locally and convert visitors into leads. Launched in 7 days. Serving zip codes 32127, 32128 & 32129.',
  alternates: { canonical: canonical('/services/web-design-port-orange') },
  openGraph: {
    title: 'Web Design Port Orange FL | Custom Websites',
    description: 'Custom web design in Port Orange, FL. Mobile-first websites built to rank locally and convert visitors into leads.',
    images: [ogImage()],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Port Orange FL | Custom Websites',
    description: 'Custom web design in Port Orange, FL. Mobile-first websites built to rank locally and convert visitors into leads.',
  },
};

const citySchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.nxtlevelbuilds.com/services/web-design-port-orange#business',
  name: 'NXT Level Builds',
  description: 'Web design and digital marketing agency serving Port Orange, FL.',
  url: 'https://www.nxtlevelbuilds.com/services/web-design-port-orange',
  telephone: '+13863483072',
  address: { '@type': 'PostalAddress', addressLocality: 'Daytona Beach', addressRegion: 'FL', addressCountry: 'US' },
  geo: { '@type': 'GeoCoordinates', latitude: 29.1383, longitude: -80.9956 },
  areaServed: { '@type': 'City', name: 'Port Orange' },
  serviceType: ['Web Design', 'SEO', 'Google Ads'],
  parentOrganization: { '@id': 'https://www.nxtlevelbuilds.com/#business' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How competitive is web design SEO in Port Orange compared to Daytona?', acceptedAnswer: { '@type': 'Answer', text: "Less competitive than Daytona Beach proper for most service categories — and that's an advantage for Port Orange businesses that act now. Daytona has years of established competition and dozens of optimized sites fighting over the same keywords. Port Orange is earlier in that cycle. A well-built, properly optimized website in Port Orange can reach the top of local results in weeks rather than months for many service terms. The businesses that establish those rankings now will be extremely difficult to displace later, which is why the best time to invest in local SEO in Port Orange is before your competitors catch on." } },
    { '@type': 'Question', name: 'Do you build websites for home services and contractors in Port Orange?', acceptedAnswer: { '@type': 'Answer', text: "Yes — contractors and home service companies are one of our strongest verticals. Port Orange's residential growth across Dunlawton, Taylor Road, and Spruce Creek means steady demand for roofing, HVAC, plumbing, landscaping, and pool services — and homeowners search before they hire. We build contractor sites with dedicated service pages that target high-intent searches, one-tap click-to-call buttons, and Google Business Profile optimization so you show up on the map when someone searches from the Dunlawton corridor." } },
    { '@type': 'Question', name: 'Will my Port Orange business show up on Google Maps?', acceptedAnswer: { '@type': 'Answer', text: 'Ranking in the Google local pack depends on three things: a fully optimized Google Business Profile, consistent local citations, and a website with strong local relevance signals. We handle all three at launch — complete GBP setup with accurate categories, service areas, and photos; citation building across local directories; and LocalBusiness schema with Port Orange geo-targeting embedded in your site code. Most Port Orange businesses see meaningful local pack movement within 60–90 days of a properly optimized launch.' } },
  ],
};

const checkIcon = (
  <span className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
      <path d="M2 5l2.5 2.5L8 3" stroke="#1a6eff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function WebDesignPortOrange() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <Image fill src="/images/services-bg.jpg" alt="Web design Port Orange FL — NXT Level Builds" className="object-cover object-center" priority quality={75} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-dark/30" />
        <div className="container-site relative z-10">
          <Breadcrumb crumbs={[
            { name: 'Home', href: '/' },
            { name: 'Services', href: '/services' },
            { name: 'Web Design', href: '/services/web-design' },
            { name: 'Port Orange', href: '/services/web-design-port-orange' },
          ]} />
          <p className="eyebrow mt-4" style={{ color: 'rgba(100,160,255,0.9)' }}>Web Design — Port Orange, FL</p>
          <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-tight max-w-2xl" style={{ fontFamily: 'var(--font-bebas)' }}>
            Web Design for<br />Port Orange <span className="text-accent">Businesses.</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-lg mt-5 mb-8">
            Port Orange is one of Volusia County&apos;s fastest-growing markets — and most local businesses still run on outdated sites. We build fast, professional websites that rank in local search and turn visitors into paying customers.
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

      {/* Why Port Orange */}
      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow">Why Port Orange</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-8">The Port Orange <span className="text-accent">Opportunity.</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-muted text-[15px] leading-relaxed mb-5">
                Port Orange sits at the center of the I-95 corridor between Daytona Beach and New Smyrna Beach — one of Volusia County&apos;s fastest-growing residential markets. New construction in the Dunlawton and Taylor Road corridors, established waterfront neighborhoods like Allandale, and the expanding Spruce Creek communities mean thousands of new residents are searching for local services online every month. Most of those searches end with a call — but only if your business shows up.
              </p>
              <p className="text-muted text-[15px] leading-relaxed mb-5">
                The Port Orange market has a real advantage for businesses ready to act: it&apos;s less competitive than Daytona Beach proper for most local search terms. A properly optimized website can reach the top of local results faster and with less effort than the equivalent searches in downtown Daytona. Businesses that lock in those rankings now will own them for years while slower-moving competitors play catch-up.
              </p>
              <p className="text-muted text-[15px] leading-relaxed mb-8">
                We build every Port Orange site mobile-first, fully optimized for zip codes 32127, 32128, and 32129, and launch it live within 7 business days. Whether you&apos;re a home service contractor on the Dunlawton corridor, a medical practice near the I-95 exit, or a marina along the Halifax River — your website should be working as hard as you are.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-8 py-4 rounded-lg transition-colors">Get a Free Quote →</Link>
            </div>
            <div className="bg-[#f8f9fc] rounded-2xl p-8 border border-[#e5e7eb]">
              <h3 className="font-bold text-[16px] text-dark mb-5">What&apos;s Included</h3>
              <ul className="space-y-3">
                {[
                  'Custom design matched to your brand',
                  'Mobile-first responsive build',
                  'Local SEO targeting Port Orange (32127, 32128, 32129)',
                  'Google Business Profile setup & optimization',
                  'Contact forms + click-to-call integration',
                  'PageSpeed-optimized for 90+ scores',
                  'Schema markup for local business',
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
              { name: 'Dunlawton Ave Corridor', zip: '32127' },
              { name: 'Taylor Rd Area', zip: '32127' },
              { name: 'Allandale', zip: '32127' },
              { name: 'Sugar Mill Gardens', zip: '32127' },
              { name: 'Rose Bay', zip: '32127' },
              { name: 'Port Orange South Daytona', zip: '32129' },
              { name: 'Spruce Creek', zip: '32129' },
              { name: 'Samsula', zip: '32129' },
              { name: 'Port Orange East (I-95 Corridor)', zip: '32128' },
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
          <h2 className="section-title text-[clamp(22px,3vw,34px)] mb-6">Industries We Serve <span className="text-accent">in Port Orange.</span></h2>
          <p className="text-muted text-[14px] max-w-2xl mb-8">
            Port Orange&apos;s economy is anchored by home services, healthcare, marine and waterfront businesses, and a growing professional services base serving the I-95 corridor.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              'Home Services & Contractors',
              'Medical & Dental Practices',
              'Real Estate & Property Management',
              'Professional Services',
              'Marine & Boating',
              'Hospitality & Restaurants',
              'Senior & Retirement Services',
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
          <h2 className="section-title text-[clamp(22px,3vw,34px)] mb-10">Common Questions from <span className="text-accent">Port Orange Businesses.</span></h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-7">
              <h3 className="font-bold text-[16px] text-dark mb-3">How competitive is web design SEO in Port Orange compared to Daytona?</h3>
              <p className="text-muted text-[14px] leading-relaxed">
                Less competitive than Daytona Beach proper for most service categories — and that&apos;s an advantage for Port Orange businesses that act now. Daytona has years of established competition and dozens of optimized sites fighting over the same keywords. Port Orange is earlier in that cycle. A well-built, properly optimized website in Port Orange can reach the top of local results in weeks rather than months for many service terms. The businesses that establish those rankings now will be extremely difficult to displace later, which is why the best time to invest in local SEO in Port Orange is before your competitors catch on.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-7">
              <h3 className="font-bold text-[16px] text-dark mb-3">Do you build websites for home services and contractors in Port Orange?</h3>
              <p className="text-muted text-[14px] leading-relaxed">
                Yes — contractors and home service companies are one of our strongest verticals. Port Orange&apos;s residential growth across Dunlawton, Taylor Road, and Spruce Creek means steady demand for roofing, HVAC, plumbing, landscaping, and pool services — and homeowners search before they hire. We build contractor sites with dedicated service pages that target high-intent searches, one-tap click-to-call buttons, and Google Business Profile optimization so you show up on the map when someone searches from the Dunlawton corridor.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-7">
              <h3 className="font-bold text-[16px] text-dark mb-3">Will my Port Orange business show up on Google Maps?</h3>
              <p className="text-muted text-[14px] leading-relaxed">
                Ranking in the Google local pack depends on three things: a fully optimized Google Business Profile, consistent local citations, and a website with strong local relevance signals. We handle all three at launch — complete GBP setup with accurate categories, service areas, and photos; citation building across local directories; and LocalBusiness schema with Port Orange geo-targeting embedded in your site code. Most Port Orange businesses see meaningful local pack movement within 60–90 days of a properly optimized launch.
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
              { label: 'Ormond Beach', href: '/services/web-design-ormond-beach' },
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

      {/* Results */}
      <section className="bg-[#f8f9fc] border-y border-[#e5e7eb] py-20">
        <div className="container-site text-center">
          <p className="eyebrow">Real Results</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-12">What We&apos;ve Built for <span className="text-accent">Volusia County Businesses</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[{n:'190%',l:'More Organic Calls',c:"Miller's Screen & Pool — Daytona Beach"},{n:'85%',l:'More Form Submissions',c:'Summit Exteriors — Port Orange'},{n:'3×',l:'More Inquiries',c:'Elevate Developments — Ormond Beach'}].map(r => (
              <div key={r.n} className="bg-white border border-[#e5e7eb] rounded-2xl p-6 hover:border-accent/30 hover:shadow-lg transition-all">
                <div className="text-[40px] font-extrabold text-accent leading-none mb-1" style={{ fontFamily: 'var(--font-bebas)' }}>{r.n}</div>
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
          <h2 className="text-[28px] font-bold text-white mb-3" style={{ fontFamily: 'var(--font-bebas)' }}>Ready to Grow Your Port Orange Business?</h2>
          <p className="text-white text-[15px] mb-8 max-w-md mx-auto">Free 30-minute strategy call. No commitment. We&apos;ll show you what your competitors are doing and exactly how to outrank them.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-accent font-bold text-[14px] px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors">Book a Free Strategy Call →</Link>
          <a href="tel:+13863483072" className="inline-flex items-center gap-2 text-white/90 hover:text-white text-[14px] font-semibold ml-4 transition-colors">or call (386) 348-3072</a>
        </div>
      </section>
    </main>
  );
}
