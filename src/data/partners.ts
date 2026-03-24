export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  type: 'investor' | 'partner';
}

export const partnersData: Partner[] = [
  { id: 'pharma-research', name: 'Pharma Research', logoUrl: '/images/partners/pharma-research.svg', type: 'partner' },
  { id: 'investor-1', name: 'Investor 1', logoUrl: '/images/partners/investor-1.svg', type: 'investor' },
  { id: 'investor-2', name: 'Investor 2', logoUrl: '/images/partners/investor-2.svg', type: 'investor' },
  { id: 'investor-3', name: 'Investor 3', logoUrl: '/images/partners/investor-3.svg', type: 'investor' },
  { id: 'investor-4', name: 'Investor 4', logoUrl: '/images/partners/investor-4.svg', type: 'investor' },
  { id: 'investor-5', name: 'Investor 5', logoUrl: '/images/partners/investor-5.svg', type: 'investor' },
];
