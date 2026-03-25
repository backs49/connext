'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function VisionStatement() {
  const t = useTranslations('Home.vision');

  return (
    <section className="py-24">
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-bio">
              {t('title')}
            </span>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              {t('statement')}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 whitespace-normal sm:whitespace-pre-line">
              {t('description')}
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
