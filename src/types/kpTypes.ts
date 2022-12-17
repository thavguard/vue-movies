export interface IKp {
  externalId: ExternalID;
  logo: Logo;
  poster: Backdrop;
  backdrop: Backdrop;
  rating: Rating;
  votes: Rating;
  videos: Videos;
  budget: Budget;
  fees: Fees;
  distributors: Distributors;
  premiere: Premiere;
  images: Images;
  watchability: Watchability;
  collections: any[];
  updateDates: any[];
  status: string;
  productionCompanies: ProductionCompany[];
  spokenLanguages: SpokenLanguage[];
  id: number;
  type: string;
  name: string;
  description: string;
  slogan: null;
  year: number;
  facts: Fact[];
  genres: Country[];
  countries: Country[];
  seasonsInfo: SeasonsInfo[];
  persons: Person[];
  lists: any[];
  typeNumber: number;
  alternativeName: string;
  enName: null;
  names: Country[];
  updatedAt: string;
  imagesInfo: ImagesInfo;
  movieLength: number;
  ratingMpaa: null;
  shortDescription: string;
  technology: Technology;
  ticketsOnSale: boolean;
  sequelsAndPrequels: any[];
  similarMovies: SimilarMovie[];
  ageRating: number;
  releaseYears: ReleaseYear[];
  top10: null;
  top250: null;
  createDate: string;
}

export interface Backdrop {
  url: string;
  previewUrl: string;
  _id: string;
}

export interface Budget {
  _id: string;
}

export interface Country {
  name: string;
}

export interface Distributors {
  distributor: null;
  distributorRelease: null;
}

export interface ExternalID {
  kpHD: string;
  imdb: string;
  tmdb: number;
  _id: string;
}

export interface Fact {
  value: string;
  type: string;
  spoiler: boolean;
}

export interface Fees {
  world: Budget;
  russia: Budget;
  usa: Budget;
  _id: string;
}

export interface Images {
  postersCount: number;
  backdropsCount: number;
  framesCount: number;
}

export interface ImagesInfo {
  _id: string;
  framesCount: number;
}

export interface Logo {
  _id: string;
  url: string;
}

export interface Person {
  id: number;
  photo: string;
  name: null | string;
  enName: string;
  enProfession: EnProfession;
}

export enum EnProfession {
  Actor = "actor",
  Composer = "composer",
  Designer = "designer",
  Director = "director",
  Editor = "editor",
  Operator = "operator",
  Producer = "producer",
  Writer = "writer",
}

export interface Premiere {
  _id: string;
  country: string;
  world: string;
  digital: string;
}

export interface ProductionCompany {
  name: string;
  url: string;
  previewUrl: string;
}

export interface Rating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
  _id: string;
}

export interface ReleaseYear {
  start: number;
  end: null;
  _id: string;
}

export interface SeasonsInfo {
  number: number;
  episodesCount: number;
}

export interface SimilarMovie {
  _id: string;
  id: number;
  name: string;
  enName: string;
  alternativeName: string;
  poster: Backdrop;
}

export interface SpokenLanguage {
  name: string;
  nameEn: string;
}

export interface Technology {
  _id: string;
  hasImax: boolean;
  has3D: boolean;
}

export interface Videos {
  _id: string;
  trailers: Trailer[];
  teasers: any[];
}

export interface Trailer {
  _id: string;
  url: string;
  name: string;
  site: Site;
  type?: string;
}

export enum Site {
  Unknown = "unknown",
  Youtube = "youtube",
}

export interface Watchability {
  _id: string;
  items: null;
}
