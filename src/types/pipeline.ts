export type ClinicalStage = 'preclinical' | 'phase1' | 'phase2' | 'phase3' | 'approved';
export type Platform = 'tlr5-agonist' | 'collagenase';

export interface Milestone {
  date: string;
  label: string;
  labelKo: string;
  completed: boolean;
}

export interface PipelineItem {
  id: string;
  candidateName: string;
  platform: Platform;
  indication: string;
  indicationKo: string;
  stage: ClinicalStage;
  progressPercent: number;
  description: string;
  descriptionKo: string;
  milestones: Milestone[];
  marketSize?: string;
  relatedNewsIds?: string[];
}
