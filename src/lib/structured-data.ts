import { SITE_CONFIG } from './constants';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CONNEXT Inc.',
    alternateName: '주식회사 코넥스트',
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo/connext-logo.svg`, // TODO: add real logo asset at public/images/logo/connext-logo.svg
    description: SITE_CONFIG.description.en,
    foundingDate: '2017',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      email: SITE_CONFIG.social.email,
      contactType: 'general',
    },
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    inLanguage: ['ko-KR', 'en-US'],
  };
}
