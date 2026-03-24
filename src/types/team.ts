export type TeamCategory = 'executive' | 'sab';

export interface TeamMember {
  id: string;
  name: string;
  nameKo: string;
  title: string;
  titleKo: string;
  category: TeamCategory;
  imageUrl: string;
  bio: string;
  bioKo: string;
  linkedIn?: string;
}
