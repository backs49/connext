import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { CareersHero } from '@/components/careers/CareersHero';
import { CultureValues } from '@/components/careers/CultureValues';
import { Benefits } from '@/components/careers/Benefits';
import { JobOpenings } from '@/components/careers/JobOpenings';
import { LifeAtConnext } from '@/components/careers/LifeAtConnext';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Careers.meta' });
  return generatePageMetadata({
    title: t('title'),
    description: t('description'),
    locale,
    path: '/careers',
  });
}

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CultureValues />
      <Benefits />
      <JobOpenings />
      <LifeAtConnext />
    </>
  );
}
