'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects as allProjects } from '@/app/work/projects';
import { CaseStudyCard, CaseStudyVideo } from '@/components/case-studies';
import { trackEvent } from '@/lib/gtag';

const filters = ['All', 'Websites', 'Automations', 'Landing Pages', 'Systems'];

const stats = [
  {
    icon: <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    number: '6+', label: 'Projects Delivered',
  },
  {
    icon: <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    number: '100%', label: 'Client Retention',
  },
  {
    icon: <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    number: '7 Days', label: 'Avg Website Launch',
  },
  {
    icon: <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    number: '200+', label: 'Combined Years of Client Experience',
  },
];

export default function Work() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? allProjects : allProjects.filter(p => p.cat === active);
  const featured = allProjects[0];

  return (
    <main>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <Image fill src="/images/work-bg.jpg" alt="Our work — NXT Level Builds portfolio" className="object-cover object-center" priority quality={75} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-dark/30" />
        <div className="container-site relative z-10">
          <p className="eyebrow" style={{ color: 'rgba(100,160,255,0.9)' }}>Our Work</p>
          <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-tight max-w-2xl" style={{ fontFamily: 'var(--font-bebas)' }}>
            Projects That<br />Drive <span className="text-accent">Real Results.</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-lg mt-5">
            From high-converting websites to advanced automations — a look at what we&apos;ve built for Florida businesses that wanted to grow.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-dark border-b border-white/10 py-10">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {stats.map((s, i) => (
              <div key={s.label} className={`flex flex-col md:flex-row md:items-center gap-3 py-6 md:py-4 px-4 ${i < stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''}`}>
                <span className="text-accent opacity-80 flex-shrink-0">{s.icon}</span>
                <div>
                  <div className="text-[24px] md:text-[26px] font-extrabold text-white leading-none">{s.number}</div>
                  <div className="text-[10px] md:text-[11px] text-white/40 mt-0.5 font-medium">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow text-center">Portfolio</p>
          <h2 className="section-title text-[clamp(26px,3.5vw,40px)] text-center mb-4">
            Work We&apos;re <span className="text-accent">Proud Of.</span>
          </h2>
          <p className="text-muted text-[14px] text-center mb-10 max-w-lg mx-auto">
            Every project starts with a real goal — more leads, more bookings, more revenue. Here&apos;s how we&apos;ve delivered.
          </p>

          {/* Filters */}
          <div className="flex gap-2 flex-wrap mb-10 justify-center">
            {filters.map(f => (
              <button key={f} onClick={() => setActive(f)}
                className={`text-[13px] font-semibold px-5 py-2 rounded-lg border transition-all ${active === f ? 'bg-accent text-white border-accent' : 'border-[#e5e7eb] text-muted hover:border-accent hover:text-accent bg-white'}`}>
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => (
              <CaseStudyCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study with Video */}
      {featured && (
        <section className="bg-[#f8f9fc] border-y border-[#e5e7eb] py-20">
          <div className="container-site">
            <p className="eyebrow text-center">Featured Case Study</p>
            <h2 className="section-title text-[clamp(26px,3.5vw,40px)] text-center mb-4">
              A Closer Look at <span className="text-accent">What We Do.</span>
            </h2>
            <p className="text-muted text-[14px] text-center mb-10 max-w-lg mx-auto">
              How we helped {featured.title} go from zero online presence to ranking page one in 60 days.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Video */}
              <CaseStudyVideo url={featured.videoUrl} title={`${featured.title} — Full Case Study Walkthrough`} />
              {/* Summary */}
              <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-accent">{featured.type}</span>
                    <span className="text-[10px] text-muted">·</span>
                    <span className="text-[10px] text-muted">{featured.location}</span>
                  </div>
                  <h3 className="text-[22px] font-bold text-dark mb-3">{featured.title}</h3>
                  <p className="text-[13px] text-muted leading-relaxed mb-6">{featured.desc}</p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {featured.metrics.map(m => (
                      <div key={m.label}>
                        <div className="text-[22px] font-extrabold text-dark leading-none">{m.number}</div>
                        <div className="text-[10px] text-muted mt-1 font-medium leading-tight uppercase tracking-wider">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link href={`/work/${featured.slug}`} onClick={() => trackEvent('case_study_view', { project_slug: featured.slug, industry: featured.industry })} className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[13px] px-6 py-3 rounded-lg transition-colors">
                    Read Full Case Study →
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 border border-[#e5e7eb] hover:border-accent hover:text-accent text-dark font-semibold text-[13px] px-6 py-3 rounded-lg transition-all">
                    Get Similar Results
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="bg-dark py-20">
        <div className="container-site">
          <p className="eyebrow text-center" style={{ color: 'rgba(100,160,255,0.8)' }}>Our Process</p>
          <h2 className="text-[clamp(26px,3.5vw,40px)] font-extrabold text-white text-center leading-tight mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
            How Every Project Gets Built.
          </h2>
          <p className="text-white/40 text-[14px] text-center max-w-lg mx-auto mb-14">
            No hand-offs, no surprises. You&apos;re involved every step of the way.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step:'01', title:'Discovery Call', desc:'We learn your goals, your market, and what success looks like. 30 minutes, no fluff.', icon: <svg key="d1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.2a16 16 0 0 0 6.29 6.29l.61-.61a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> },
              { step:'02', title:'Design & Approval', desc:'We design every page first. You approve the look before we write a line of code.', icon: <svg key="d2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> },
              { step:'03', title:'Build & Launch', desc:'We build it fast — typically 7 days — then walk you through every detail before going live.', icon: <svg key="d3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
              { step:'04', title:'Results & Support', desc:"We track performance after launch and stay available. You're not abandoned post-delivery.", icon: <svg key="d4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg> },
            ].map(item => (
              <div key={item.step} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-accent/40 transition-all">
                <div className="text-[11px] font-bold tracking-widest text-white/25 mb-4">{item.step}</div>
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center mb-4 text-accent">{item.icon}</div>
                <h4 className="font-bold text-[16px] text-white mb-2">{item.title}</h4>
                <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container-site max-w-3xl mx-auto text-center">
          <p className="eyebrow">Ready To Start?</p>
          <h3 className="section-title text-[clamp(22px,3vw,36px)] mb-4">
            Your Business Could Be<br /><span className="text-accent">Our Next Case Study.</span>
          </h3>
          <p className="text-muted text-[15px] mb-8 max-w-lg mx-auto">
            Book a free strategy call and we&apos;ll put together a custom plan based on exactly what your business needs to grow.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-8 py-4 rounded-lg transition-colors shadow-[0_4px_20px_rgba(26,110,255,0.35)]">
              Book a Free Strategy Call →
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-[#e5e7eb] hover:border-accent hover:text-accent text-dark font-semibold text-[14px] px-8 py-4 rounded-lg transition-all">
              Get a Custom Quote →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
