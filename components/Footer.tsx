import Link from 'next/link';
import Logo from './Logo';

const services = ['Web Design', 'Google Ads', 'SEO', 'AI Automation'];
const company  = [{ label: 'About', href: '/about' }, { label: 'Our Work', href: '/work' }, { label: 'Blog', href: '/blog' }, { label: 'Contact', href: '/contact' }];

export default function Footer() {
  return (
    <footer style={{ background: '#0f0f12' }} className="pt-14 pb-8">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Logo variant="dark" size="sm" />
            <p className="mt-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Web design, Google Ads, SEO & AI automation for Florida businesses ready to grow.
            </p>
          </div>
          <div>
            <h5 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.25)' }}>Services</h5>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}><Link href="/services" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.25)' }}>Company</h5>
            <ul className="space-y-3">
              {company.map(c => (
                <li key={c.href}><Link href={c.href} className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>{c.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.25)' }}>Contact</h5>
            <ul className="space-y-3 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <li><a href="mailto:hello@nxtlevelbuilds.com" className="hover:text-white transition-colors">hello@nxtlevelbuilds.com</a></li>
              <li><a href="tel:+13860000000" className="hover:text-white transition-colors">(386) 000-0000</a></li>
              <li>Daytona Beach, FL</li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-3" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.22)' }}>© 2026 NXT Level Builds. All rights reserved.</p>
          <Link href="/contact" className="text-xs text-accent hover:underline">Start a project →</Link>
        </div>
      </div>
    </footer>
  );
}
