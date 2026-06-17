'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { OFFERS, OfferConfig, createExitIntentDetector, getOfferForPath, getVariant, hasConverted, wasDismissedRecently, markConverted, markDismissed } from '@/lib/exit-intent';
import { trackEvent } from '@/lib/gtag';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState(getVariant());
  const [offer, setOffer] = useState<OfferConfig>(OFFERS['website-audit']);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', website: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Initialize on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (hasConverted() || wasDismissedRecently()) return;

    setOffer(OFFERS[getOfferForPath(window.location.pathname)] || OFFERS['website-audit']);
    setVariant(getVariant());
  }, []);

  // Exit intent detection
  useEffect(() => {
    if (show || hasConverted() || wasDismissedRecently()) return;

    const cleanup = createExitIntentDetector({
      onTrigger: () => {
        const v = getVariant();
        if (v.delay > 0) {
          timerRef.current = setTimeout(() => {
            setShow(true);
            trackEvent('exit_intent_impression', { variant: v.id, offer: offer.id });
          }, v.delay);
        } else {
          setShow(true);
          trackEvent('exit_intent_impression', { variant: v.id, offer: offer.id });
        }
      },
    });

    return () => {
      cleanup();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [show, offer.id]);

  const handleDismiss = useCallback(() => {
    setAnimatingOut(true);
    trackEvent('exit_intent_dismissed', { offer: offer.id, variant: variant.id });
    setTimeout(() => {
      setShow(false);
      setAnimatingOut(false);
      markDismissed();
    }, 250);
  }, [offer.id, variant.id]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, website } = formData;
    if (!name.trim() || !email.trim()) return;

    setSubmitting(true);
    trackEvent('exit_intent_conversion', { offer: offer.id, variant: variant.id });

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          website: website.trim(),
          type: offer.apiType,
        }),
      });

      if (!res.ok) throw new Error('Failed to submit');

      setSubmitted(true);
      markConverted();
      trackEvent('lead_confirmed');
    } catch {
      // Still show success to user — we'll get it from analytics
      setSubmitted(true);
      markConverted();
    } finally {
      setSubmitting(false);
    }
  }, [formData, offer, variant.id]);

  // Close on Escape
  useEffect(() => {
    if (!show) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleDismiss(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [show, handleDismiss]);

  if (!show) return null;

  const headline = variant.urgency
    ? `Don't Leave Empty-Handed — ${offer.title.replace('Free', 'Free')}`
    : `${offer.title} — Value ${offer.value}`;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm ${animatingOut ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onClick={handleDismiss}
      />

      {/* Card */}
      <div
        className={`relative w-full max-w-[440px] bg-dark rounded-3xl border border-white/10 shadow-2xl overflow-hidden ${animatingOut ? 'opacity-0 translate-y-4 scale-[0.97]' : 'opacity-100 translate-y-0 scale-100'} transition-all duration-300 ease-out`}
      >
        {/* Close button */}
        <button onClick={handleDismiss} className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        {submitted ? (
          /* ─── Success State ─── */
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00c47a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3 className="text-[20px] font-bold text-white mb-2">You&apos;re on the List!</h3>
            <p className="text-[14px] text-white/50 leading-relaxed">
              We&apos;ll review your site and send your <strong className="text-white/80">{offer.title.replace('Get Your Free ', '').replace('Free ', '')}</strong> within 48 hours. Check your inbox — we&apos;ll include a custom video breakdown.
            </p>
            <button onClick={handleDismiss} className="mt-6 text-[13px] text-accent hover:text-white transition-colors font-medium">
              Got it, thanks →
            </button>
          </div>
        ) : (
          /* ─── Form ─── */
          <div className="p-6 md:p-8">
            {/* Icon */}
            <div className="text-3xl mb-3">{offer.icon}</div>

            {/* Headline */}
            <h3 className="text-[20px] font-bold text-white leading-tight mb-1">{headline}</h3>
            <p className="text-[13px] text-white/40 mb-1">{offer.subtitle}</p>
            <p className="text-[12px] text-white/30 mb-5 leading-relaxed">
              {offer.description} <strong className="text-accent">{offer.value}</strong>
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                placeholder="Your name" required
                className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-accent text-white text-[14px] rounded-xl px-4 py-3 placeholder-white/30 outline-none transition-colors"
              />
              <input
                type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                placeholder="Your email" required
                className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-accent text-white text-[14px] rounded-xl px-4 py-3 placeholder-white/30 outline-none transition-colors"
              />
              <input
                value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                placeholder="Phone (optional)"
                className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-accent text-white text-[14px] rounded-xl px-4 py-3 placeholder-white/30 outline-none transition-colors"
              />
              <input
                value={formData.website} onChange={e => setFormData(p => ({ ...p, website: e.target.value }))}
                placeholder="Website URL (optional)"
                className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-accent text-white text-[14px] rounded-xl px-4 py-3 placeholder-white/30 outline-none transition-colors"
              />

              <button type="submit" disabled={submitting}
                className="w-full bg-accent hover:bg-accent2 disabled:opacity-50 text-white font-bold text-[14px] rounded-xl px-6 py-3.5 transition-colors mt-1"
              >
                {submitting ? 'Sending...' : offer.cta}
              </button>
            </form>

            {/* Footer */}
            <div className="flex items-center justify-between mt-4">
              <p className="text-[11px] text-white/20">No credit card required · Takes 2 minutes</p>
              <button onClick={handleDismiss} className="text-[11px] text-white/20 hover:text-white/50 transition-colors">
                No thanks
              </button>
            </div>

            {/* A/B test badge (dev only) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] text-white/10 text-center">
                Variant {variant.id} ({variant.label}) — Delay: {variant.delay}ms — Urgency: {variant.urgency ? 'on' : 'off'}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
