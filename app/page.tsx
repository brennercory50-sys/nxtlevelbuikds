import Link from 'next/link';

const services = [
  { n: '01', icon: '⚡', title: 'Web Design & Dev', desc: 'Fast, custom websites built to convert. No templates, no shortcuts.', tags: ['Next.js', 'Custom Design', 'Mobile-First'] },
  { n: '02', icon: '🎯', title: 'Google Ads', desc: 'Search, LSA & display campaigns built for ROI. Every dollar tracked.', tags: ['Search Ads', 'LSA', 'Remarketing'] },
  { n: '03', icon: '📈', title: 'SEO', desc: 'Local rankings, technical SEO, and content that compounds.', tags: ['Local SEO', 'GMB', 'Technical'] },
  { n: '04', icon: '🤖', title: 'AI Automation', desc: 'Systems that handle follow-ups, booking, and CRM while you sleep.', tags: ['AI Workflows', 'CRM', 'Chatbots'] },
];

const stats = [
  { num: '150+', label: 'Projects Delivered' },
  { num: '3.8×', label: 'Average Ad ROAS' },
  { num: '98%', label: 'Client Retention' },
  { num: '7 Day', label: 'Average Launch' },
];

const portfolio = [
  { emoji: '🏊', bg: '#eef3ff', tag: "Web + SEO", title: "Miller's Screen & Pool", desc: "Premium cinematic site + local SEO", result: "↑ 190% organic leads" },
  { emoji: '🏠', bg: '#f0fdf6', tag: "Google Ads", title: "Daytona Roofing Co.", desc: "Cut cost per lead 40% in 30 days", result: "$28 avg CPL" },
  { emoji: '🛒', bg: '#fff7ed', tag: "E-Commerce + AI", title: "Local Retail Brand", desc: "Shopify + AI cart recovery", result: "4.2× ROAS Month 2" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: '#f8f7f4' }}>
        <div className="container-site py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Daytona Beach, FL — Digital Agency
            </div>
            <h1 className="font-display text-7xl lg:text-9xl leading-none tracking-wide text-dark mb-2">
              WE BUILD<br />
              <span className="text-accent">DIGITAL</span><br />
              THAT WINS
            </h1>
            <p className="text-muted text-lg leading-relaxed mt-6 mb-8 max-w-md">
              Websites that convert. Google Ads that hit. SEO that compounds. AI automation that works while you sleep.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="bg-accent hover:bg-accent2 text-white font-semibold text-sm px-8 py-4 rounded-md transition-all hover:-translate-y-0.5">
                Start a Project →
              </Link>
              <Link href="/work" className="border border-border2 hover:border-accent hover:text-accent text-dark font-semibold text-sm px-7 py-4 rounded-md transition-all">
                See Our Work
              </Link>
            </div>
          </div>
          {/* Results card */}
          <div className="bg-dark rounded-2xl p-8">
            <p className="text-xs tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>Live Client Results</p>
            <div className="grid grid-cols-2 gap-4 mb-5">
              {[['3.8×','Avg Ad ROAS'],['+247%','Organic Traffic'],['7 day','Avg Launch'],['150+','Projects Done']].map(([n,l]) => (
                <div key={l} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)' }}>
                  <div className="font-display text-4xl text-white leading-none">{n}</div>
                  <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{l}</div>
                </div>
              ))}
            </div>
            <div className="space-y-2.5">
              {[['Web Design & Dev','Active'],['Google Ads','Active'],['SEO','Available'],['AI Automation','Available']].map(([s,status]) => (
                <div key={s} className="flex items-center justify-between px-4 py-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>{s}</span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${status === 'Active' ? 'bg-green/20 text-green' : 'bg-accent/20 text-blue-300'}`}>{status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="bg-dark py-3.5 overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-[ticker_22s_linear_infinite]">
          {['Web Design','·','Google Ads','·','SEO','·','AI Automation','·','Lead Gen','·','E-Commerce','·','Branding','·','Landing Pages','·',
            'Web Design','·','Google Ads','·','SEO','·','AI Automation','·','Lead Gen','·','E-Commerce','·','Branding','·','Landing Pages','·'].map((t, i) => (
            <span key={i} className={`font-cond text-sm font-bold tracking-widest uppercase px-6 ${t !== '·' ? 'text-white' : 'text-white/30'}`}>{t}</span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="bg-bg2">
        <div className="container-site py-20">
          <p className="eyebrow text-xs font-semibold tracking-widest uppercase text-accent mb-3">What We Do</p>
          <h2 className="font-display text-6xl lg:text-7xl text-dark leading-none mb-12">
            Services Built to <span className="text-light-muted">Perform</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map(s => (
              <Link key={s.n} href="/services" className="group relative bg-bg border border-border hover:border-accent rounded-2xl p-8 overflow-hidden transition-all hover:-translate-y-1 block">
                <span className="absolute top-4 right-5 font-display text-6xl text-border leading-none">{s.n}</span>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-5">{s.icon}</div>
                <h3 className="font-cond text-2xl font-bold tracking-wide uppercase text-dark mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {s.tags.map(t => <span key={t} className="text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-bg3 text-muted border border-border">{t}</span>)}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="bg-dark">
        <div className="container-site py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {stats.map((s, i) => (
              <div key={s.label} className={`text-center py-4 px-6 ${i < stats.length - 1 ? 'border-r border-white/10' : ''}`}>
                <div className="font-display text-5xl text-accent leading-none">{s.num}</div>
                <div className="text-xs tracking-widest uppercase mt-2" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PORTFOLIO PREVIEW */}
      <section className="bg-bg">
        <div className="container-site py-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">Recent Work</p>
          <h2 className="font-display text-6xl lg:text-7xl text-dark leading-none mb-12">
            Projects That <span className="text-light-muted">Delivered</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {portfolio.map(p => (
              <Link key={p.title} href="/work" className="group bg-bg2 border border-border hover:border-border2 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 block">
                <div className="h-44 flex items-center justify-center text-5xl" style={{ background: p.bg }}>{p.emoji}</div>
                <div className="p-5">
                  <p className="text-xs font-bold tracking-widest uppercase text-accent mb-1">{p.tag}</p>
                  <h4 className="font-semibold text-dark mb-1">{p.title}</h4>
                  <p className="text-xs text-muted">{p.desc}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-green bg-green/10 px-3 py-1 rounded-full">{p.result}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/work" className="border border-border2 hover:border-accent hover:text-accent text-dark font-semibold text-sm px-8 py-3.5 rounded-md transition-all inline-block">View All Projects →</Link>
          </div>
        </div>
      </section>

      {/* HOME CTA */}
      <section className="bg-accent py-20 text-center">
        <div className="container-site">
          <h2 className="font-display text-6xl lg:text-8xl text-white leading-none mb-4">READY TO GO NXT LEVEL?</h2>
          <p className="text-white/70 text-lg max-w-md mx-auto mb-8">Whether you need a site, better ads, or smarter systems — we'll build it right.</p>
          <Link href="/contact" className="bg-white text-accent font-bold text-sm px-10 py-4 rounded-md hover:-translate-y-0.5 transition-all inline-block">Book a Free Strategy Call →</Link>
        </div>
      </section>
    </>
  );
}
