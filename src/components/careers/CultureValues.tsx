'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const values = [
  {
    titleKey: 'value1',
    descKey: 'value1Desc',
    accent: 'border-t-[#0B3D91]',
    iconBg: 'bg-[#0B3D91]/10',
    iconColor: '#0B3D91',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none">
        <path d="M16 6l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" stroke="#0B3D91" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    titleKey: 'value2',
    descKey: 'value2Desc',
    accent: 'border-t-[#00A3E0]',
    iconBg: 'bg-[#00A3E0]/10',
    iconColor: '#00A3E0',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none">
        <path d="M16 28s-9-5.5-9-13a9 9 0 0118 0c0 7.5-9 13-9 13z" stroke="#00A3E0" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="16" cy="15" r="3" stroke="#00A3E0" strokeWidth="2" />
      </svg>
    ),
  },
  {
    titleKey: 'value3',
    descKey: 'value3Desc',
    accent: 'border-t-[#2EC4B6]',
    iconBg: 'bg-[#2EC4B6]/10',
    iconColor: '#2EC4B6',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none">
        <circle cx="11" cy="14" r="4" stroke="#2EC4B6" strokeWidth="2" />
        <circle cx="21" cy="14" r="4" stroke="#2EC4B6" strokeWidth="2" />
        <path d="M6 26c0-3 2.2-5 5-5h2c1.4 0 2.6.5 3 1.3.4-.8 1.6-1.3 3-1.3h2c2.8 0 5 2 5 5" stroke="#2EC4B6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    titleKey: 'value4',
    descKey: 'value4Desc',
    accent: 'border-t-[#0B3D91]',
    iconBg: 'bg-[#0B3D91]/10',
    iconColor: '#0B3D91',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none">
        <path d="M16 6v20M10 14l6-8 6 8" stroke="#0B3D91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 24h16" stroke="#0B3D91" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function CultureValues() {
  const t = useTranslations('Careers.culture');

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {values.map((value, index) => (
            <ScrollReveal key={value.titleKey} delay={index * 0.1}>
              <div
                className={`rounded-2xl border border-gray-100 bg-white p-8 shadow-sm border-t-4 ${value.accent}`}
              >
                <div className={`mb-4 inline-flex items-center justify-center rounded-xl p-3 ${value.iconBg}`}>
                  {value.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-navy">{t(value.titleKey)}</h3>
                <p className="text-gray-600">{t(value.descKey)}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
