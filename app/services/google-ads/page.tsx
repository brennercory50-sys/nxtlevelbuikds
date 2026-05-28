import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = { title: 'Google Ads Management' };

const deliverables = [
  { icon: '🗺️', title: 'Campaign Strategy & Setup', desc: 'Full account architecture built for your market — the right keywords, match types, and ad groups from day one.' },
  { icon: '🔑', title: 'Keyword Research', desc: 'Deep competitive research to find the terms your customers search and your competitors miss.' },
  { icon: '📍', title: 'Local Services Ads (LSA)', desc: 'Google Guaranteed placement at the very top. We set it up, optimize it, and dispute bad leads.' },
  { icon: '🚫', title: 'Negative Keyword Management', desc: 'We cut the waste. Ongoing negative keyword management keeps your spend on buyers, not browsers.' },
  { icon: '📞', title: 'CallRail Integration', desc: 'Full call tracking so you know exactly which keywords and ads are driving real phone leads.' },
  { icon: '📊', title: 'Monthly Reporting', desc: 'Clear, jargon-free reports. You see your spend, leads, cost per lead, and ROAS every month.' },
];

const process = [
  { n: '01', title: 'Account Audit', desc: 'We tear down your existing setup (or start fresh) with a full keyword, bidding, and competitor audit.' },
  { n: '02', title: 'Strategy & Build', desc: 'We build the campaign structure, write ad copy, and set up conversion tracking before spending a dollar.' },
  { n: '03', title: 'Launch & Optimize', desc: 'We launch, monitor daily, and optimize relentlessly — bids, copy, landing pages — based on real conversion data.' },
  { n: '04', title: 'Report & Scale', desc: 'Monthly reports with clear ROI. When the numbers are right, we scale the budget and compound your results.' },
];

const results = [
  { client: 'Premier Solutions', result: '4.2×', metric: 'Return on Ad Spend', desc: 'Google Search campaign rebuilt from scratch, targeting high-intent service keywords with optimized landing pages.' },
  { client: 'Ironclad Build', result: '−65%', metric: 'Cost Per Lead', desc: 'Restructured a poorly-built legacy campaign and cut cost per lead by 65% in the first 60 days.' },
  { client: 'Peak Performance', result: '3×', metric: 'Monthly Lead Volume', desc: 'Expanded from basic search to LSA + Display remarketing, tripling lead volume at a maintained CPA.' },
];

export default function GoogleAds() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <Image fill src="/images/services-bg.jpg" alt="" className="object-cover object-center" priority quality={95} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-dark/30" />
        <div className="container-site relative z-10">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-[12px] font-semibold mb-6 transition-colors">
            ← All Services
          </Link>
          <p className="eyebrow" style={{ color: 'rgba(100,160,255,0.9)' }}>Google Ads Management</p>
          <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-tight max-w-2xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Every Dollar.<br />Tracked. Optimized.<br /><span className="text-accent">Scaled.</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-lg mt-5 mb-8">
            We build and manage Google campaigns with one focus: ROI. No vanity metrics, no mystery spend. Just more leads at a cost you can scale.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(26,110,255,0.4)]">
              Get A Free Audit ↗
            </Link>
            <Link href="/work" className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg border border-white/30 transition-all">
              See Our Work ↗
            </Link>
          </div>
          <div className="flex gap-4 flex-wrap mt-10">
            {[['4.2×', 'Avg ROAS'], ['−65%', 'Avg CPL Reduction'], ['$500K+', 'Ad Spend Managed']].map(([n, l]) => (
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
            Full-Service Ads.<br /><span className="text-accent">Nothing Hidden.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverables.map(d => (
              <div key={d.title} className="border border-[#e5e7eb] rounded-2xl p-7 hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-xl mb-4">{d.icon}</div>
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
            Audit. Build.<br /><span className="text-accent">Optimize. Scale.</span>
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
            Campaigns That<br /><span className="text-accent">Produce.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {results.map(r => (
              <div key={r.client} className="border border-[#e5e7eb] rounded-2xl p-6 hover:border-accent/30 hover:shadow-lg transition-all">
                <div className="text-[40px] font-extrabold text-accent leading-none mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
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
          <h2 className="text-[28px] font-bold text-white mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Stop burning ad spend. Start scaling.
          </h2>
          <p className="text-white/70 text-[15px] mb-8 max-w-md mx-auto">
            Get a free audit of your current campaigns — or let us build from scratch.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-accent font-bold text-[14px] px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors">
            Book a Free Audit Call →
          </Link>
        </div>
      </section>
    </main>
  );
}
