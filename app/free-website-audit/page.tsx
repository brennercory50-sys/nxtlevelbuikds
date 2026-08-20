import type { Metadata } from 'next';
import { canonical, ogImage } from '@/lib/seo';
import LeadMagnetForm from '@/components/LeadMagnetForm';

export const metadata: Metadata = {
  title: 'Free Website Audit — Find Out Why Your Site Isn\'t Getting Leads ',
  description: 'Get a free custom Loom video audit of your website. We\'ll show you exactly why you\'re not getting leads and what to fix first. Delivered in 48 hours.',
  alternates: { canonical: canonical('/free-website-audit') },
  openGraph: {
    title: 'Free Website Audit — Find Out Why Your Site Isn\'t Getting Leads',
    description: 'Get a free custom Loom video audit of your website. We\'ll show you exactly why you\'re not getting leads and what to fix first.',
    images: [ogImage()],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Website Audit — Find Out Why Your Site Isn\'t Getting Leads',
    description: 'Get a free custom Loom video audit of your website. Delivered in 48 hours.',
  },
};

export default function FreeWebsiteAudit() {
  return (
    <main>
      <section className="bg-dark py-24">
        <div className="container-site max-w-2xl text-center">
          <p className="eyebrow" style={{ color: 'rgba(100,160,255,0.9)' }}>Free — No Commitment</p>
          <h1 className="text-[clamp(28px,4vw,52px)] font-extrabold text-white leading-tight mb-5" style={{ fontFamily: 'var(--font-bebas)' }}>
            Find Out Exactly Why Your Website<br />
            <span className="text-accent">Isn&apos;t Getting You Leads.</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-xl mx-auto">
            We&apos;ll record a custom Loom video walking through your site — what&apos;s hurting your rankings, what&apos;s costing you conversions, and the 3 things to fix first. Free. Delivered in 48 hours.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-site max-w-xl">
          <LeadMagnetForm type="website-audit" />

          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            {[
              { number: '48h', label: 'Delivery Time' },
              { number: 'Free', label: 'No Charge Ever' },
              { number: 'Custom', label: 'Not a Generic Report' },
            ].map(s => (
              <div key={s.label} className="bg-[#f8f9fc] border border-[#e5e7eb] rounded-xl p-4">
                <div className="text-[22px] font-extrabold text-dark">{s.number}</div>
                <div className="text-[11px] text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-[13px] text-muted mt-8">
            Every audit is specific and actionable — not a generic checklist.
          </p>
        </div>
      </section>
    </main>
  );
}
