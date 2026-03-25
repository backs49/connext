'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const benefits = [
  {
    key: 'item1',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" stroke="#0B3D91" strokeWidth="2" />
        <path d="M16 10v6l4 4" stroke="#0B3D91" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'item2',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none">
        <path d="M10 18l4 4 8-10" stroke="#00A3E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="6" y="8" width="20" height="16" rx="2" stroke="#00A3E0" strokeWidth="2" />
      </svg>
    ),
  },
  {
    key: 'item3',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none">
        <path d="M8 26V8l8-4 8 4v18l-8-4-8 4z" stroke="#2EC4B6" strokeWidth="2" strokeLinejoin="round" />
        <path d="M16 4v18" stroke="#2EC4B6" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    key: 'item4',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none">
        <path d="M16 28s-9-5.5-9-13a9 9 0 0118 0c0 7.5-9 13-9 13z" stroke="#0B3D91" strokeWidth="2" />
        <path d="M13 16l2 2 4-4" stroke="#0B3D91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'item5',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none">
        <circle cx="12" cy="14" r="3" stroke="#00A3E0" strokeWidth="2" />
        <circle cx="20" cy="14" r="3" stroke="#00A3E0" strokeWidth="2" />
        <path d="M8 26c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4" stroke="#00A3E0" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'item6',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none">
        <path d="M16 6v20M10 14l6-8 6 8" stroke="#2EC4B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function Benefits() {
  const t = useTranslations('Careers.benefits');

  return (
    <section className="bg-surface-gray py-20 lg:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.key} delay={index * 0.08}>
              <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-4 sm:p-6 text-center shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50">
                  {benefit.icon}
                </div>
                <span className="text-sm font-semibold text-navy sm:text-base">{t(benefit.key)}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
