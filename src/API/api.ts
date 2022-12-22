import axios from "axios";

export const videoApi = axios.create({
  baseURL: "https://18.annacdn.cc/api/",
  params: {
    api_token: import.meta.env.VITE_VIDEO_CND_TOKEN,
  },
});

export const kpApi = axios.create({
  baseURL: "https://kinopoiskapiunofficial.tech/api/",
  headers: {
    "X-API-KEY": import.meta.env.VITE_KP_UN_TOKEN,
  },
});
