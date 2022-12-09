import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView/HomeView.vue";

const routes = [{ path: "/", name: "home", component: Home }];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
