import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlogView from "../views/BlogView.vue";
import AuthView from "../views/AuthView.vue";
import BlogDetail from "../views/blog/BlogDetail.vue";
import EditorView from "../views/Editor.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/blogs",
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
      path: "/blogs",
      name: "blogs",
      component: BlogView,
    },
    {
      path: "/blogs/:id",
      name: "blogDetail",
      component: BlogDetail,
    },
    {
      path: "/auth",
      name: "auth",
      component: AuthView,
    },
    {
      path: "/edit",
      name: "edit",
      component: EditorView,
    },
  ],
});

export default router;
