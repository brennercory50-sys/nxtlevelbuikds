'use client';
import { useState, useRef, type ReactNode } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const serviceItems: { icon: ReactNode; label: string; desc: string; href: string; badge?: string }[] = [
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    label: 'Web Design & Dev', desc: 'Custom sites that convert visitors', href: '/services/web-design',
  },
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    label: 'Google Ads', desc: 'ROI-focused paid ad campaigns', href: '/services/google-ads',
  },
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    label: 'SEO', desc: 'Organic growth that compounds', href: '/services/seo',
  },
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>,
    label: 'AI Automation', desc: 'Systems that scale without you', href: '/services/ai-automation',
  },
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    label: 'Free Website Audit', desc: 'Custom Loom review in 48 hours', href: '/free-website-audit', badge: 'Free',
  },
];

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/work', label: 'Our Work' },
  { href: '/contact', label: 'Book a Call' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onServicesEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const onServicesLeave = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10" style={{ background: '#0d0f14' }}>
      <div className="container-site flex items-center justify-between h-16">
        <Link href="/" aria-label="NXT Level Builds home" onClick={() => setOpen(false)}>
          <Logo variant="dark" size="sm" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-7 list-none items-center">
          <li>
            <Link href="/" className="text-[13px] font-semibold text-white/60 hover:text-white transition-colors">
              Home
            </Link>
          </li>

          {/* Services dropdown trigger */}
          <li className="relative" onMouseEnter={onServicesEnter} onMouseLeave={onServicesLeave}>
            <button className="flex items-center gap-1 text-[13px] font-semibold text-white/60 hover:text-white transition-colors">
              Services
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none"
                className={`mt-px transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dropdown panel */}
            <div
              onMouseEnter={onServicesEnter}
              onMouseLeave={onServicesLeave}
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-[295px] rounded-2xl border border-white/10 transition-all duration-200 ${
                servicesOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-1.5 pointer-events-none'
              }`}
              style={{
                background: '#0d0f14',
                boxShadow: '0 24px 64px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.05)',
              }}
            >
              <div className="p-2">
                {serviceItems.map(s => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-accent flex-shrink-0"
                      style={{ background: 'rgba(26,110,255,0.14)' }}
                    >
                      {s.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <div className="text-[13px] font-semibold text-white/80 group-hover:text-white transition-colors leading-snug">
                          {s.label}
                        </div>
                        {s.badge && <span className="text-[9px] font-bold tracking-wider uppercase bg-green/20 text-green px-1.5 py-0.5 rounded-full">{s.badge}</span>}
                      </div>
                      <div className="text-[11px] text-white/35 leading-snug">{s.desc}</div>
                    </div>
                  </Link>
                ))}
                <div className="mt-1 mx-1 pt-2 border-t border-white/10">
                  <Link
                    href="/services"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center justify-between px-3 pb-1 text-[12px] font-semibold text-accent hover:text-white transition-colors"
                  >
                    All services <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </li>

          {navLinks.map(l => (
            <li key={l.href}>
              <Link href={l.href} className="text-[13px] font-semibold text-white/60 hover:text-white transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="tel:+13863483072"
            className="hidden lg:flex items-center gap-1.5 text-white/50 hover:text-white text-[13px] font-semibold transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.2a16 16 0 0 0 6.29 6.29l.61-.61a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            (386) 348-3072
          </a>
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-1.5 border border-white/25 hover:border-accent hover:text-accent text-white text-[13px] font-bold px-5 py-2.5 rounded-lg transition-colors"
          >
            Book A Strategy Call ↗
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white/70 transition-all duration-200 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white/70 transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white/70 transition-all duration-200 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10" style={{ background: '#0d0f14' }}>
          <div className="container-site py-4 flex flex-col gap-1">
            <Link href="/" onClick={() => setOpen(false)}
              className="text-[14px] font-semibold text-white/60 hover:text-white py-2.5 border-b border-white/10 transition-colors">
              Home
            </Link>

            {/* Mobile services accordion */}
            <div className="border-b border-white/10">
              <button
                className="flex items-center justify-between w-full text-[14px] font-semibold text-white/60 hover:text-white py-2.5 transition-colors"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none"
                  className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}>
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="pb-3 flex flex-col gap-0.5 pl-2">
                  {serviceItems.map(s => (
                    <Link key={s.href} href={s.href} onClick={() => setOpen(false)}
                      className="flex items-center gap-2.5 py-2 text-[13px] font-medium text-white/50 hover:text-white transition-colors">
                      <span className="w-5 h-5 flex items-center justify-center text-accent flex-shrink-0">{s.icon}</span>
                      {s.label}
                    </Link>
                  ))}
                  <Link href="/services" onClick={() => setOpen(false)}
                    className="text-[12px] font-bold text-accent pt-1.5">
                    All Services →
                  </Link>
                </div>
              )}
            </div>

            {navLinks.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-[14px] font-semibold text-white/60 hover:text-white py-2.5 border-b border-white/10 transition-colors">
                {l.label}
              </Link>
            ))}

            <Link href="/contact" onClick={() => setOpen(false)}
              className="mt-3 bg-accent hover:bg-accent2 text-white text-[14px] font-bold px-5 py-3 rounded-lg text-center transition-colors">
              Book A Strategy Call ↗
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
