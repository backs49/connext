'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const placeholders = [
  { label: 'Lab Life', aspect: 'aspect-[4/3]' },
  { label: 'Team Building', aspect: 'aspect-square' },
  { label: 'Office', aspect: 'aspect-square' },
  { label: 'Workshop', aspect: 'aspect-[4/3]' },
];

export function LifeAtConnext() {
  const t = useTranslations('Careers.life');

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {placeholders.map((item, index) => (
            <ScrollReveal key={item.label} delay={index * 0.1}>
              <div
                className={`${item.aspect} flex items-center justify-center rounded-2xl bg-gray-200`}
              >
                <span className="text-sm font-medium text-gray-400">{item.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
