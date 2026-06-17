'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { trackEvent } from '@/lib/gtag';

interface Props {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
  aspectRatio?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeSrc, afterSrc,
  beforeLabel = 'Before', afterLabel = 'After',
  alt = 'Before and after comparison',
  aspectRatio = '4/3',
  className = '',
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const posRef = useRef(50);

  // Lazy load via IntersectionObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const pct = (x / rect.width) * 100;
    posRef.current = pct;
    setPosition(pct);
  }, []);

  // Mouse handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    updatePosition(e.clientX);
    trackEvent('before_after_interact', { type: 'drag_start' });
  }, [updatePosition]);

  useEffect(() => {
    if (!isDragging) return;
    const handleMove = (e: MouseEvent) => updatePosition(e.clientX);
    const handleUp = () => {
      setIsDragging(false);
      trackEvent('before_after_interact', { type: 'drag_end', position: Math.round(posRef.current) });
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mouseup', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    };
  }, [isDragging, updatePosition]);

  // Touch handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    updatePosition(e.touches[0].clientX);
    trackEvent('before_after_interact', { type: 'touch_start' });
  }, [updatePosition]);

  useEffect(() => {
    if (!isDragging) return;
    const handleMove = (e: TouchEvent) => {
      e.preventDefault();
      updatePosition(e.touches[0].clientX);
    };
    const handleEnd = () => {
      setIsDragging(false);
      trackEvent('before_after_interact', { type: 'touch_end', position: Math.round(posRef.current) });
    };
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleEnd);
    return () => {
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, updatePosition]);

  // Keyboard
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 20 : 5;
    if (e.key === 'ArrowRight') { e.preventDefault(); setPosition(p => Math.min(100, p + step)); trackEvent('before_after_interact', { type: 'keyboard', key: 'right' }); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); setPosition(p => Math.max(0, p - step)); trackEvent('before_after_interact', { type: 'keyboard', key: 'left' }); }
    if (e.key === 'Home') { e.preventDefault(); setPosition(0); }
    if (e.key === 'End') { e.preventDefault(); setPosition(100); }
  }, []);

  // Fullscreen
  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(f => !f);
    trackEvent('before_after_fullscreen', { action: isFullscreen ? 'close' : 'open' });
  }, [isFullscreen]);

  useEffect(() => {
    if (!isFullscreen) return;
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsFullscreen(false); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isFullscreen]);

  const allLoaded = imagesLoaded >= 2;

  // Prevent body scroll when fullscreen
  useEffect(() => {
    if (isFullscreen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isFullscreen]);

  const slider = (fullscreen: boolean) => (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none ${fullscreen ? 'h-full' : ''}`}
      style={{ aspectRatio: fullscreen ? 'auto' : aspectRatio, touchAction: 'none' }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onKeyDown={handleKeyDown}
      role="slider"
      tabIndex={0}
      aria-label={`Before and after comparison. Use arrow keys to adjust.`}
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {isVisible ? (
        <>
          {/* After image (bottom layer) */}
          <Image fill src={afterSrc} alt={`${alt} — after`} className="object-cover pointer-events-none"
            sizes={fullscreen ? '100vw' : '(max-width: 768px) 100vw, 800px'}
            priority={fullscreen}
            onLoad={() => setImagesLoaded(p => Math.min(p + 1, 2))}
          />

          {/* Before image (top layer, clipped) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)` }}
          >
            <Image fill src={beforeSrc} alt={`${alt} — before`} className="object-cover"
              sizes={fullscreen ? '100vw' : '(max-width: 768px) 100vw, 800px'}
              priority={fullscreen}
              onLoad={() => setImagesLoaded(p => Math.min(p + 1, 2))}
            />
          </div>

          {/* Loading placeholder */}
          {!allLoaded && (
            <div className="absolute inset-0 bg-[#1a1d24] flex items-center justify-center z-10">
              <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </>
      ) : (
        <div className="absolute inset-0 bg-[#1a1d24] flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Labels */}
      <div className="absolute top-3 left-3 z-20 text-[11px] font-bold tracking-widest uppercase text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md pointer-events-none">
        {beforeLabel}
      </div>
      <div className="absolute top-3 right-3 z-20 text-[11px] font-bold tracking-widest uppercase text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md pointer-events-none">
        {afterLabel}
      </div>

      {/* Divider line + handle */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{ left: `calc(${position}% - 1px)` }}
      >
        {/* Line */}
        <div className={`absolute inset-y-0 left-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)] ${isDragging ? 'shadow-[0_0_12px_rgba(26,110,255,0.6)] bg-accent' : ''} transition-shadow duration-200`} />
        {/* Handle button */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center cursor-ew-resize pointer-events-auto
            ${isDragging ? 'scale-110 shadow-xl shadow-accent/30' : 'hover:scale-105'}
            transition-transform duration-150 border-2 ${isDragging ? 'border-accent' : 'border-white'}`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0d0f14" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-ml-1">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0d0f14" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-mr-1">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>

      {/* Fullscreen toggle button */}
      <button
        onClick={e => { e.stopPropagation(); toggleFullscreen(); }}
        className="absolute bottom-3 right-3 z-20 w-8 h-8 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-black/70 flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label={fullscreen ? 'Exit fullscreen' : 'View fullscreen'}
      >
        {fullscreen ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
        )}
      </button>
    </div>
  );

  return (
    <div className={`group relative ${className}`}>
      {slider(false)}

      {/* Fullscreen overlay */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8">
          <button onClick={toggleFullscreen} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Close fullscreen">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <div className="w-full max-w-5xl max-h-full rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            {slider(true)}
          </div>
        </div>
      )}
    </div>
  );
}
