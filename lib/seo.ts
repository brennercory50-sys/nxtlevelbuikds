const BASE = 'https://www.nxtlevelbuilds.com';

export function canonical(path: string): string {
  return `${BASE}${path}`;
}

export function ogImage(path: string = '/opengraph-image'): { url: string; width: number; height: number; alt: string } {
  return {
    url: `${BASE}${path}`,
    width: 1200,
    height: 630,
    alt: 'NXT Level Builds — Web Design & Digital Marketing | Daytona Beach FL',
  };
}

export const siteName = 'NXT Level Builds';
