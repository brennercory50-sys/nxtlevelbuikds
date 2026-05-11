// NXT Level Builds — Slash Arrow Logo
// variant: "dark" (white on dark) | "light" (dark on light) | "blue" (white on blue)

type LogoProps = {
  variant?: 'dark' | 'light' | 'blue';
  size?: 'sm' | 'md' | 'lg';
};

const sizes = {
  sm: { icon: 0.55, text1: 28, text2: 9, text3: 9, gap: 10 },
  md: { icon: 0.72, text1: 38, text2: 11, text3: 11, gap: 14 },
  lg: { icon: 1,    text1: 52, text2: 14, text3: 14, gap: 18 },
};

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const s = sizes[size];
  const sc = s.icon;

  const bg = variant === 'light' ? '#f8f7f4' : variant === 'blue' ? '#1a6eff' : '#16161a';
  const wordColor = variant === 'light' ? '#16161a' : '#ffffff';
  const subColor = variant === 'light' ? '#9e9d98' : 'rgba(255,255,255,0.3)';
  const barColor = '#1a6eff';
  const slashOpacity = variant === 'blue' ? 0.3 : 1;

  const iw = 60 * sc;
  const ih = 100 * sc;

  return (
    <svg
      width={iw + s.gap + 140}
      height={ih}
      viewBox={`0 0 ${iw + s.gap + 140} ${ih}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="NXT Level Builds"
    >
      {/* ── ICON MARK ── */}
      <g transform={`scale(${sc})`}>
        {/* Arrow body */}
        <polygon points="18,90 18,42 6,42 30,10 54,42 42,42 42,90" fill={wordColor} />
        {/* Blue slash */}
        <polygon points="0,68 60,28 60,44 0,84" fill="#1a6eff" opacity={slashOpacity} />
        {/* Cutouts so slash reads as cut-through */}
        <polygon points="18,90 18,62 0,74 0,84" fill={bg} />
        <polygon points="42,90 42,34 60,28 60,44" fill={bg} />
        {/* Base bar */}
        <rect x="0" y="90" width="60" height="10" rx="2" fill={barColor} />
      </g>

      {/* ── WORDMARK ── */}
      <g transform={`translate(${iw + s.gap}, 0)`}>
        {/* NXT */}
        <text
          y={ih * 0.58}
          fontFamily="var(--font-bebas), sans-serif"
          fontSize={s.text1}
          fill={wordColor}
          letterSpacing="4"
        >
          NXT
        </text>
        {/* Vertical bar divider */}
        <rect x="0" y={ih * 0.62} width="2.5" height={ih * 0.32} rx="1" fill={barColor} />
        {/* LEVEL */}
        <text
          x="10"
          y={ih * 0.75}
          fontFamily="var(--font-dm), sans-serif"
          fontSize={s.text2}
          fontWeight="600"
          fill={wordColor}
          letterSpacing="4"
        >
          LEVEL
        </text>
        {/* BUILDS */}
        <text
          x="10"
          y={ih * 0.92}
          fontFamily="var(--font-dm), sans-serif"
          fontSize={s.text3}
          fontWeight="600"
          fill={subColor}
          letterSpacing="4"
        >
          BUILDS
        </text>
      </g>
    </svg>
  );
}
