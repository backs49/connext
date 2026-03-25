import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { BDHero } from '@/components/bd/BDHero';
import { BusinessModel } from '@/components/bd/BusinessModel';
import { CDMOServices } from '@/components/bd/CDMOServices';
import { PartnershipForm } from '@/components/bd/PartnershipForm';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'BD.meta' });
  return generatePageMetadata({
    title: t('title'),
    description: t('description'),
    locale,
    path: '/bd',
  });
}

export default function BDPage() {
  return (
    <>
      <BDHero />
      <BusinessModel />
      <CDMOServices />
      <PartnershipForm />
    </>
  );
}
