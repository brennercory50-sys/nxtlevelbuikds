import { NextResponse } from 'next/server';

export function validateOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl) return true;
  if (!origin && !referer) return true;

  const allowedOrigins = [
    siteUrl.replace(/\/+$/, ''),
    'http://localhost:3000',
    'http://localhost:3001',
  ];

  const check = (value: string) => allowedOrigins.some((a) => value.startsWith(a));
  if (origin && !check(origin)) return false;
  if (!origin && referer && !check(referer)) return false;
  return true;
}

export function csrfError() {
  return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
}
