import type { Metadata } from 'next';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
export const metadata: Metadata = {
  title: 'Contact | Web Design Agency Daytona Beach FL',
  description: 'Get in touch with NXT Level Builds — Daytona Beach\'s web design and digital marketing agency. Call (386) 259-0178 or send us a message today.',
};

export default function Contact() {
  return (
    <main>
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left — waterfront photo */}
          <div className="relative flex flex-col justify-end p-16 overflow-hidden">
            <Image fill src="/images/contact-bg.jpg" alt="Contact NXT Level Builds — Daytona Beach digital agency" className="object-cover object-center" priority quality={95} sizes="50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-dark/20" />
            <div className="relative z-10">
              <p className="eyebrow" style={{color:'rgba(100,160,255,0.9)'}}>Contact Us</p>
              <h1 className="text-[clamp(28px,4vw,52px)] font-extrabold text-white leading-tight mb-4" style={{fontFamily:"'Bebas Neue', sans-serif"}}>
                Let&apos;s Build Something<br /><span className="text-accent">Amazing Together.</span>
              </h1>
              <p className="text-white/55 text-[15px] leading-relaxed mb-10 max-w-sm">
                Have a project in mind or want to learn more about how we can help your business scale? Let&apos;s talk.
              </p>
              <div className="space-y-5">
                {[
                  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.2a16 16 0 0 0 6.29 6.29l.61-.61a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, label:'Phone', val:'(386) 259-0178' },
                  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label:'Email', val:'support@nxtlevelbuilds.com' },
                  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, label:'Location', val:'Daytona Beach, Florida' },
                  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, label:'Business Hours', val:'Mon – Fri, 9AM – 6PM' },
                ].map(c => (
                  <div key={c.label} className="flex gap-3 items-center">
                    <div className="w-10 h-10 bg-white/15 backdrop-blur rounded-xl flex items-center justify-center text-white flex-shrink-0">{c.icon}</div>
                    <div>
                      <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wide">{c.label}</p>
                      <p className="text-[14px] font-semibold text-white">{c.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#f8f9fc] p-12 lg:p-16 flex items-center">
            <div className="w-full max-w-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
