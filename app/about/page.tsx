import type { Metadata } from 'next';
import Link from 'next/link';

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
      {/* Hero with photo background */}
      <section className="photo-about relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-dark/30" />
        <div className="container-site relative z-10">
          <p className="eyebrow" style={{color:'rgba(100,160,255,0.9)'}}>About</p>
          <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-tight max-w-2xl" style={{fontFamily:"'Bebas Neue', sans-serif"}}>
            Built in Daytona.<br />Focused on <span className="text-accent">Results.</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-lg mt-5">
            A small team with a big track record. We know the Florida market and we know what works.
          </p>
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
              {[['2020','Founded'],['150+','Projects'],['98%','Retention'],['FL','Based']].map(([n,l]) => (
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
            {[
              { bg:'#eef3ff', emoji:'👨‍💻', name:'Cory B.', role:'Founder & CEO', bio:'Built his first business in Volusia County and got tired of bad agencies. Founded NXT Level to do it right. Handles strategy, client relationships, and growth.' },
              { bg:'#f0fdf6', emoji:'🎨', name:'Your Designer', role:'Lead Designer & Developer', bio:'Builds every site from scratch. Obsessed with performance, clean code, and design that converts — not just looks good.' },
              { bg:'#fff7ed', emoji:'📊', name:'Your Ads Lead', role:'Paid Media & SEO Lead', bio:'Manages all Google Ads and SEO. Has run over $500K in ad spend with a consistent focus on cost per acquisition.' },
            ].map(t => (
              <div key={t.name} className="border border-[#e5e7eb] rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-lg transition-all">
                <div className="h-40 flex items-center justify-center text-5xl" style={{ background: t.bg }}>{t.emoji}</div>
                <div className="p-6 text-center">
                  <h4 className="font-bold text-[16px] text-dark mb-1">{t.name}</h4>
                  <p className="text-accent text-[12px] font-semibold mb-3 uppercase tracking-wide">{t.role}</p>
                  <p className="text-[13px] text-muted leading-relaxed">{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
