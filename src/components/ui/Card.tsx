'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, hover = true, onClick }: CardProps) {
  return (
    <motion.div
      className={cn(
        'rounded-2xl border border-gray-100 bg-white p-6 shadow-sm',
        hover && 'cursor-pointer',
        className,
      )}
      whileHover={hover ? { y: -4, boxShadow: '0 20px 40px rgba(11, 61, 145, 0.08)' } : undefined}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
