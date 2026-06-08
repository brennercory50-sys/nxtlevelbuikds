'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Form submission handling — redirect to thank-you page
    router.push('/thank-you');
  }

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-2xl p-8 shadow-sm">
      <h2 className="font-bold text-[22px] text-dark mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-[12px] font-semibold text-dark block mb-1.5">Full Name</label>
          <input required type="text" placeholder="Enter your name" className="w-full bg-[#f8f9fc] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-accent transition-colors"/>
        </div>
        <div>
          <label className="text-[12px] font-semibold text-dark block mb-1.5">Email Address</label>
          <input required type="email" placeholder="Enter your email" className="w-full bg-[#f8f9fc] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-accent transition-colors"/>
        </div>
        <div>
          <label className="text-[12px] font-semibold text-dark block mb-1.5">What do you need help with?</label>
          <select className="w-full bg-[#f8f9fc] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-accent transition-colors text-muted">
            <option value="">Select a service</option>
            <option>Custom Website</option>
            <option>AI Automation</option>
            <option>Google Ads</option>
            <option>SEO</option>
            <option>Full Package</option>
          </select>
        </div>
        <div>
          <label className="text-[12px] font-semibold text-dark block mb-1.5">Your Message</label>
          <textarea required rows={4} placeholder="Tell us about your project..." className="w-full bg-[#f8f9fc] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-accent transition-colors resize-y"/>
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-accent hover:bg-accent2 disabled:opacity-60 text-white font-bold text-[15px] py-4 rounded-xl transition-colors"
        >
          {submitting ? 'Sending…' : 'Send Message →'}
        </button>
      </form>
    </div>
  );
}
