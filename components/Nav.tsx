'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const path = usePathname();
  return (
    <nav className="sticky top-0 z-50 border-t-2 border-t-accent border-b border-border bg-bg/95 backdrop-blur-md">
      <div className="container-site flex items-center justify-between h-16">
        <Link href="/" aria-label="NXT Level Builds home">
          <Logo variant="light" size="sm" />
        </Link>
        <ul className="hidden md:flex gap-8 list-none">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-medium transition-colors border-b-2 pb-0.5 ${
                  path === l.href
                    ? 'text-accent border-accent'
                    : 'text-muted border-transparent hover:text-accent hover:border-accent'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="bg-accent hover:bg-accent2 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-all hover:shadow-[0_0_20px_rgba(26,110,255,0.4)]"
        >
          Get a Free Quote
        </Link>
      </div>
    </nav>
  );
}
