export interface Facility {
  id: string;
  name: string;
  nameKo: string;
  description: string;
  descriptionKo: string;
  imageUrl: string;
  address: string;
  addressKo: string;
  type: 'headquarters' | 'office' | 'manufacturing';
}

export const facilitiesData: Facility[] = [
  {
    id: 'hq',
    name: 'R&D Headquarters',
    nameKo: 'R&D 본사',
    description: 'Main research and development center with state-of-the-art laboratories.',
    descriptionKo: '최첨단 연구소를 갖춘 연구개발 본사.',
    imageUrl: '/images/facilities/hq.jpg',
    address: 'Chungbuk, South Korea',
    addressKo: '충청북도',
    type: 'headquarters',
  },
  {
    id: 'seoul',
    name: 'Seoul Office',
    nameKo: '서울사무소',
    description: 'Business development and investor relations office.',
    descriptionKo: '사업개발 및 투자자관계 사무소.',
    imageUrl: '/images/facilities/seoul.jpg',
    address: 'Seoul, South Korea',
    addressKo: '서울특별시',
    type: 'office',
  },
  {
    id: 'bundang',
    name: 'Bundang Office',
    nameKo: '분당사무소',
    description: 'Clinical operations and regulatory affairs office.',
    descriptionKo: '임상운영 및 인허가 사무소.',
    imageUrl: '/images/facilities/bundang.jpg',
    address: 'Seongnam, Gyeonggi-do',
    addressKo: '경기도 성남시 분당구',
    type: 'office',
  },
  {
    id: 'gmp',
    name: 'GMP Manufacturing Facility',
    nameKo: 'GMP 제조시설',
    description: 'cGMP-compliant manufacturing facility for recombinant protein production.',
    descriptionKo: 'cGMP 기준의 재조합 단백질 제조시설.',
    imageUrl: '/images/facilities/gmp.jpg',
    address: 'Chungbuk, South Korea',
    addressKo: '충청북도',
    type: 'manufacturing',
  },
];
