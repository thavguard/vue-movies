import type { IVideoCDN } from "./../types/types";
import { videoApi } from "./../API/api";
import type { IMovieCard } from "@/types/types";
import { defineStore } from "pinia";

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
          title: "форсаж",
        },
      });

      console.log(data);

      this.movies = data.data.map((item) => ({
        img: "https://avatars.mds.yandex.net/get-ott/2439731/2a0000016eb2adfc2080df60eb30b25c54bd/375x234",
        id: item.id,
        iframe: item.iframe_src,
        quality: item.quality,
        rate: 7.2,
      }));
    },
  },
});

interface IMoviesStote {
  movies: IMovieCard[];
}
