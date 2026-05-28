import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = { title: 'About Us' };

const values = [
  { icon:'🎯', title:'Results First', desc:'We measure everything. Revenue and leads are the only scorecard that matters.' },
  { icon:'🤝', title:'Real Relationships', desc:"You'll have a direct line to us — not a ticket system. We treat every client like a business partner." },
  { icon:'🚀', title:'Move Fast', desc:'Most agencies take 3 months to launch a site. We do it in 7 days without cutting corners.' },
  { icon:'🔍', title:'Full Transparency', desc:"You own your accounts and data. We don't hide behind jargon or black-box reporting." },
  { icon:'💡', title:'Always Learning', desc:'Digital moves fast. We stay ahead so our clients benefit from what we learn across every account.' },
  { icon:'🌴', title:'Florida-Rooted', desc:'We know this market — the competition, the seasonality, and what local consumers respond to.' },
];

export default function About() {
  return (
    <main>
      {/* Hero — full branded office shot */}
      <section className="relative overflow-hidden" style={{minHeight:'65vh', display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>
        <Image fill src="/images/about-bg.png" alt="" className="object-cover object-[center_25%]" priority quality={95} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />
        {/* Left edge fade for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

        <div className="container-site relative z-10 pb-20 pt-40">
          <div className="max-w-2xl">
            <p className="eyebrow" style={{color:'rgba(100,160,255,0.9)'}}>About NXT Level Builds</p>
            <h1 className="text-[clamp(36px,5.5vw,72px)] font-extrabold text-white leading-tight mb-5" style={{fontFamily:"'Bebas Neue', sans-serif"}}>
              Built Different.<br />Built to <span className="text-accent">Win.</span>
            </h1>
            <p className="text-white/60 text-[16px] leading-relaxed max-w-lg mb-8">
              We&apos;re a Daytona Beach digital agency that builds websites, automations, and systems for businesses that want to scale — not just look good online.
            </p>
            <div className="flex gap-4 flex-wrap">
              <div className="bg-black/50 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-3 text-center">
                <div className="text-[26px] font-extrabold text-white leading-none">3 Yrs</div>
                <div className="text-[10px] font-semibold tracking-widest uppercase text-white/40 mt-0.5">Experience</div>
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
      </section>

      {/* Who We Are */}
      <section className="bg-white py-20">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow">Who We Are</p>
            <h2 className="text-[clamp(24px,3.5vw,40px)] font-extrabold text-dark leading-tight mb-6" style={{fontFamily:"'Bebas Neue', sans-serif"}}>
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
              {[['2024','Founded'],['3 Yrs','Experience'],['100%','Retention'],['FL','Based']].map(([n,l]) => (
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
                <div className="text-3xl mb-4">{v.icon}</div>
                <h4 className="font-bold text-[16px] text-dark mb-2 uppercase tracking-wide">{v.title}</h4>
                <p className="text-[13px] text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow text-center">The Team</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] text-center mb-12">People Behind <span className="text-accent">the Work</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Cory — real */}
            <div className="border border-[#e5e7eb] rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-lg transition-all">
              <div className="h-40 flex items-center justify-center text-5xl" style={{ background: '#eef3ff' }}>👨‍💻</div>
              <div className="p-6 text-center">
                <h4 className="font-bold text-[16px] text-dark mb-1">Cory Brenner</h4>
                <p className="text-accent text-[12px] font-semibold mb-3 uppercase tracking-wide">Founder, CEO & Lead Strategist</p>
                <p className="text-[13px] text-muted leading-relaxed">
                  Built his first business in Volusia County and got tired of seeing small businesses burned by agencies that overpromised. Founded NXT Level to do it right — handles strategy, client relationships, lead generation, and growth.
                </p>
              </div>
            </div>

            {/* Open roles */}
            <div className="border border-dashed border-[#e5e7eb] rounded-2xl overflow-hidden hover:border-accent/30 transition-all">
              <div className="h-40 flex items-center justify-center text-5xl" style={{ background: '#f8f9fc' }}>🎨</div>
              <div className="p-6 text-center">
                <h4 className="font-bold text-[16px] text-dark mb-1">Designer & Developer</h4>
                <p className="text-accent text-[12px] font-semibold mb-3 uppercase tracking-wide">Position Open</p>
                <p className="text-[13px] text-muted leading-relaxed">
                  We&apos;re growing. Looking for a designer/developer obsessed with clean code and high-converting UI. Sound like you?
                </p>
              </div>
            </div>

            <div className="border border-dashed border-[#e5e7eb] rounded-2xl overflow-hidden hover:border-accent/30 transition-all">
              <div className="h-40 flex items-center justify-center text-5xl" style={{ background: '#f8f9fc' }}>📊</div>
              <div className="p-6 text-center">
                <h4 className="font-bold text-[16px] text-dark mb-1">Paid Media & SEO Lead</h4>
                <p className="text-accent text-[12px] font-semibold mb-3 uppercase tracking-wide">Position Open</p>
                <p className="text-[13px] text-muted leading-relaxed">
                  Looking for someone who lives in Google Ads and local SEO data. ROI-obsessed, transparent, and results-driven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
