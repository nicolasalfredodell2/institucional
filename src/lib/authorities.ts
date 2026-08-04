export const AUTHORITIES_API_URL = 'http://192.168.200.242:8090/api/v1/authorities';

export interface ApiAuthority {
  name: string;
  job: string;
  img: string | null;
}

export interface ApiAuthoritiesResponse {
  data: ApiAuthority[];
}
