import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work | Web Design & Digital Marketing Portfolio | Daytona Beach FL',
  description: 'See the websites, automations, and marketing systems we\'ve built for businesses in Daytona Beach and across Florida. Real projects, real results.',
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
