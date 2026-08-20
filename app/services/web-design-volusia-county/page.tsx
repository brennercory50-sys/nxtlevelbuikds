import type { Metadata } from 'next';
import { canonical, ogImage } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import { getPost } from '@/app/blog/posts';

export const metadata: Metadata = {
  title: 'Volusia County Web Design | Custom Websites for Local Businesses',
  description: 'Custom web design and digital marketing across Volusia County, FL — Daytona Beach, South Daytona, Port Orange, Ormond Beach, New Smyrna Beach, DeLand, Holly Hill, and Daytona Beach Shores. Launched in 7 days.',
  alternates: { canonical: canonical('/services/web-design-volusia-county') },
  openGraph: {
    title: 'Volusia County Web Design | Custom Websites for Local Businesses',
    description: 'Custom web design and digital marketing across Volusia County, FL — Daytona Beach, South Daytona, Port Orange, Ormond Beach, New Smyrna Beach, DeLand, and more.',
    images: [ogImage()],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Volusia County Web Design | Custom Websites for Local Businesses',
    description: 'Custom web design and digital marketing across Volusia County, FL — Daytona Beach, South Daytona, Port Orange, Ormond Beach, New Smyrna Beach, DeLand, and more.',
  },
};

const countySchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'NXT Level Builds',
  description: 'Web design and digital marketing agency serving Volusia County, FL.',
  url: 'https://www.nxtlevelbuilds.com/services/web-design-volusia-county',
  telephone: '+13862590178',
  address: { '@type': 'PostalAddress', addressLocality: 'Daytona Beach', addressRegion: 'FL', addressCountry: 'US' },
  areaServed: [
    { '@type': 'City', name: 'Daytona Beach' },
    { '@type': 'City', name: 'South Daytona' },
    { '@type': 'City', name: 'Port Orange' },
    { '@type': 'City', name: 'Ormond Beach' },
    { '@type': 'City', name: 'New Smyrna Beach' },
    { '@type': 'City', name: 'DeLand' },
    { '@type': 'City', name: 'Holly Hill' },
    { '@type': 'City', name: 'Daytona Beach Shores' },
    { '@type': 'City', name: 'Deltona' },
    { '@type': 'City', name: 'Edgewater' },
    { '@type': 'AdministrativeArea', name: 'Volusia County' },
  ],
  serviceType: ['Web Design', 'SEO', 'Google Ads', 'AI Automation'],
};

const checkIcon = (
  <span className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
      <path d="M2 5l2.5 2.5L8 3" stroke="#1a6eff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const cityPages = [
  { label: 'Daytona Beach', sub: 'Home base', href: '/services/web-design' },
  { label: 'Port Orange', sub: '32127, 32128, 32129', href: '/services/web-design-port-orange' },
  { label: 'Ormond Beach', sub: '32174, 32176', href: '/services/web-design-ormond-beach' },
  { label: 'New Smyrna Beach', sub: '32168, 32169', href: '/services/web-design-new-smyrna-beach' },
  { label: 'DeLand', sub: '32720, 32724 · West Volusia', href: '/services/web-design-deland' },
];

const alsoServed = [
  'South Daytona', 'Holly Hill', 'Daytona Beach Shores', 'Deltona', 'Edgewater',
];

const relatedSlugs = [
  'web-design-deland-what-local-businesses-need',
  'web-design-port-orange-what-local-businesses-need',
  'web-design-ormond-beach-what-local-businesses-need',
  'web-design-new-smyrna-beach-what-local-businesses-need',
  'google-business-profile-checklist-florida',
  'contractor-website-checklist',
];

