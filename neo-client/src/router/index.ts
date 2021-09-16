import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
 {
   name: "Neo",
   path: "/neo/:id",
   component: () => import("../components/Neo.vue"),
 }
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
