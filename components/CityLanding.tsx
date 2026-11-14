import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import HeroBackdrop from '@/components/HeroBackdrop';
import { CaseStudyCard } from '@/components/case-studies';
import { projects } from '@/app/work/projects';
import { canonical, ogImage } from '@/lib/seo';
import { cityLinks, type City } from '@/lib/cities';

const BASE = 'https://www.nxtlevelbuilds.com';

const included = [
  'Custom design matched to your brand',
  'Mobile-first build, tuned for a 90+ PageSpeed score',
  'Local SEO setup for your city and service area',
  'Google Business Profile setup and optimization',
  'Contact forms and tap-to-call on every page',
  'LocalBusiness schema so Google understands where you work',
  'Hosting, updates and support on the monthly plan',
];

export function cityMetadata(city: City): Metadata {
  const path = `/services/web-design-${city.slug}`;
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: canonical(path) },
    openGraph: { title: city.metaTitle, description: city.metaDescription, images: [ogImage()] },
    twitter: { card: 'summary_large_image', title: city.metaTitle, description: city.metaDescription },
  };
}

const check = (
  <span className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
      <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" className="text-accent" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function CityLanding({ city }: { city: City }) {
  const path = `/services/web-design-${city.slug}`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${BASE}${path}#service`,
        name: `Web design in ${city.name}, FL`,
        serviceType: 'Web Design',
        url: `${BASE}${path}`,
        provider: { '@id': `${BASE}/#business` },
        areaServed: {
          '@type': 'City',
          name: city.name,
          containedInPlace: { '@type': 'AdministrativeArea', name: `${city.county} County, Florida` },
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: city.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <HeroBackdrop />
        <div className="container-site relative z-10">
          <Breadcrumb crumbs={[
            { name: 'Home', href: '/' },
            { name: 'Services', href: '/services' },
            { name: 'Web Design', href: '/services/web-design' },
            { name: city.name, href: path },
          ]} />
          <p className="hero-eyebrow mt-4">Web Design — {city.name}, FL</p>
          <h1 className="text-[clamp(40px,6vw,76px)] font-normal text-white leading-[0.95] tracking-[0.01em] max-w-2xl" style={{ fontFamily: 'var(--font-bebas)' }}>
            {city.heroTitle[0]}<br />{city.heroTitle[1]} <span className="text-gradient-accent">Businesses.</span>
          </h1>
          <p className="text-white/70 text-[16px] leading-relaxed max-w-xl mt-5 mb-8">{city.heroIntro}</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(26,110,255,0.4)]">Get a Free Quote →</Link>
            <a href="tel:+13863164008" className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg border border-white/30 transition-all">Call (386) 316-4008</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0d1220] border-y border-white/10 py-8">
        <div className="container-site grid grid-cols-3 gap-4 text-center">
          {([['7 Days', 'Avg Launch Time'], ['90+', 'PageSpeed Target'], ['100%', 'Client Retention']] as const).map(([num, label]) => (
            <div key={label}>
              <div className="text-[28px] font-extrabold text-white">{num}</div>
              <div className="text-[11px] text-white/70 uppercase tracking-wider mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Local context + what's included */}
      <section className="bg-white py-20">
        <div className="container-site grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_380px] gap-12 items-start">
          <div>
            <p className="eyebrow">Doing Business in {city.name}</p>
            <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-8">What a {city.name} Website <span className="text-accent">Needs to Do.</span></h2>
            {city.local.map(p => (
              <p key={p.slice(0, 32)} className="text-muted text-[15px] leading-relaxed mb-5">{p}</p>
            ))}
            <Link href={city.guide.href} className="inline-flex items-center gap-1.5 text-accent font-semibold text-[14px] hover:underline">
              Read the guide: {city.guide.title} →
            </Link>
          </div>
          <div className="bg-[#f8f9fc] rounded-2xl p-8 border border-[#e5e7eb]">
            <h3 className="font-bold text-[16px] text-dark mb-5">What&apos;s Included</h3>
            <ul className="space-y-3 mb-6">
              {included.map(f => (
                <li key={f} className="flex items-start gap-2.5 text-[13px] text-dark">{check}<span>{f}</span></li>
              ))}
            </ul>
            <div className="border-t border-[#e5e7eb] pt-5">
              <p className="text-[13px] text-dark"><strong className="text-[20px] font-extrabold">$599</strong> + $150/mo for simple sites</p>
              <p className="text-[12px] text-muted mt-1">Custom builds and web apps are quoted individually. You get the price before any work starts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-[#f8f9fc] py-16">
        <div className="container-site">
          <p className="eyebrow">Coverage Area</p>
          <h2 className="section-title text-[clamp(22px,3vw,34px)] mb-8">Areas We Serve <span className="text-accent">In &amp; Around {city.name}.</span></h2>
          <ul className="flex flex-wrap gap-2.5">
            {city.areas.map(a => (
              <li key={a} className="bg-white border border-[#e5e7eb] rounded-full px-4 py-2 text-[13px] font-semibold text-dark">{a}</li>
            ))}
          </ul>
          <p className="text-[13px] text-muted mt-5">ZIP codes: {city.zips.join(', ')}</p>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow">Who We Build For</p>
          <h2 className="section-title text-[clamp(22px,3vw,34px)] mb-10">{city.name} Businesses <span className="text-accent">We Build For.</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {city.industries.map(ind => (
              <div key={ind.name} className="rounded-2xl border border-[#e5e7eb] p-6 flex flex-col">
                <h3 className="font-bold text-[16px] text-dark mb-2">{ind.name}</h3>
                <p className="text-[14px] text-muted leading-relaxed flex-1">{ind.note}</p>
                {ind.guide && (
                  <Link href={ind.guide.href} className="mt-4 text-[13px] font-semibold text-accent hover:underline">{ind.guide.label} →</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent work */}
      <section className="bg-[#f8f9fc] py-20">
        <div className="container-site">
          <p className="eyebrow">Recent Work</p>
          <h2 className="section-title text-[clamp(22px,3vw,34px)] mb-10">Sites Built <span className="text-accent">Here in Volusia County.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {projects.map(p => <CaseStudyCard key={p.slug} project={p} />)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title text-[clamp(22px,3vw,34px)] mb-10">Questions from <span className="text-accent">{city.name} Businesses.</span></h2>
          <div className="space-y-5">
            {city.faqs.map(f => (
              <div key={f.q} className="bg-[#f8f9fc] rounded-2xl border border-[#e5e7eb] p-7">
                <h3 className="font-bold text-[16px] text-dark mb-3">{f.q}</h3>
                <p className="text-muted text-[14px] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other areas */}
      <section className="bg-[#f8f9fc] py-16">
        <div className="container-site">
          <p className="eyebrow">Service Area</p>
          <h2 className="section-title text-[clamp(22px,3vw,34px)] mb-8">Other Areas <span className="text-accent">We Serve.</span></h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[...cityLinks.filter(l => l.href !== path), { label: 'All Web Design Services', href: '/services/web-design' }].map(({ label, href }) => (
              <Link key={href} href={href} className="bg-white hover:bg-accent/5 border border-[#e5e7eb] hover:border-accent/30 rounded-xl px-4 py-3 text-[13px] font-semibold text-dark hover:text-accent transition-all text-center">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="container-site text-center">
          <h2 className="text-[32px] font-normal text-white mb-3" style={{ fontFamily: 'var(--font-bebas)' }}>Ready to Grow Your {city.name} Business?</h2>
          <p className="text-white text-[15px] mb-8 max-w-md mx-auto">Free 30-minute call, no commitment. I&apos;ll look at your current site and your local competition and tell you honestly what would help.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-accent font-bold text-[14px] px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors">Book a Free Call →</Link>
          <a href="tel:+13863164008" className="inline-flex items-center gap-2 text-white text-[14px] font-semibold ml-4">or call (386) 316-4008</a>
        </div>
      </section>
    </main>
  );
}
