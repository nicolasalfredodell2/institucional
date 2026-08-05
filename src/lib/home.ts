import type { ApiNewsItem } from './news';

export const HOME_API_URL = 'http://192.168.42.25:8033/api/v1/home';

export interface ApiLinkItem {
  label: string;
  url: string | null;
  image: string | null;
}

export interface ApiInstitutionalFigure {
  title: string;
  description: string;
}

export interface ApiCalendarEntry {
  day: number | null;
  month: string;
  title: string | null;
  summary: string | null;
  body: string[] | null;
  image: string | null;
  featured: boolean;
}

export interface ApiHomeData {
  quickAccessCards: ApiLinkItem[];
  organismosRelacionadosTop: ApiLinkItem[];
  organismosRelacionadosFooter: ApiLinkItem[];
  enlacesInstitucionales: ApiLinkItem[];
  cifrasInstitucionales: ApiInstitutionalFigure[];
  agendaEfemerides: ApiCalendarEntry[];
  news: ApiNewsItem[];
}

export interface ApiHomeResponse {
  data: ApiHomeData;
}

export const EMPTY_HOME_DATA: ApiHomeData = {
  quickAccessCards: [],
  organismosRelacionadosTop: [],
  organismosRelacionadosFooter: [],
  enlacesInstitucionales: [],
  cifrasInstitucionales: [],
  agendaEfemerides: [],
  news: [],
};

export function isExternalUrl(url: string) {
  return /^https?:\/\//i.test(url);
}

export function resolveLinkUrl(url: string | null): string | null {
  if (!url) return null;
  return isExternalUrl(url) ? url : `/${url}`;
}
