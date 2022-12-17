import type { IVideoCDN } from "./../types/types";
import { videoApi } from "./../API/api";
import { defineStore } from "pinia";
export const useSearchStore = defineStore("search", {
  state: () => ({
    search: "",
    results: [] as ISearchResult[],
  }),
  getters: {},
  actions: {
    async fetchResult() {
      const { data } = await videoApi.get<IVideoCDN>("short", {
        params: {
          title: this.search,
        },
      });

      this.results = data.data
        .map((item) => ({
          title: item.title,
          originalName: item.orig_title,
          img: "https://via.placeholder.com/60x90",
          rate: 7,
          iframe: item.iframe_src,
          kp_id: item.kp_id,
          id: item.id,
        }))
        .splice(0, 4);
    },
  },
});

interface ISearchResult {
  title: string;
  originalName: string;
  img: string;
  rate: number;
  iframe: string;
  kp_id: string | null;
  id: number;
}
