import { ImageResponse } from 'next/og';

export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: 'linear-gradient(135deg, #0d0f14 0%, #1a1a2e 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 80px',
        }}
      >
        <div
          style={{
            background: '#1a6eff',
            color: 'white',
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            padding: '8px 20px',
            borderRadius: 9999,
            marginBottom: 24,
          }}
        >
          Daytona Beach Digital Agency
        </div>
        <h1
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          NXT Level Builds
        </h1>
        <p
          style={{
            fontSize: 24,
            color: 'rgba(255,255,255,0.6)',
            textAlign: 'center',
            marginTop: 16,
            marginBottom: 0,
            letterSpacing: '0.02em',
          }}
        >
          Websites · SEO · Google Ads · AI Automation
        </p>
        <div
          style={{
            display: 'flex',
            gap: 40,
            marginTop: 40,
            paddingTop: 32,
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {[
            ['20+', 'Projects'],
            ['100%', 'Retention'],
            ['5.0', 'Google Rating'],
            ['7 Days', 'Avg Launch'],
          ].map(([n, l]) => (
            <div key={l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: 32, fontWeight: 800, color: '#1a6eff' }}>{n}</span>
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
