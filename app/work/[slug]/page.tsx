import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { canonical, ogImage } from '@/lib/seo';
import { projects, getProject } from '@/app/work/projects';
import { CaseStudyVideo, MetricsDisplay, ProcessTimeline, TestimonialCard } from '@/components/case-studies';
import { ComparisonGallery } from '@/components/before-after';
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
  const title = `${project.title} Case Study — ${project.type}`;
  const description = `How NXT Level Builds helped ${project.title} achieve ${project.result}. A case study in ${project.type.toLowerCase()} for a ${project.industry.toLowerCase()} business in ${project.location}.`;
  return {
    title,
    description,
    alternates: { canonical: canonical(`/work/${slug}`) },
    openGraph: {
      title,
      description,
      images: [ogImage()],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
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
    author: { '@type': 'Organization', name: 'NXT Level Builds', url: 'https://www.nxtlevelbuilds.com' },
    publisher: { '@type': 'Organization', name: 'NXT Level Builds', logo: { '@type': 'ImageObject', url: 'https://www.nxtlevelbuilds.com/images/logo.png' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.nxtlevelbuilds.com/work/${project.slug}` },
    image: 'https://www.nxtlevelbuilds.com/opengraph-image',
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* ─── HERO ─── */}
      <section className={`relative py-28 overflow-hidden bg-gradient-to-br ${project.bg}`}>
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none">
            <rect x="500" y="0" width="80" height="400" fill="white" rx="2" />
            <rect x="600" y="60" width="60" height="340" fill="white" rx="2" />
            <rect x="680" y="20" width="100" height="380" fill="white" rx="2" />
            <rect x="380" y="100" width="80" height="300" fill="white" rx="2" />
          </svg>
        </div>
        <div className="container-site relative z-10">
          <Breadcrumb crumbs={[{ name: 'Home', href: '/' }, { name: 'Our Work', href: '/work' }, { name: project.title, href: `/work/${project.slug}` }]} />
          <Link href="/work" className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-[12px] font-semibold mb-6 transition-colors">
            ← All Projects
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-white/15 text-white px-3 py-1 rounded-full border border-white/20">{project.type}</span>
            {project.roi && (
              <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-green-500/15 text-green-300 px-3 py-1 rounded-full border border-green-500/20">{project.roi}</span>
            )}
          </div>
          <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-tight max-w-2xl mb-3" style={{ fontFamily: 'var(--font-bebas)' }}>
            {project.title}
          </h1>
          <div className="flex items-center gap-2 mb-10">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span className="text-white/50 text-[13px]">{project.location} · {project.industry}</span>
          </div>
          <MetricsDisplay metrics={project.metrics} />
        </div>
      </section>

      {/* ─── CASE STUDY BODY ─── */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-site max-w-3xl">

          {/* Video Walkthrough */}
          {project.videoUrl && (
            <div className="mb-14">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
                <h2 className="text-[13px] font-bold tracking-widest uppercase text-muted">Video Walkthrough</h2>
              </div>
              <CaseStudyVideo url={project.videoUrl} title={`${project.title} — Full Case Study`} />
            </div>
          )}

          {/* Client Overview */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h2 className="text-[13px] font-bold tracking-widest uppercase text-muted">Client Overview</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Industry', value: project.industry },
                { label: 'Location', value: project.location },
                { label: 'Timeline', value: project.timeline },
                { label: 'Service', value: project.type },
              ].map(item => (
                <div key={item.label} className="bg-[#f8f9fc] rounded-xl px-4 py-3">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-muted mb-1">{item.label}</p>
                  <p className="text-[14px] font-semibold text-dark">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-[10px] font-bold tracking-widest uppercase text-muted mb-2">Tools & Technologies</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map(t => (
                  <span key={t} className="text-[12px] font-semibold bg-[#f0f4ff] text-accent px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Challenge */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              </div>
              <h2 className="text-[13px] font-bold tracking-widest uppercase text-muted">The Challenge</h2>
            </div>
            <p className="text-[15px] text-[#374151] leading-relaxed">{project.challenge}</p>
          </div>

          {/* Before → After Showcase */}
          {project.comparisons && project.comparisons.length > 0 && (
            <div className="mb-14">
              <ComparisonGallery comparisons={project.comparisons} />
            </div>
          )}

          {/* Solution */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1a6eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h2 className="text-[13px] font-bold tracking-widest uppercase text-muted">What We Built</h2>
            </div>
            <p className="text-[15px] text-[#374151] leading-relaxed">{project.solution}</p>
          </div>

          {/* Process Timeline */}
          {(project.processSteps || project.process) && (
            <div className="mb-14">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-7 h-7 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <h2 className="text-[13px] font-bold tracking-widest uppercase text-muted">The Process</h2>
              </div>
              <ProcessTimeline steps={project.processSteps} legacySteps={project.process} />
            </div>
          )}

          {/* Results + Outcome */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00c47a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h2 className="text-[13px] font-bold tracking-widest uppercase text-muted">The Results</h2>
            </div>
            <p className="text-[15px] text-[#374151] leading-relaxed mb-4">{project.outcome}</p>
            {project.roi && (
              <div className="bg-[#f0faf4] border border-green-200 rounded-2xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00c47a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-widest uppercase text-green-600 mb-1">ROI Summary</p>
                  <p className="text-[14px] text-dark font-medium">{project.roi}</p>
                </div>
              </div>
            )}
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <div className="mb-14">
              <TestimonialCard testimonial={project.testimonial} starRating={project.starRating} />
            </div>
          )}

          {/* Related Service CTA */}
          {serviceCTA && (
            <div className="mb-14 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[#f0f6ff] border border-accent/20 rounded-2xl p-5">
              <div className="flex-1">
                <p className="text-[12px] font-bold tracking-widest uppercase text-accent mb-1">Related Service</p>
                <p className="text-[15px] font-semibold text-dark">{serviceCTA.label}</p>
              </div>
              <Link href={serviceCTA.href} className="flex-shrink-0 inline-flex items-center gap-1.5 bg-accent hover:bg-accent2 text-white font-bold text-[13px] px-5 py-2.5 rounded-lg transition-colors">
                View Service →
              </Link>
            </div>
          )}

          {/* Final CTA */}
          <div className="bg-dark rounded-2xl p-8 md:p-10 text-center">
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

      {/* ─── More Projects ─── */}
      {others.length > 0 && (
        <section className="bg-[#f8f9fc] border-t border-[#e5e7eb] py-16">
          <div className="container-site">
            <p className="eyebrow text-center">More Work</p>
            <h2 className="section-title text-[clamp(22px,3vw,32px)] text-center mb-10">
              More Projects <span className="text-accent">Like This</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {others.map(p => {
                const hasVideo = !!p.videoUrl;
                return (
                  <Link key={p.slug} href={`/work/${p.slug}`}
                    className="group rounded-2xl overflow-hidden border border-[#e5e7eb] hover:border-accent/40 hover:shadow-xl hover:-translate-y-1 transition-all bg-white">
                    <div className={`h-36 bg-gradient-to-br ${p.bg} relative flex items-end p-4`}>
                      <div className="absolute inset-0 opacity-10">
                        <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none">
                          <rect x="220" y="0" width="50" height="200" fill="white" rx="1" />
                          <rect x="280" y="40" width="40" height="160" fill="white" rx="1" />
                          <rect x="330" y="20" width="60" height="180" fill="white" rx="1" />
                          <rect x="160" y="60" width="50" height="140" fill="white" rx="1" />
                        </svg>
                      </div>
                      <span className="relative z-10 text-[10px] font-bold text-white bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">{p.result}</span>
                      {hasVideo && (
                        <span className="relative z-10 ml-2 text-[10px] text-white bg-white/15 backdrop-blur-sm px-2 py-1 rounded-full border border-white/20 flex items-center gap-1">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                          Video
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-accent mb-1">{p.type}</p>
                      <h4 className="font-bold text-[15px] text-dark mb-1">{p.title}</h4>
                      <p className="text-[12px] text-muted">{p.location}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
