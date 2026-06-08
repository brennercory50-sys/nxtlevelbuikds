import Link from 'next/link';
import Logo from './Logo';

const services = [
  { label: 'Custom Websites', href: '/services/web-design' },
  { label: 'AI Automations', href: '/services/ai-automation' },
  { label: 'Google Ads', href: '/services/google-ads' },
  { label: 'SEO', href: '/services/seo' },
  { label: 'Web Design for Contractors', href: '/services/web-design-for-contractors' },
  { label: 'Web Design for Home Services', href: '/services/web-design-for-home-services' },
];
const company = [
  { label: 'About', href: '/about' },
  { label: 'Our Work', href: '/work' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];
const locations = [
  { label: 'Web Design Daytona Beach', href: '/services/web-design' },
  { label: 'Web Design Port Orange', href: '/services/web-design-port-orange' },
  { label: 'Web Design Ormond Beach', href: '/services/web-design-ormond-beach' },
  { label: 'Web Design New Smyrna Beach', href: '/services/web-design-new-smyrna-beach' },
  { label: 'Web Design DeLand', href: '/services/web-design-deland' },
  { label: 'Web Design Palm Coast', href: '/services/web-design-palm-coast' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0d0f14' }} className="pt-14 pb-8">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-1">
            <Logo variant="dark" size="sm" />
            <p className="mt-4 text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)' }}>
              AI Automations, Websites & Systems for businesses ready to scale. Based in Daytona Beach, FL.
            </p>
            <div className="flex gap-3 mt-5">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-lg flex items-center justify-center transition-opacity hover:opacity-100 opacity-60" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-lg flex items-center justify-center transition-opacity hover:opacity-100 opacity-60" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              {/* X / Twitter */}
              <a href="#" aria-label="X" className="w-8 h-8 rounded-lg flex items-center justify-center transition-opacity hover:opacity-100 opacity-60" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <svg width="13" height="13" fill="white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-[10px] font-bold tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.25)' }}>Services</h5>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s.href + s.label}>
                  <Link href={s.href} className="text-[13px] hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-bold tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.25)' }}>Company</h5>
            <ul className="space-y-2.5">
              {company.map(c => (
                <li key={c.href}>
                  <Link href={c.href} className="text-[13px] hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.45)' }}>{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-bold tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.25)' }}>Locations</h5>
            <ul className="space-y-2.5">
              {locations.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.45)' }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-bold tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.25)' }}>Contact</h5>
            <ul className="space-y-2.5 text-[13px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
              <li><a href="mailto:hello@nxtlevelbuilds.com" className="hover:text-white transition-colors">hello@nxtlevelbuilds.com</a></li>
              <li><a href="tel:+13862590178" className="hover:text-white transition-colors">(386) 259-0178</a></li>
              <li>Daytona Beach, FL</li>
            </ul>
            <Link href="/contact" className="mt-5 inline-block bg-accent hover:bg-accent2 text-white text-[12px] font-bold px-4 py-2.5 rounded-lg transition-colors">
              Book a Call →
            </Link>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-3" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.22)' }}>© 2026 NXT Level Builds. All rights reserved.</p>
          <Link href="/contact" className="text-[11px] text-accent hover:underline">Start a project →</Link>
        </div>
      </div>
    </footer>
  );
}
