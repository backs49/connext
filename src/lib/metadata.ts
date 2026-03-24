import type { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

interface PageMetadataOptions {
  title: string;
  description: string;
  locale: string;
  path?: string;
}

export function generatePageMetadata({
  title,
  description,
  locale,
  path = '',
}: PageMetadataOptions): Metadata {
  const url = `${SITE_CONFIG.url}${locale === 'ko' ? '' : '/en'}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ko: `${SITE_CONFIG.url}${path}`,
        en: `${SITE_CONFIG.url}/en${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: locale === 'ko' ? 'ko_KR' : 'en_US',
      type: 'website',
    },
  };
}
