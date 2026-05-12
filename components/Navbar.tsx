'use client';
import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/work', label: 'Our Work' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10" style={{background:'#0d0f14'}}>
      <div className="container-site flex items-center justify-between h-16">
        <Link href="/" aria-label="NXT Level Builds home" onClick={() => setOpen(false)}>
          <Logo variant="dark" size="sm" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-7 list-none">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className="text-[13px] font-semibold text-white/60 hover:text-white transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link href="/contact"
            className="hidden md:inline-flex items-center gap-1.5 border border-white/25 hover:border-accent hover:text-accent text-white text-[13px] font-bold px-5 py-2.5 rounded-lg transition-colors">
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
        <div className="md:hidden border-t border-white/10" style={{background:'#0d0f14'}}>
          <div className="container-site py-4 flex flex-col gap-1">
            {links.map(l => (
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
