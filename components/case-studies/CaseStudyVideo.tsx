'use client';

import { useState } from 'react';

interface Props {
  url?: string;
  title?: string;
}

function getEmbedUrl(url: string): string | null {
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0`;
  const vm = url.match(/vimeo\.com\/(\d+)/);
  if (vm) return `https://player.vimeo.com/video/${vm[1]}?autoplay=1`;
  const loom = url.match(/loom\.com\/share\/([\w-]+)/);
  if (loom) return `https://www.loom.com/embed/${loom[1]}?autoplay=1`;
  if (url.match(/\.(mp4|webm|mov)$/i)) return url;
  return null;
}

function getProviderIcon(url: string): string {
  if (url.includes('youtube') || url.includes('youtu.be')) return 'YouTube';
  if (url.includes('vimeo')) return 'Vimeo';
  if (url.includes('loom')) return 'Loom';
  return 'Video';
}

export default function CaseStudyVideo({ url, title }: Props) {
  const [playing, setPlaying] = useState(false);
  if (!url) return null;

  const embedUrl = getEmbedUrl(url);
  if (!embedUrl) return null;

  return (
    <div className="rounded-2xl overflow-hidden bg-dark border border-white/10 group relative">
      {playing ? (
        <div className="aspect-video">
          <iframe
            src={embedUrl}
            title={title || 'Case study walkthrough'}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <button onClick={() => setPlaying(true)} className="relative w-full aspect-video bg-gradient-to-br from-dark to-[#1a1d24] flex items-center justify-center group cursor-pointer">
          <div className="absolute inset-0 bg-[#1a6eff]/5" />
          <div className="relative flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-[#1a6eff] flex items-center justify-center shadow-lg shadow-[#1a6eff]/30 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#1a6eff]/40 transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-0.5">
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
            </div>
            <span className="text-white/60 text-xs font-medium tracking-wider uppercase">{getProviderIcon(url)} Walkthrough</span>
          </div>
          {title && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white text-sm font-medium">{title}</p>
            </div>
          )}
        </button>
      )}
    </div>
  );
}
