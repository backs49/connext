import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { TLR5Platform } from '@/components/science/TLR5Platform';
import { CollagenasePlatform } from '@/components/science/CollagenasePlatform';
import { PipelineDashboard } from '@/components/science/PipelineDashboard';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Science.meta' });
  return generatePageMetadata({
    title: t('title'),
    description: t('description'),
    locale,
    path: '/science',
  });
}

export default function SciencePage() {
  const t = useTranslations('Science.hero');

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-midnight py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-midnight" />
        <Container className="relative z-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t('title')}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 whitespace-pre-line">
            {t('subtitle')}
          </p>
        </Container>
      </section>

      {/* Platform Sections */}
      <TLR5Platform />
      <CollagenasePlatform />

      {/* Pipeline Dashboard */}
      <PipelineDashboard />
    </>
  );
}
