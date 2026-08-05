export const NEWS_API_URL = 'http://192.168.42.25:8033/api/v1/news';

export interface ApiNewsGalleryImg {
  url: string;
  description?: string;
}

export interface ApiNewsItem {
  id: string;
  slug: string;
  title: string;
  dateISO: string;
  summary: string;
  body: string[];
  coverImage: string;
  coverImageActive: boolean;
  grayscale: boolean;
  gallery: ApiNewsGalleryImg[];
  listedInComunicaciones: boolean;
  listedInHeaderTicker: boolean;
}

export interface ApiNewsListResponse {
  data: ApiNewsItem[];
  meta: {
    next_cursor: string | null;
  };
}

export interface ApiNewsDetailResponse {
  data: ApiNewsItem;
}

export function formatDate(dateISO: string) {
  const [year, month, day] = dateISO.split('-');
  return `${day}/${month}/${year}`;
}

export function formatLongDate(dateISO: string) {
  const date = new Date(`${dateISO}T00:00:00`);
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  const weekday = capitalize(date.toLocaleDateString('es-AR', { weekday: 'long' }));
  const month = capitalize(date.toLocaleDateString('es-AR', { month: 'long' }));
  return `${weekday} ${date.getDate()} de ${month} del ${date.getFullYear()}`;
}
