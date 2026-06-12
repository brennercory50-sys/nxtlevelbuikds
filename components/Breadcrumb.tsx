import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface Props {
  crumbs: BreadcrumbItem[];
}

export default function Breadcrumb({ crumbs }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `https://nxtlevelbuilds.com${c.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] text-white/40 mb-6 flex-wrap">
        {crumbs.map((c, i) => (
          <span key={c.href} className="flex items-center gap-1.5">
            {i < crumbs.length - 1 ? (
              <>
                <Link href={c.href} className="hover:text-white/70 transition-colors">{c.name}</Link>
                <span className="text-white/20">›</span>
              </>
            ) : (
              <span className="text-white/60">{c.name}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
