import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = { title: 'AI Automation' };

const deliverables = [
  { icon: '🤖', title: 'AI Chatbots', desc: 'Conversational AI that qualifies leads, answers questions, and books appointments — around the clock without your team.' },
  { icon: '📧', title: 'Lead Nurture Sequences', desc: 'Automated multi-channel follow-up via email and SMS that turns cold inquiries into booked jobs.' },
  { icon: '📅', title: 'Appointment Booking Flows', desc: 'Fully automated scheduling that syncs with your calendar and sends reminders — zero manual booking.' },
  { icon: '⭐', title: 'Review Request Systems', desc: 'Automated post-job review requests that build your Google reputation on autopilot.' },
  { icon: '🔄', title: 'CRM Automation', desc: 'Leads flow in, contacts get tagged, pipelines update, and tasks get created — no manual data entry.' },
  { icon: '⚡', title: 'Make / Zapier Workflows', desc: 'Custom multi-step automations that connect every tool in your stack and eliminate repetitive work.' },
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
        <Image fill src="/images/services-bg.jpg" alt="" className="object-cover object-center" priority quality={95} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-dark/30" />
        <div className="container-site relative z-10">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-[12px] font-semibold mb-6 transition-colors">
            ← All Services
          </Link>
          <p className="eyebrow" style={{ color: 'rgba(100,160,255,0.9)' }}>AI Automation</p>
          <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-tight max-w-2xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
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
            {[['12 hrs', 'Avg Weekly Time Saved'], ['+82', 'New Clients/mo Record'], ['24/7', 'Systems That Never Sleep']].map(([n, l]) => (
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
          <p className="eyebrow">What We Build</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] mb-12">
            Systems That Work<br /><span className="text-accent">While You Sleep.</span>
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
            Let automation do the heavy lifting.
          </h2>
          <p className="text-white/70 text-[15px] mb-8 max-w-md mx-auto">
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
