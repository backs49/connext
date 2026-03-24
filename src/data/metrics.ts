export interface Metric {
  id: string;
  value: number;
  suffix: string;
  label: string;
  labelKo: string;
}

export const metricsData: Metric[] = [
  { id: 'pipeline', value: 5, suffix: '+', label: 'Pipeline Programs', labelKo: '파이프라인 프로그램' },
  { id: 'platforms', value: 2, suffix: '', label: 'Platform Technologies', labelKo: '플랫폼 기술' },
  { id: 'investment', value: 150, suffix: '억+', label: 'Total Investment (₩)', labelKo: '누적 투자 (원)' },
  { id: 'patents', value: 30, suffix: '+', label: 'Patents', labelKo: '특허' },
];
