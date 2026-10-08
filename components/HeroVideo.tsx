'use client';

import { useEffect, useRef, useState } from 'react';

type Props = { src: string; className?: string };

type NetworkInfo = { saveData?: boolean; effectiveType?: string };

// Loads the hero video only after the page has finished loading, so its
// ~2.5 MB never competes with the hero image, fonts or scripts. The static
// image underneath stays visible until the first frame is ready, then the
// video fades in. Skipped for reduced motion, Data Saver and 2G connections.
export default function HeroVideo({ src, className = '' }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const net = (navigator as Navigator & { connection?: NetworkInfo }).connection;
    if (net?.saveData || /2g/.test(net?.effectiveType ?? '')) return;

    const start = () => {
      video.src = src;
      video.play().catch(() => {});
    };
    if (document.readyState === 'complete') {
      start();
      return;
    }
    window.addEventListener('load', start, { once: true });
    return () => window.removeEventListener('load', start);
  }, [src]);

  return (
    <video
      ref={ref}
      className={`${className} transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
      onPlaying={() => setReady(true)}
    />
  );
}
