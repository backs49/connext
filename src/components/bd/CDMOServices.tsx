'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Card } from '@/components/ui/Card';

const capabilities = [
  {
    titleKey: 'capability1',
    descKey: 'capability1Desc',
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" className="fill-navy/10" />
        <circle cx="20" cy="18" r="6" stroke="#0B3D91" strokeWidth="2" />
        <path d="M14 28c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#0B3D91" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    titleKey: 'capability2',
    descKey: 'capability2Desc',
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" className="fill-bio/10" />
        <path d="M14 14h12v12H14z" stroke="#00A3E0" strokeWidth="2" strokeLinejoin="round" />
        <path d="M18 14v12M22 14v12M14 20h12" stroke="#00A3E0" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    titleKey: 'capability3',
    descKey: 'capability3Desc',
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" className="fill-teal/10" />
        <path d="M12 28l5-8 4 4 5-10 4 6" stroke="#2EC4B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    titleKey: 'capability4',
    descKey: 'capability4Desc',
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" className="fill-navy/10" />
        <path d="M16 12v8l-4 8h16l-4-8v-8" stroke="#0B3D91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="22" r="2" fill="#0B3D91" />
      </svg>
    ),
  },
];

export function CDMOServices() {
  const t = useTranslations('BD.cdmo');

  return (
    <section className="bg-surface-gray py-20 lg:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {capabilities.map((cap, index) => (
            <ScrollReveal key={cap.titleKey} delay={index * 0.1}>
              <Card hover={false} className="flex items-start gap-4">
                <div className="shrink-0">{cap.icon}</div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-navy">{t(cap.titleKey)}</h3>
                  <p className="text-gray-600">{t(cap.descKey)}</p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
