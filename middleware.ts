import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const APEX_HOST = 'nxtlevelbuilds.com';
const WWW_HOST = 'www.nxtlevelbuilds.com';

export function middleware(request: NextRequest) {
  const host = (request.headers.get('host') ?? '').split(':')[0].toLowerCase();

  if (host === APEX_HOST) {
    const target = `https://${WWW_HOST}${request.nextUrl.pathname}${request.nextUrl.search}`;
    return NextResponse.redirect(target, 308);
  }

  if (host === WWW_HOST && request.nextUrl.protocol === 'http:') {
    const target = `https://${WWW_HOST}${request.nextUrl.pathname}${request.nextUrl.search}`;
    return NextResponse.redirect(target, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
