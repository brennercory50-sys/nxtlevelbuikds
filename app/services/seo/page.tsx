import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'SEO Services Daytona Beach FL | Local Search Optimization',
  description: 'Local SEO services in Daytona Beach, FL. Technical audits, Google Business Profile optimization, and content strategy that drives organic leads month over month.',
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

const results = [
  { client: 'Summit Exteriors', result: '#1', metric: 'Local Search Position', desc: 'Ranked #1 for primary service keyword in 3 months with full local map pack domination.' },
  { client: "Miller's Screen & Pool", result: '190%', metric: 'Organic Traffic Growth', desc: 'Technical fixes + GBP rebuild drove a sustained 190% lift in organic traffic within 90 days.' },
  { client: 'Elevate Developments', result: '14', metric: 'Page-One Keywords', desc: 'Content strategy and on-page optimization pushed 14 target keywords to the first page of Google.' },
];

export default function SEO() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <Image fill src="/images/services-bg.jpg" alt="Local SEO services — NXT Level Builds Daytona Beach" className="object-cover object-center" priority quality={75} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-dark/30" />
        <div className="container-site relative z-10">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-[12px] font-semibold mb-6 transition-colors">
            ← All Services
          </Link>
          <p className="eyebrow" style={{ color: 'rgba(100,160,255,0.9)' }}>Search Engine Optimization</p>
          <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-tight max-w-2xl" style={{ fontFamily: 'var(--font-bebas)' }}>
            Rankings That Compound.<br /><span className="text-accent">Traffic That Lasts.</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-lg mt-5 mb-8">
            SEO is a long game and we play it well. From technical audits to local map pack domination, we build organic growth that keeps delivering long after you stop paying for clicks.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(26,110,255,0.4)]">
              Start Ranking ↗
            </Link>
            <Link href="/work" className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg border border-white/30 transition-all">
              See Our Work ↗
            </Link>
          </div>
          <div className="flex gap-4 flex-wrap mt-10">
            {[['#1', 'Local Rankings Achieved'], ['190%', 'Avg Traffic Growth'], ['90 Days', 'Avg Time to Results']].map(([n, l]) => (
              <div key={l} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3">
                <div className="text-[22px] font-extrabold text-white leading-none">{n}</div>
                <div className="text-[10px] font-semibold tracking-widest uppercase text-white/40 mt-0.5">{l}</div>
              </div>
            ))}
          </div>
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
                <h4 className="font-bold text-[15px] text-dark mb-2">{d.title}</h4>
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
                <div className="text-[42px] font-extrabold leading-none mb-3" style={{ color: 'rgba(26,110,255,0.18)', fontFamily: "'Bebas Neue', sans-serif" }}>
                  {p.n}
                </div>
                <h4 className="font-bold text-[15px] text-dark mb-2">{p.title}</h4>
                <p className="text-[13px] text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow">Real Results</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-12">
            Rankings We&apos;ve<br /><span className="text-accent">Earned.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {results.map(r => (
              <div key={r.client} className="border border-[#e5e7eb] rounded-2xl p-6 hover:border-accent/30 hover:shadow-lg transition-all">
                <div className="text-[40px] font-extrabold text-accent leading-none mb-1" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {r.result}
                </div>
                <div className="text-[11px] font-bold tracking-widest uppercase text-muted mb-4">{r.metric}</div>
                <h4 className="font-bold text-[14px] text-dark mb-2">{r.client}</h4>
                <p className="text-[13px] text-muted leading-relaxed">{r.desc}</p>
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
          <p className="text-white/70 text-[15px] mb-8 max-w-md mx-auto">
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
