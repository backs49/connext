import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { InvestmentHighlights } from '@/components/ir/InvestmentHighlights';
import { IRDocuments } from '@/components/ir/IRDocuments';
import { IRCalendar } from '@/components/ir/IRCalendar';
import { IRContactForm } from '@/components/ir/IRContactForm';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'IR.meta' });
  return generatePageMetadata({
    title: t('title'),
    description: t('description'),
    locale,
    path: '/ir',
  });
}

export default async function IRPage() {
  const t = await getTranslations('IR.hero');

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

      <InvestmentHighlights />
      <IRDocuments />
      <IRCalendar />
      <IRContactForm />
    </>
  );
}
