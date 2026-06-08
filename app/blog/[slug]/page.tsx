import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts, getPost, getRelatedPosts } from '@/app/blog/posts';

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDesc,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <main>
      {/* Hero */}
      <section className="bg-dark py-20">
        <div className="container-site max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-[12px] font-semibold mb-6 transition-colors">
            ← Back to Blog
          </Link>
          <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-accent/20 text-accent px-3 py-1 rounded-full mb-4">{post.cat}</span>
          <h1 className="text-[clamp(24px,4vw,44px)] font-extrabold text-white leading-tight mb-5" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-[12px] text-white/40 font-medium">
            <span>Cory Brenner</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="bg-white py-16">
        <div className="container-site max-w-3xl">
          <div className="prose-content">
            {post.body.map((section, i) => {
              if (section.type === 'h2') {
                return <h2 key={i} className="text-[22px] font-extrabold text-dark mt-10 mb-4 leading-tight">{section.text}</h2>;
              }
              if (section.type === 'h3') {
                return <h3 key={i} className="text-[17px] font-bold text-dark mt-7 mb-3">{section.text}</h3>;
              }
              if (section.type === 'p') {
                return <p key={i} className="text-[15px] text-[#374151] leading-relaxed mb-5">{section.text}</p>;
              }
              if (section.type === 'ul') {
                return (
                  <ul key={i} className="space-y-2 mb-5 ml-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-[14px] text-[#374151] leading-relaxed">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                          <circle cx="8" cy="8" r="8" fill="#1a6eff" fillOpacity="0.15"/>
                          <path d="M5 8l2 2 4-4" stroke="#1a6eff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (section.type === 'callout') {
                return (
                  <div key={i} className="bg-[#f0f6ff] border border-accent/20 rounded-2xl p-6 mb-6">
                    <p className="text-[11px] font-bold tracking-widest uppercase text-accent mb-2">{section.title}</p>
                    <p className="text-[14px] text-[#374151] leading-relaxed">{section.text}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* CTA */}
          <div className="mt-14 bg-dark rounded-2xl p-8 text-center">
            <p className="text-[11px] font-bold tracking-widest uppercase text-accent mb-3">NXT Level Builds</p>
            <h3 className="text-[22px] font-extrabold text-white mb-3">Ready to Put This Into Action?</h3>
            <p className="text-white/50 text-[14px] mb-6 max-w-md mx-auto">
              We build websites, run Google Ads, and set up automations for businesses in Daytona Beach and across Florida.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[13px] px-6 py-3 rounded-lg transition-colors">
                Book a Free Strategy Call →
              </Link>
              <Link href="/pricing" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold text-[13px] px-6 py-3 rounded-lg transition-all">
                View Pricing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="bg-[#f8f9fc] border-t border-[#e5e7eb] py-16">
          <div className="container-site">
            <p className="eyebrow text-center">Keep Reading</p>
            <h2 className="section-title text-[clamp(22px,3vw,32px)] text-center mb-10">
              More From <span className="text-accent">The Blog</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`}
                  className="bg-white border border-[#e5e7eb] hover:border-accent/30 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all block">
                  <div className="h-28 flex items-center justify-center" style={{ background: p.bg, color: p.iconColor }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] font-bold tracking-widest uppercase text-accent mb-1.5">{p.cat}</p>
                    <h4 className="text-[14px] font-bold text-dark leading-snug mb-2">{p.title}</h4>
                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#f0f0f0] text-[11px] text-muted">
                      <span>{p.date}</span>
                      <span className="text-accent font-semibold">{p.readTime} →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
