import type { IVideoCDN } from "./../types/types";
import { kpApi, videoApi } from "./../API/api";
import { defineStore } from "pinia";
import type { SearchByKW } from "@/types/IByKeyWord";
export const useSearchStore = defineStore("search", {
  state: () => ({
    search: "",
    results: [] as ISearchResult[],
  }),
  getters: {},
  actions: {
    async fetchResult() {
      const { data } = await kpApi.get<SearchByKW>(
        "v2.1/films/search-by-keyword",
        {
          params: {
            keyword: this.search,
          },
        }
      );

      this.results = data.films.map((item) => ({
        title: item.nameRu,
        originalName: item.nameEn,
        img: item.posterUrl,
        rate: item.rating,
        id: item.filmId,
      }));
    },
  },
});

interface ISearchResult {
  title: string;
  originalName: string;
  img: string;
  rate: string;
  id: number;
}
