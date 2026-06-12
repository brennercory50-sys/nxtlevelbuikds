import type { MetadataRoute } from 'next';
import { posts } from '@/app/blog/posts';
import { projects } from '@/app/work/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://nxtlevelbuilds.com';
  const now = new Date().toISOString();

  const core = [
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
    { url: `${base}/faq`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/free-website-audit`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/free-seo-audit`, priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  const locationPages = [
    'web-design-port-orange',
    'web-design-ormond-beach',
    'web-design-new-smyrna-beach',
    'web-design-deland',
    'web-design-palm-coast',
    'web-design-for-contractors',
    'web-design-for-home-services',
  ].map(slug => ({
    url: `${base}/services/${slug}`,
    priority: 0.8 as const,
    changeFrequency: 'monthly' as const,
  }));

  const blogPages = posts.map(post => ({
    url: `${base}/blog/${post.slug}`,
    priority: 0.6 as const,
    changeFrequency: 'monthly' as const,
  }));

  const caseStudyPages = projects.map(p => ({
    url: `${base}/work/${p.slug}`,
    priority: 0.7 as const,
    changeFrequency: 'monthly' as const,
  }));

  return [...core, ...locationPages, ...blogPages, ...caseStudyPages].map(r => ({
    ...r,
    lastModified: now,
  }));
}
