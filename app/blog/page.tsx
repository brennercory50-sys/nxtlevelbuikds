import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Web Design, SEO & Digital Marketing Tips | Daytona Beach',
  description: 'No-fluff insights on web design, Google Ads, local SEO, and AI automation — written by the team at NXT Level Builds in Daytona Beach, FL.',
};

const featured = {
  icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  iconColor: '#1a6eff', bg:'#eef3ff', cat:'Google Ads',
  title:"Why Your Google Ads Aren't Converting (And the Exact Fix We Use for Every Client)",
  desc:'Most small business campaigns waste 60% of their budget on the wrong keywords. We break down the most common mistakes and the step-by-step fix that works.',
  date:'May 2, 2026', read:'8 min read',
};

const posts = [
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, iconColor:'#16a34a', bg:'#f0fdf6', cat:'Local SEO', title:'How to Dominate Google Maps in Your City in 90 Days', desc:"The GBP strategy we used to land 3 clients in the local pack within 3 months.", date:'April 18, 2026', read:'7 min' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>, iconColor:'#7c3aed', bg:'#f5f3ff', cat:'AI Automation', title:'5 Things Small Businesses Can Automate With AI Right Now', desc:'Workflows saving clients 10+ hours a week — starting this week.', date:'April 5, 2026', read:'6 min' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>, iconColor:'#ea580c', bg:'#fff7ed', cat:'Web Design', title:"Why Your Website Is Losing You Customers Without You Knowing", desc:'Page speed, trust signals, and above-the-fold copy — the silent killers.', date:'March 22, 2026', read:'5 min' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>, iconColor:'#dc2626', bg:'#fff1f0', cat:'Google Ads', title:'LSA vs Google Search Ads: Which One Is Right for Your Business?', desc:'A side-by-side breakdown for Florida service businesses.', date:'March 10, 2026', read:'6 min' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>, iconColor:'#1a6eff', bg:'#eef3ff', cat:'SEO', title:"Link Building in 2026: What Still Works and What's a Waste of Time", desc:'We tested a dozen strategies. Here is the short list that actually moves rankings.', date:'Feb 28, 2026', read:'9 min' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, iconColor:'#16a34a', bg:'#f0fdf6', cat:'Business', title:'How Much Should a Small Business Spend on Digital Marketing?', desc:'A practical framework based on revenue, goals, and market competition.', date:'Feb 14, 2026', read:'5 min' },
];

export default function Blog() {
  return (
    <>
      <section className="bg-dark py-20 text-center">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">Resources</p>
          <h1 className="font-display text-7xl lg:text-9xl text-white leading-none">THE <span className="text-accent">BLOG</span></h1>
          <p className="text-white/50 text-lg mt-4 max-w-md mx-auto">No-fluff insights on digital marketing, web design, and AI — written by people who do the work.</p>
        </div>
      </section>
      <section className="bg-bg">
        <div className="container-site py-20">
          {/* Featured */}
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-bg2 border border-border rounded-2xl overflow-hidden mb-8 hover:border-border2 transition-colors cursor-pointer">
            <div className="flex items-center justify-center min-h-64" style={{ background: featured.bg, color: featured.iconColor }}>{featured.icon}</div>
            <div className="p-10 flex flex-col justify-center">
              <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">{featured.cat}</p>
              <h2 className="text-2xl font-semibold text-dark leading-snug mb-3">{featured.title}</h2>
              <p className="text-sm text-muted leading-relaxed mb-5">{featured.desc}</p>
              <div className="flex gap-4 text-xs text-light-muted">
                <span>{featured.date}</span><span>·</span><span>{featured.read}</span>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map(p => (
              <div key={p.title} className="bg-bg2 border border-border hover:border-border2 rounded-2xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1">
                <div className="h-36 flex items-center justify-center" style={{ background: p.bg, color: p.iconColor }}>{p.icon}</div>
                <div className="p-5">
                  <p className="text-xs font-bold tracking-widest uppercase text-accent mb-2">{p.cat}</p>
                  <h3 className="text-sm font-semibold text-dark leading-snug mb-2">{p.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{p.desc}</p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-border text-xs text-light-muted">
                    <span>{p.date}</span>
                    <span className="text-accent font-semibold">{p.read} →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
