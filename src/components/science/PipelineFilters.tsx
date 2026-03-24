'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import type { Platform, ClinicalStage } from '@/types/pipeline';

interface PipelineFiltersProps {
  activePlatform: Platform | 'all';
  activeStage: ClinicalStage | 'all';
  onPlatformChange: (platform: Platform | 'all') => void;
  onStageChange: (stage: ClinicalStage | 'all') => void;
}

export function PipelineFilters({
  activePlatform,
  activeStage,
  onPlatformChange,
  onStageChange,
}: PipelineFiltersProps) {
  const t = useTranslations('Science.pipeline');

  const platformFilters: { key: Platform | 'all'; label: string }[] = [
    { key: 'all', label: t('filterAll') },
    { key: 'tlr5-agonist', label: t('filterTLR5') },
    { key: 'collagenase', label: t('filterCollagenase') },
  ];

  const stageFilters: { key: ClinicalStage | 'all'; label: string }[] = [
    { key: 'all', label: t('filterAll') },
    { key: 'preclinical', label: t('filterPreclinical') },
    { key: 'phase1', label: t('filterPhase1') },
    { key: 'phase2', label: t('filterPhase2') },
    { key: 'phase3', label: t('filterPhase3') },
  ];

  return (
    <div className="space-y-4">
      {/* Platform filters */}
      <div className="flex flex-wrap gap-2">
        {platformFilters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => onPlatformChange(filter.key)}
            className={cn(
              'rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200',
              activePlatform === filter.key
                ? 'bg-navy text-white shadow-sm'
                : 'border border-gray-200 bg-white text-gray-600 hover:border-navy hover:text-navy',
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Stage filters */}
      <div className="flex flex-wrap gap-2">
        {stageFilters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => onStageChange(filter.key)}
            className={cn(
              'rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200',
              activeStage === filter.key
                ? 'bg-navy text-white shadow-sm'
                : 'border border-gray-200 bg-white text-gray-600 hover:border-navy hover:text-navy',
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}
