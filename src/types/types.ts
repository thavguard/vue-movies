import type { Genre } from "./kpTypes";

export interface IMovieCard {
  year: number;
  ratingKinopoisk: number;
  kinopoiskId: number;
  posterUrl: string;
  nameRu: string;
  nameEn: string;
  genres: Genre[];
  ratingImdb: number;
  imdbId: string;
}

export interface IVideoCDN {
  result: boolean;
  data: IVideoCDNData[];
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

export interface IVideoCDNData {
  id: number;
  title: string;
  kp_id: string;
  imdb_id: string;
  world_art_id: string;
  type: IMediaType;
  add: string;
  orig_title: string;
  year: string;
  translations: string[];
  quality: string;
  translation: string;
  update: string;
  iframe_src: string;
  seasons_count: number;
  episodes_count: number;
  episodes: number;
}

export enum IMediaType {
  Movie = "movie",
  Serial = "serial",
}
