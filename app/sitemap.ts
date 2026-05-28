import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://nxtlevelbuilds.com';
  const now = new Date().toISOString();

  const routes = [
    { url: base, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${base}/services`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/services/web-design`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/services/google-ads`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/services/seo`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/services/ai-automation`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/work`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/pricing`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/about`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${base}/contact`, priority: 0.7, changeFrequency: 'yearly' as const },
  ];

  return routes.map(r => ({ ...r, lastModified: now }));
}
