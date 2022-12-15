import axios from "axios";

export const videoApi = axios.create({
  baseURL: "https://18.annacdn.cc/api/",
  params: {
    api_token: import.meta.env.VITE_VIDEO_CND_TOKEN,
  },
});
