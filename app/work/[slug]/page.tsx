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
