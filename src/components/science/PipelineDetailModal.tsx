'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Modal } from '@/components/ui/Modal';
import { Badge } from '@/components/ui/Badge';
import { ClinicalStageBar } from '@/components/ui/ClinicalStageBar';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { cn } from '@/lib/utils';
import type { PipelineItem, ClinicalStage } from '@/types/pipeline';

interface PipelineDetailModalProps {
  item: PipelineItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const stageKeys: Record<ClinicalStage, string> = {
  preclinical: 'stagePreclinical',
  phase1: 'stagePhase1',
  phase2: 'stagePhase2',
  phase3: 'stagePhase3',
  approved: 'stageApproved',
};

export function PipelineDetailModal({ item, isOpen, onClose }: PipelineDetailModalProps) {
  const t = useTranslations('Science.pipeline');
  const locale = useLocale();

  if (!item) return null;

  const platformBadge = item.platform === 'tlr5-agonist'
    ? { label: 'TLR5 Agonist', variant: 'bio' as const }
    : { label: 'Collagenase', variant: 'teal' as const };

  const progressColor = item.platform === 'tlr5-agonist' ? 'bio' : 'teal';

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={item.candidateName}>
      <div className="space-y-6">
        {/* Platform badge */}
        <Badge variant={platformBadge.variant}>{platformBadge.label}</Badge>

        {/* Indication */}
        <div>
          <p className="text-sm font-medium text-gray-400">{t('detailIndication')}</p>
          <p className="mt-1 text-base font-semibold text-navy">
            {locale === 'ko' ? item.indicationKo : item.indication}
          </p>
        </div>

        {/* Clinical Stage */}
        <div>
          <p className="text-sm font-medium text-gray-400">{t('detailStage')}</p>
          <p className="mt-1 text-base font-semibold text-navy">
            {t(stageKeys[item.stage])}
          </p>
          <ClinicalStageBar stage={item.stage} progressPercent={item.progressPercent} className="mt-3" />
        </div>

        {/* Progress */}
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-400">{t('detailProgress')}</p>
            <p className="text-sm font-bold text-navy">{item.progressPercent}%</p>
          </div>
          <ProgressBar value={item.progressPercent} color={progressColor} className="mt-2" />
        </div>

        {/* Market Size */}
        {item.marketSize && (
          <div>
            <p className="text-sm font-medium text-gray-400">{t('detailMarket')}</p>
            <p className="mt-1 text-base font-semibold text-navy">{item.marketSize}</p>
          </div>
        )}

        {/* Description */}
        <div>
          <p className="text-sm leading-relaxed text-gray-600">
            {locale === 'ko' ? item.descriptionKo : item.description}
          </p>
        </div>

        {/* Milestones Timeline */}
        {item.milestones.length > 0 && (
          <div>
            <p className="text-sm font-medium text-gray-400 mb-4">{t('detailMilestones')}</p>
            <div className="relative ml-3">
              {/* Vertical line */}
              <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gray-200" />

              <ul className="space-y-6">
                {item.milestones.map((milestone, idx) => (
                  <li key={idx} className="relative flex items-start gap-4 pl-6">
                    {/* Dot */}
                    <span
                      className={cn(
                        'absolute left-0 top-1.5 h-3 w-3 -translate-x-[5px] rounded-full border-2',
                        milestone.completed
                          ? 'border-teal bg-teal'
                          : 'border-gray-300 bg-white',
                      )}
                    />
                    <div>
                      <p className="text-xs text-gray-400">{milestone.date}</p>
                      <p
                        className={cn(
                          'text-sm font-medium',
                          milestone.completed ? 'text-navy' : 'text-gray-400',
                        )}
                      >
                        {locale === 'ko' ? milestone.labelKo : milestone.label}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
