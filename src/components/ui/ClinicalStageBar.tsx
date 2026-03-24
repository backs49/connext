'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import type { ClinicalStage } from '@/types/pipeline';

interface ClinicalStageBarProps {
  stage: ClinicalStage;
  progressPercent: number;
  className?: string;
}

const stages: { key: ClinicalStage; label: string }[] = [
  { key: 'preclinical', label: 'Pre' },
  { key: 'phase1', label: 'P1' },
  { key: 'phase2', label: 'P2' },
  { key: 'phase3', label: 'P3' },
  { key: 'approved', label: 'App' },
];

const stageIndex: Record<ClinicalStage, number> = {
  preclinical: 0,
  phase1: 1,
  phase2: 2,
  phase3: 3,
  approved: 4,
};

export function ClinicalStageBar({ stage, progressPercent, className }: ClinicalStageBarProps) {
  const activeIdx = stageIndex[stage];
  const totalProgress = ((activeIdx + progressPercent / 100) / stages.length) * 100;

  return (
    <div className={cn('w-full', className)}>
      <div className="relative h-2 rounded-full bg-gray-100 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-navy via-bio to-teal"
          initial={{ width: 0 }}
          whileInView={{ width: `${totalProgress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
      <div className="mt-2 flex justify-between">
        {stages.map((s, idx) => (
          <span
            key={s.key}
            className={cn(
              'text-xs font-medium',
              idx <= activeIdx ? 'text-navy' : 'text-gray-300',
            )}
          >
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}
