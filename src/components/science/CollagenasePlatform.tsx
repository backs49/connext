'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function CollagenasePlatform() {
  const t = useTranslations('Science.collagenase');

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionHeading
          title={t('title')}
          subtitle={t('subtitle')}
          badge="Collagenase"
        />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Description */}
          <ScrollReveal direction="left">
            <div>
              <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                {t('description')}
              </p>

              {/* Key advantages */}
              <ul className="mt-8 space-y-4">
                {[
                  { label: 'High Purity', color: 'bg-teal' },
                  { label: 'Consistent Quality', color: 'bg-teal' },
                  { label: 'Scalable Production', color: 'bg-teal' },
                ].map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <span className={`h-2 w-2 rounded-full ${item.color}`} />
                    <span className="font-medium text-navy">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Diagram Placeholder */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative flex items-center justify-center rounded-2xl border-2 border-dashed border-teal/30 bg-teal-50/50 p-6 sm:p-12 aspect-square max-h-[420px]">
              {/* Placeholder illustration */}
              <div className="flex flex-col items-center gap-4 text-center">
                <svg
                  className="h-24 w-24 text-teal"
                  fill="none"
                  viewBox="0 0 96 96"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  {/* Triple helix representing collagen */}
                  <path
                    d="M32 16c0 0 8 16 0 32s0 32 0 32"
                    strokeLinecap="round"
                  />
                  <path
                    d="M48 16c0 0 -8 16 0 32s0 32 0 32"
                    strokeLinecap="round"
                  />
                  <path
                    d="M64 16c0 0 8 16 0 32s0 32 0 32"
                    strokeLinecap="round"
                  />
                  {/* Cross-links */}
                  <line x1="32" y1="32" x2="48" y2="32" strokeWidth={0.75} />
                  <line x1="48" y1="48" x2="64" y2="48" strokeWidth={0.75} />
                  <line x1="32" y1="64" x2="48" y2="64" strokeWidth={0.75} />
                  {/* Enzyme scissors */}
                  <circle cx="72" cy="40" r="8" strokeWidth={1.5} />
                  <path d="M68 40h8M72 36v8" strokeWidth={1.5} />
                </svg>
                <p className="text-sm font-medium text-teal-600">
                  Recombinant Collagenase Mechanism
                </p>
                <p className="text-xs text-gray-400">
                  (Diagram placeholder)
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
