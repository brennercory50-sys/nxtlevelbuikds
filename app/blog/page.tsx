import type { Metadata } from 'next';
import Link from 'next/link';
import { canonical, ogImage } from '@/lib/seo';
import { posts } from '@/app/blog/posts';

export const metadata: Metadata = {
  title: 'Blog | Web Design, SEO & Digital Marketing Tips | Daytona Beach',
  description: 'No-fluff insights on web design, Google Ads, local SEO, and AI automation — written by the team at NXT Level Builds in Daytona Beach, FL.',
  alternates: { canonical: canonical('/blog') },
  openGraph: {
    title: 'Blog | Web Design, SEO & Digital Marketing Tips | Daytona Beach',
    description: 'No-fluff insights on web design, Google Ads, local SEO, and AI automation — written by the team at NXT Level Builds in Daytona Beach, FL.',
    images: [ogImage()],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Web Design, SEO & Digital Marketing Tips | Daytona Beach',
    description: 'No-fluff insights on web design, Google Ads, local SEO, and AI automation from NXT Level Builds.',
  },
};

const iconMap: Record<string, React.ReactNode> = {
  'Google Ads': <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  'Local SEO': <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  'AI Automation': <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>,
  'Web Design': <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  'SEO': <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
  'Business': <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
};

const featured = posts.find(p => p.featured) ?? posts[0];
const rest = posts.filter(p => !p.featured);

export default function Blog() {
  return (
    <main>
      <section className="bg-dark py-20 text-center">
        <div className="container-site">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-green mb-3">Resources</p>
          <h1 className="font-extrabold text-[clamp(52px,10vw,96px)] text-white leading-none" style={{ fontFamily: 'var(--font-bebas)' }}>THE <span className="text-accent">BLOG</span></h1>
          <p className="text-white/50 text-[16px] mt-4 max-w-md mx-auto">No-fluff insights on digital marketing, web design, and AI — written by people who do the work.</p>
        </div>
      </section>

      <section className="bg-[#f8f9fc]">
        <div className="container-site py-20">
          {/* Featured */}
          <Link href={`/blog/${featured.slug}`}
            className="grid grid-cols-1 lg:grid-cols-2 bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden mb-8 hover:border-accent/30 hover:shadow-lg transition-all block">
            <div className="flex items-center justify-center min-h-64" style={{ background: featured.bg, color: featured.iconColor }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </div>
            <div className="p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold tracking-widest uppercase bg-accent text-white px-2.5 py-0.5 rounded-full">Featured</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-accent">{featured.cat}</span>
              </div>
              <h2 className="text-[22px] font-bold text-dark leading-snug mb-3">{featured.title}</h2>
              <p className="text-[13px] text-muted leading-relaxed mb-5">{featured.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-[11px] text-muted">
                  <span>{featured.date}</span><span>·</span><span>{featured.readTime}</span>
                </div>
                <span className="text-[13px] font-semibold text-accent">Read Article →</span>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`}
                className="bg-white border border-[#e5e7eb] hover:border-accent/30 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all block">
                <div className="h-36 flex items-center justify-center" style={{ background: p.bg, color: p.iconColor }}>
                  {iconMap[p.cat] ?? iconMap['Business']}
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-accent mb-2">{p.cat}</p>
                  <h3 className="text-[14px] font-semibold text-dark leading-snug mb-2">{p.title}</h3>
                  <p className="text-[12px] text-muted leading-relaxed">{p.desc}</p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-[#f0f0f0] text-[11px] text-muted">
                    <span>{p.date}</span>
                    <span className="text-accent font-semibold">{p.readTime} →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
