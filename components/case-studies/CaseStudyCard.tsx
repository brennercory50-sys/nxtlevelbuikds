import Link from 'next/link';
import { Project } from '@/app/work/projects';

interface Props {
  project: Project;
}

export default function CaseStudyCard({ project }: Props) {
  const p = project;
  const hasVideo = !!p.videoUrl;

  return (
    <Link href={`/work/${p.slug}`} className="group rounded-2xl overflow-hidden border border-[#e5e7eb] hover:border-accent/40 hover:shadow-xl hover:-translate-y-1 transition-all bg-white flex flex-col">
      <div className={`h-44 bg-gradient-to-br ${p.bg} relative flex items-end p-4 overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none">
            <rect x="220" y="0" width="50" height="200" fill="white" rx="1" />
            <rect x="280" y="40" width="40" height="160" fill="white" rx="1" />
            <rect x="330" y="20" width="60" height="180" fill="white" rx="1" />
            <rect x="160" y="60" width="50" height="140" fill="white" rx="1" />
            <rect x="100" y="80" width="50" height="120" fill="white" rx="1" />
          </svg>
        </div>
        <span className="relative z-10 text-[11px] font-bold text-white bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
          {p.result}
        </span>
        <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1.5" style={{ background: 'rgba(255,255,255,0.12)', color: p.accent }}>
          {hasVideo && (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
          )}
          {p.type}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 mb-1">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted flex-shrink-0">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
          </svg>
          <span className="text-[10px] text-muted font-medium">{p.location}</span>
        </div>
        <h4 className="font-bold text-[17px] text-dark mb-2">{p.title}</h4>
        <p className="text-[13px] text-muted leading-relaxed mb-4 flex-1">{p.desc}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.tags.map(t => (
            <span key={t} className="text-[11px] font-semibold bg-[#f0f4ff] text-accent px-2.5 py-0.5 rounded-full">{t}</span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-[#f0f0f0]">
          <div className="flex items-center gap-2">
            <div className="text-[20px] font-extrabold text-dark leading-none">{p.stat.number}</div>
            <div className="text-[11px] text-muted font-medium leading-tight">{p.stat.label}</div>
          </div>
          <span className="text-[12px] font-semibold text-accent">Read Case Study →</span>
        </div>
      </div>
    </Link>
  );
}
