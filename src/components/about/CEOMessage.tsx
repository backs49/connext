'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function CEOMessage() {
  const t = useTranslations('About.ceo');

  return (
    <section className="py-20 lg:py-28 bg-surface-gray">
      <Container>
        <ScrollReveal>
          <SectionHeading title={t('title')} />
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left: CEO photo placeholder */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-navy/10 to-bio/10 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <svg
                    className="mx-auto h-24 w-24 text-navy/20"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={0.8}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-teal/10 -z-10" />
            </div>
          </ScrollReveal>

          {/* Right: CEO message text */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <motion.div
                className="h-1 w-16 bg-gradient-to-r from-navy to-bio rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <blockquote className="space-y-4">
                {t('message')
                  .split('\n')
                  .filter((p: string) => p.trim())
                  .map((paragraph: string, idx: number) => (
                    <p
                      key={idx}
                      className="text-gray-700 leading-relaxed text-base lg:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
              </blockquote>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-lg font-bold text-navy">{t('name')}</p>
                <p className="text-sm text-gray-500">{t('position')}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
