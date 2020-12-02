import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: () => import("@/components/layout/layout.vue"),
    children: [
      {
        name: "first",
        path: "",
        component: () => import("@/views/first.vue")
      },
      {
        name: "second",
        path: "/second",
        component: () => import("@/views/second.vue")
      },
      {
        name: "fifth_one",
        path: "/fifth_one",
        component: () => import("@/views/fifth_one.vue")
      },
      {
        name: "fifth_two",
        path: "/fifth_two",
        component: () => import("@/views/fifth_two.vue")
      },
      {
        name: "edit",
        path: "/edit/:deviceName",
        component: () => import("@/views/edit.vue"),
        props: true
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
