'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface JobListing {
  title: string;
  titleKo: string;
  department: string;
  location: string;
  locationKo: string;
  type: string;
  typeKo: string;
}

const jobs: JobListing[] = [
  {
    title: 'Senior Researcher (Immunology)',
    titleKo: '선임연구원 (면역학)',
    department: 'R&D',
    location: 'Chungbuk',
    locationKo: '충북',
    type: 'Full-time',
    typeKo: '정규직',
  },
  {
    title: 'Clinical Operations Manager',
    titleKo: '임상운영 매니저',
    department: 'Clinical',
    location: 'Seoul',
    locationKo: '서울',
    type: 'Full-time',
    typeKo: '정규직',
  },
  {
    title: 'Business Development Associate',
    titleKo: 'BD 담당자',
    department: 'BD',
    location: 'Seoul',
    locationKo: '서울',
    type: 'Full-time',
    typeKo: '정규직',
  },
];

export function JobOpenings() {
  const t = useTranslations('Careers.openings');
  const locale = useLocale();
  const isKo = locale === 'ko';

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </ScrollReveal>

        <div className="space-y-4">
          {jobs.map((job, index) => (
            <ScrollReveal key={job.title} delay={index * 0.1}>
              <Card hover={true} className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-bold text-navy">
                    {isKo ? job.titleKo : job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="navy">{job.department}</Badge>
                    <span className="text-sm text-gray-500">
                      {t('location')}: {isKo ? job.locationKo : job.location}
                    </span>
                    <span className="text-sm text-gray-400">|</span>
                    <span className="text-sm text-gray-500">
                      {t('type')}: {isKo ? job.typeKo : job.type}
                    </span>
                  </div>
                </div>
                <div className="shrink-0">
                  <Button variant="secondary" size="sm">
                    {t('apply')}
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
