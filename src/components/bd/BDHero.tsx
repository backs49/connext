'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export function BDHero() {
  const t = useTranslations('BD.hero');

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-midnight py-20 sm:py-28 lg:py-40">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-navy-800 to-midnight" />

      {/* Subtle pattern overlay */}
      {/* Pre-computed deterministic positions to avoid hydration mismatches */}
      {(() => {
        const dotPositions = [
          { left: '6%',  top: '24%', duration: 5.1, delay: 0.4 },
          { left: '17%', top: '71%', duration: 4.3, delay: 1.2 },
          { left: '29%', top: '42%', duration: 6.6, delay: 0.8 },
          { left: '43%', top: '86%', duration: 3.7, delay: 1.7 },
          { left: '54%', top: '15%', duration: 5.8, delay: 0.2 },
          { left: '66%', top: '57%', duration: 4.5, delay: 1.4 },
          { left: '75%', top: '33%', duration: 6.0, delay: 0.6 },
          { left: '83%', top: '79%', duration: 3.5, delay: 1.9 },
          { left: '90%', top: '51%', duration: 5.5, delay: 0.1 },
          { left: '12%', top: '93%', duration: 4.9, delay: 1.6 },
          { left: '37%', top: '62%', duration: 6.4, delay: 0.5 },
          { left: '95%', top: '18%', duration: 4.1, delay: 1.0 },
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
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {t('title')}
        </h1>
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
