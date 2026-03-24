import type { MetadataRoute } from 'next';

const BASE_URL = 'https://connext.co.kr';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/science'];
  const locales = ['ko', 'en'];

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${BASE_URL}${locale === 'ko' ? '' : '/en'}${page}`,
      lastModified: new Date(),
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
