'use client';
import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#e5e7eb]">
      <div className="container-site flex items-center justify-between h-16">
        <Link href="/" aria-label="NXT Level Builds home" onClick={() => setOpen(false)}>
          <Logo variant="light" size="sm" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-7 list-none">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className="text-[13px] font-semibold text-[#374151] hover:text-accent transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden md:inline-flex bg-accent hover:bg-accent2 text-white text-[13px] font-bold px-5 py-2.5 rounded-lg transition-colors">
            Get a Free Quote
          </Link>
          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-[#374151] transition-all duration-200 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#374151] transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#374151] transition-all duration-200 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#e5e7eb] bg-white">
          <div className="container-site py-4 flex flex-col gap-1">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-[14px] font-semibold text-[#374151] hover:text-accent py-2.5 border-b border-[#f3f4f6] transition-colors">
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}
              className="mt-3 bg-accent hover:bg-accent2 text-white text-[14px] font-bold px-5 py-3 rounded-lg text-center transition-colors">
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
