'use client';

import BeforeAfterSlider from './BeforeAfterSlider';
import { trackEvent } from '@/lib/gtag';

export interface ComparisonItem {
  id: string;
  label: string;
  description?: string;
  type: 'image' | 'metric';
  before?: string;
  after?: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeText?: string;
  afterText?: string;
}

interface Props {
  comparisons: ComparisonItem[];
  className?: string;
}

export default function ComparisonGallery({ comparisons, className = '' }: Props) {
  if (!comparisons || comparisons.length === 0) return null;

  return (
    <div className={className}>
      <div className="flex items-center gap-2 mb-6">
        <div className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
        </div>
        <h2 className="text-[13px] font-bold tracking-widest uppercase text-muted">Before vs. After</h2>
      </div>

      <div className="space-y-8">
        {comparisons.map((c, idx) => (
          <div key={c.id}>
            <div className="mb-3">
              <h3 className="text-[15px] font-bold text-dark">{c.label}</h3>
              {c.description && <p className="text-[13px] text-muted mt-0.5">{c.description}</p>}
            </div>

            {c.type === 'image' && c.before && c.after ? (
              <BeforeAfterSlider
                beforeSrc={c.before}
                afterSrc={c.after}
                beforeLabel={c.beforeLabel || 'Before'}
                afterLabel={c.afterLabel || 'After'}
                alt={c.label}
              />
            ) : (
              <div className="grid grid-cols-5 gap-3 bg-[#f8f9fc] rounded-2xl border border-[#e5e7eb] p-4 md:p-5">
                <div className="col-span-2">
                  <div className="flex items-center gap-1.5 mb-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-red-400">{c.beforeLabel || 'Before'}</span>
                  </div>
                  <p className="text-[13px] text-muted">{c.beforeText || '—'}</p>
                </div>

                {/* Arrow indicator */}
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00c47a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                </div>

                <div className="col-span-2">
                  <div className="flex items-center gap-1.5 mb-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00c47a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-green-500">{c.afterLabel || 'After'}</span>
                  </div>
                  <p className="text-[13px] font-semibold text-dark">{c.afterText || '—'}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
