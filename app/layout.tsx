import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
import MobileBar from '@/components/MobileBar';

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
    images: [
      {
        url: 'https://nxtlevelbuilds.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NXT Level Builds — Web Design & Digital Marketing | Daytona Beach FL',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NXT Level Builds — Web Design & Digital Marketing | Daytona Beach',
    description: 'Custom websites, Google Ads, SEO, and AI automation for Daytona Beach businesses.',
    images: ['https://nxtlevelbuilds.com/images/og-image.jpg'],
  },
};

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://nxtlevelbuilds.com/#business',
      name: 'NXT Level Builds',
      description: 'Daytona Beach digital agency specializing in custom web design, Google Ads, local SEO, and AI automation.',
      url: 'https://nxtlevelbuilds.com',
      telephone: '+13862590178',
      email: 'hello@nxtlevelbuilds.com',
      image: 'https://nxtlevelbuilds.com/images/og-image.jpg',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Daytona Beach',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 29.2108,
        longitude: -81.0228,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      areaServed: [
        { '@type': 'City', name: 'Daytona Beach' },
        { '@type': 'City', name: 'Port Orange' },
        { '@type': 'City', name: 'Ormond Beach' },
        { '@type': 'City', name: 'New Smyrna Beach' },
        { '@type': 'City', name: 'DeLand' },
        { '@type': 'City', name: 'Palm Coast' },
        { '@type': 'State', name: 'Florida' },
      ],
      serviceType: ['Web Design', 'Google Ads Management', 'Search Engine Optimization', 'AI Automation'],
      priceRange: '$$',
      founder: { '@type': 'Person', name: 'Cory Brenner' },
      sameAs: [
        'https://www.facebook.com/nxtlevelbuilds',
        'https://www.linkedin.com/company/nxtlevelbuilds',
        'https://www.instagram.com/nxtlevelbuilds',
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://nxtlevelbuilds.com/#org',
      name: 'NXT Level Builds',
      url: 'https://nxtlevelbuilds.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nxtlevelbuilds.com/images/og-image.jpg',
      },
      founder: { '@type': 'Person', name: 'Cory Brenner' },
      sameAs: [
        'https://www.facebook.com/nxtlevelbuilds',
        'https://www.linkedin.com/company/nxtlevelbuilds',
        'https://www.instagram.com/nxtlevelbuilds',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+13862590178',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://nxtlevelbuilds.com/#website',
      url: 'https://nxtlevelbuilds.com',
      name: 'NXT Level Builds',
      publisher: { '@id': 'https://nxtlevelbuilds.com/#org' },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://nxtlevelbuilds.com/blog?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <MobileBar />
        <Analytics />
      </body>
    </html>
  );
}
