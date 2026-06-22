import type { Metadata } from 'next';
import { canonical, ogImage } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Web Design DeLand FL | Custom Websites',
  description: 'Custom web design in DeLand, FL. Mobile-first websites for attorneys, contractors, healthcare, and professional services. Rank faster than Daytona. Launched in 7 days.',
  alternates: { canonical: canonical('/services/web-design-deland') },
  openGraph: {
    title: 'Web Design DeLand FL | Custom Websites',
    description: 'Custom web design in DeLand, FL. Mobile-first websites for attorneys, contractors, healthcare, and professional services.',
    images: [ogImage()],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design DeLand FL | Custom Websites',
    description: 'Custom web design in DeLand, FL. Mobile-first websites for attorneys, contractors, healthcare, and professional services.',
  },
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

const checkIcon = (
  <span className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
      <path d="M2 5l2.5 2.5L8 3" stroke="#1a6eff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function WebDesignDeLand() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />

      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <Image fill src="/images/services-bg.jpg" alt="Web design DeLand FL — NXT Level Builds" className="object-cover object-center" priority quality={75} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-dark/30" />
        <div className="container-site relative z-10">
          <Breadcrumb crumbs={[
            { name: 'Home', href: '/' },
            { name: 'Services', href: '/services' },
            { name: 'Web Design', href: '/services/web-design' },
            { name: 'DeLand', href: '/services/web-design-deland' },
          ]} />
          <p className="eyebrow mt-4" style={{ color: 'rgba(100,160,255,0.9)' }}>Web Design — DeLand, FL</p>
          <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-tight max-w-2xl" style={{ fontFamily: 'var(--font-bebas)' }}>
            Web Design for<br />DeLand <span className="text-accent">Businesses.</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-lg mt-5 mb-8">
            DeLand's downtown is growing fast — and most local businesses still have outdated websites. We build fast, professional sites that rank in local search and convert visitors into paying customers.
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

      {/* Why DeLand */}
      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow">Why DeLand</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-8">The DeLand <span className="text-accent">Opportunity.</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-muted text-[15px] leading-relaxed mb-5">
                DeLand's growing downtown corridor and Stetson University presence are generating more local search volume than ever — and most local businesses still have outdated sites. The West Volusia Blvd corridor, Spring Hill, and the Downtown Historic District are all seeing increased foot traffic and economic activity, but most of that consumer intent is flowing online first. When someone moves to the area or needs a service, Google is step one.
              </p>
              <p className="text-muted text-[15px] leading-relaxed mb-5">
                The DeLand market has a meaningful advantage over larger coastal cities: the local search landscape is less competitive. That means a properly optimized website can reach the top of local results faster and with less effort than equivalent searches in Daytona Beach or Orlando. The businesses that invest in a strong web presence now will own those rankings for years — while their slower-moving competitors play catch-up.
              </p>
              <p className="text-muted text-[15px] leading-relaxed mb-8">
                We build every DeLand site mobile-first, fully optimized for zip codes 32720 and 32724, and launch it live within 7 business days. Whether you're a law firm on the historic courthouse square, a contractor serving the Spring Hill area, or a healthcare practice near Stetson, your website should be working as hard as you are.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-8 py-4 rounded-lg transition-colors">Get a Free Quote →</Link>
            </div>
            <div className="bg-[#f8f9fc] rounded-2xl p-8 border border-[#e5e7eb]">
              <h3 className="font-bold text-[16px] text-dark mb-5">What&apos;s Included</h3>
              <ul className="space-y-3">
                {[
                  'Custom design matched to your brand',
                  'Mobile-first responsive build',
                  'Local SEO targeting DeLand (32720, 32724)',
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
              { name: 'Downtown Historic District', zip: '32720' },
              { name: 'Stetson University Area', zip: '32723' },
              { name: 'W. Volusia Blvd Corridor', zip: '32720' },
              { name: 'Spring Hill', zip: '32724' },
              { name: 'Orange City Adjacent', zip: '32763' },
              { name: 'Lake Helen', zip: '32744' },
              { name: 'DeLand 32720', zip: '32720' },
              { name: 'DeLand 32724', zip: '32724' },
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
          <h2 className="section-title text-[clamp(22px,3vw,34px)] mb-6">Industries We Serve <span className="text-accent">in DeLand.</span></h2>
          <p className="text-muted text-[14px] max-w-2xl mb-8">
            DeLand&apos;s economy is anchored by professional services, healthcare, law, and a growing contractor base serving the expanding West Volusia residential market.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              'Legal & Attorneys',
              'Professional Services',
              'Home Services & Contractors',
              'Healthcare & Medical',
              'Education-Adjacent Businesses',
              'Construction & Trades',
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
          <h2 className="section-title text-[clamp(22px,3vw,34px)] mb-10">Common Questions from <span className="text-accent">DeLand Businesses.</span></h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-7">
              <h3 className="font-bold text-[16px] text-dark mb-3">How competitive is web design SEO in DeLand compared to Daytona?</h3>
              <p className="text-muted text-[14px] leading-relaxed">
                Significantly less competitive — and that's a major advantage for DeLand businesses that act now. Daytona Beach has years of established competition, dozens of businesses with optimized sites, and agencies fighting over the same keywords. DeLand is earlier in that cycle. A well-built, properly optimized website in DeLand can reach the top of local search results in weeks rather than months for many service categories. The businesses that establish those rankings now will be extremely difficult to displace later, which is why the best time to invest in local SEO in DeLand is before your competitors catch on.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-7">
              <h3 className="font-bold text-[16px] text-dark mb-3">Do you serve businesses near Stetson University?</h3>
              <p className="text-muted text-[14px] leading-relaxed">
                Yes — we build websites for all types of DeLand businesses, including those catering to the Stetson University community and student population. That includes tutoring services, housing and property management, food and beverage businesses, retail, and any professional services that benefit from proximity to the university. Student-facing businesses have specific needs around social proof, mobile UX, and content that resonates with a younger demographic — we know how to design and write for that audience while still maintaining the professional credibility your brand requires.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-7">
              <h3 className="font-bold text-[16px] text-dark mb-3">What industries in DeLand need better websites most?</h3>
              <p className="text-muted text-[14px] leading-relaxed">
                Based on the local search landscape, the categories with the most obvious gaps between consumer demand and quality of available websites are: legal and attorney services (law firm sites are often outdated and non-mobile), medical and dental practices (patients search before they call), home services and contractors (high search volume with many competitors running weak sites), and professional services like accountants, financial advisors, and consultants. In all of these categories, a fast, credible, well-optimized site is often enough to become the clear first choice when a potential customer searches in DeLand.
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
          <h2 className="text-[28px] font-bold text-white mb-3" style={{ fontFamily: 'var(--font-bebas)' }}>Ready to Grow Your DeLand Business?</h2>
          <p className="text-white/70 text-[15px] mb-8 max-w-md mx-auto">Free 30-minute strategy call. No commitment. We&apos;ll show you what your competitors are doing and exactly how to outrank them.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-accent font-bold text-[14px] px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors">Book a Free Strategy Call →</Link>
        </div>
      </section>
    </main>
  );
}
