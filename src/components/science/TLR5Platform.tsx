'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { cn } from '@/lib/utils';

const stepIcons = [
  // Immune Recognition - shield icon
  (
    <svg className="h-12 w-12 text-bio" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M24 4l16 8v12c0 10-8 18-16 20C16 42 8 34 8 24V12l16-8z" />
      <circle cx="24" cy="24" r="6" />
    </svg>
  ),
  // Cytokine Modulation - signal/wave icon
  (
    <svg className="h-12 w-12 text-bio" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 24c0-6.627 5.373-12 12-12s12 5.373 12 12" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 24a6 6 0 1112 0" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 24c0-9.941 8.059-18 18-18s18 8.059 18 18" />
    </svg>
  ),
  // Therapeutic Effect - checkmark/heart icon
  (
    <svg className="h-12 w-12 text-bio" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M24 42s-16-10.4-16-22a10 10 0 0116-8 10 10 0 0116 8c0 11.6-16 22-16 22z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 22l4 4 8-8" />
    </svg>
  ),
];

export function TLR5Platform() {
  const t = useTranslations('Science.tlr5');

  const steps = [
    { title: t('step1Title'), desc: t('step1Desc'), icon: stepIcons[0] },
    { title: t('step2Title'), desc: t('step2Desc'), icon: stepIcons[1] },
    { title: t('step3Title'), desc: t('step3Desc'), icon: stepIcons[2] },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading
          title={t('title')}
          subtitle={t('subtitle')}
          badge="TLR5"
        />

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-16 left-[10%] right-[10%] hidden h-0.5 bg-gradient-to-r from-bio/20 via-bio to-bio/20 md:block" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
            {steps.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.2} direction="up">
                <div className="relative flex flex-col items-center text-center">
                  {/* Step number & icon */}
                  <div className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-bio-50 ring-4 ring-white">
                    <span className="mb-1 text-xs font-bold uppercase tracking-widest text-bio-500">
                      Step {idx + 1}
                    </span>
                    {step.icon}
                  </div>

                  {/* Arrow between steps (mobile) */}
                  {idx < steps.length - 1 && (
                    <div className="my-4 md:hidden">
                      <svg className="h-6 w-6 text-bio" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}

                  <h3 className="mt-6 text-xl font-bold text-navy">{step.title}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed max-w-xs">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
