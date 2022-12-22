import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView/HomeView.vue";
import Search from "../views/SearchView/SearchView.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/search", name: "search", component: Search },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
