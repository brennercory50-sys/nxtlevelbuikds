import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { canonical, ogImage } from '@/lib/seo';
import HeroBackdrop from '@/components/HeroBackdrop';
import HeroPhoto from '@/components/HeroPhoto';

export const metadata: Metadata = {
  title: 'About | Web Design Agency Daytona Beach FL',
  description: 'NXT Level Builds is a Daytona Beach digital agency founded by Cory Brenner. We build websites, run Google Ads, and automate systems for Florida businesses that want to scale.',
  alternates: { canonical: canonical('/about') },
  openGraph: {
    title: 'About | Web Design Agency Daytona Beach FL',
    description: 'NXT Level Builds is a Daytona Beach digital agency founded by Cory Brenner. We build websites, run Google Ads, and automate systems for Florida businesses that want to scale.',
    images: [ogImage()],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Web Design Agency Daytona Beach FL',
    description: 'NXT Level Builds is a Daytona Beach digital agency. We build websites, run Google Ads, and automate systems for Florida businesses.',
  },
};

const values = [
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>, title:'Results First', desc:'We measure everything. Revenue and leads are the only scorecard that matters.' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title:'Real Relationships', desc:"You'll have a direct line to us — not a ticket system. We treat every client like a business partner." },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, title:'Move Fast', desc:'Most agencies take 3 months to launch a site. We do it in 7 days without cutting corners.' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>, title:'Full Transparency', desc:"You own your accounts and data. We don't hide behind jargon or black-box reporting." },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>, title:'Always Learning', desc:'Digital moves fast. We stay ahead so our clients benefit from what we learn across every account.' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, title:'Florida-Rooted', desc:'We know this market — the competition, the seasonality, and what local consumers respond to.' },
];

