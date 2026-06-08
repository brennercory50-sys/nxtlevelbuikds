import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Web Design, Pricing & SEO Questions | NXT Level Builds',
  description: 'Answers to the most common questions about web design pricing, timelines, SEO, Google Ads, and how NXT Level Builds works — straight from the team.',
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
