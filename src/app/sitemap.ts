import type { MetadataRoute } from 'next';

const BASE_URL = 'https://connext.co.kr';
const LAST_MODIFIED = new Date('2026-03-26');

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/science', '/ir', '/newsroom', '/bd', '/careers'];
  const locales = ['ko', 'en'];

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${BASE_URL}${locale === 'ko' ? '' : '/en'}${page}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly' as const,
      priority: page === '' ? 1 : 0.8,
      alternates: {
        languages: {
          ko: `${BASE_URL}${page}`,
          en: `${BASE_URL}/en${page}`,
        },
      },
    })),
  );
}
