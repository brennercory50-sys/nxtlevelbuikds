import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: '404 — Page Not Found' },
  description: 'The page you\'re looking for doesn\'t exist or has been moved. Let\'s get you back on track.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-white">
      <div className="container-site max-w-lg mx-auto text-center py-20">
        <span className="text-[120px] font-extrabold text-[#e5e7eb] leading-none block mb-2">404</span>
        <p className="eyebrow text-center" style={{marginBottom:'8px'}}>Page Not Found</p>
        <h1 className="text-[clamp(24px,3.5vw,36px)] font-extrabold text-dark leading-tight mb-4">
          Looks like this page took a wrong turn.
        </h1>
        <p className="text-muted text-[15px] leading-relaxed mb-8 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="bg-accent hover:bg-accent2 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg transition-colors">
            Go Home →
          </Link>
          <Link href="/contact" className="border border-[#e5e7eb] hover:border-accent hover:text-accent text-dark font-semibold text-[14px] px-7 py-3.5 rounded-lg transition-all">
            Contact Us →
          </Link>
        </div>
      </div>
    </main>
  );
}
