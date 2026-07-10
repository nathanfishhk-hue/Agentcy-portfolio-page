export type Category = 'AI' | 'SaaS' | 'Other';

export const CATEGORIES: { id: Category; label: string; count: number }[] = [
  { id: 'AI', label: 'AI', count: 6 },
  { id: 'SaaS', label: 'SaaS', count: 7 },
  { id: 'Other', label: 'Other', count: 4 },
];

export const ALL_CATEGORIES: Category[] = ['AI', 'SaaS', 'Other'];