import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Learning from "../views/Learning.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Learning",
    component: Learning,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
