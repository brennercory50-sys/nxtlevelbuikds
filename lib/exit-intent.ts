export interface OfferConfig {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  icon: string;
  value: string;
  apiType: string;
}

export const OFFERS: Record<string, OfferConfig> = {
  'website-audit': {
    id: 'website-audit',
    title: 'Get Your Free Website Audit',
    subtitle: 'No strings attached — just real, actionable feedback',
    description: 'We\'ll analyze your site\'s performance, SEO, mobile experience, and conversion paths. You\'ll get a custom Loom video walking through every opportunity we find. Value:',
    cta: 'Get My Free Website Audit',
    icon: '🌐',
    value: '$497',
    apiType: 'website-audit',
  },
  'seo-audit': {
    id: 'seo-audit',
    title: 'Free Local SEO Audit',
    subtitle: 'See exactly where you rank and what\'s missing',
    description: 'We\'ll pull your Google Maps rankings, analyze your local competition, and identify every SEO gap holding you back from page one. Complete with a priority action plan. Value:',
    cta: 'Get My Free SEO Audit',
    icon: '📈',
    value: '$397',
    apiType: 'seo-audit',
  },
  'ai-assessment': {
    id: 'ai-assessment',
    title: 'Free AI Automation Assessment',
    subtitle: 'Discover what your business can automate',
    description: 'We\'ll audit your current workflows and identify where AI automation can save you 10+ hours per week. You\'ll get a custom roadmap with ROI estimates for each opportunity. Value:',
    cta: 'Get My Free Assessment',
    icon: '🤖',
    value: '$597',
    apiType: 'ai-assessment',
  },
};

export const AB_VARIANTS = [
  { id: 'A', delay: 0, urgency: false, label: 'Standard' },
  { id: 'B', delay: 2000, urgency: true, label: 'Delayed + Urgency' },
];

const STORAGE_KEYS = {
  variant: 'ei_ab_variant',
  dismissed: 'ei_dismissed',
  converted: 'ei_converted',
};

function getStorage(key: string): string | null {
  try { return localStorage.getItem(key); } catch { return null; }
}

function setStorage(key: string, value: string): void {
  try { localStorage.setItem(key, value); } catch { /* quota */ }
}

export function getOfferForPath(path: string): string {
  if (path.includes('/services/seo') || path.includes('/free-seo-audit')) return 'seo-audit';
  if (path.includes('/services/ai-automation') || path.includes('/services/google-ads')) return 'ai-assessment';
  if (path.includes('/services/web-design') || path.includes('/work') || path.includes('/pricing')) return 'website-audit';
  return 'website-audit';
}

export function assignVariant(): string {
  const stored = getStorage(STORAGE_KEYS.variant);
  if (stored && (stored === 'A' || stored === 'B')) return stored;
  const variant = Math.random() < 0.5 ? 'A' : 'B';
  setStorage(STORAGE_KEYS.variant, variant);
  return variant;
}

export function getVariant(): (typeof AB_VARIANTS)[number] {
  const id = assignVariant();
  return AB_VARIANTS.find(v => v.id === id) || AB_VARIANTS[0];
}

export function hasConverted(): boolean {
  return !!getStorage(STORAGE_KEYS.converted);
}

export function markConverted(): void {
  setStorage(STORAGE_KEYS.converted, Date.now().toString());
}

export function wasDismissedRecently(): boolean {
  const raw = getStorage(STORAGE_KEYS.dismissed);
  if (!raw) return false;
  const ts = parseInt(raw, 10);
  if (isNaN(ts)) return false;
  return Date.now() - ts < 7 * 24 * 60 * 60 * 1000;
}

export function markDismissed(): void {
  setStorage(STORAGE_KEYS.dismissed, Date.now().toString());
}

export function resetExitIntentStorage(): void {
  try {
    localStorage.removeItem(STORAGE_KEYS.variant);
    localStorage.removeItem(STORAGE_KEYS.dismissed);
    localStorage.removeItem(STORAGE_KEYS.converted);
  } catch { /* ignore */ }
}

export interface ExitIntentOptions {
  onTrigger: () => void;
  enabled?: boolean;
}

export function createExitIntentDetector({ onTrigger, enabled = true }: ExitIntentOptions) {
  if (typeof window === 'undefined' || !enabled) return () => {};

  let triggered = false;
  let lastY = -1;
  let lastTime = 0;
  let mobileTimer: ReturnType<typeof setTimeout> | null = null;
  let scrollChecked = false;

  const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;

  const fire = () => {
    if (triggered) return;
    triggered = true;
    onTrigger();
  };

  const handleMouseMove = (e: MouseEvent) => {
    const y = e.clientY;
    const now = Date.now();
    if (lastY > 80 && y <= 50 && (now - lastTime) < 600) {
      fire();
      cleanup();
    }
    lastY = y;
    lastTime = now;
  };

  const handleScroll = () => {
    if (scrollChecked) return;
    const scrollPct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    if (scrollPct >= 0.8) {
      scrollChecked = true;
      fire();
      if (mobileTimer) clearTimeout(mobileTimer);
    }
  };

  const cleanup = () => {
    if (!isMobile) {
      document.removeEventListener('mouseleave', fire);
      document.removeEventListener('mousemove', handleMouseMove);
    } else {
      if (mobileTimer) clearTimeout(mobileTimer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', fire);
    }
  };

  if (!isMobile) {
    document.addEventListener('mouseleave', fire);
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
  } else {
    mobileTimer = setTimeout(fire, 45_000);
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  window.addEventListener('popstate', fire);
  return cleanup;
}
