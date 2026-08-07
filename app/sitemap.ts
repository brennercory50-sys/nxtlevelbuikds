import type { MetadataRoute } from 'next';

const base = 'https://nxtlevelbuilds.com';
const now = new Date().toISOString().split('T')[0];

const staticRoutes = [
  { url: base, priority: 1.0, changeFrequency: 'weekly' as const },
  { url: `${base}/services`, priority: 0.9, changeFrequency: 'monthly' as const },
  { url: `${base}/services/web-design`, priority: 0.9, changeFrequency: 'monthly' as const },
  { url: `${base}/services/google-ads`, priority: 0.9, changeFrequency: 'monthly' as const },
  { url: `${base}/services/seo`, priority: 0.9, changeFrequency: 'monthly' as const },
  { url: `${base}/services/ai-automation`, priority: 0.9, changeFrequency: 'monthly' as const },
  { url: `${base}/services/web-design-deland`, priority: 0.8, changeFrequency: 'monthly' as const },
  { url: `${base}/services/web-design-new-smyrna-beach`, priority: 0.8, changeFrequency: 'monthly' as const },
  { url: `${base}/services/web-design-ormond-beach`, priority: 0.8, changeFrequency: 'monthly' as const },
  { url: `${base}/services/web-design-palm-coast`, priority: 0.8, changeFrequency: 'monthly' as const },
  { url: `${base}/services/web-design-port-orange`, priority: 0.8, changeFrequency: 'monthly' as const },
  { url: `${base}/services/web-design-for-contractors`, priority: 0.8, changeFrequency: 'monthly' as const },
  { url: `${base}/services/web-design-for-home-services`, priority: 0.8, changeFrequency: 'monthly' as const },
  { url: `${base}/work`, priority: 0.8, changeFrequency: 'monthly' as const },
  { url: `${base}/contact`, priority: 0.8, changeFrequency: 'yearly' as const },
  { url: `${base}/about`, priority: 0.7, changeFrequency: 'monthly' as const },
  { url: `${base}/faq`, priority: 0.6, changeFrequency: 'monthly' as const },
  { url: `${base}/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
];

const blogSlugs = [
  'contractor-website-checklist',
  'home-services-website-checklist',
  'google-business-profile-checklist-florida',
  'web-design-deland-what-local-businesses-need',
  'web-design-new-smyrna-beach-what-local-businesses-need',
  'web-design-ormond-beach-what-local-businesses-need',
  'web-design-palm-coast-what-local-businesses-need',
  'web-design-port-orange-what-local-businesses-need',
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
  const withDates = <T extends { url: string }>(routes: T[]) =>
    routes.map(r => ({ ...r, lastModified: now }));

  const blogRoutes = blogSlugs.map(slug => ({
    url: `${base}/blog/${slug}`,
    priority: 0.6 as const,
    changeFrequency: 'monthly' as const,
  }));

  const workRoutes = workSlugs.map(slug => ({
    url: `${base}/work/${slug}`,
    priority: 0.6 as const,
    changeFrequency: 'monthly' as const,
  }));

  return [...withDates(staticRoutes), ...withDates(blogRoutes), ...withDates(workRoutes)];
}
