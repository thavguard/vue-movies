export interface IMovieCard {
  img: string;
  rate: number;
  quality?: string;
  id: number;
  iframe: string;
}

export interface IVideoCDN {
  result: boolean;
  data: IVideoCDNDate[];
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

export interface IVideoCDNDate {
  id: number;
  title: string;
  kp_id: null | string;
  imdb_id: null | string;
  world_art_id: null | string;
  type: IMediaType;
  add: Date;
  orig_title: string;
  year: Date;
  translations: string[];
  quality?: string;
  translation?: string;
  update: Date;
  iframe_src: string;
  seasons_count?: number;
  episodes_count?: number;
  episodes?: number;
}

export enum IMediaType {
  Movie = "movie",
  Serial = "serial",
}
