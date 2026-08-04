export const ACCOUNTABILITY_BULLETINS_API_URL = 'http://192.168.200.242:8090/api/v1/accountability-bulletins';

export interface ApiBulletin {
  title: string;
  number: number;
  year: number;
  month: number;
  link: string;
}

export interface ApiBulletinsResponse {
  data: ApiBulletin[];
}

export function bulletinsUrl(filters: { year?: number; month?: number }) {
  const url = new URL(ACCOUNTABILITY_BULLETINS_API_URL);
  if (filters.year) url.searchParams.set('year', String(filters.year));
  if (filters.month) url.searchParams.set('month', String(filters.month));
  return url.toString();
}
