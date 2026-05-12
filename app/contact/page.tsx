import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Contact' };

export default function Contact() {
  return (
    <main>
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left — waterfront photo */}
          <div className="photo-contact relative flex flex-col justify-end p-16">
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
                  { icon:'📞', label:'Phone', val:'(386) 000-0000' },
                  { icon:'📧', label:'Email', val:'hello@nxtlevelbuilds.com' },
                  { icon:'📍', label:'Location', val:'Daytona Beach, Florida' },
                  { icon:'🕐', label:'Business Hours', val:'Mon – Fri, 9AM – 6PM' },
                ].map(c => (
                  <div key={c.label} className="flex gap-3 items-center">
                    <div className="w-10 h-10 bg-white/15 backdrop-blur rounded-xl flex items-center justify-center text-lg flex-shrink-0">{c.icon}</div>
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
              <div className="bg-white border border-[#e5e7eb] rounded-2xl p-8 shadow-sm">
                <h2 className="font-bold text-[22px] text-dark mb-6">Send Us a Message</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-[12px] font-semibold text-dark block mb-1.5">Full Name</label>
                    <input type="text" placeholder="Enter your name" className="w-full bg-[#f8f9fc] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-accent transition-colors"/>
                  </div>
                  <div>
                    <label className="text-[12px] font-semibold text-dark block mb-1.5">Email Address</label>
                    <input type="email" placeholder="Enter your email" className="w-full bg-[#f8f9fc] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-accent transition-colors"/>
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
                    <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-[#f8f9fc] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-accent transition-colors resize-y"/>
                  </div>
                  <button className="w-full bg-accent hover:bg-accent2 text-white font-bold text-[15px] py-4 rounded-xl transition-colors">Send Message →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
