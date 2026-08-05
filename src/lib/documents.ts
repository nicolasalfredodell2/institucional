export const DOCUMENTS_API_URL = 'http://192.168.42.25:8033/api/v1/documents';

export interface ApiDocument {
  name: string;
  path: string;
}

export interface ApiDocumentsResponse {
  data: ApiDocument[];
}

export function documentsUrl(collection: string) {
  const url = new URL(DOCUMENTS_API_URL);
  url.searchParams.set('collection', collection);
  return url.toString();
}
