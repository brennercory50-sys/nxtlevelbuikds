import type { Metadata } from 'next';
import Link from 'next/link';
import { canonical, ogImage } from '@/lib/seo';
import HeroBackdrop from '@/components/HeroBackdrop';
import HeroPhoto from '@/components/HeroPhoto';

export const metadata: Metadata = {
  title: 'Daytona Beach SEO Services | Local SEO',
  description: 'Local SEO in Daytona Beach, FL — Google Business Profile, technical fixes, and content that gets Volusia County businesses into the map pack.',
  alternates: { canonical: canonical('/services/seo') },
  openGraph: {
    title: 'Daytona Beach SEO Services | Local SEO',
    description: 'Local SEO in Daytona Beach, FL — Google Business Profile, technical fixes, and content that gets Volusia County businesses into the map pack.',
    images: [ogImage()],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daytona Beach SEO Services | Local SEO',
    description: 'Local SEO in Daytona Beach, FL — Google Business Profile, technical fixes, and content that gets you into the map pack.',
  },
};

const deliverables = [
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>, title: 'Technical SEO Audit', desc: 'We crawl your entire site for speed issues, broken links, indexing errors, and structural problems — then fix them.' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>, title: 'Google Business Profile', desc: 'Full GBP optimization — categories, photos, posts, Q&A, and review strategy — to dominate local map pack results.' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, title: 'Local Map Pack Strategy', desc: 'Targeted local optimization to put your business in the 3-pack for the searches that matter most in your area.' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>, title: 'On-Page Optimization', desc: 'Title tags, meta descriptions, header structure, and internal linking — every page tuned for maximum ranking potential.' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>, title: 'Content & Blog Strategy', desc: 'We research and create content that ranks for high-intent keywords and builds topical authority month over month.' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>, title: 'Link Building', desc: 'Earned, relevant backlinks from real sources that signal authority to Google and move the ranking needle.' },
];

const process = [
  { n: '01', title: 'Technical Audit', desc: 'We find everything hurting your rankings — speed, crawlability, duplicate content, schema — and build a fix roadmap.' },
  { n: '02', title: 'Local Strategy', desc: 'GBP optimization, citation cleanup, and local map pack targeting for your most important service areas.' },
  { n: '03', title: 'Content & Links', desc: 'We create content that earns rankings and build links that signal authority to Google over time.' },
  { n: '04', title: 'Track & Compound', desc: 'Monthly ranking reports with organic traffic data and new lead attribution. SEO compounds — we measure every gain.' },
];

const localFactors = [
  { title: 'The map pack is about distance', desc: 'Google weighs how close a business is to the person searching. A company in Port Orange can be invisible to someone searching from Ormond Beach. We give each city you serve its own page and set your Google Business Profile service areas to match.' },
  { title: 'Search demand follows the calendar', desc: 'Speedweeks in February, Bike Week in March, Biketoberfest in October, and summer beach season all move what people search for here. Restaurants, bars, detailers, and rentals feel it most. We plan content and profile posts ahead of those peaks, not during them.' },
  { title: 'Visitors and residents search differently', desc: 'Someone on A1A looking for dinner tonight wants something different from a Spruce Creek homeowner comparing HVAC companies. Your pages should speak to whichever one pays your bills.' },
];

