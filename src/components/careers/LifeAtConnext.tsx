'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const placeholders = [
  { label: 'Lab Life', aspect: 'aspect-[4/3]' },
  { label: 'Team Building', aspect: 'aspect-square' },
  { label: 'Office', aspect: 'aspect-square' },
  { label: 'Workshop', aspect: 'aspect-[4/3]' },
];

function CameraIcon() {
  return (
    <svg
      className="h-10 w-10 text-navy/25"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
      />
    </svg>
  );
}

export function LifeAtConnext() {
  const t = useTranslations('Careers.life');

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {placeholders.map((item, index) => (
            <ScrollReveal key={item.label} delay={index * 0.1}>
              <div
                className={`${item.aspect} flex flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-navy-50 to-bio-50`}
              >
                <CameraIcon />
                <span className="text-xs font-semibold uppercase tracking-widest text-navy/40">
                  {item.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
