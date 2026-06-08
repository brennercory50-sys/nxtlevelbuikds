'use client';
import Link from 'next/link';
import { useState } from 'react';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does a website cost?', acceptedAnswer: { '@type': 'Answer', text: 'Our websites start at $697 for a landing page, $997 for a 5-page Starter site, $1,997 for a Professional 8-page site, and $2,497 for a full Growth build with SEO and Google Ads setup. All prices are one-time — no monthly fees unless you want ongoing support.' } },
    { '@type': 'Question', name: 'How long does it take to build a website?', acceptedAnswer: { '@type': 'Answer', text: 'Most Starter and Professional websites are live within 7 business days of design approval. Larger Growth builds typically take 10–14 days. Every project starts with a design review — you approve every page before we write a line of code.' } },
    { '@type': 'Question', name: 'Do I own my website?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — completely. You own the code, the domain, and all content. We hand everything over at launch. No lock-in, no monthly platform fees, and no dependency on us to keep your site live.' } },
    { '@type': 'Question', name: 'What areas do you serve?', acceptedAnswer: { '@type': 'Answer', text: 'We are based in Daytona Beach, FL and serve businesses across Volusia County including Port Orange, Ormond Beach, New Smyrna Beach, DeLand, and Palm Coast. We also work with businesses across Florida and nationally for digital-only services like SEO and Google Ads.' } },
    { '@type': 'Question', name: 'Do you offer payment plans?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer a 50/50 split (half upfront, half at launch), a 3-payment plan spread over 3 months, or a monthly retainer for ongoing work. All payment plans are 0% interest with no credit check.' } },
  ],
};

