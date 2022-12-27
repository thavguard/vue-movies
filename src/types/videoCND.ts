export interface VideoCDN {
  result: boolean;
  data: Datum[];
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}

export interface Datum {
  id: number;
  title: string;
  kp_id: string;
  imdb_id: string;
  world_art_id: string;
  type: string;
  add: Date;
  orig_title: string;
  year: Date;
  translations: string[];
  seasons_count: number;
  episodes_count: number;
  episodes: number;
  update: Date;
  iframe_src: string;
  quality: string;
  translation: string;
}
