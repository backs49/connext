'use client';

import { useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { timelineData } from '@/data/timeline';

export function Timeline() {
  const t = useTranslations('About.timeline');
  const locale = useLocale();
  const constraintRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <Container>
        <ScrollReveal>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </ScrollReveal>
      </Container>

      {/* Horizontal timeline */}
      <div className="relative mt-8">
        <div ref={constraintRef} className="overflow-hidden px-4">
          <motion.div
            className="flex gap-0 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={constraintRef}
            dragElastic={0.1}
            style={{ x }}
          >
            {/* Left padding */}
            <div className="min-w-[20px] sm:min-w-[calc(50vw-200px)] shrink-0" />

            {timelineData.map((event, index) => (
              <div
                key={`${event.year}-${index}`}
                className="relative flex shrink-0 flex-col items-center"
                style={{ width: 240 }}
              >
                {/* Year marker */}
                <motion.div
                  className={cn(
                    'mb-4 text-2xl font-bold',
                    event.highlight ? 'text-teal' : 'text-navy/40',
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  {event.year}
                </motion.div>

                {/* Dot and line */}
                <div className="relative flex w-full items-center justify-center">
                  {/* Horizontal line */}
                  <div className="absolute inset-x-0 h-0.5 bg-gray-200" />
                  {/* Dot */}
                  <motion.div
                    className={cn(
                      'relative z-10 h-4 w-4 rounded-full border-2',
                      event.highlight
                        ? 'border-teal bg-teal shadow-lg shadow-teal/30'
                        : 'border-navy/30 bg-white',
                    )}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, type: 'spring' }}
                  />
                </div>

                {/* Content card */}
                <motion.div
                  className={cn(
                    'mt-4 w-52 rounded-2xl border p-4 text-center',
                    event.highlight
                      ? 'border-teal/20 bg-teal/5'
                      : 'border-gray-100 bg-white',
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.1 }}
                >
                  <h4
                    className={cn(
                      'text-sm font-semibold',
                      event.highlight ? 'text-teal' : 'text-navy',
                    )}
                  >
                    {locale === 'ko' ? event.titleKo : event.title}
                  </h4>
                  <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                    {locale === 'ko' ? event.descriptionKo : event.description}
                  </p>
                </motion.div>
              </div>
            ))}

            {/* Right padding */}
            <div className="min-w-[20px] sm:min-w-[calc(50vw-200px)] shrink-0" />
          </motion.div>
        </div>

        {/* Drag hint */}
        <p className="mt-6 text-center text-xs text-gray-400">
          <span className="inline-flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>
            {t('dragHint')}
          </span>
        </p>
      </div>
    </section>
  );
}