export default function WebDesignVolusiaCounty() {
  const relatedPosts = relatedSlugs.map(slug => getPost(slug)).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(countySchema) }} />

      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <Image fill src="/images/services-bg.jpg" alt="Web design Volusia County FL — NXT Level Builds" className="object-cover object-center" priority quality={75} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-dark/30" />
        <div className="container-site relative z-10">
          <Breadcrumb crumbs={[
            { name: 'Home', href: '/' },
            { name: 'Services', href: '/services' },
            { name: 'Web Design', href: '/services/web-design' },
            { name: 'Volusia County', href: '/services/web-design-volusia-county' },
          ]} />
          <p className="eyebrow mt-4" style={{ color: 'rgba(100,160,255,0.9)' }}>Web Design — Volusia County, FL</p>
          <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-tight max-w-2xl" style={{ fontFamily: 'var(--font-bebas)' }}>
            Web Design for<br />Volusia County <span className="text-accent">Businesses.</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-lg mt-5 mb-8">
            One local team, every Volusia County market — Daytona Beach, South Daytona, Port Orange, Ormond Beach, New Smyrna Beach, DeLand, Holly Hill, and Daytona Beach Shores. We build fast, mobile-first websites that rank locally and turn visitors into booked customers.
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

      {/* Why Volusia County */}
      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow">Why Volusia County</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-8">One County. <span className="text-accent">One Team That Knows It.</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-muted text-[15px] leading-relaxed mb-5">
                Volusia County isn&apos;t one market — it&apos;s several. A contractor in Port Orange, a medical practice in DeLand, and a retail shop on Flagler Ave in New Smyrna Beach are all searching, and being searched for, differently. Most agencies treat the whole county like a single generic &quot;Daytona area&quot; audience. We don&apos;t — every city we serve gets content built around its actual zip codes, neighborhoods, and customer base.
              </p>
              <p className="text-muted text-[15px] leading-relaxed mb-5">
                That local specificity is also a search advantage. Volusia County web design is a far less contested search than the big head terms agencies fight over in Daytona Beach proper — which means a properly built, properly optimized site can earn real visibility across the county faster than in the more saturated coastal core alone.
              </p>
              <p className="text-muted text-[15px] leading-relaxed mb-8">
                We&apos;re based in Daytona Beach and build for the entire county from there — South Daytona, Port Orange, Ormond Beach, New Smyrna Beach, DeLand, Holly Hill, Daytona Beach Shores, and out toward Deltona and Edgewater. Including hyper-local corridors like Beville Road and Golf View in South Daytona.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-8 py-4 rounded-lg transition-colors">Get a Free Quote →</Link>
            </div>
            <div className="bg-[#f8f9fc] rounded-2xl p-8 border border-[#e5e7eb]">
              <h3 className="font-bold text-[16px] text-dark mb-5">What&apos;s Included Countywide</h3>
              <ul className="space-y-3">
                {[
                  'Custom design matched to your brand',
                  'Mobile-first responsive build',
                  'Local SEO targeting your specific city and zip codes',
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

      {/* Cities We Serve — the hub */}
      <section className="bg-[#f8f9fc] py-20">
        <div className="container-site">
          <p className="eyebrow">Coverage Area</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-4">Cities We Serve <span className="text-accent">in Volusia County.</span></h2>
          <p className="text-muted text-[15px] max-w-2xl mb-10">
            Every market below has its own dedicated page — real zip codes, real neighborhoods, and content built specifically for that city&apos;s search landscape, not a template with the name swapped.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {cityPages.map(city => (
              <Link key={city.href} href={city.href}
                className="group bg-white border border-[#e5e7eb] hover:border-accent/40 hover:shadow-lg hover:-translate-y-0.5 rounded-2xl p-6 transition-all">
                <div className="font-bold text-[16px] text-dark group-hover:text-accent transition-colors mb-1">{city.label}</div>
                <div className="text-[12px] text-muted mb-3">{city.sub}</div>
                <span className="text-[13px] font-semibold text-accent">View Coverage →</span>
              </Link>
            ))}
          </div>
          <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6">
            <p className="text-[12px] font-bold tracking-widest uppercase text-muted mb-3">Also Serving</p>
            <div className="flex flex-wrap gap-2.5">
              {alsoServed.map(place => (
                <span key={place} className="inline-flex items-center bg-accent/8 text-accent border border-accent/20 text-[13px] font-semibold px-4 py-2 rounded-full">
                  {place}
                </span>
              ))}
            </div>
            <p className="text-muted text-[13px] leading-relaxed mt-4">
              Including the Beville Road corridor and Golf View in South Daytona. Don&apos;t see your city listed with its own page yet? We still cover it — <Link href="/contact" className="text-accent font-semibold hover:underline">reach out</Link> and we&apos;ll confirm coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-16">
        <div className="container-site">
          <p className="eyebrow">Industry Focus</p>
          <h2 className="section-title text-[clamp(22px,3vw,34px)] mb-6">Industries We Serve <span className="text-accent">Across the County.</span></h2>
          <p className="text-muted text-[14px] max-w-2xl mb-8">
            From coastal tourism businesses in New Smyrna Beach to the growing contractor base in Port Orange and Deltona, Volusia County&apos;s economy spans a wide mix of industries — we build for all of them.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              'Contractors & Home Services',
              'Legal & Attorneys',
              'Healthcare & Medical',
              'Professional Services',
              'Retail & Hospitality',
              'Real Estate',
            ].map(industry => (
              <span key={industry} className="inline-flex items-center bg-accent/8 text-accent border border-accent/20 text-[13px] font-semibold px-4 py-2 rounded-full">
                {industry}
              </span>
            ))}
          </div>
          <div className="flex gap-3 flex-wrap mt-8">
            <Link href="/services/web-design-for-contractors" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent hover:underline">Web Design for Contractors →</Link>
            <Link href="/services/web-design-for-home-services" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent hover:underline">Web Design for Home Services →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8f9fc] py-20">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title text-[clamp(22px,3vw,34px)] mb-10">Common Questions About <span className="text-accent">Volusia County Coverage.</span></h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-7">
              <h3 className="font-bold text-[16px] text-dark mb-3">Do you actually serve all of Volusia County, or just Daytona Beach?</h3>
              <p className="text-muted text-[14px] leading-relaxed">
                All of it. We&apos;re based in Daytona Beach, but we actively build for and market businesses across South Daytona, Port Orange, Ormond Beach, New Smyrna Beach, DeLand, Holly Hill, and Daytona Beach Shores — plus Deltona and Edgewater. Each core city has its own dedicated page built around its real zip codes and neighborhoods, not a generic county-wide template.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-7">
              <h3 className="font-bold text-[16px] text-dark mb-3">Is my search competition different across the county?</h3>
              <p className="text-muted text-[14px] leading-relaxed">
                Significantly. Daytona Beach proper has the most entrenched local search competition in the county — years of established agencies and businesses fighting over the same terms. Cities like Ormond Beach, DeLand, and Port Orange are considerably less contested right now, which means a well-built local site can reach page one faster in those markets than in Daytona Beach itself. We factor that difference into how we prioritize and build every county-wide project.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-7">
              <h3 className="font-bold text-[16px] text-dark mb-3">My city isn&apos;t listed with its own page — can you still help?</h3>
              <p className="text-muted text-[14px] leading-relaxed">
                Yes. South Daytona, Holly Hill, Daytona Beach Shores, Deltona, and Edgewater are all part of our active service area even though they don&apos;t have a dedicated landing page yet. We build local SEO targeting into every site regardless — including hyper-local areas like the Beville Road corridor and Golf View in South Daytona.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Reading */}
      {relatedPosts.length > 0 && (
        <section className="bg-white py-20 border-t border-[#e5e7eb]">
          <div className="container-site">
            <p className="eyebrow">Related Reading</p>
            <h2 className="section-title text-[clamp(22px,3vw,34px)] mb-10">Guides for <span className="text-accent">Volusia County Businesses.</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedPosts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`}
                  className="group bg-[#f8f9fc] border border-[#e5e7eb] hover:border-accent/40 hover:shadow-md rounded-2xl p-6 transition-all block">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-accent mb-2">{post.cat}</p>
                  <h3 className="font-bold text-[15px] text-dark group-hover:text-accent transition-colors leading-snug mb-2">{post.title}</h3>
                  <p className="text-[13px] text-muted leading-relaxed line-clamp-3">{post.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="container-site text-center">
          <h2 className="text-[28px] font-bold text-white mb-3" style={{ fontFamily: 'var(--font-bebas)' }}>Ready to Grow Your Volusia County Business?</h2>
          <p className="text-white text-[15px] mb-8 max-w-md mx-auto">Free 30-minute strategy call. No commitment. We&apos;ll show you what&apos;s possible in your specific market.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-accent font-bold text-[14px] px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors">Book a Free Strategy Call →</Link>
        </div>
      </section>
    </main>
  );
}
