// Films
export interface IKPFilms {
  total: number;
  totalPages: number;
  items: Item[];
}

export interface Item {
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  countries: Country[];
  genres: Genre[];
  ratingKinopoisk: number;
  ratingImdb: number;
  year: number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface Country {
  country: string;
}

export interface Genre {
  genre: string;
}
