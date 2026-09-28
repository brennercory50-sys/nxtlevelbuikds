import type { Metadata } from 'next';
import { canonical, ogImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    default: 'Our Work | Web Design & Digital Marketing Portfolio | Daytona Beach FL',
    template: '%s | NXT Level Builds',
  },
  description: 'See the websites NXT Level Builds has designed and built for businesses in Daytona Beach and across Florida — real projects, including one of our own.',
  alternates: { canonical: canonical('/work') },
  openGraph: {
    title: 'Our Work | Web Design & Digital Marketing Portfolio | Daytona Beach FL',
    description: 'See the websites NXT Level Builds has designed and built for businesses in Daytona Beach and across Florida — real projects, including one of our own.',
    images: [ogImage()],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work | Web Design & Digital Marketing Portfolio | Daytona Beach FL',
    description: 'See the websites NXT Level Builds has designed and built for businesses in Daytona Beach and across Florida.',
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