const categories = [
  {
    title: 'Pricing & Packages',
    items: [
      { q: 'How much does a website cost?', a: 'Our websites start at $697 for a landing page, $997 for a 5-page Starter site, $1,997 for a Professional 8-page site, and $2,497 for a full Growth build with SEO and Google Ads setup. All prices are one-time — no monthly fees unless you want ongoing support.' },
      { q: 'Do you charge monthly fees?', a: "No — unless you want ongoing services like SEO management, Google Ads management, or monthly support. Every project is priced as a one-time build. You pay once, you own it forever." },
      { q: 'Do you offer payment plans?', a: 'Yes. We offer a 50/50 split (half upfront, half at launch), a 3-payment plan spread over 3 months, or a monthly retainer for ongoing work. All plans are 0% interest with no credit check required.' },
      { q: 'What is included in the price?', a: 'Every package includes design mockups, custom development, mobile-first build, contact form setup, basic on-page SEO, and 30 days of post-launch support. Higher tiers include more pages, Google Ads setup, Google Business Profile optimization, and extended support.' },
    ],
  },
  {
    title: 'Process & Timeline',
    items: [
      { q: 'How long does it take to build a website?', a: 'Most Starter and Professional websites are live within 7 business days of design approval. Larger Growth builds typically take 10–14 days. Every project starts with design — you approve every page before we write a single line of code.' },
      { q: 'What does the process look like?', a: 'Step 1: Discovery call (30 minutes) — we learn your goals and market. Step 2: Design mockups — you approve everything before build begins. Step 3: Build and integrate — clean code, forms, and tools wired up. Step 4: Launch and support — we handle deployment and stay available after go-live.' },
      { q: 'How many revisions are included?', a: 'Unlimited design revisions during the design phase. We revise until you\'re completely happy with how the site looks and functions before we move to development. After launch, 30 days of post-launch adjustments are included.' },
      { q: 'What do I need to provide to get started?', a: 'Business name, logo (if you have one), a description of your services, and any photos of your work or team. We handle copywriting, photography sourcing, and everything else. You can provide as much or as little as you have.' },
    ],
  },
  {
    title: 'Services',
    items: [
      { q: 'Do I own my website?', a: 'Yes — completely. You own the code, the domain, and all content. We hand everything over at launch. No lock-in, no monthly platform fees, and no dependency on us to keep your site running.' },
      { q: 'What platform do you build on?', a: "We build on Next.js — a React framework that's significantly faster than WordPress, cleaner than page builders like Wix or Squarespace, and built for performance and SEO. Sites we build consistently score 90+ on Google PageSpeed." },
      { q: 'Do you do WordPress or Squarespace?', a: "We can work with WordPress for clients who need a specific CMS workflow, but we recommend against it for most small businesses. WordPress sites built on templates score 40–65 on mobile PageSpeed by default. Our Next.js builds score 90+, which directly affects how you rank on Google." },
      { q: 'Can you take over my existing website?', a: 'Yes. We can audit your current site, identify what\'s hurting your conversions and rankings, and either rebuild it cleanly or migrate it to our stack. We handle domain transfers, redirect mapping, and any SEO considerations during migration.' },
    ],
  },
  {
    title: 'SEO & Google Ads',
    items: [
      { q: 'How long does SEO take to work?', a: 'Local SEO (Google Maps / local pack rankings) typically shows movement within 60–90 days for most markets in Daytona Beach and Volusia County. Organic Google search rankings for competitive terms typically take 3–6 months of consistent work. We set expectations clearly upfront for every market.' },
      { q: 'What is the minimum Google Ads budget?', a: "We recommend a minimum of $600–$800/month in ad spend for Google Search Ads to get statistically meaningful data. Below that, campaigns don't get enough clicks to optimize effectively. For Local Services Ads (LSA), budgets can start lower since you're paying per lead." },
      { q: 'Do you guarantee Google rankings?', a: "No — and any agency that does is lying. Rankings depend on dozens of factors including competition, domain authority, content quality, and Google algorithm changes. What we guarantee is transparent work, clear reporting, and results we can both see and measure." },
      { q: 'What areas do you serve for local SEO?', a: 'We serve Daytona Beach, Port Orange, Ormond Beach, New Smyrna Beach, DeLand, Palm Coast, and surrounding Volusia and Flagler County markets. We also provide SEO services for businesses across Florida and nationally.' },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e5e7eb] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-[15px] text-dark leading-snug">{q}</span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent transition-transform ${open ? 'rotate-180' : ''}`}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </span>
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-[14px] text-muted leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-dark py-20">
        <div className="container-site text-center max-w-2xl">
          <p className="eyebrow" style={{ color: 'rgba(100,160,255,0.9)' }}>FAQ</p>
          <h1 className="text-[clamp(32px,5vw,56px)] font-extrabold text-white leading-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Questions We Get <span className="text-accent">Every Day.</span>
          </h1>
          <p className="text-white/50 text-[15px] mt-4 max-w-lg mx-auto">
            Straight answers about pricing, timelines, what&apos;s included, and how we work. No fluff.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="bg-white py-20">
        <div className="container-site max-w-3xl">
          <div className="space-y-12">
            {categories.map(cat => (
              <div key={cat.title}>
                <h2 className="text-[13px] font-bold tracking-widest uppercase text-accent mb-6 pb-3 border-b-2 border-accent/20">{cat.title}</h2>
                <div className="bg-white border border-[#e5e7eb] rounded-2xl px-7 divide-y divide-[#f0f0f0]">
                  {cat.items.map(item => (
                    <FaqItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-16 bg-[#f0f6ff] border border-accent/20 rounded-2xl p-8 text-center">
            <h3 className="font-bold text-[20px] text-dark mb-2">Still Have Questions?</h3>
            <p className="text-[14px] text-muted mb-6">
              Book a free 30-minute strategy call. We&apos;ll answer everything and put together a custom quote for your business.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg transition-colors">
                Book a Free Call →
              </Link>
              <Link href="/pricing" className="inline-flex items-center gap-2 border border-[#e5e7eb] hover:border-accent hover:text-accent text-dark font-semibold text-[14px] px-7 py-3.5 rounded-lg transition-all">
                View Pricing →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
