'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

type Props = { target: number; suffix?: string; prefix?: string; className?: string; };

// useLayoutEffect warns when it runs during SSR; fall back to useEffect there.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function Counter({ target, suffix = '', prefix = '', className = '' }: Props) {
  // Start at the final value so the server-rendered HTML carries the real number.
  // Crawlers, AI answer engines, and link-preview scrapers don't scroll, and a
  // stat that renders as "$0K+" reads as zero to every one of them.
  const [value, setValue] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);
  const isFloat = !Number.isInteger(target);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Without IntersectionObserver nothing would ever start the animation, so
    // leave the final value in place rather than zeroing it.
    if (typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Zero it before the browser paints, so the count-up runs without the final
    // value flashing first.
    animated.current = false;
    setValue(0);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        const duration = 1800;
        const start = performance.now();
        const update = (now: number) => {
          const ease = 1 - Math.pow(1 - Math.min((now - start) / duration, 1), 3);
          setValue(isFloat ? parseFloat((target * ease).toFixed(1)) : Math.floor(target * ease));
          if (ease < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, isFloat]);

  return <span ref={ref} className={className}>{prefix}{value}{suffix}</span>;
}
