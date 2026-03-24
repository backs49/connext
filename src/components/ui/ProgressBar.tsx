'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  color?: 'navy' | 'bio' | 'teal';
}

const colorStyles = {
  navy: 'bg-navy',
  bio: 'bg-bio',
  teal: 'bg-teal',
};

export function ProgressBar({ value, max = 100, className, color = 'navy' }: ProgressBarProps) {
  const percent = Math.min((value / max) * 100, 100);

  return (
    <div className={cn('h-2 w-full rounded-full bg-gray-100 overflow-hidden', className)}>
      <motion.div
        className={cn('h-full rounded-full', colorStyles[color])}
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
    </div>
  );
}
