import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, getProject } from '@/app/work/projects';
import Breadcrumb from '@/components/Breadcrumb';

const serviceCTAMap: Record<string, { label: string; href: string }> = {
  'Website Design': { label: 'Need a High-Converting Website?', href: '/services/web-design' },
  'SEO': { label: 'Want More Organic Leads?', href: '/services/seo' },
  'Google Ads': { label: 'Ready to Run Profitable Ads?', href: '/services/google-ads' },
  'Landing Page + Ads': { label: 'Ready to Run Profitable Ads?', href: '/services/google-ads' },
  'AI Automation': { label: 'Want to Automate Your Business?', href: '/services/ai-automation' },
  'Systems & CRM': { label: 'Want to Automate Your Business?', href: '/services/ai-automation' },
};

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} Case Study — ${project.type}`,
    description: `How NXT Level Builds helped ${project.title} achieve ${project.result}. A case study in ${project.type.toLowerCase()} for a ${project.industry.toLowerCase()} business in ${project.location}.`,
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects.filter(p => p.slug !== slug).slice(0, 3);
  const serviceCTA = serviceCTAMap[project.type];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${project.title} — ${project.type} Case Study`,
    description: project.desc,
    author: { '@type': 'Organization', name: 'NXT Level Builds', url: 'https://nxtlevelbuilds.com' },
    publisher: {
      '@type': 'Organization',
      name: 'NXT Level Builds',
      logo: { '@type': 'ImageObject', url: 'https://nxtlevelbuilds.com/images/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://nxtlevelbuilds.com/work/${project.slug}` },
    image: 'https://nxtlevelbuilds.com/images/og-image.jpg',
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {/* Hero */}
      <section className={`relative py-28 overflow-hidden bg-gradient-to-br ${project.bg}`}>
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none">
            <rect x="500" y="0" width="80" height="400" fill="white" rx="2"/>
            <rect x="600" y="60" width="60" height="340" fill="white" rx="2"/>
            <rect x="680" y="20" width="100" height="380" fill="white" rx="2"/>
            <rect x="380" y="100" width="80" height="300" fill="white" rx="2"/>
          </svg>
        </div>
        <div className="container-site relative z-10">
          <Breadcrumb crumbs={[{ name: 'Home', href: '/' }, { name: 'Our Work', href: '/work' }, { name: project.title, href: `/work/${project.slug}` }]} />
          <Link href="/work" className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-[12px] font-semibold mb-6 transition-colors">
            ← All Projects
          </Link>
          <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-white/15 text-white px-3 py-1 rounded-full mb-4">{project.type}</span>
          <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-tight max-w-2xl mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            {project.title}
          </h1>
          <div className="flex items-center gap-2 mb-10">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span className="text-white/50 text-[13px]">{project.location} · {project.industry}</span>
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-lg">
            {project.metrics.map(m => (
              <div key={m.label} className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4">
                <div className="text-[26px] font-extrabold text-white leading-none">{m.number}</div>
                <div className="text-[10px] font-medium text-white/40 mt-1 leading-tight">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Body */}
      <section className="bg-white py-20">
        <div className="container-site max-w-3xl">
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                </div>
                <h2 className="text-[13px] font-bold tracking-widest uppercase text-muted">The Challenge</h2>
              </div>
              <p className="text-[15px] text-[#374151] leading-relaxed">{project.challenge}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1a6eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </div>
                <h2 className="text-[13px] font-bold tracking-widest uppercase text-muted">What We Built</h2>
              </div>
              <p className="text-[15px] text-[#374151] leading-relaxed">{project.solution}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00c47a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h2 className="text-[13px] font-bold tracking-widest uppercase text-muted">The Result</h2>
              </div>
              <p className="text-[15px] text-[#374151] leading-relaxed">{project.outcome}</p>
            </div>
          </div>

          {/* Process Timeline */}
          {project.process && (
            <div className="mt-12 pt-10 border-t border-[#e5e7eb]">
              <h2 className="text-[13px] font-bold tracking-widest uppercase text-muted mb-6">How We Did It</h2>
              <ol className="space-y-4">
                {project.process.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center text-[11px] font-extrabold text-accent" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <p className="text-[14px] text-[#374151] leading-relaxed pt-0.5">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Before → After */}
          {project.beforeState && (
            <div className="mt-10">
              <h2 className="text-[13px] font-bold tracking-widest uppercase text-muted mb-4">Before vs. After</h2>
              <div className="rounded-2xl border border-[#e5e7eb] overflow-hidden">
                <div className="grid grid-cols-3 bg-[#f8f9fc] px-5 py-2.5 border-b border-[#e5e7eb]">
                  <p className="text-[11px] font-bold tracking-widest uppercase text-muted">Metric</p>
                  <p className="text-[11px] font-bold tracking-widest uppercase text-red-400">Before</p>
                  <p className="text-[11px] font-bold tracking-widest uppercase text-green-500">After</p>
                </div>
                {project.beforeState.map((row, i) => {
                  const afterMetric = project.metrics[i];
                  return (
                    <div key={row.label} className={`grid grid-cols-3 px-5 py-3.5 ${i < project.beforeState!.length - 1 ? 'border-b border-[#e5e7eb]' : ''}`}>
                      <p className="text-[13px] font-semibold text-dark">{row.label}</p>
                      <p className="text-[13px] text-muted">{row.value}</p>
                      <p className="text-[13px] font-semibold text-green-600">{afterMetric?.number ?? '—'}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Testimonial */}
          {project.testimonial && (
            <div className="mt-10 bg-[#f8f9fc] border border-[#e5e7eb] rounded-2xl p-8">
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="mb-4 text-accent/30">
                <path d="M0 24V14.4C0 10.4 1.06667 7.06667 3.2 4.4C5.33333 1.6 8.4 0 12.4 0V4C10.5333 4 9.06667 4.66667 8 6C6.93333 7.2 6.4 8.93333 6.4 11.2V12H12.4V24H0ZM19.6 24V14.4C19.6 10.4 20.6667 7.06667 22.8 4.4C24.9333 1.6 28 0 32 0V4C30.1333 4 28.6667 4.66667 27.6 6C26.5333 7.2 26 8.93333 26 11.2V12H32V24H19.6Z" fill="currentColor"/>
              </svg>
              <p className="text-[16px] text-dark leading-relaxed italic mb-5">&ldquo;{project.testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-[13px] font-bold text-accent">
                  {project.testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[13px] font-bold text-dark">{project.testimonial.name}</p>
                  <p className="text-[12px] text-muted">{project.testimonial.role}</p>
                </div>
              </div>
            </div>
          )}

          {/* Meta info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-10 border-t border-[#e5e7eb]">
            <div>
              <p className="text-[11px] font-bold tracking-widest uppercase text-muted mb-2">Timeline</p>
              <p className="text-[14px] font-semibold text-dark">{project.timeline}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-widest uppercase text-muted mb-2">Industry</p>
              <p className="text-[14px] font-semibold text-dark">{project.industry}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-widest uppercase text-muted mb-2">Tools Used</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map(t => (
                  <span key={t} className="text-[11px] font-semibold bg-[#f0f4ff] text-accent px-2 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Service-specific CTA */}
          {serviceCTA && (
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[#f0f6ff] border border-accent/20 rounded-2xl p-5">
              <div className="flex-1">
                <p className="text-[12px] font-bold tracking-widest uppercase text-accent mb-1">Related Service</p>
                <p className="text-[15px] font-semibold text-dark">{serviceCTA.label}</p>
              </div>
              <Link href={serviceCTA.href} className="flex-shrink-0 inline-flex items-center gap-1.5 bg-accent hover:bg-accent2 text-white font-bold text-[13px] px-5 py-2.5 rounded-lg transition-colors">
                View Service →
              </Link>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 bg-dark rounded-2xl p-8 text-center">
            <h3 className="text-[22px] font-extrabold text-white mb-3">Want Similar Results for Your Business?</h3>
            <p className="text-white/50 text-[14px] mb-6 max-w-md mx-auto">
              Book a free strategy call. We&apos;ll review your situation and show you exactly what&apos;s possible.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[13px] px-6 py-3 rounded-lg transition-colors">
                Book a Free Call →
              </Link>
              <Link href="/work" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold text-[13px] px-6 py-3 rounded-lg transition-all">
                See All Projects →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="bg-[#f8f9fc] border-t border-[#e5e7eb] py-16">
        <div className="container-site">
          <p className="eyebrow text-center">More Work</p>
          <h2 className="section-title text-[clamp(22px,3vw,32px)] text-center mb-10">
            More Projects <span className="text-accent">Like This</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map(p => (
              <Link key={p.slug} href={`/work/${p.slug}`}
                className="group rounded-2xl overflow-hidden border border-[#e5e7eb] hover:border-accent/40 hover:shadow-xl hover:-translate-y-1 transition-all bg-white">
                <div className={`h-36 bg-gradient-to-br ${p.bg} relative flex items-end p-4`}>
                  <span className="text-[10px] font-bold text-white bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">{p.result}</span>
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-accent mb-1">{p.type}</p>
                  <h4 className="font-bold text-[15px] text-dark mb-1">{p.title}</h4>
                  <p className="text-[12px] text-muted">{p.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
