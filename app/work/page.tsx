'use client';
import { useState } from 'react';
import Link from 'next/link';

const projects = [
  { cat:'Websites', title:"Miller's Screen & Pool", type:'Website Design', result:'↑190% organic leads', bg:'from-slate-800 to-slate-900' },
  { cat:'Websites', title:'Elevate Developments', type:'Website Design', result:'3× more inquiries', bg:'from-zinc-800 to-zinc-900' },
  { cat:'Websites', title:'Summit Exteriors', type:'Website Design', result:'+85% form submissions', bg:'from-stone-800 to-stone-900' },
  { cat:'Automations', title:'Ironclad Build', type:'AI Automation', result:'12 hrs/week saved', bg:'from-gray-800 to-gray-900' },
  { cat:'Landing Pages', title:'Premier Solutions', type:'Landing Page', result:'4.2× ROAS', bg:'from-neutral-800 to-neutral-900' },
  { cat:'Systems', title:'Peak Performance', type:'Systems & CRM', result:'+82 new clients/mo', bg:'from-slate-700 to-slate-900' },
];

const filters = ['All','Websites','Automations','Landing Pages','Systems'];

export default function Work() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.cat === active);
  return (
    <main>
      <section className="photo-work relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-dark/30" />
        <div className="container-site relative z-10">
          <p className="eyebrow" style={{color:'rgba(100,160,255,0.9)'}}>Our Work</p>
          <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-tight max-w-2xl" style={{fontFamily:"'Bebas Neue', sans-serif"}}>
            Projects That<br />Drive <span className="text-accent">Real Results.</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-lg mt-5">
            From high-converting websites to advanced automations, a look at some of the systems we&apos;ve built for our clients.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-site">
          <div className="flex gap-2 flex-wrap mb-10">
            {filters.map(f => (
              <button key={f} onClick={() => setActive(f)}
                className={`text-[13px] font-semibold px-5 py-2 rounded-lg border transition-all ${active === f ? 'bg-accent text-white border-accent' : 'border-[#e5e7eb] text-muted hover:border-accent hover:text-accent bg-white'}`}>
                {f}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(p => (
              <div key={p.title} className="group rounded-2xl overflow-hidden border border-[#e5e7eb] hover:border-accent/30 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer bg-white">
                <div className={`h-48 bg-gradient-to-br ${p.bg} relative flex items-end p-4`}>
                  <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none">
                      <rect x="220" y="0" width="50" height="200" fill="white" rx="1"/>
                      <rect x="280" y="40" width="40" height="160" fill="white" rx="1"/>
                      <rect x="330" y="20" width="60" height="180" fill="white" rx="1"/>
                      <rect x="160" y="60" width="50" height="140" fill="white" rx="1"/>
                      <rect x="100" y="80" width="50" height="120" fill="white" rx="1"/>
                    </svg>
                  </div>
                  <span className="relative z-10 text-[11px] font-bold text-white/80 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full">{p.result}</span>
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-bold tracking-widest uppercase text-accent mb-1">{p.type}</p>
                  <h4 className="font-bold text-[16px] text-dark mb-2">{p.title}</h4>
                  <span className="text-[13px] font-semibold text-accent">View Project →</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex items-center gap-2 border border-[#e5e7eb] hover:border-accent hover:text-accent text-dark font-semibold text-[14px] px-8 py-3.5 rounded-lg transition-all">
              Start Your Project →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
