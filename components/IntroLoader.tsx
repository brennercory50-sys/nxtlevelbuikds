'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

declare global {
  interface Window { __nxtIntro?: boolean }
}

// Runs before the overlay is parsed, so the intro never flashes when it shouldn't play.
// Plays once per browser session, never for reduced-motion users.
const gate = `(function(){var d=document.documentElement;try{if(sessionStorage.getItem('nxt-intro')||matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('intro-seen');return}sessionStorage.setItem('nxt-intro','1')}catch(e){}window.__nxtIntro=true})()`;

// Server-rendered and driven by CSS, so it plays and clears itself even before hydration.
// JS only removes it afterwards and lets visitors skip it.
export default function IntroLoader() {
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Client-side navigation back to the homepage: remove before paint, never replay.
  useLayoutEffect(() => {
    if (!window.__nxtIntro) setDone(true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || done) return;
    const finish = () => {
      window.__nxtIntro = false;
      setDone(true);
    };
    const skip = () => el.classList.add('intro-skip');
    const onEnd = (e: AnimationEvent) => {
      if (e.target === el) finish();
    };
    const events = ['pointerdown', 'keydown', 'wheel', 'touchmove'] as const;
    el.addEventListener('animationend', onEnd);
    events.forEach(type => window.addEventListener(type, skip, { once: true, passive: true }));
    return () => {
      el.removeEventListener('animationend', onEnd);
      events.forEach(type => window.removeEventListener(type, skip));
    };
  }, [done]);

  if (done) return null;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: gate }} />
      <div ref={ref} className="intro" aria-hidden="true">
        <div className="hero-grid absolute inset-0" />
        <div className="intro-glow" />
        <div className="intro-inner">
          <p className="intro-word">
            <span><span>NXT</span></span>
            <span><span className="text-gradient-accent">Level</span></span>
            <span><span>Builds</span></span>
          </p>
          <div className="intro-bar"><span /></div>
          <div className="intro-meta">
            <span>Daytona Beach, FL</span>
            <span className="intro-count" />
          </div>
        </div>
      </div>
    </>
  );
}
