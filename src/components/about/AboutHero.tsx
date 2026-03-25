'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export function AboutHero() {
  const t = useTranslations('About.hero');

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-midnight py-20 sm:py-28 lg:py-40">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-navy-800 to-midnight" />

      {/* Subtle pattern overlay */}
      {/* Pre-computed deterministic positions to avoid hydration mismatches */}
      {(() => {
        const dotPositions = [
          { left: '8%',  top: '18%', duration: 5.4, delay: 0.3 },
          { left: '21%', top: '67%', duration: 4.2, delay: 1.1 },
          { left: '33%', top: '35%', duration: 6.5, delay: 0.7 },
          { left: '45%', top: '82%', duration: 3.9, delay: 1.8 },
          { left: '57%', top: '11%', duration: 5.7, delay: 0.2 },
          { left: '64%', top: '54%', duration: 4.6, delay: 1.5 },
          { left: '72%', top: '78%', duration: 6.1, delay: 0.9 },
          { left: '81%', top: '29%', duration: 3.6, delay: 1.3 },
          { left: '88%', top: '47%', duration: 5.2, delay: 0.5 },
          { left: '15%', top: '91%', duration: 4.8, delay: 1.9 },
          { left: '39%', top: '58%', duration: 6.3, delay: 0.1 },
          { left: '93%', top: '72%', duration: 4.0, delay: 1.6 },
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
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl whitespace-normal sm:whitespace-pre-line"
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
