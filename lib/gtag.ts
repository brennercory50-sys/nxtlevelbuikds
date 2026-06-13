declare global {
  interface Window {
    gtag: (command: string, target: string, params?: Record<string, unknown>) => void;
    fbq: (command: string, event: string, params?: Record<string, unknown>) => void;
  }
}

export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? '';
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '';

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
};
