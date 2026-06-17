interface ProcessStep {
  step: string;
  description: string;
  duration?: string;
}

interface Props {
  steps?: ProcessStep[];
  legacySteps?: string[];
}

export default function ProcessTimeline({ steps, legacySteps }: Props) {
  if (!steps && !legacySteps) return null;

  if (!steps && legacySteps) {
    return (
      <div className="space-y-4">
        {legacySteps.map((step, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-[13px] font-extrabold text-accent">
              {String(i + 1).padStart(2, '0')}
            </div>
            <p className="text-[14px] text-[#374151] leading-relaxed pt-0.5">{step}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute left-[17px] top-10 bottom-6 w-0.5 bg-[#e5e7eb]" />
      <div className="space-y-8">
        {steps!.map((s, i) => (
          <div key={i} className="relative pl-12">
            <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white text-[13px] font-extrabold shadow-md shadow-accent/20">
              {i + 1}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h4 className="text-[15px] font-bold text-dark">{s.step}</h4>
                {s.duration && (
                  <span className="text-[10px] font-semibold text-accent bg-accent/10 px-2.5 py-0.5 rounded-full">{s.duration}</span>
                )}
              </div>
              <p className="text-[13px] text-muted leading-relaxed">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
