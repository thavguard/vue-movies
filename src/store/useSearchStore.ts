import { videoApi } from "./../API/api";
import { defineStore } from "pinia";
import type { VideoCDN } from "@/types/videoCND";
export const useSearchStore = defineStore("search", {
  state: () => ({
    search: "",
    results: [] as ISearchResult[],
  }),
  getters: {},
  actions: {
    async fetchResult() {
      const { data } = await videoApi.get<VideoCDN>("short", {
        params: {
          title: this.search,
        },
      });

      this.results = data.data.map((item) => ({
        id: Number(item.kp_id),
        img: `http://www.kinopoisk.ru/images/film_big/${item.kp_id}.jpg`,
        originalName: item.orig_title,
        quality: item.quality,
        title: item.title,
        add: item.add,
        seasonsCount: item.seasons_count,
        iframe: item.iframe_src,
        translation: item.translation,
        kp_id: item.kp_id,
        imdb_id: item.imdb_id,
      }));
    },
  },
});

interface ISearchResult {
  title: string;
  originalName: string;
  img: string;
  id: number;
  quality: string;
  add: Date;
  seasonsCount: number;
  iframe: string;
  translation: string;
  kp_id: string;
  imdb_id: string;
}
