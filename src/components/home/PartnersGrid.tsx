'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { partnersData } from '@/data/partners';

export function PartnersGrid() {
  const t = useTranslations('Home.partners');

  return (
    <section className="py-24 bg-surface-gray">
      <Container>
        <ScrollReveal>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-3 gap-8 md:grid-cols-6 items-center">
            {partnersData.map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center rounded-xl border border-gray-100 bg-white p-6 grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:shadow-md"
              >
                <div className="text-center">
                  <div className="h-8 w-20 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                    {partner.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
