import type { Metadata } from 'next';
import LeadMagnetForm from '@/components/LeadMagnetForm';

export const metadata: Metadata = {
  title: 'Free SEO Audit — See Where You Rank vs. Your Competitors | NXT Level Builds',
  description: 'Get a free local SEO ranking report for your business. See exactly where you rank vs. competitors in your city and the 3 quick wins to move up fast.',
};

export default function FreeSEOAudit() {
  return (
    <main>
      <section className="bg-dark py-24">
        <div className="container-site max-w-2xl text-center">
          <p className="eyebrow" style={{ color: 'rgba(100,160,255,0.9)' }}>Free — No Commitment</p>
          <h1 className="text-[clamp(28px,4vw,52px)] font-extrabold text-white leading-tight mb-5" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Find Out Where You Rank vs.<br />
            <span className="text-accent">Your Competitors in Your City.</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-xl mx-auto">
            We&apos;ll pull your Google Maps rankings for the searches that matter most in your area — and show you the 3 quick wins you can implement today to start climbing.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-site max-w-xl">
          <LeadMagnetForm type="seo-audit" />

          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            {[
              { number: '48h', label: 'Delivery Time' },
              { number: 'Free', label: 'No Charge Ever' },
              { number: '3+', label: 'Actionable Quick Wins' },
            ].map(s => (
              <div key={s.label} className="bg-[#f8f9fc] border border-[#e5e7eb] rounded-xl p-4">
                <div className="text-[22px] font-extrabold text-dark">{s.number}</div>
                <div className="text-[11px] text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-[13px] text-muted mt-8">
            We analyze real Google Maps data for your business category and service area — not vanity metrics.
          </p>
        </div>
      </section>
    </main>
  );
}
