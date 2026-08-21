'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { events } from '@/lib/gtag';

interface Props {
  type: 'website-audit' | 'seo-audit';
}

export default function LeadMagnetForm({ type }: Props) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const isWebsite = type === 'website-audit';

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      ...(isWebsite
        ? { website: formData.get('website') as string }
        : { businessName: formData.get('businessName') as string, city: formData.get('city') as string }),
      type,
    };

    events.audit_request(type);
    if (typeof window !== 'undefined' && window.fbq) window.fbq('track', 'Lead');

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        router.push(`/thank-you?type=${type}`);
      } else {
        setError('Something went wrong. Please call us at (386) 348-3072.');
        setSubmitting(false);
      }
    } catch {
      setError('Network error. Please try again or call us directly.');
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-2xl p-8 shadow-sm">
      <h2 className="font-bold text-[20px] text-dark mb-2">
        {isWebsite ? 'Get Your Free Website Audit' : 'Get Your Free SEO Audit'}
      </h2>
      <p className="text-[13px] text-muted mb-6">
        {isWebsite
          ? 'Fill in your info and we\'ll send a custom Loom video review within 48 hours.'
          : 'Fill in your info and we\'ll send your ranking report within 48 hours.'}
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-[12px] font-semibold text-dark block mb-1.5">Full Name *</label>
            <input name="name" required type="text" placeholder="Your name"
              className="w-full bg-[#f8f9fc] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-accent transition-colors" />
          </div>
          <div>
            <label className="text-[12px] font-semibold text-dark block mb-1.5">Email Address *</label>
            <input name="email" required type="email" placeholder="Your email"
              className="w-full bg-[#f8f9fc] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-accent transition-colors" />
          </div>
        </div>
        <div>
          <label className="text-[12px] font-semibold text-dark block mb-1.5">Phone Number</label>
          <input name="phone" type="tel" placeholder="(386) 555-0100"
            className="w-full bg-[#f8f9fc] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-accent transition-colors" />
        </div>
        {isWebsite ? (
          <div>
            <label className="text-[12px] font-semibold text-dark block mb-1.5">Your Website URL *</label>
            <input name="website" required type="url" placeholder="https://yourbusiness.com"
              className="w-full bg-[#f8f9fc] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-accent transition-colors" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[12px] font-semibold text-dark block mb-1.5">Business Name *</label>
              <input name="businessName" required type="text" placeholder="Your business name"
                className="w-full bg-[#f8f9fc] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-accent transition-colors" />
            </div>
            <div>
              <label className="text-[12px] font-semibold text-dark block mb-1.5">City / Service Area *</label>
              <input name="city" required type="text" placeholder="Daytona Beach, FL"
                className="w-full bg-[#f8f9fc] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-accent transition-colors" />
            </div>
          </div>
        )}
        {error && <p className="text-[13px] text-red-500 font-medium">{error}</p>}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-accent hover:bg-accent2 disabled:opacity-60 text-white font-bold text-[15px] py-4 rounded-xl transition-colors"
        >
          {submitting ? 'Sending…' : isWebsite ? 'Send Me the Audit →' : 'Get My SEO Report →'}
        </button>
        <p className="text-[11px] text-muted text-center">
          Or call us directly: <a href="tel:+13863483072" className="text-accent font-semibold">(386) 348-3072</a>
        </p>
      </form>
    </div>
  );
}
