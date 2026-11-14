import Link from 'next/link';
import { getPost } from '@/app/blog/posts';

type Props = { title: string; slugs: string[] };

// Links a service page to the matching trade guides on the blog, so each guide
// is reachable from a relevant page and not just the blog index.
export default function TradeGuides({ title, slugs }: Props) {
  const guides = slugs.map(getPost).filter((p): p is NonNullable<typeof p> => Boolean(p));
  if (guides.length === 0) return null;
  return (
    <section className="bg-[#f8f9fc] py-20">
      <div className="container-site">
        <p className="eyebrow">Guides</p>
        <h2 className="section-title text-[clamp(22px,3vw,34px)] mb-10">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-white rounded-2xl border border-[#e5e7eb] hover:border-accent/30 p-6 transition-all">
              <h3 className="font-bold text-[15px] text-dark leading-snug mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
              <p className="text-[13px] text-muted leading-relaxed line-clamp-3">{p.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