export default function About() {
  return (
    <main>
      {/* Hero — full branded office shot */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <HeroBackdrop />

        <div className="container-site relative z-10 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] gap-x-14 items-center">
          <div>
          <div className="max-w-2xl">
            <p className="hero-eyebrow">About NXT Level Builds</p>
            <h1 className="text-[clamp(44px,6.5vw,84px)] font-normal text-white leading-[0.95] tracking-[0.01em] mb-5" style={{ fontFamily: 'var(--font-bebas)' }}>
              Built Different.<br />Built to <span className="text-gradient-accent">Win.</span>
            </h1>
            <p className="text-white/60 text-[16px] leading-relaxed max-w-lg mb-8">
              A Daytona Beach studio run by Cory Brenner — websites, web apps, and the systems behind them, built to bring in work, not just look good online.
            </p>
            <div className="flex gap-4 flex-wrap">
              <div className="bg-black/50 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-3 text-center">
                <div className="text-[26px] font-extrabold text-white leading-none">3 Yrs</div>
                <div className="text-[10px] font-semibold tracking-widest uppercase text-white/40 mt-0.5">Industry Exp</div>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-3 text-center">
                <div className="text-[26px] font-extrabold text-white leading-none">100%</div>
                <div className="text-[10px] font-semibold tracking-widest uppercase text-white/40 mt-0.5">Retention</div>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-3 text-center">
                <div className="text-[26px] font-extrabold text-white leading-none">7 Day</div>
                <div className="text-[10px] font-semibold tracking-widest uppercase text-white/40 mt-0.5">Avg Launch</div>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-3 text-center">
                <div className="text-[26px] font-extrabold text-accent leading-none">FL</div>
                <div className="text-[10px] font-semibold tracking-widest uppercase text-white/40 mt-0.5">Based</div>
              </div>
            </div>
          </div>
          </div>
          <HeroPhoto src="/images/hero-about-cory.webp" alt="Cory Brenner, founder of NXT Level Builds" aspect="aspect-[4/5]" />
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white py-20">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow">Who We Are</p>
            <h2 className="text-[clamp(24px,3.5vw,40px)] font-extrabold text-dark leading-tight mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
              We're Not a<br />Big Agency.<br /><span className="text-accent">That's the Point.</span>
            </h2>
            <p className="text-muted text-[14px] leading-relaxed mb-4">
              NXT Level Builds was founded in Daytona Beach by people who were tired of seeing small businesses get burned by agencies that overpromised and underdelivered. We started small on purpose — so every client gets real attention from the people actually doing the work.
            </p>
            <p className="text-muted text-[14px] leading-relaxed mb-4">
              We specialize in web design, Google Ads, SEO, and AI automation. We don't dabble. We don't offshore. And we don't take on more clients than we can genuinely serve at a high level.
            </p>
            <p className="text-muted text-[14px] leading-relaxed mb-8">
              If you've been burned before, we get it. We'll earn your trust the right way — with results, not promises.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-8 py-4 rounded-lg transition-colors">
              Let's Talk →
            </Link>
          </div>
          <div className="bg-[#f8f9fc] rounded-2xl p-8 border border-[#e5e7eb]">
            <div className="grid grid-cols-2 gap-4">
              {[['2024','Founded'],['3 Yrs','Industry Exp'],['100%','Retention'],['FL','Based']].map(([n,l]) => (
                <div key={l} className="rounded-xl p-5 bg-white border border-[#e5e7eb]">
                  <div className="text-[32px] font-extrabold text-accent leading-none">{n}</div>
                  <div className="text-[11px] tracking-widest uppercase mt-2 text-muted font-semibold">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f8f9fc] py-20 border-y border-[#e5e7eb]">
        <div className="container-site">
          <p className="eyebrow text-center">What Drives Us</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] text-center mb-12">Our <span className="text-accent">Values</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(v => (
              <div key={v.title} className="bg-white border border-[#e5e7eb] rounded-2xl p-7 hover:border-accent/30 hover:shadow-lg transition-all">
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-accent">{v.icon}</div>
                <h4 className="font-bold text-[16px] text-dark mb-2 uppercase tracking-wide">{v.title}</h4>
                <p className="text-[13px] text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow text-center">Who You&apos;re Hiring</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] text-center mb-12">You Work With <span className="text-accent">Me.</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 md:gap-10 items-start max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-[#e5e7eb] bg-[#eef3ff]">
              <Image src="/images/cory.jpg" alt="Cory Brenner, founder of NXT Level Builds, Daytona Beach" width={300} height={400} className="w-full aspect-[3/4] object-cover object-[center_20%]" sizes="(max-width: 768px) 100vw, 300px" loading="lazy" />
            </div>

            <div>
              <h3 className="font-bold text-[20px] text-dark mb-1">Cory Brenner</h3>
              <p className="text-accent text-[12px] font-semibold mb-5 uppercase tracking-wide">Founder — Daytona Beach, FL</p>

              <div className="space-y-4 text-[14px] text-muted leading-relaxed">
                <p>
                  I founded NXT Level Builds in Daytona Beach after seeing the same pattern repeat: an owner pays a few thousand dollars for a template site, then a monthly retainer for a report nobody reads — and the phone rings no more than it did before.
                </p>
                <p>
                  Three years on, I still do the work myself — websites, web apps, and the custom software behind them. In practice that means sites built to load quickly on a phone, Google Business Profiles configured so you appear in local map results, ad budgets that someone is actively managing, and booking, intake, or follow-up tools built to fit how a business already runs.
                </p>
                <p>
                  I work with trades, salons, and bars across Volusia and Flagler counties — owners who measure a website by whether the phone rings — and with businesses that have outgrown off-the-shelf software and need something built for them. When something needs attention, you reach the person who built it.
                </p>
              </div>

              <ul className="mt-7 space-y-3">
                {[
                  ['One point of contact.', 'Discovery, the build, and every conversation after launch — handled by me directly.'],
                  ['Design approved before development.', 'You sign off on every page before a line of code is written, with revisions until it’s right.'],
                  ['Full ownership.', 'The code, domain, content, and ad accounts are yours. Nothing is locked to me.'],
                  ['Reporting in plain terms.', 'Calls, form submissions, and where they came from — not a dashboard built to look impressive.'],
                ].map(([head, body]) => (
                  <li key={head} className="flex gap-3">
                    <svg className="flex-shrink-0 mt-0.5 text-accent" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    <p className="text-[14px] text-muted leading-relaxed">
                      <span className="font-bold text-dark">{head}</span> {body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
