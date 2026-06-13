import type { MetadataRoute } from 'next';
import { posts } from '@/app/blog/posts';
import { projects } from '@/app/work/projects';

const base = 'https://nxtlevelbuilds.com';

const staticRoutes = [
  { url: base, priority: 1.0, changeFrequency: 'weekly' as const, lastModified: '2026-06-10' },
  { url: `${base}/services`, priority: 0.9, changeFrequency: 'monthly' as const, lastModified: '2026-06-10' },
  { url: `${base}/services/web-design`, priority: 0.9, changeFrequency: 'monthly' as const, lastModified: '2026-06-10' },
  { url: `${base}/services/google-ads`, priority: 0.9, changeFrequency: 'monthly' as const, lastModified: '2026-06-10' },
  { url: `${base}/services/seo`, priority: 0.9, changeFrequency: 'monthly' as const, lastModified: '2026-06-10' },
  { url: `${base}/services/ai-automation`, priority: 0.9, changeFrequency: 'monthly' as const, lastModified: '2026-06-10' },
  { url: `${base}/services/web-design-deland`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-06-10' },
  { url: `${base}/services/web-design-new-smyrna-beach`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-06-10' },
  { url: `${base}/services/web-design-ormond-beach`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-06-10' },
  { url: `${base}/services/web-design-palm-coast`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-06-10' },
  { url: `${base}/services/web-design-port-orange`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-06-10' },
  { url: `${base}/services/web-design-for-contractors`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-06-10' },
  { url: `${base}/services/web-design-for-home-services`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-06-10' },
  { url: `${base}/work`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-06-10' },
  { url: `${base}/pricing`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-06-10' },
  { url: `${base}/about`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-06-10' },
  { url: `${base}/faq`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: '2026-06-10' },
  { url: `${base}/blog`, priority: 0.7, changeFrequency: 'weekly' as const, lastModified: '2026-06-10' },
  { url: `${base}/contact`, priority: 0.7, changeFrequency: 'yearly' as const, lastModified: '2026-06-10' },
  { url: `${base}/thank-you`, priority: 0.3, changeFrequency: 'yearly' as const, lastModified: '2026-06-10' },
];

const blogSlugs = [
  'why-google-ads-arent-converting',
  'dominate-google-maps-90-days',
  '5-things-automate-with-ai',
  'website-losing-customers',
  'lsa-vs-google-search-ads',
  'link-building-2026',
  'how-much-small-business-spend-marketing',
  'web-design-vs-web-development',
  'diy-website-vs-hiring-agency',
];

const workSlugs = [
  'millers-screen-pool',
  'elevate-developments',
  'ironclad-build',
  'summit-exteriors',
  'premier-solutions',
  'peak-performance',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const blogRoutes = blogSlugs.map(slug => ({
    url: `${base}/blog/${slug}`,
    priority: 0.6 as const,
    changeFrequency: 'monthly' as const,
    lastModified: '2026-06-10',
  }));

  const workRoutes = workSlugs.map(slug => ({
    url: `${base}/work/${slug}`,
    priority: 0.6 as const,
    changeFrequency: 'monthly' as const,
    lastModified: '2026-06-10',
  }));

  return [...staticRoutes, ...blogRoutes, ...workRoutes];
}
