import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'NXT Level Builds — Web Design & Digital Marketing Agency | Daytona Beach, FL',
    template: '%s | NXT Level Builds',
  },
  description: 'Daytona Beach digital agency specializing in custom web design, Google Ads, local SEO, and AI automation. We help local businesses get more leads and scale faster.',
  keywords: ['web design Daytona Beach', 'Google Ads Daytona Beach', 'SEO Daytona Beach', 'AI automation Florida', 'digital marketing Daytona Beach', 'website design Volusia County'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'NXT Level Builds',
    title: 'NXT Level Builds — Web Design & Digital Marketing Agency | Daytona Beach, FL',
    description: 'Custom websites, Google Ads, SEO, and AI automation for Daytona Beach businesses. Built to convert. Launched in 7 days.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NXT Level Builds — Web Design & Digital Marketing | Daytona Beach',
    description: 'Custom websites, Google Ads, SEO, and AI automation for Daytona Beach businesses.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
