import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { HeroSection } from '@/components/home/HeroSection';
import { MetricsBanner } from '@/components/home/MetricsBanner';
import { VisionStatement } from '@/components/home/VisionStatement';
import { PipelineSnapshot } from '@/components/home/PipelineSnapshot';
import { LatestNews } from '@/components/home/LatestNews';
import { PartnersGrid } from '@/components/home/PartnersGrid';
import { GlobalCTA } from '@/components/home/GlobalCTA';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Home.meta' });
  return generatePageMetadata({
    title: t('title'),
    description: t('description'),
    locale,
  });
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsBanner />
      <VisionStatement />
      <PipelineSnapshot />
      <LatestNews />
      <PartnersGrid />
      <GlobalCTA />
    </>
  );
}
