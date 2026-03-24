'use client';

import { useLocale } from 'next-intl';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ClinicalStageBar } from '@/components/ui/ClinicalStageBar';
import type { PipelineItem } from '@/types/pipeline';

interface PipelineCardProps {
  item: PipelineItem;
  onClick: () => void;
}

export function PipelineCard({ item, onClick }: PipelineCardProps) {
  const locale = useLocale();

  const platformBadge = item.platform === 'tlr5-agonist'
    ? { label: 'TLR5 Agonist', variant: 'bio' as const }
    : { label: 'Collagenase', variant: 'teal' as const };

  return (
    <Card onClick={onClick} className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold text-navy">{item.candidateName}</h3>
        <Badge variant={platformBadge.variant}>{platformBadge.label}</Badge>
      </div>

      <p className="text-sm text-gray-600">
        {locale === 'ko' ? item.indicationKo : item.indication}
      </p>

      <ClinicalStageBar stage={item.stage} progressPercent={item.progressPercent} />

      {item.marketSize && (
        <p className="mt-auto text-xs text-gray-400">
          {item.marketSize}
        </p>
      )}
    </Card>
  );
}
