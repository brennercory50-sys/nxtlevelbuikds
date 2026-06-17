'use client';

import { useState, FormEvent } from 'react';
import { LeadData } from '@/lib/chat/types';
import { trackEvent } from '@/lib/gtag';

interface LeadFormProps {
  onSubmit: (data: LeadData) => void;
  onSkip: () => void;
  loading?: boolean;
}

const BUSINESS_TYPES = [
  'Contractor / Trades',
  'Home Services',
  'Professional Services',
  'E-commerce / Retail',
  'Healthcare',
  'Real Estate',
  'Restaurant / Hospitality',
  'Automotive',
  'Technology / SaaS',
  'Other',
];

export default function LeadForm({ onSubmit, onSkip, loading }: LeadFormProps) {
  const [form, setForm] = useState<LeadData>({
    name: '', company: '', email: '', phone: '', website: '', budget: 0, businessType: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadData, string>>>({});

  function validate(): boolean {
    const errs: typeof errors = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.phone.trim()) errs.phone = 'Phone is required';
    if (form.budget <= 0) errs.budget = 'Select a budget range';
    if (!form.businessType) errs.businessType = 'Select your business type';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    trackEvent('chat_lead_form_submit', { business_type: form.businessType, budget: form.budget });
    onSubmit(form);
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-3">
      <div className="text-center mb-2">
        <p className="text-white text-sm font-medium">Tell us about your business</p>
        <p className="text-[#9ca3af] text-xs">We&apos;ll recommend the best solution for you</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <input
            value={form.name}
            onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(p => ({ ...p, name: undefined })); }}
            placeholder="Your name *"
            className="w-full bg-[#1a1d24] text-white text-sm rounded-lg px-3 py-2.5 placeholder-[#6b7280] border border-[#2a2d35] focus:border-[#1a6eff] focus:outline-none transition-colors"
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <input
            value={form.company}
            onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
            placeholder="Company name"
            className="w-full bg-[#1a1d24] text-white text-sm rounded-lg px-3 py-2.5 placeholder-[#6b7280] border border-[#2a2d35] focus:border-[#1a6eff] focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <input
            type="email"
            value={form.email}
            onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(p => ({ ...p, email: undefined })); }}
            placeholder="Email *"
            className="w-full bg-[#1a1d24] text-white text-sm rounded-lg px-3 py-2.5 placeholder-[#6b7280] border border-[#2a2d35] focus:border-[#1a6eff] focus:outline-none transition-colors"
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <input
            value={form.phone}
            onChange={e => { setForm(f => ({ ...f, phone: e.target.value })); setErrors(p => ({ ...p, phone: undefined })); }}
            placeholder="Phone *"
            className="w-full bg-[#1a1d24] text-white text-sm rounded-lg px-3 py-2.5 placeholder-[#6b7280] border border-[#2a2d35] focus:border-[#1a6eff] focus:outline-none transition-colors"
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <input
          value={form.website}
          onChange={e => setForm(f => ({ ...f, website: e.target.value }))}
          placeholder="Website URL (optional)"
          className="w-full bg-[#1a1d24] text-white text-sm rounded-lg px-3 py-2.5 placeholder-[#6b7280] border border-[#2a2d35] focus:border-[#1a6eff] focus:outline-none transition-colors"
        />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <select
            value={form.budget || ''}
            onChange={e => { setForm(f => ({ ...f, budget: Number(e.target.value) })); setErrors(p => ({ ...p, budget: undefined })); }}
            className="w-full bg-[#1a1d24] text-white text-sm rounded-lg px-3 py-2.5 border border-[#2a2d35] focus:border-[#1a6eff] focus:outline-none transition-colors appearance-none"
          >
            <option value="" disabled>Budget *</option>
            <option value="500">Under $500/mo</option>
            <option value="1000">$500 - $1,000/mo</option>
            <option value="3000">$1,000 - $3,000/mo</option>
            <option value="5000">$3,000 - $5,000/mo</option>
            <option value="10000">$5,000 - $10,000/mo</option>
            <option value="15000">$10,000+/mo</option>
          </select>
          {errors.budget && <p className="text-red-400 text-xs mt-1">{errors.budget}</p>}
        </div>
        <div>
          <select
            value={form.businessType}
            onChange={e => { setForm(f => ({ ...f, businessType: e.target.value })); setErrors(p => ({ ...p, businessType: undefined })); }}
            className="w-full bg-[#1a1d24] text-white text-sm rounded-lg px-3 py-2.5 border border-[#2a2d35] focus:border-[#1a6eff] focus:outline-none transition-colors appearance-none"
          >
            <option value="" disabled>Type *</option>
            {BUSINESS_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.businessType && <p className="text-red-400 text-xs mt-1">{errors.businessType}</p>}
        </div>
      </div>

      <div className="flex gap-2 pt-1">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 bg-[#1a6eff] hover:bg-[#0047cc] disabled:opacity-50 text-white text-sm font-medium rounded-lg py-2.5 transition-colors"
        >
          {loading ? 'Sending...' : 'Get My Recommendation'}
        </button>
        <button
          type="button"
          onClick={onSkip}
          className="px-4 text-[#9ca3af] hover:text-white text-sm transition-colors"
        >
          Skip
        </button>
      </div>
    </form>
  );
}
