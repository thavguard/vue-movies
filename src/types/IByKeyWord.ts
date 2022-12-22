import type { Country, Genre } from "./kpTypes";

export interface SearchByKW {
  keyword: string;
  pagesCount: number;
  films: Film[];
  searchFilmsCountResult: number;
}

export interface Film {
  filmId: number;
  nameRu: string;
  nameEn: string;
  type: string;
  year: string;
  description: string;
  filmLength: string;
  countries: Country[];
  genres: Genre[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
}
