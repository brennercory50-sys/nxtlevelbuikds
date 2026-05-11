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
    <>
      <section className="bg-dark py-20 text-center">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">Our Story</p>
          <h1 className="font-display text-7xl lg:text-9xl text-white leading-none">ABOUT <span className="text-accent">NXT LEVEL</span></h1>
          <p className="text-white/50 text-lg mt-4 max-w-md mx-auto">A small team with a big track record — built in Florida, focused on results.</p>
        </div>
      </section>

      <section className="bg-bg2">
        <div className="container-site py-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">Who We Are</p>
            <h2 className="font-display text-5xl lg:text-6xl text-dark leading-none mb-6">
              We're Not a<br />Big Agency.<br /><span className="text-accent">That's the Point.</span>
            </h2>
            <p className="text-muted text-base leading-relaxed mb-4">NXT Level Builds was founded in Daytona Beach by people who were tired of seeing small businesses get burned by agencies that overpromised and underdelivered. We started small on purpose — so every client gets real attention from the people actually doing the work.</p>
            <p className="text-muted text-base leading-relaxed mb-4">We specialize in web design, Google Ads, SEO, and AI automation. We don't dabble. We don't offshore. And we don't take on more clients than we can genuinely serve at a high level.</p>
            <p className="text-muted text-base leading-relaxed mb-8">If you've been burned before, we get it. We'll earn your trust the right way — with results, not promises.</p>
            <Link href="/contact" className="bg-accent hover:bg-accent2 text-white font-semibold text-sm px-8 py-4 rounded-md transition-colors inline-block">Let's Talk →</Link>
          </div>
          <div className="bg-dark rounded-2xl p-10">
            <div className="grid grid-cols-2 gap-4">
              {[['2020','Founded'],['150+','Projects'],['98%','Retention'],['FL','Based & Focused']].map(([n,l]) => (
                <div key={l} className="rounded-xl p-6" style={{ background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.1)' }}>
                  <div className="font-display text-5xl text-accent leading-none">{n}</div>
                  <div className="text-xs tracking-widest uppercase mt-2" style={{ color:'rgba(255,255,255,0.4)' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="container-site py-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">What Drives Us</p>
          <h2 className="font-display text-5xl lg:text-6xl text-dark leading-none mb-12">Our <span className="text-light-muted">Values</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(v => (
              <div key={v.title} className="bg-bg2 border border-border rounded-2xl p-8">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h4 className="font-cond text-xl font-bold tracking-wide uppercase text-dark mb-2">{v.title}</h4>
                <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg2">
        <div className="container-site py-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">The Team</p>
          <h2 className="font-display text-5xl lg:text-6xl text-dark leading-none mb-12">People Behind <span className="text-light-muted">the Work</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { bg:'#eef3ff', emoji:'👨‍💻', name:'Cory B.', role:'Founder & CEO', bio:'Built his first business in Volusia County and got tired of bad agencies. Founded NXT Level to do it right. Handles strategy, client relationships, and growth.' },
              { bg:'#f0fdf6', emoji:'🎨', name:'Your Designer', role:'Lead Designer & Developer', bio:'Builds every site from scratch. Obsessed with performance, clean code, and design that converts — not just looks good in a portfolio.' },
              { bg:'#fff7ed', emoji:'📊', name:'Your Ads Lead', role:'Paid Media & SEO Lead', bio:'Manages all Google Ads accounts and SEO strategy. Has run over $500K in ad spend with a consistent focus on cost per acquisition.' },
            ].map(t => (
              <div key={t.name} className="bg-bg border border-border hover:border-border2 rounded-2xl overflow-hidden transition-all hover:-translate-y-1">
                <div className="h-40 flex items-center justify-center text-5xl" style={{ background: t.bg }}>{t.emoji}</div>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-dark mb-1">{t.name}</h4>
                  <p className="text-accent text-sm font-semibold mb-3">{t.role}</p>
                  <p className="text-xs text-muted leading-relaxed">{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
