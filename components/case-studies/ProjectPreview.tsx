'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Props = {
  image: string;
  video?: string;
  alt: string;
  /** Sizing classes for the media box; defaults to a 16:10 desktop screen. */
  className?: string;
  sizes?: string;
};

// Homepage preview for a project card. Shows the screenshot, and when a short
// screen recording exists, loads and loops it only while the card is on
// screen. The screenshot stays for reduced-motion users or if the video fails.
export default function ProjectPreview({
  image,
  video,
  alt,
  className = 'relative aspect-[16/10] overflow-hidden',
  sizes = '(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw',
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !video) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!el.src) el.src = video;
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { rootMargin: '200px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [video]);

  return (
    <div className={className}>
      <Image
        fill
        src={image}
        alt={alt}
        sizes={sizes}
        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      />
      {video && (
        <video
          ref={ref}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${playing ? 'opacity-100' : 'opacity-0'}`}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          onPlaying={() => setPlaying(true)}
        />
      )}
    </div>
  );
}
