'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { facilitiesData } from '@/data/facilities';
import type { Facility } from '@/data/facilities';

const typeBadgeVariant: Record<Facility['type'], 'navy' | 'bio' | 'teal'> = {
  headquarters: 'navy',
  office: 'bio',
  manufacturing: 'teal',
};

const typeLabels: Record<Facility['type'], Record<string, string>> = {
  headquarters: { ko: '본사', en: 'Headquarters' },
  office: { ko: '오피스', en: 'Office' },
  manufacturing: { ko: '제조시설', en: 'Manufacturing' },
};

export function FacilitiesSection() {
  const t = useTranslations('About.facilities');
  const locale = useLocale();

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {facilitiesData.map((facility, index) => (
            <ScrollReveal key={facility.id} delay={index * 0.1}>
              <Card className="h-full p-0 overflow-hidden" hover>
                {/* Image placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-br from-navy/5 to-bio/5 flex items-center justify-center">
                  <svg
                    className="h-12 w-12 text-navy/15"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21"
                    />
                  </svg>
                </div>

                <div className="p-5">
                  <Badge variant={typeBadgeVariant[facility.type]}>
                    {typeLabels[facility.type][locale] || typeLabels[facility.type]['en']}
                  </Badge>

                  <h3 className="mt-3 text-base font-bold text-navy">
                    {locale === 'ko' ? facility.nameKo : facility.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {locale === 'ko' ? facility.descriptionKo : facility.description}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-400">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    {locale === 'ko' ? facility.addressKo : facility.address}
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
