import type { Metadata } from 'next';
import { canonical, ogImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'FAQ | Web Design, Pricing & SEO Questions | NXT Level Builds',
  description: 'Answers to the most common questions about web design pricing, timelines, SEO, Google Ads, and how NXT Level Builds works — straight from the team.',
  alternates: { canonical: canonical('/faq') },
  openGraph: {
    title: 'FAQ | Web Design, Pricing & SEO Questions | NXT Level Builds',
    description: 'Answers to the most common questions about web design pricing, timelines, SEO, Google Ads, and how NXT Level Builds works — straight from the team.',
    images: [ogImage()],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Web Design, Pricing & SEO Questions | NXT Level Builds',
    description: 'Answers to the most common questions about web design pricing, timelines, SEO, Google Ads, and how NXT Level Builds works — straight from the team.',
    images: ['/opengraph-image'],
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
