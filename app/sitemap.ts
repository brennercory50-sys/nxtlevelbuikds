import type { MetadataRoute } from 'next';
import { projects } from '@/app/work/projects';
import { posts } from '@/app/blog/posts';

const base = 'https://www.nxtlevelbuilds.com';

const staticRoutes = [
  { url: base, priority: 1.0, changeFrequency: 'weekly' as const },
  { url: `${base}/services`, priority: 0.9, changeFrequency: 'monthly' as const },
  { url: `${base}/services/web-design`, priority: 0.9, changeFrequency: 'monthly' as const },
  { url: `${base}/services/web-design-volusia-county`, priority: 0.9, changeFrequency: 'monthly' as const },
  { url: `${base}/services/google-ads`, priority: 0.9, changeFrequency: 'monthly' as const },
  { url: `${base}/services/seo`, priority: 0.9, changeFrequency: 'monthly' as const },
  { url: `${base}/services/ai-automation`, priority: 0.9, changeFrequency: 'monthly' as const },
  { url: `${base}/services/web-design-deland`, priority: 0.8, changeFrequency: 'monthly' as const },
  { url: `${base}/services/web-design-new-smyrna-beach`, priority: 0.8, changeFrequency: 'monthly' as const },
  { url: `${base}/services/web-design-ormond-beach`, priority: 0.8, changeFrequency: 'monthly' as const },
  { url: `${base}/services/web-design-palm-coast`, priority: 0.8, changeFrequency: 'monthly' as const },
  { url: `${base}/services/web-design-deltona`, priority: 0.8, changeFrequency: 'monthly' as const },
  { url: `${base}/services/web-design-edgewater`, priority: 0.8, changeFrequency: 'monthly' as const },
  { url: `${base}/services/web-design-port-orange`, priority: 0.8, changeFrequency: 'monthly' as const },
  { url: `${base}/services/web-design-for-contractors`, priority: 0.8, changeFrequency: 'monthly' as const },
  { url: `${base}/services/web-design-for-home-services`, priority: 0.8, changeFrequency: 'monthly' as const },
  { url: `${base}/work`, priority: 0.8, changeFrequency: 'monthly' as const },
  { url: `${base}/contact`, priority: 0.8, changeFrequency: 'yearly' as const },
  { url: `${base}/about`, priority: 0.7, changeFrequency: 'monthly' as const },
  { url: `${base}/faq`, priority: 0.6, changeFrequency: 'monthly' as const },
  { url: `${base}/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
  { url: `${base}/free-website-audit`, priority: 0.6, changeFrequency: 'yearly' as const },
  { url: `${base}/free-seo-audit`, priority: 0.6, changeFrequency: 'yearly' as const },
];

const workSlugs = projects.map(p => p.slug);

// lastModified is only set where we know the real date (blog posts). Stamping
// every URL with the build date teaches Google to ignore the field entirely.
export default function sitemap(): MetadataRoute.Sitemap {
  const latestPost = posts.map(p => p.isoDate).sort().at(-1);

  const blogRoutes = posts.map(p => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.isoDate,
    priority: 0.6,
    changeFrequency: 'monthly' as const,
  }));

  const workRoutes = workSlugs.map(slug => ({
    url: `${base}/work/${slug}`,
    priority: 0.6,
    changeFrequency: 'monthly' as const,
  }));

  return [
    ...staticRoutes.map(r => (r.url === `${base}/blog` ? { ...r, lastModified: latestPost } : r)),
    ...blogRoutes,
    ...workRoutes,
  ];
}
