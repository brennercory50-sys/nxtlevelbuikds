import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { canonical, ogImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'AI Automation Services Florida | Business Workflow Automation',
  description: 'AI-powered automation systems for Florida businesses. Lead nurturing, appointment booking, CRM automation, and chatbots built by NXT Level Builds.',
  alternates: { canonical: canonical('/services/ai-automation') },
  openGraph: {
    title: 'AI Automation Services Florida | Business Workflow Automation',
    description: 'AI-powered automation systems for Florida businesses. Lead nurturing, appointment booking, CRM automation, and chatbots built by NXT Level Builds.',
    images: [ogImage()],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Services Florida | Business Workflow Automation',
    description: 'AI-powered automation systems for Florida businesses. Lead nurturing, appointment booking, CRM automation, and chatbots.',
  },
};

const deliverables = [
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>, title: 'AI Chatbots', desc: 'Conversational AI that qualifies leads, answers questions, and books appointments — around the clock without your team.' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, title: 'Lead Nurture Sequences', desc: 'Automated multi-channel follow-up via email and SMS that turns cold inquiries into booked jobs.' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, title: 'Appointment Booking Flows', desc: 'Fully automated scheduling that syncs with your calendar and sends reminders — zero manual booking.' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, title: 'Review Request Systems', desc: 'Automated post-job review requests that build your Google reputation on autopilot.' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>, title: 'CRM Automation', desc: 'Leads flow in, contacts get tagged, pipelines update, and tasks get created — no manual data entry.' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, title: 'Make / Zapier Workflows', desc: 'Custom multi-step automations that connect every tool in your stack and eliminate repetitive work.' },
];

const process = [
  { n: '01', title: 'Process Audit', desc: 'We map your current workflow end-to-end and identify exactly where automation creates the biggest ROI.' },
  { n: '02', title: 'System Design', desc: 'We design the full automation logic — triggers, conditions, AI prompts, and fallbacks — before building anything.' },
  { n: '03', title: 'Build & Test', desc: 'We build in Make, Zapier, or GoHighLevel and test every edge case and failure mode before going live.' },
  { n: '04', title: 'Train & Hand Off', desc: 'Full documentation and team training so you understand and own the systems we build for you.' },
];

const results = [
  { client: 'Ironclad Build', result: '12 hrs', metric: 'Saved Per Week', desc: 'Automated lead follow-up, appointment reminders, and review requests — 12 hours of manual work eliminated.' },
  { client: 'Peak Performance', result: '+82', metric: 'New Clients / Month', desc: 'AI chatbot + CRM automation captured and converted leads 24/7, adding 82 net new clients monthly.' },
  { client: 'Premier Solutions', result: '−40%', metric: 'Lead Response Time', desc: 'Automated intake reduced average response time from 4 hours to under 15 minutes.' },
];

export default function AIAutomation() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <Image fill src="/images/services-bg.jpg" alt="AI automation services — NXT Level Builds Daytona Beach" className="object-cover object-center" priority quality={75} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-dark/30" />
        <div className="container-site relative z-10">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-[12px] font-semibold mb-6 transition-colors">
            ← All Services
          </Link>
          <p className="eyebrow" style={{ color: 'rgba(100,160,255,0.9)' }}>AI Automation</p>
          <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-tight max-w-2xl" style={{ fontFamily: 'var(--font-bebas)' }}>
            Automate The Grind.<br /><span className="text-accent">Scale The Business.</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-lg mt-5 mb-8">
            Stop doing manually what a system can handle. We design and build AI-powered workflows that follow up on leads, book appointments, update your CRM, and request reviews — while you focus on the actual work.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(26,110,255,0.4)]">
              Automate My Business ↗
            </Link>
            <Link href="/work" className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg border border-white/30 transition-all">
              See Our Work ↗
            </Link>
          </div>
          <div className="flex gap-4 flex-wrap mt-10">
            {[['12 hrs', 'Avg Weekly Time Saved'], ['+82', 'New Clients/Month'], ['24/7', 'Systems That Never Sleep']].map(([n, l]) => (
              <div key={l} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3">
                <div className="text-[22px] font-extrabold text-white leading-none">{n}</div>
                <div className="text-[10px] font-semibold tracking-widest uppercase text-white/70 mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow">What We Build</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-12">
            Systems That Work<br /><span className="text-accent">While You Sleep.</span>
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
            Audit. Design.<br /><span className="text-accent">Build. Hand Off.</span>
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
            Automation That<br /><span className="text-accent">Actually Delivers.</span>
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
            Let automation do the heavy lifting.
          </h2>
          <p className="text-white text-[15px] mb-8 max-w-md mx-auto">
            Tell us what you&apos;re doing manually. We&apos;ll show you how to automate it.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-accent font-bold text-[14px] px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors">
            Book a Free Automation Audit →
          </Link>
        </div>
      </section>
    </main>
  );
}
