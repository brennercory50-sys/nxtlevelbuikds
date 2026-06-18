'use client';

import Counter from '@/components/Counter';

interface Metric {
  number: string;
  label: string;
}

interface Props {
  metrics: Metric[];
  className?: string;
}

function parseMetricValue(raw: string): { value: number; suffix: string; prefix: string } {
  const match = raw.match(/^([+\-−])?(\$)?([\d.]+)([×%+]|x)?/);
  if (!match) return { value: 0, suffix: '', prefix: '' };
  const prefix = match[2] || '';
  const value = parseFloat(match[3]);
  const suffix = (match[4] || '').replace('x', '×');
  return { value, suffix, prefix };
}

function isNumeric(raw: string): boolean {
  return /^[+\-−]?\$?[\d.]+[×%+]?$/.test(raw.trim());
}

export default function MetricsDisplay({ metrics, className = '' }: Props) {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 gap-3 ${className}`}>
      {metrics.map(m => {
        const parsed = parseMetricValue(m.number);
        const numeric = isNumeric(m.number);

        return (
          <div key={m.label} className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4">
            <div className="text-[26px] font-extrabold text-white leading-none">
              {numeric ? (
                <>
                  {parsed.prefix}
                  <Counter target={parsed.value} />
                  {parsed.suffix}
                </>
              ) : (
                m.number
              )}
            </div>
            <div className="text-[10px] font-medium text-white/40 mt-1 leading-tight uppercase tracking-wider">{m.label}</div>
          </div>
        );
      })}
    </div>
  );
}
