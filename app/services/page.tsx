import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Services' };

const services = [
  { n:'01', icon:'⚡', title:'Web Design & Development',
    desc:'We build custom, fast-loading websites that represent your brand and convert visitors into paying customers. No page builders, no cookie-cutter templates — just clean code and intentional design built around your goals.',
    bullets:['Custom UI/UX Design','Next.js / React Development','Mobile-First Responsive','CMS Integration','Speed & Core Web Vitals','E-Commerce Ready'],
    tags:['Next.js','Custom Design','Shopify','WordPress','CMS'] },
  { n:'02', icon:'🎯', title:'Google Ads Management',
    desc:'We build and manage Google Search, Local Services Ads, and Display campaigns with a singular focus on ROI. Every dollar is tracked, every campaign is optimized, and every report is fully transparent.',
    bullets:['Campaign Strategy & Setup','Keyword Research','Local Services Ads (LSA)','Negative Keyword Management','CallRail Integration','Monthly Reporting'],
    tags:['Search Ads','LSA','Display','Remarketing','CallRail'] },
  { n:'03', icon:'📈', title:'Search Engine Optimization',
    desc:'SEO is a long game and we play it well. We handle everything from technical audits to local map pack strategy to content that ranks — building organic traffic that compounds month over month.',
    bullets:['Technical SEO Audit','Google Business Profile','Local Map Pack Strategy','On-Page Optimization','Content & Blog Strategy','Link Building'],
    tags:['Local SEO','GMB','Schema','Content','Link Building'] },
  { n:'04', icon:'🤖', title:'AI Automation',
    desc:'Stop doing manually what a system can handle. We design and build AI-powered workflows that automate lead follow-up, appointment scheduling, CRM updates, and customer communications.',
    bullets:['Lead Nurture Sequences','AI Chatbots','CRM Automation','Appointment Booking Flows','Review Request Systems','Make / Zapier Workflows'],
    tags:['AI Workflows','Make','Zapier','GoHighLevel','Chatbots'] },
];

const plans = [
  { name:'Starter', price:'$750', per:'/mo', desc:'For small businesses getting started online.',
    features:['5-Page Custom Website','Google Business Profile Setup','Basic On-Page SEO','Monthly Performance Report','Email Support'] },
  { name:'Growth', price:'$1,800', per:'/mo', desc:'For businesses serious about digital growth.', featured:true,
    features:['Custom Website (10+ Pages)','Google Ads Management','Full SEO Package','CallRail Call Tracking','Bi-Weekly Reporting','Direct Slack Access'] },
  { name:'Enterprise', price:'Custom', per:'', desc:'Full-stack digital for scaling businesses.',
    features:['Everything in Growth','AI Automation Buildout','E-Commerce Integration','Weekly Strategy Calls','Priority Support','Dedicated Account Manager'] },
];

export default function Services() {
  return (
    <>
      <section className="bg-dark py-20 text-center">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">What We Offer</p>
          <h1 className="font-display text-7xl lg:text-9xl text-white leading-none">OUR <span className="text-accent">SERVICES</span></h1>
          <p className="text-white/50 text-lg mt-4 max-w-md mx-auto">Everything your business needs to grow online — under one roof.</p>
        </div>
      </section>

      <section className="bg-bg">
        <div className="container-site py-20 space-y-6">
          {services.map(s => (
            <div key={s.n} className="bg-bg2 border border-border hover:border-border2 rounded-2xl p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 transition-colors">
              <div>
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-4">{s.icon}</div>
                <div className="font-display text-7xl text-border leading-none">{s.n}</div>
              </div>
              <div className="lg:col-span-2">
                <h2 className="font-cond text-3xl font-bold tracking-wide uppercase text-dark mb-3">{s.title}</h2>
                <p className="text-muted text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="grid grid-cols-2 gap-2 mb-5">
                  {s.bullets.map(b => (
                    <li key={b} className="flex items-center gap-2 text-sm text-muted">
                      <span className="text-accent font-bold">→</span>{b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map(t => <span key={t} className="text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-bg3 text-muted border border-border">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg2">
        <div className="container-site py-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">Pricing</p>
          <h2 className="font-display text-6xl lg:text-7xl text-dark leading-none mb-12">Simple, <span className="text-light-muted">Transparent</span> Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {plans.map(p => (
              <div key={p.name} className={`rounded-2xl p-8 transition-all hover:-translate-y-1 ${p.featured ? 'border-2 border-accent -translate-y-1.5' : 'border border-border'} bg-bg2`}>
                {p.featured && <span className="bg-accent text-white text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full inline-block mb-4">Most Popular</span>}
                <div className="font-cond text-2xl font-bold tracking-wide uppercase text-dark mb-2">{p.name}</div>
                <div className="font-display text-5xl text-dark leading-none mb-1">{p.price}<span className="text-lg font-body font-normal text-muted">{p.per}</span></div>
                <p className="text-sm text-muted mb-5 pb-5 border-b border-border">{p.desc}</p>
                <ul className="space-y-3 mb-6">
                  {p.features.map(f => <li key={f} className="flex items-center gap-2 text-sm text-muted"><span className="text-green font-bold">✓</span>{f}</li>)}
                </ul>
                <Link href="/contact" className={`block text-center font-semibold text-sm py-3.5 rounded-md transition-colors ${p.featured ? 'bg-accent hover:bg-accent2 text-white' : 'border border-border2 hover:border-accent hover:text-accent text-dark'}`}>
                  {p.name === 'Enterprise' ? "Let's Talk" : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