const faqs = [
  { q: 'How long does local SEO take in Daytona Beach?', a: 'Most local businesses see real movement in three to six months. Fixes to your Google Business Profile and technical problems can show up within weeks; competitive searches take longer. Anyone promising page one in 30 days is guessing.' },
  { q: 'Do you guarantee rankings?', a: 'No. Google doesn\u2019t sell guarantees, so nobody can honestly offer one. What we commit to is the work itself, plus a plain-English monthly report showing where you rank, what changed, and where your calls and form fills came from.' },
  { q: 'Do I have to sign a long contract?', a: 'No. SEO is month-to-month. If it isn\u2019t earning its keep, you can stop.' },
  { q: 'Do I need a new website before doing SEO?', a: 'Not always. We start by auditing the site you have. If it\u2019s fixable, we fix it. If the platform itself is holding you back \u2014 slow, hard to edit, no room for service pages \u2014 we\u2019ll tell you and quote a rebuild separately.' },
  { q: 'Do you only work with Daytona Beach businesses?', a: 'We\u2019re based in Daytona Beach and focus on Volusia and Flagler County \u2014 Port Orange, Ormond Beach, New Smyrna Beach, DeLand, Palm Coast. Local SEO works the same way anywhere a business serves a defined area.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function SEO() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <HeroBackdrop />
        <div className="container-site relative z-10 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] gap-x-14 items-center">
          <div>
          <Link href="/services" className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-[12px] font-semibold mb-6 transition-colors">
            ← All Services
          </Link>
          <p className="hero-eyebrow">Local SEO · Daytona Beach, FL</p>
          <h1 className="text-[clamp(40px,6vw,76px)] font-normal text-white leading-[0.95] tracking-[0.01em] max-w-2xl" style={{ fontFamily: 'var(--font-bebas)' }}>
            Daytona Beach SEO<br /><span className="text-gradient-accent">That Compounds.</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-lg mt-5 mb-8">
            Local SEO for Daytona Beach and Volusia County businesses — technical fixes, Google Business Profile, and content that gets you into the map pack for the searches your customers actually make. Unlike ads, it keeps working after you stop paying.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(26,110,255,0.4)]">
              Start Ranking ↗
            </Link>
            <Link href="/work" className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg border border-white/30 transition-all">
              See Our Work ↗
            </Link>
          </div>
          <div className="flex gap-3 flex-wrap mt-10">
            {[['Month-to-Month', 'No Long Contracts'], ['Monthly', 'Plain-English Reports'], ['100%', 'Client Retention']].map(([n, l]) => (
              <div key={l} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3">
                <div className="text-[22px] font-extrabold text-white leading-none">{n}</div>
                <div className="text-[10px] font-semibold tracking-widest uppercase text-white/40 mt-0.5">{l}</div>
              </div>
            ))}
          </div>
          </div>
          <HeroPhoto src="/images/hero-pier-aerial.webp" alt="Aerial view of Daytona Beach and the Main Street Pier" />
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow">What&apos;s Included</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-12">
            Full-Stack SEO.<br /><span className="text-accent">Nothing Left Out.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverables.map(d => (
              <div key={d.title} className="border border-[#e5e7eb] rounded-2xl p-7 hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-accent">{d.icon}</div>
                <h3 className="font-bold text-[15px] text-dark mb-2">{d.title}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f8f9fc] border-y border-[#e5e7eb] py-20">
        <div className="container-site">
          <p className="eyebrow">Our Process</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-12">
            Audit. Optimize.<br /><span className="text-accent">Rank. Compound.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map(p => (
              <div key={p.n} className="bg-white border border-[#e5e7eb] rounded-2xl p-6 hover:border-accent/30 hover:shadow-lg transition-all">
                <div aria-hidden="true" data-step={p.n} className="step-numeral" />
                <h3 className="font-bold text-[15px] text-dark mb-2">{p.title}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local factors */}
      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow">Why Local Is Different</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-12">
            Daytona Beach SEO Is<br /><span className="text-accent">Its Own Game.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {localFactors.map(f => (
              <div key={f.title} className="border border-[#e5e7eb] rounded-2xl p-7">
                <h3 className="font-bold text-[15px] text-dark mb-2">{f.title}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[14px] text-muted mt-8">
            Further reading:{' '}
            <Link href="/blog/dominate-google-maps-90-days" className="text-accent font-semibold hover:underline">How to dominate Google Maps in 90 days</Link>
            {' · '}
            <Link href="/blog/google-business-profile-checklist-florida" className="text-accent font-semibold hover:underline">The Google Business Profile checklist</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8f9fc] border-t border-[#e5e7eb] py-20">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title text-[clamp(22px,3vw,34px)] mb-10">Local SEO <span className="text-accent">Questions.</span></h2>
          <div className="space-y-6">
            {faqs.map(f => (
              <div key={f.q} className="bg-white rounded-2xl border border-[#e5e7eb] p-7">
                <h3 className="font-bold text-[16px] text-dark mb-3">{f.q}</h3>
                <p className="text-muted text-[14px] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="container-site text-center">
          <h2 className="text-[28px] font-bold text-white mb-3" style={{ fontFamily: 'var(--font-bebas)' }}>
            Start ranking. Start converting.
          </h2>
          <p className="text-white text-[15px] mb-8 max-w-md mx-auto">
            Let&apos;s talk about your market, your competition, and what it takes to win locally.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-accent font-bold text-[14px] px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors">
            Book a Free SEO Consultation →
          </Link>
        </div>
      </section>
    </main>
  );
}
