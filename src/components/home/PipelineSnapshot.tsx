'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ClinicalStageBar } from '@/components/ui/ClinicalStageBar';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { pipelineData } from '@/data/pipeline';

const platformLabels = {
  'tlr5-agonist': { en: 'TLR5 Agonist', ko: 'TLR5 작용제' },
  collagenase: { en: 'Collagenase', ko: '콜라게나제' },
};

export function PipelineSnapshot() {
  const t = useTranslations('Home.pipeline');
  const locale = useLocale();
  const topPipeline = pipelineData.slice(0, 4);

  return (
    <section className="py-24 bg-surface-gray">
      <Container>
        <ScrollReveal>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topPipeline.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 0.1}>
              <Card className="h-full flex flex-col">
                <Badge variant={item.platform === 'tlr5-agonist' ? 'bio' : 'teal'}>
                  {locale === 'ko'
                    ? platformLabels[item.platform].ko
                    : platformLabels[item.platform].en}
                </Badge>
                <h3 className="mt-3 text-lg font-bold text-navy">
                  {item.candidateName}
                </h3>
                <p className="mt-1 text-sm text-gray-600 flex-1">
                  {locale === 'ko' ? item.indicationKo : item.indication}
                </p>
                <ClinicalStageBar
                  stage={item.stage}
                  progressPercent={item.progressPercent}
                  className="mt-4"
                />
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-10 text-center">
            <Link href="/science">
              <Button variant="secondary">{t('viewAll')}</Button>
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
