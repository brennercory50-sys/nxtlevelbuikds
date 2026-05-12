import Link from 'next/link';

const clients = ['VISIONARY', 'ELEVATE', 'IRONCLAD', 'SUMMIT', 'PREMIER'];
const services = [
  { icon: '🖥️', title: 'Custom Websites', desc: 'High-converting, modern websites that represent your brand and turn visitors into customers.' },
  { icon: '🤖', title: 'AI Automations', desc: 'Automate follow-ups, lead nurturing, and repetitive tasks with smart AI systems.' },
  { icon: '🔗', title: 'Systems & Integrations', desc: 'We connect your tech stack and build custom integrations that work together seamlessly.' },
  { icon: '📊', title: 'CRM & Lead Management', desc: 'Organized pipeline, automated follow-ups, and real-time insights so you never miss a lead.' },
  { icon: '🛬', title: 'Landing Pages', desc: 'Conversion-focused landing pages built for ads, offers, and rapid growth.' },
  { icon: '🛟', title: 'Ongoing Support', desc: "We're here to support, optimize, and scale with your business every step of the way." },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="photo-hero min-h-[90vh] flex flex-col justify-between">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="container-site relative z-10 flex-1 flex flex-col justify-center py-20 pt-16">
          <p className="eyebrow" style={{color:'rgba(255,255,255,0.6)'}}>AI Automations. Websites. Systems.</p>
          <h1 className="text-[clamp(44px,6vw,76px)] font-extrabold leading-[1.05] text-white mb-5 max-w-2xl" style={{fontFamily:"'Bebas Neue', sans-serif"}}>
            Next-Level<br />Digital <span className="text-accent">Builds.</span>
          </h1>
          <p className="text-[16px] text-white/60 leading-relaxed max-w-md mb-10">
            We help businesses scale with high-converting websites, powerful automations, and AI systems that save time and drive real results.
          </p>
          <div className="flex gap-3 flex-wrap mb-14">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent2 text-white font-semibold text-[14px] px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5">Book a Call →</Link>
            <Link href="/work" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-[14px] px-7 py-3.5 rounded-lg border border-white/25 transition-all">View Our Work</Link>
          </div>
          {/* Stats cards */}
          <div className="flex gap-3 flex-wrap">
            <div className="bg-black/70 backdrop-blur-sm border border-white/10 rounded-2xl p-4 min-w-[180px]">
              <p className="text-[10px] font-bold tracking-widest uppercase text-accent mb-3">AI Automation</p>
              {[['Lead Capture','↑47%','text-green-400'],['Response Time','↓68%','text-accent'],['Conversions','↑36%','text-green-400'],['Avg. ROI','↑7.0×','text-green-400']].map(([k,v,c]) => (
                <div key={k} className="flex justify-between items-center py-1 border-b border-white/5 last:border-0">
                  <span className="text-[11px] text-white/45">{k}</span>
                  <span className={`text-[11px] font-bold ${c}`}>{v}</span>
                </div>
              ))}
            </div>
            <div className="bg-black/70 backdrop-blur-sm border border-white/10 rounded-2xl p-4 min-w-[180px]">
              <p className="text-[10px] font-bold tracking-widest uppercase text-accent mb-3">Website Performance</p>
              {[['Monthly Visits','24.8K'],['New Leads','1.9K'],['Conv. Rate','7.6%'],['Avg. Session','7.0m']].map(([k,v]) => (
                <div key={k} className="flex justify-between items-center py-1 border-b border-white/5 last:border-0">
                  <span className="text-[11px] text-white/45">{k}</span>
                  <span className="text-[11px] font-bold text-white">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Trusted bar */}
        <div className="relative z-10 border-t border-white/10 bg-black/60 backdrop-blur-sm py-4">
          <div className="container-site flex items-center gap-10 flex-wrap">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-white/35 whitespace-nowrap">Trusted by businesses ready to scale</p>
            <div className="flex items-center gap-8 flex-wrap">
              {clients.map(c => <span key={c} className="text-[12px] font-bold tracking-widest text-white/25 uppercase">{c}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-20">
        <div className="container-site">
          <p className="eyebrow">Our Services</p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <h2 className="section-title text-[clamp(28px,4vw,44px)]">Everything You Need<br />To <span className="text-accent">Scale And Automate.</span></h2>
            <p className="text-muted text-[15px] leading-relaxed max-w-sm flex-shrink-0">We provide end-to-end digital solutions that help your business attract more leads, convert more customers, and save time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {services.map(s => (
              <div key={s.title} className="group border border-[#e5e7eb] rounded-2xl p-7 hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-5">{s.icon}</div>
                <h3 className="font-bold text-[16px] text-dark mb-2">{s.title}</h3>
                <p className="text-[14px] text-muted leading-relaxed mb-4">{s.desc}</p>
                <span className="text-[13px] font-semibold text-accent">Learn More →</span>
              </div>
            ))}
          </div>
          <div className="bg-accent rounded-2xl p-6 flex items-center justify-between">
            <div>
              <p className="font-bold text-white text-[18px]">Ready To Scale Your Business?</p>
              <p className="text-white/70 text-[14px]">Let&apos;s build your system.</p>
            </div>
            <Link href="/contact" className="bg-white text-accent font-bold text-[14px] px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">Book a Call →</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#f8f9fc] border-y border-[#e5e7eb] py-16">
        <div className="container-site grid grid-cols-3 gap-0">
          {[['250+','Projects Delivered'],['120+','Happy Clients'],['7+','Years Experience']].map(([n,l],i) => (
            <div key={l} className={`text-center py-4 ${i < 2 ? 'border-r border-[#e5e7eb]' : ''}`}>
              <div className="font-extrabold text-[clamp(36px,4vw,52px)] text-dark leading-none">{n}</div>
              <p className="text-muted text-[13px] mt-2">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-white py-14 border-b border-[#e5e7eb]">
        <div className="container-site text-center">
          <p className="eyebrow">Our Technology Partners</p>
          <div className="flex items-center justify-center gap-12 flex-wrap mt-4">
            {['Webflow','AWS','OpenAI','Make','Zapier'].map(p => <span key={p} className="text-[15px] font-bold text-[#9ca3af] tracking-wide">{p}</span>)}
          </div>
        </div>
      </section>
    </main>
  );
}
