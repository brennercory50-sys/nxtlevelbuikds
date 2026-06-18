interface ResultRow {
  label: string;
  before: string;
  after: string;
}

interface Props {
  results?: ResultRow[];
  beforeState?: { label: string; value: string }[];
  metrics?: { number: string; label: string }[];
}

export default function BeforeAfterTable({ results, beforeState, metrics }: Props) {
  const data = results || beforeState?.map((b, i) => ({
    label: b.label,
    before: b.value,
    after: metrics?.[i]?.number || '—',
  }));

  if (!data || data.length === 0) return null;

  return (
    <div className="rounded-2xl border border-[#e5e7eb] overflow-hidden bg-white">
      <div className="grid grid-cols-3 bg-[#f8f9fc] border-b border-[#e5e7eb]">
        <div className="px-5 py-3 text-[11px] font-bold tracking-widest uppercase text-dark">Metric</div>
        <div className="px-5 py-3 text-[11px] font-bold tracking-widest uppercase text-red-400">Before</div>
        <div className="px-5 py-3 text-[11px] font-bold tracking-widest uppercase text-green-500">After</div>
      </div>
      {data.map((row, i) => (
        <div key={row.label} className={`grid grid-cols-3 items-center ${i < data.length - 1 ? 'border-b border-[#e5e7eb]' : ''}`}>
          <div className="px-5 py-4 text-[13px] font-semibold text-dark">{row.label}</div>
          <div className="px-5 py-4 text-[13px] text-muted flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            {row.before}
          </div>
          <div className="px-5 py-4 text-[13px] font-semibold text-green-600 flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00c47a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            {row.after}
          </div>
        </div>
      ))}
    </div>
  );
}
