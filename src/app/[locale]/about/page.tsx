import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { CompanyOverview } from '@/components/about/CompanyOverview';
import { CEOMessage } from '@/components/about/CEOMessage';
import { Timeline } from '@/components/about/Timeline';
import { TeamGrid } from '@/components/about/TeamGrid';
import { FacilitiesSection } from '@/components/about/FacilitiesSection';
import { AboutHero } from '@/components/about/AboutHero';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About.meta' });
  return generatePageMetadata({
    title: t('title'),
    description: t('description'),
    locale,
    path: '/about',
  });
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyOverview />
      <CEOMessage />
      <Timeline />
      <TeamGrid />
      <FacilitiesSection />
    </>
  );
}
