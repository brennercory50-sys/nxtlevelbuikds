const items = [
  'Web Design', '·', 'Google Ads', '·', 'SEO', '·',
  'AI Automation', '·', 'Lead Generation', '·', 'E-Commerce', '·',
  'Branding', '·', 'Landing Pages', '·',
];

export default function Ticker({ dark = false }: { dark?: boolean }) {
  const bg = dark ? '#16161a' : '#1a6eff';
  const baseColor = dark ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.7)';
  const accentColor = '#ffffff';

  return (
    <div className="overflow-hidden whitespace-nowrap py-4" style={{ background: bg }}>
      <div className="inline-flex animate-ticker">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-cond text-sm font-bold tracking-[3px] uppercase px-7"
            style={{ color: item === '·' ? baseColor : accentColor }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
