'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { events } from '@/lib/gtag';

export default function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name:     formData.get('name') as string,
      email:    formData.get('email') as string,
      phone:    formData.get('phone') as string,
      service:  formData.get('service') as string,
      budget:   formData.get('budget') as string,
      timeline: formData.get('timeline') as string,
      message:  formData.get('message') as string,
    };

    events.form_submit(payload.service);
    if (typeof window !== 'undefined' && window.fbq) window.fbq('track', 'Lead');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        router.push('/thank-you');
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
      <h2 className="font-bold text-[22px] text-dark mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="text-[12px] font-semibold text-dark block mb-1.5">Full Name *</label>
            <input id="name" name="name" required type="text" placeholder="Enter your name"
              className="w-full bg-[#f8f9fc] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-accent transition-colors"/>
          </div>
          <div>
            <label htmlFor="phone" className="text-[12px] font-semibold text-dark block mb-1.5">Phone Number *</label>
            <input id="phone" name="phone" required type="tel" placeholder="(386) 555-0100"
              className="w-full bg-[#f8f9fc] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-accent transition-colors"/>
          </div>
        </div>
        <div>
          <label htmlFor="email" className="text-[12px] font-semibold text-dark block mb-1.5">Email Address *</label>
          <input id="email" name="email" required type="email" placeholder="Enter your email"
            className="w-full bg-[#f8f9fc] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-accent transition-colors"/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="service" className="text-[12px] font-semibold text-dark block mb-1.5">What do you need?</label>
            <select id="service" name="service" className="w-full bg-[#f8f9fc] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-accent transition-colors text-muted">
              <option value="">Select a service</option>
              <option>Custom Website</option>
              <option>Google Ads</option>
              <option>Local SEO</option>
              <option>AI Automation</option>
              <option>Full Package</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="text-[12px] font-semibold text-dark block mb-1.5">Budget Range</label>
            <select id="budget" name="budget" className="w-full bg-[#f8f9fc] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-accent transition-colors text-muted">
              <option value="">Select a budget</option>
              <option>Under $1,000</option>
              <option>$1,000 – $3,000</option>
              <option>$3,000 – $5,000</option>
              <option>$5,000+</option>
              <option>Not sure yet</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="timeline" className="text-[12px] font-semibold text-dark block mb-1.5">Timeline</label>
          <select id="timeline" name="timeline" className="w-full bg-[#f8f9fc] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-accent transition-colors text-muted">
            <option value="">When do you need this?</option>
            <option>ASAP (this month)</option>
            <option>1–3 months</option>
            <option>3–6 months</option>
            <option>Just exploring</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="text-[12px] font-semibold text-dark block mb-1.5">Your Message *</label>
          <textarea id="message" name="message" required rows={4} placeholder="Tell us about your project..."
            className="w-full bg-[#f8f9fc] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-accent transition-colors resize-y"/>
        </div>
        {error && (
          <p className="text-[13px] text-red-500 font-medium">{error}</p>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-accent hover:bg-accent2 disabled:opacity-60 text-white font-bold text-[15px] py-4 rounded-xl transition-colors"
        >
          {submitting ? 'Sending…' : 'Send Message →'}
        </button>
        <p className="text-[11px] text-muted text-center">Or call us directly: <a href="tel:+13863483072" className="text-accent font-semibold">(386) 348-3072</a></p>
      </form>
    </div>
  );
}
