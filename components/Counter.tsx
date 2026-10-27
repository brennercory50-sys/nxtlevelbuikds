'use client';
import { useEffect, useLayoutEffect, useRef } from 'react';

type Props = { target: number; suffix?: string; prefix?: string; className?: string; };

// useLayoutEffect warns when it runs during SSR; fall back to useEffect there.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function Counter({ target, suffix = '', prefix = '', className = '' }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);
  const isFloat = !Number.isInteger(target);

  // The markup renders the final value, so the server HTML carries the real
  // number. Crawlers, AI answer engines and link-preview scrapers don't scroll,
  // and a stat that renders as "$0K+" reads as zero to every one of them.
  //
  // The count-up is driven by writing textContent directly rather than through
  // state. Going through state meant a synchronous React render before first
  // paint (to zero the value) plus a full render per animation frame, per
  // counter — a measurable chunk of main-thread time on pages with several
  // stats. Mutating the one text node does the same job with no reconciliation.
  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Without IntersectionObserver nothing would ever start the animation, so
    // leave the final value in place rather than zeroing it.
    if (typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const format = (n: number) => `${prefix}${isFloat ? n.toFixed(1) : n}${suffix}`;

    // Zero it before the browser paints, so the count-up runs without the final
    // value flashing first.
    animated.current = false;
    el.textContent = format(0);

    let raf = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || animated.current) return;
      animated.current = true;
      observer.disconnect();

      const duration = 1800;
      const start = performance.now();
      const update = (now: number) => {
        const ease = 1 - Math.pow(1 - Math.min((now - start) / duration, 1), 3);
        el.textContent = format(isFloat ? parseFloat((target * ease).toFixed(1)) : Math.floor(target * ease));
        if (ease < 1) raf = requestAnimationFrame(update);
        else el.textContent = format(target);
      };
      raf = requestAnimationFrame(update);
    }, { threshold: 0.5 });

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
      // Restore the real value if this unmounts mid-animation.
      el.textContent = format(target);
    };
  }, [target, isFloat, prefix, suffix]);

  return <span ref={ref} className={className}>{prefix}{isFloat ? target.toFixed(1) : target}{suffix}</span>;
}
