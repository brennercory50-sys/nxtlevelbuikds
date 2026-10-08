import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NXT Level Builds — Web Design & Digital Marketing Agency',
    short_name: 'NXT Level Builds',
    description: 'Custom websites, Google Ads, SEO, and AI automation for Daytona Beach businesses.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1a6eff',
    icons: [
      { src: '/images/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/images/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
