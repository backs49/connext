'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export function CareersHero() {
  const t = useTranslations('Careers.hero');

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-midnight py-20 sm:py-28 lg:py-40">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-navy-800 to-midnight" />

      {/* Subtle pattern overlay */}
      {/* Pre-computed deterministic positions to avoid hydration mismatches */}
      {(() => {
        const dotPositions = [
          { left: '9%',  top: '31%', duration: 5.3, delay: 0.6 },
          { left: '22%', top: '55%', duration: 4.0, delay: 1.3 },
          { left: '31%', top: '19%', duration: 6.7, delay: 0.2 },
          { left: '48%', top: '74%', duration: 3.8, delay: 1.8 },
          { left: '56%', top: '40%', duration: 5.6, delay: 0.4 },
          { left: '62%', top: '88%', duration: 4.7, delay: 1.0 },
          { left: '70%', top: '13%', duration: 6.2, delay: 0.8 },
          { left: '78%', top: '62%', duration: 3.6, delay: 1.5 },
          { left: '85%', top: '27%', duration: 5.0, delay: 0.1 },
          { left: '14%', top: '83%', duration: 4.4, delay: 1.7 },
          { left: '42%', top: '47%', duration: 6.5, delay: 0.9 },
          { left: '91%', top: '69%', duration: 4.2, delay: 1.1 },
        ];
        return (
          <div className="absolute inset-0 overflow-hidden">
            {dotPositions.map((pos, i) => (
              <motion.div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-bio/15"
                style={{ left: pos.left, top: pos.top }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.15, 0.4, 0.15],
                }}
                transition={{
                  duration: pos.duration,
                  repeat: Infinity,
                  delay: pos.delay,
                }}
              />
            ))}
          </div>
        );
      })()}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {t('title')}
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl whitespace-pre-line"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {t('subtitle')}
        </motion.p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
