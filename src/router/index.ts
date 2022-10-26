import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import StartView from "../views/Start.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "start",
  },
  {
    path: "/start",
    name: "Start",
    component: StartView,
  },
  {
    path: "/formatting",
    name: "Formatting",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Formatting.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
