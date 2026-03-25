'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

export function InvestmentHighlights() {
  const t = useTranslations('IR.highlights');

  const highlights = [
    {
      label: t('totalInvestment'),
      target: 150,
      suffix: '억+',
      description: '₩',
    },
    {
      label: t('investors'),
      target: 6,
      suffix: '+',
      description: '',
    },
    {
      label: t('seriesStage'),
      target: 0,
      suffix: '',
      description: 'Series C',
      isText: true,
    },
    {
      label: t('founded'),
      target: 2017,
      suffix: '',
      description: '',
      isYear: true,
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {highlights.map((item, index) => (
            <ScrollReveal key={item.label} delay={index * 0.1}>
              <div className="rounded-2xl border border-gray-100 bg-white p-4 sm:p-6 lg:p-8 text-center shadow-sm">
                <div className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
                  {item.isText ? (
                    <span>{item.description}</span>
                  ) : item.isYear ? (
                    <AnimatedCounter
                      target={item.target}
                      suffix={item.suffix}
                    />
                  ) : (
                    <span>
                      {item.description}
                      <AnimatedCounter
                        target={item.target}
                        suffix={item.suffix}
                      />
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm font-medium text-gray-500">
                  {item.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
