import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = { title: 'Services' };

const services = [
  { n:'01', icon:'⚡', title:'Web Design & Development', href:'/services/web-design',
    desc:'We build custom, fast-loading websites that represent your brand and convert visitors into paying customers. No page builders, no cookie-cutter templates — just clean code and intentional design built around your goals.',
    bullets:['Custom UI/UX Design','Next.js / React Development','Mobile-First Responsive','CMS Integration','Speed & Core Web Vitals','E-Commerce Ready'],
    tags:['Next.js','Custom Design','Shopify','WordPress','CMS'] },
  { n:'02', icon:'🎯', title:'Google Ads Management', href:'/services/google-ads',
    desc:'We build and manage Google Search, Local Services Ads, and Display campaigns with a singular focus on ROI. Every dollar is tracked, every campaign is optimized, and every report is fully transparent.',
    bullets:['Campaign Strategy & Setup','Keyword Research','Local Services Ads (LSA)','Negative Keyword Management','CallRail Integration','Monthly Reporting'],
    tags:['Search Ads','LSA','Display','Remarketing','CallRail'] },
  { n:'03', icon:'📈', title:'Search Engine Optimization', href:'/services/seo',
    desc:'SEO is a long game and we play it well. We handle everything from technical audits to local map pack strategy to content that ranks — building organic traffic that compounds month over month.',
    bullets:['Technical SEO Audit','Google Business Profile','Local Map Pack Strategy','On-Page Optimization','Content & Blog Strategy','Link Building'],
    tags:['Local SEO','GMB','Schema','Content','Link Building'] },
  { n:'04', icon:'🤖', title:'AI Automation', href:'/services/ai-automation',
    desc:'Stop doing manually what a system can handle. We design and build AI-powered workflows that automate lead follow-up, appointment scheduling, CRM updates, and customer communications.',
    bullets:['Lead Nurture Sequences','AI Chatbots','CRM Automation','Appointment Booking Flows','Review Request Systems','Make / Zapier Workflows'],
    tags:['AI Workflows','Make','Zapier','GoHighLevel','Chatbots'] },
];

export default function Services() {
  return (
    <main>
      {/* Hero with photo background */}
      <section className="relative py-28 overflow-hidden">
        <Image fill src="/images/services-bg.jpg" alt="" className="object-cover object-center" priority quality={95} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-dark/30" />
        <div className="container-site relative z-10">
          <p className="eyebrow" style={{color:'rgba(100,160,255,0.9)'}}>Services</p>
          <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-tight max-w-2xl" style={{fontFamily:"'Bebas Neue', sans-serif"}}>
            Everything You Need<br />To <span className="text-accent">Scale & Automate.</span>
          </h1>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-lg mt-5">
            From high-converting websites to advanced automations, we provide end-to-end digital solutions for Florida businesses.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white py-20">
        <div className="container-site space-y-6">
          {services.map(s => (
            <div key={s.n} className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start border-b border-[#e5e7eb] pb-8 last:border-0">
              <div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-[18px] text-dark mb-2">{s.title}</h3>
                <Link href={s.href} className="inline-flex items-center gap-1 text-[13px] font-semibold text-accent hover:text-accent2 transition-colors">
                  View Details →
                </Link>
              </div>
              <div className="lg:col-span-2">
                <p className="text-[14px] text-muted leading-relaxed mb-4">{s.desc}</p>
                <div className="space-y-2">
                  {s.bullets.map(b => (
                    <div key={b} className="flex items-center gap-2.5 text-[13px] text-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {s.tags.map(t => (
                    <span key={t} className="text-[11px] font-semibold text-accent bg-blue-50 px-3 py-1.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <Link href={s.href}
                  className="inline-flex items-center gap-1.5 border border-[#e5e7eb] hover:border-accent hover:text-accent text-dark font-semibold text-[13px] px-4 py-2 rounded-lg transition-all">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="container-site text-center">
          <h2 className="text-[28px] font-bold text-white mb-3" style={{fontFamily:"'Bebas Neue', sans-serif"}}>
            Ready to get started?
          </h2>
          <p className="text-white/70 text-[15px] mb-8 max-w-md mx-auto">
            Let's talk about your goals and build a custom plan that drives real results.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-accent font-bold text-[14px] px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors">
            Book a Free Strategy Call →
          </Link>
        </div>
      </section>
    </main>
  );
}
