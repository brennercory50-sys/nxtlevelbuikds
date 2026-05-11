'use client';
import Link from 'next/link';

export default function FloatingCTA() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-accent text-white text-sm font-bold px-5 py-3.5 rounded-full shadow-[0_4px_24px_rgba(26,110,255,0.4)] hover:shadow-[0_8px_32px_rgba(26,110,255,0.55)] hover:-translate-y-0.5 transition-all"
    >
      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
      Free Quote
    </Link>
  );
}
