export type NewsCategory = 'press' | 'publication' | 'event';

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  titleKo: string;
  summary: string;
  summaryKo: string;
  category: NewsCategory;
  externalUrl?: string;
  imageUrl?: string;
}
