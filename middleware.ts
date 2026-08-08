import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const APEX_HOST = 'nxtlevelbuilds.com';
const WWW_HOST = 'www.nxtlevelbuilds.com';

export function middleware(request: NextRequest) {
  const host = (request.headers.get('host') ?? '').split(':')[0].toLowerCase();
  const url = request.nextUrl.clone();

  if (host === APEX_HOST) {
    url.protocol = 'https';
    url.host = WWW_HOST;
    return NextResponse.redirect(url, 308);
  }

  if (host === WWW_HOST && request.nextUrl.protocol === 'http:') {
    url.protocol = 'https';
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
