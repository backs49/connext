type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

export function trackEvent({ action, category, label, value }: GTagEvent) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
}

// Pre-defined events for the site
export const analytics = {
  formSubmit: (formName: string) =>
    trackEvent({ action: 'form_submit', category: 'engagement', label: formName }),

  ctaClick: (ctaName: string) =>
    trackEvent({ action: 'cta_click', category: 'engagement', label: ctaName }),

  pipelineView: (candidateName: string) =>
    trackEvent({ action: 'pipeline_detail_view', category: 'content', label: candidateName }),

  documentDownload: (docName: string) =>
    trackEvent({ action: 'document_download', category: 'engagement', label: docName }),

  newsletterSubscribe: () =>
    trackEvent({ action: 'newsletter_subscribe', category: 'conversion' }),

  localeSwitch: (locale: string) =>
    trackEvent({ action: 'locale_switch', category: 'engagement', label: locale }),
};
