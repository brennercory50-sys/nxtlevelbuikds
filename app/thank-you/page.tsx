import type { Metadata } from 'next';
import { canonical, ogImage } from '@/lib/seo';
import Link from 'next/link';
import ThankYouEvent from '@/components/ThankYouEvent';

export const metadata: Metadata = {
  title: "Message Received — We'll Be in Touch",
  description: "Your message has been received. A member of the NXT Level Builds team will reach out within 1 business day.",
  robots: { index: false, follow: false },
  alternates: { canonical: canonical('/thank-you') },
  openGraph: {
    title: "Message Received — We'll Be in Touch",
    description: "Your message has been received. A member of the NXT Level Builds team will reach out within 1 business day.",
    images: [ogImage()],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Message Received — We'll Be in Touch",
    description: "Your message has been received. We'll be in touch within 1 business day.",
  },
};

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-20 pb-36 md:pb-20">
      <ThankYouEvent />
      <div className="container-site max-w-2xl text-center">
        {/* Icon */}
        <div className="w-20 h-20 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00c47a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>

        <p className="eyebrow text-center">Message Received</p>
        <h1 className="text-[clamp(28px,4vw,48px)] font-extrabold text-dark leading-tight mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
          We Got Your Message.<br /><span className="text-accent">We&apos;ll Be in Touch Soon.</span>
        </h1>
        <p className="text-muted text-[15px] leading-relaxed mb-10 max-w-lg mx-auto">
          A member of the NXT Level Builds team will reach out within 1 business day — usually the same day. Check your phone for a text from us too.
        </p>

        {/* What happens next */}
        <div className="bg-[#f8f9fc] border border-[#e5e7eb] rounded-2xl p-8 mb-10 text-left">
          <h2 className="font-bold text-[16px] text-dark mb-5 text-center">What Happens Next</h2>
          <div className="space-y-4">
            {[
              { step: '01', title: 'We review your message', desc: 'We read every submission personally — no auto-responses, no form dumps.' },
              { step: '02', title: 'You hear from us within 1 business day', desc: 'Usually same day. We\'ll reach out by phone or email to set up a quick call.' },
              { step: '03', title: 'Free 30-minute strategy call', desc: 'We learn about your business, your goals, and what\'s getting in the way. No pitch, no pressure.' },
              { step: '04', title: 'Custom proposal', desc: "We put together a specific plan and quote for your situation — tailored to your market and your budget." },
            ].map(item => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="text-[13px] font-extrabold text-accent/40 w-8 flex-shrink-0 mt-0.5" style={{ fontFamily: 'var(--font-bebas)' }}>{item.step}</div>
                <div>
                  <p className="font-semibold text-[14px] text-dark">{item.title}</p>
                  <p className="text-[13px] text-muted mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3 flex-wrap justify-center">
          <Link href="/work" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg transition-colors">
            See Our Work →
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 border border-[#e5e7eb] hover:border-accent hover:text-accent text-dark font-semibold text-[14px] px-7 py-3.5 rounded-lg transition-all">
            Get a Custom Quote →
          </Link>
        </div>

        <p className="text-[12px] text-muted mt-8">
          Have a question right now? Call us at{' '}
          <a href="tel:+13862590178" className="text-accent font-semibold hover:underline">(386) 259-0178</a>
        </p>
      </div>
    </main>
  );
}
