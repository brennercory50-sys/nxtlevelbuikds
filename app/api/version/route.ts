import { NextResponse } from 'next/server';

// Reports which commit this deployment is running, so post-deploy jobs
// (scripts/indexnow.mjs) can wait for the new version instead of guessing.
// Railway sets RAILWAY_GIT_COMMIT_SHA for GitHub-connected services.
export const dynamic = 'force-dynamic';

export function GET() {
  return NextResponse.json(
    { commit: process.env.RAILWAY_GIT_COMMIT_SHA ?? null },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}
