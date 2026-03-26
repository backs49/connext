import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Terms.meta' });
  return generatePageMetadata({
    title: t('title'),
    description: t('description'),
    locale,
    path: '/terms',
  });
}

const sectionKeys = ['general', 'service', 'ip', 'disclaimer', 'governing'] as const;

export default function TermsPage() {
  const t = useTranslations('Terms');

  return (
    <div className="pt-24 pb-20">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          {t('title')}
        </h1>
        <p className="mt-2 text-sm text-gray-400">{t('lastUpdated')}</p>

        <div className="mt-12 space-y-10">
          {sectionKeys.map((key) => (
            <section key={key}>
              <h2 className="text-xl font-bold text-navy">{t(`sections.${key}`)}</h2>
              <p className="mt-3 whitespace-pre-line text-gray-600 leading-relaxed">
                {t(`sections.${key}Text`)}
              </p>
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
