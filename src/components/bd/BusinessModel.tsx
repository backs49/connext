'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Card } from '@/components/ui/Card';

const models = [
  {
    key: 'licensing',
    descKey: 'licensingDesc',
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" className="fill-navy/10" />
        <path d="M20 12v16M14 18l6-6 6 6" stroke="#0B3D91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 28h16" stroke="#0B3D91" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    accent: 'border-t-4 border-t-[#0B3D91]',
  },
  {
    key: 'codevelopment',
    descKey: 'codevelopmentDesc',
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" className="fill-bio/10" />
        <circle cx="15" cy="20" r="5" stroke="#00A3E0" strokeWidth="2" />
        <circle cx="25" cy="20" r="5" stroke="#00A3E0" strokeWidth="2" />
      </svg>
    ),
    accent: 'border-t-4 border-t-[#00A3E0]',
  },
  {
    key: 'cdmo',
    descKey: 'cdmoDesc',
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" className="fill-teal/10" />
        <path d="M16 12v8l-4 8h16l-4-8v-8" stroke="#2EC4B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 12h8" stroke="#2EC4B6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    accent: 'border-t-4 border-t-[#2EC4B6]',
  },
];

export function BusinessModel() {
  const t = useTranslations('BD.model');

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {models.map((model, index) => (
            <div key={model.key} className="relative flex">
              <ScrollReveal delay={index * 0.15} className="flex w-full">
                <Card hover={false} className={`flex flex-col items-center text-center ${model.accent}`}>
                  <div className="mb-4">{model.icon}</div>
                  <h3 className="mb-2 text-xl font-bold text-navy">{t(model.key)}</h3>
                  <p className="text-gray-600">{t(model.descKey)}</p>
                </Card>
              </ScrollReveal>

              {/* Arrow connector between cards */}
              {index < models.length - 1 && (
                <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 md:block">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="#0B3D91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
