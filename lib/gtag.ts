declare global {
  interface Window {
    gtag: (command: string, target: string, params?: Record<string, unknown>) => void;
    fbq: (command: string, event: string, params?: Record<string, unknown>) => void;
  }
}

export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? '';
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '';

if (typeof process !== 'undefined' && process.env?.NODE_ENV !== 'production') {
  if (!GA4_ID) console.warn('[NXT Analytics] NEXT_PUBLIC_GA4_ID not set — Google Analytics disabled');
  if (!META_PIXEL_ID) console.warn('[NXT Analytics] NEXT_PUBLIC_META_PIXEL_ID not set — Meta Pixel disabled');
}

export function trackEvent(name: string, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;
  if (window.gtag) window.gtag('event', name, params ?? {});
  if (window.fbq) window.fbq('trackCustom', name, params ?? {});
}

export const events = {
  form_submit:        (service?: string) => trackEvent('generate_lead', { lead_type: 'contact_form', service }),
  lead_confirmed:     ()                 => trackEvent('lead_confirmed'),
  phone_click:        (location: string) => trackEvent('phone_click', { location }),
  email_click:        (location: string) => trackEvent('email_click', { location }),
  cta_click:          (name: string)     => trackEvent('cta_click', { cta_name: name }),
  book_consultation:  ()                 => trackEvent('book_consultation_click'),
  audit_request:      (type: string)     => trackEvent('generate_lead', { lead_type: 'audit_request', audit_type: type }),
  blog_view:          (slug: string, cat: string) => trackEvent('blog_post_view', { post_slug: slug, category: cat }),
  case_study_view:    (slug: string, industry: string) => trackEvent('case_study_view', { project_slug: slug, industry }),
  // Chat events
  chat_opened:        ()                 => trackEvent('chat_opened'),
  chat_closed:        ()                 => trackEvent('chat_closed'),
  chat_message_sent:  (length: number)   => trackEvent('chat_message_sent', { message_length: length }),
  chat_lead_form_submit: (type: string, budget: number) => trackEvent('chat_lead_form_submit', { business_type: type, budget }),
  chat_lead_captured: (score?: number, tier?: string) => trackEvent('chat_lead_captured', { score, tier }),
  chat_lead_skipped:  ()                 => trackEvent('chat_lead_skipped'),
  chat_booking_click: ()                 => trackEvent('chat_booking_click'),
  // Exit-intent events
  exit_intent_impression: (variant: string, offer: string) => trackEvent('exit_intent_impression', { variant, offer }),
  exit_intent_dismissed:  (offer: string, variant: string) => trackEvent('exit_intent_dismissed', { offer, variant }),
  exit_intent_conversion: (offer: string, variant: string) => trackEvent('exit_intent_conversion', { offer, variant }),
};
