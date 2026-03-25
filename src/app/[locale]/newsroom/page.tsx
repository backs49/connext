import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { NewsroomContent } from '@/components/newsroom/NewsroomContent';
import { NewsletterSubscribe } from '@/components/newsroom/NewsletterSubscribe';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Newsroom.meta' });
  return generatePageMetadata({
    title: t('title'),
    description: t('description'),
    locale,
    path: '/newsroom',
  });
}

export default async function NewsroomPage() {
  const t = await getTranslations('Newsroom.hero');

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-midnight py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight via-navy-800 to-midnight" />
        <Container className="relative z-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t('title')}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 whitespace-pre-line">
            {t('subtitle')}
          </p>
        </Container>
      </section>

      <NewsroomContent />
      <NewsletterSubscribe />
    </>
  );
}
