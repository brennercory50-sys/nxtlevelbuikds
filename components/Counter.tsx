'use client';
import { useEffect, useRef, useState } from 'react';

type Props = { target: number; suffix?: string; prefix?: string; className?: string; };

export default function Counter({ target, suffix = '', prefix = '', className = '' }: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);
  const isFloat = !Number.isInteger(target);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
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
