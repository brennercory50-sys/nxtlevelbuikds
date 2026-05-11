'use client';
import type { Metadata } from 'next';
import { useState } from 'react';

const faqs = [
  { q:'Do you require long-term contracts?', a:'No. We work month-to-month on all services. Results keep clients around — not contracts.' },
  { q:'How fast can you launch a website?', a:'Most sites are live within 7 days of receiving content and approvals. Larger builds may take 2–3 weeks.' },
  { q:'Do you work with businesses outside Florida?', a:'Yes — we work with clients nationally. We specialize in Florida markets but our services have no geographic limitation.' },
  { q:'What is the minimum budget for Google Ads?', a:'We recommend a minimum ad spend of $500–$1,000/month to see meaningful results, plus our management fee.' },
  { q:'Will I own my website and ad accounts?', a:'100%. You always own your domain, hosting, website files, Google Ads account, and all data. We never hold assets hostage.' },
];

export default function Contact() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <section className="bg-dark py-20 text-center">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">Get In Touch</p>
          <h1 className="font-display text-7xl lg:text-9xl text-white leading-none">LET'S <span className="text-accent">BUILD</span></h1>
          <p className="text-white/50 text-lg mt-4 max-w-md mx-auto">Tell us what you need. We'll be straight about what it takes and what it'll cost.</p>
        </div>
      </section>
      <section className="bg-bg">
        <div className="container-site py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">Contact Info</p>
            <h2 className="font-display text-5xl text-dark leading-none mb-8">We Reply <span className="text-light-muted">Same Day</span></h2>
            <div className="space-y-4 mb-12">
              {[
                { icon:'📧', label:'Email', val:'hello@nxtlevelbuilds.com' },
                { icon:'📞', label:'Phone', val:'(386) 000-0000' },
                { icon:'📍', label:'Location', val:'Daytona Beach, FL — serving all of Florida' },
                { icon:'⏱️', label:'Response Time', val:'Within 24 hours — usually same day' },
              ].map(c => (
                <div key={c.label} className="flex gap-4 items-start">
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-lg flex-shrink-0">{c.icon}</div>
                  <div><p className="text-sm font-semibold text-dark">{c.label}</p><p className="text-sm text-muted">{c.val}</p></div>
                </div>
              ))}
            </div>
            {/* FAQ */}
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">FAQ</p>
            <div className="divide-y divide-border">
              {faqs.map((f, i) => (
                <div key={i} className="py-4 cursor-pointer" onClick={() => setOpen(open === i ? null : i)}>
                  <div className="flex justify-between items-center gap-3">
                    <span className="text-sm font-semibold text-dark">{f.q}</span>
                    <span className={`text-accent text-xl transition-transform flex-shrink-0 ${open === i ? 'rotate-45' : ''}`}>+</span>
                  </div>
                  {open === i && <p className="text-sm text-muted leading-relaxed mt-3">{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
          {/* Form */}
          <div className="bg-bg2 border border-border rounded-2xl p-9">
            <h3 className="font-display text-3xl text-dark tracking-wide mb-7">SEND US A MESSAGE</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div><label className="text-xs font-semibold text-dark block mb-1.5">First Name</label><input type="text" placeholder="Your first name" className="w-full bg-bg border border-border focus:border-accent rounded-lg px-4 py-3 text-sm outline-none transition-colors" /></div>
              <div><label className="text-xs font-semibold text-dark block mb-1.5">Last Name</label><input type="text" placeholder="Your last name" className="w-full bg-bg border border-border focus:border-accent rounded-lg px-4 py-3 text-sm outline-none transition-colors" /></div>
            </div>
            <div className="mb-4"><label className="text-xs font-semibold text-dark block mb-1.5">Email</label><input type="email" placeholder="you@yourbusiness.com" className="w-full bg-bg border border-border focus:border-accent rounded-lg px-4 py-3 text-sm outline-none transition-colors" /></div>
            <div className="mb-4"><label className="text-xs font-semibold text-dark block mb-1.5">Phone</label><input type="tel" placeholder="(386) 000-0000" className="w-full bg-bg border border-border focus:border-accent rounded-lg px-4 py-3 text-sm outline-none transition-colors" /></div>
            <div className="mb-4"><label className="text-xs font-semibold text-dark block mb-1.5">Business Name</label><input type="text" placeholder="Your company name" className="w-full bg-bg border border-border focus:border-accent rounded-lg px-4 py-3 text-sm outline-none transition-colors" /></div>
            <div className="mb-4"><label className="text-xs font-semibold text-dark block mb-1.5">What do you need?</label>
              <select className="w-full bg-bg border border-border focus:border-accent rounded-lg px-4 py-3 text-sm outline-none transition-colors">
                <option value="">Select a service...</option>
                <option>Web Design & Development</option>
                <option>Google Ads Management</option>
                <option>SEO</option>
                <option>AI Automation</option>
                <option>Full Digital Package</option>
                <option>Not sure — let's talk</option>
              </select>
            </div>
            <div className="mb-4"><label className="text-xs font-semibold text-dark block mb-1.5">Monthly Budget</label>
              <select className="w-full bg-bg border border-border focus:border-accent rounded-lg px-4 py-3 text-sm outline-none transition-colors">
                <option value="">Select a range...</option>
                <option>Under $500/mo</option>
                <option>$500 – $1,500/mo</option>
                <option>$1,500 – $3,000/mo</option>
                <option>$3,000+/mo</option>
              </select>
            </div>
            <div className="mb-5"><label className="text-xs font-semibold text-dark block mb-1.5">Tell us about your project</label><textarea rows={4} placeholder="What are you building, fixing, or growing? The more context the better." className="w-full bg-bg border border-border focus:border-accent rounded-lg px-4 py-3 text-sm outline-none transition-colors resize-y" /></div>
            <button className="w-full bg-accent hover:bg-accent2 text-white font-bold text-sm py-4 rounded-lg transition-colors">Send Message — It's Free →</button>
          </div>
        </div>
      </section>
    </>
  );
}
