import type { IKPFilms } from "./../types/kpTypes";
import type { IVideoCDN } from "../types/types";
import { kpApi, videoApi } from "../API/api";
import type { IMovieCard } from "@/types/types";
import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", {
  state: () => ({
    recentFilms: [] as number[],
    genres: [
      {
        id: 1,
        genre: "триллер",
      },

      {
        id: 3,
        genre: "криминал",
      },
      {
        id: 5,
        genre: "детектив",
      },
      {
        id: 6,
        genre: "фантастика",
      },
      {
        id: 7,
        genre: "приключения",
      },
      {
        id: 11,
        genre: "боевик",
      },
      {
        id: 12,
        genre: "фэнтези",
      },
      {
        id: 13,
        genre: "комедия",
      },
      {
        id: 14,
        genre: "военный",
      },
      {
        id: 17,
        genre: "ужасы",
      },
      {
        id: 18,
        genre: "мультфильм",
      },
      {
        id: 19,
        genre: "семейный",
      },
      {
        id: 2,
        genre: "драма",
      },
      {
        id: 22,
        genre: "документальный",
      },
      {
        id: 24,
        genre: "аниме",
      },
    ] as MovieGenre[],
  }),
  getters: {},
  actions: {},
});

interface MovieGenre {
  id: number;
  genre: string;
}
