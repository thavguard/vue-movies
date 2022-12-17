import type { IVideoCDN } from "../types/types";
import { kpApi, videoApi } from "../API/api";
import type { IMovieCard } from "@/types/types";
import { defineStore } from "pinia";
import type { IKp } from "@/types/kpTypes";

export const useMoviesStore = defineStore("movies", {
  state: () =>
    ({
      movies: [],
    } as IMoviesStote),
  getters: {
    getAllMovies: (state) => state.movies,
  },
  actions: {
    async fetchMovies() {
      const { data } = await videoApi.get<IVideoCDN>("short", {
        params: {
          title: "гарри поттер",
        },
      });

      this.movies = data.data.map((item) => ({
        year: item.year,
        id: item.id,
        iframe: item.iframe_src,
        quality: item.quality,
        rate: 7.2,
        kp_id: item.kp_id,
      }));
    },
  },
});

interface IMoviesStote {
  movies: IMovieCard[];
}
