'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

function FileIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

export function IRDocuments() {
  const t = useTranslations('IR.documents');

  const documents = [
    { key: 'businessReport', icon: FileIcon },
    { key: 'investorDeck', icon: FileIcon },
    { key: 'financialData', icon: FileIcon },
  ] as const;

  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <Container>
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc, index) => (
            <ScrollReveal key={doc.key} delay={index * 0.1}>
              <Card hover={false} className="flex flex-col items-center p-8 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-navy-50 text-navy">
                  <doc.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-navy">
                  {t(doc.key)}
                </h3>
                <div className="mt-6 w-full">
                  <Button
                    variant="secondary"
                    size="sm"
                    disabled
                    className="w-full"
                  >
                    {t('comingSoon')}
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
