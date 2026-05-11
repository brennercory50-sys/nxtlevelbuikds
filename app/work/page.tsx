import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Our Work' };

const projects = [
  { emoji:'🏊', bg:'#eef3ff', tags:['Web Design','SEO'], title:"Miller's Screen & Pool Enclosures", desc:"Premium dark-themed site with cinematic hero video, custom scroll animations, and full local SEO targeting Volusia County homeowners.", results:['↑ 190% organic leads','Page 1 for 22 keywords'] },
  { emoji:'🏠', bg:'#f0fdf6', tags:['Google Ads'], title:'Daytona Roofing Co.', desc:'Full Google Search + Local Services Ads. Aggressive negative keyword strategy cut cost per lead by 40% in the first month.', results:['$28 avg CPL','-40% cost per lead'] },
  { emoji:'🛒', bg:'#fff7ed', tags:['E-Commerce','AI Automation'], title:'Local Retail Brand', desc:'Custom Shopify build with AI-powered abandoned cart recovery, automated follow-up sequences, and Google Shopping integration.', results:['4.2× ROAS','62% conversion lift'] },
  { emoji:'⚖️', bg:'#f5f3ff', tags:['Web Design','SEO'], title:'Law Firm Rebrand', desc:'Complete redesign with schema markup, location pages for 3 counties, and content targeting high-intent legal keywords in the Daytona area.', results:['Page 1 for 14 keywords','+85% form submissions'] },
  { emoji:'🏋️', bg:'#1a1a20', tags:['AI Automation'], title:'Fitness Studio Chain', desc:'End-to-end automation: lead capture, class booking, no-show follow-ups, and membership re-engagement flows across 4 locations.', results:['12 hrs/week saved','+38% rebooking rate'] },
  { emoji:'🦷', bg:'#fff1f0', tags:['Google Ads','Web Design'], title:'Dental Practice Group', desc:'New patient acquisition across 3 locations with dedicated landing pages, CallRail call tracking, and monthly dashboard reporting.', results:['+82 new patients/mo','3.1× ROAS'] },
];

export default function Work() {
  return (
    <>
      <section className="bg-dark py-20 text-center">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">Portfolio</p>
          <h1 className="font-display text-7xl lg:text-9xl text-white leading-none">OUR <span className="text-accent">WORK</span></h1>
          <p className="text-white/50 text-lg mt-4 max-w-md mx-auto">Real projects, real results. Here's what we've built for clients across Florida.</p>
        </div>
      </section>
      <section className="bg-bg">
        <div className="container-site py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(p => (
              <div key={p.title} className="group bg-bg2 border border-border hover:border-border2 rounded-2xl overflow-hidden transition-all hover:-translate-y-1">
                <div className="h-52 flex items-center justify-center text-6xl" style={{ background: p.bg }}>{p.emoji}</div>
                <div className="p-7">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tags.map(t => <span key={t} className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-blue-50 text-accent">{t}</span>)}
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-2">{p.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.results.map(r => <span key={r} className="text-xs font-bold text-green bg-green/10 px-3 py-1.5 rounded-full">{r}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
