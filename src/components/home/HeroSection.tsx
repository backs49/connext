'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Link } from '@/i18n/navigation';

export function HeroSection() {
  const t = useTranslations('Home.hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-midnight">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-navy-800 to-midnight" />

      {/* Animated molecular dots */}
      {/* Pre-computed deterministic positions to avoid hydration mismatches */}
      {(() => {
        const dotPositions = [
          { left: '7%',  top: '14%', duration: 5.2, delay: 0.3 },
          { left: '19%', top: '63%', duration: 4.1, delay: 1.1 },
          { left: '28%', top: '31%', duration: 6.7, delay: 0.7 },
          { left: '34%', top: '82%', duration: 3.8, delay: 1.8 },
          { left: '41%', top: '9%',  duration: 5.9, delay: 0.1 },
          { left: '47%', top: '53%', duration: 4.4, delay: 1.5 },
          { left: '53%', top: '76%', duration: 6.2, delay: 0.9 },
          { left: '58%', top: '22%', duration: 3.5, delay: 1.3 },
          { left: '63%', top: '44%', duration: 5.6, delay: 0.5 },
          { left: '69%', top: '88%', duration: 4.8, delay: 1.9 },
          { left: '74%', top: '37%', duration: 6.1, delay: 0.2 },
          { left: '79%', top: '61%', duration: 3.9, delay: 1.6 },
          { left: '83%', top: '17%', duration: 5.3, delay: 0.8 },
          { left: '88%', top: '72%', duration: 4.6, delay: 1.2 },
          { left: '11%', top: '48%', duration: 6.4, delay: 0.4 },
          { left: '23%', top: '91%', duration: 3.7, delay: 1.7 },
          { left: '37%', top: '26%', duration: 5.1, delay: 0.6 },
          { left: '55%', top: '58%', duration: 4.9, delay: 1.4 },
          { left: '71%', top: '5%',  duration: 6.8, delay: 0.0 },
          { left: '92%', top: '39%', duration: 4.3, delay: 1.0 },
        ];
        return (
          <div className="absolute inset-0 overflow-hidden">
            {dotPositions.map((pos, i) => (
              <motion.div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-bio/20"
                style={{ left: pos.left, top: pos.top }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.5, 0.2],
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
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="inline-block rounded-full border border-bio/30 bg-bio/10 px-4 py-1.5 text-sm font-medium text-bio">
            {t('tagline')}
          </span>
        </motion.div>

        <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl whitespace-normal sm:whitespace-pre-line">
          {t('headline')}
        </h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl whitespace-normal sm:whitespace-pre-line"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t('subheadline')}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <Link href="/science">
            <Button variant="accent" size="lg">
              {t('ctaPipeline')}
            </Button>
          </Link>
          <Button variant="outline-inverse" size="lg">
            {t('ctaInvestor')}
          </Button>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-gray to-transparent" />
    </section>
  );
}
