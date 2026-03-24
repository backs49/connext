'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { newsData } from '@/data/news';

const categoryLabels = {
  press: { en: 'Press Release', ko: '보도자료' },
  publication: { en: 'Publication', ko: '논문' },
  event: { en: 'Event', ko: '행사' },
};

export function LatestNews() {
  const t = useTranslations('Home.news');
  const locale = useLocale();
  const latestNews = newsData.slice(0, 3);

  return (
    <section className="py-24">
      <Container>
        <ScrollReveal>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {latestNews.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 0.1}>
              <Card className="h-full flex flex-col">
                <div className="flex items-center justify-between">
                  <Badge variant="navy">
                    {locale === 'ko'
                      ? categoryLabels[item.category].ko
                      : categoryLabels[item.category].en}
                  </Badge>
                  <time className="text-xs text-gray-400">
                    {new Date(item.date).toLocaleDateString(
                      locale === 'ko' ? 'ko-KR' : 'en-US',
                      { year: 'numeric', month: 'short', day: 'numeric' },
                    )}
                  </time>
                </div>
                <h3 className="mt-3 text-base font-bold text-navy line-clamp-2">
                  {locale === 'ko' ? item.titleKo : item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3 flex-1">
                  {locale === 'ko' ? item.summaryKo : item.summary}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
