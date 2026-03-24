'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { metricsData } from '@/data/metrics';

export function MetricsBanner() {
  const locale = useLocale();

  return (
    <section className="py-16 bg-surface-gray">
      <Container>
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {metricsData.map((metric) => (
              <div key={metric.id} className="text-center">
                <div className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
                  <AnimatedCounter target={metric.value} suffix={metric.suffix} />
                </div>
                <p className="mt-2 text-sm text-gray-600 sm:text-base">
                  {locale === 'ko' ? metric.labelKo : metric.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
