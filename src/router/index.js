import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BlogPosts from "@/views/blog/BlogPosts.vue";
import SinglePost from "@/views/blog/SinglePost.vue";
import CreateView from "@/views/CreateView.vue";

const router = createRouter({
  scrollBehavior() {
    // always scroll to top
    return { top: 0, behavior: "smooth" };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/blog",
      name: "blog_posts",
      component: BlogPosts,
    },
    {
      path: "/blog/:id",
      name: "single_post",
      component: SinglePost,
      props: true,
    },
    {
      path: "/:catchAll(.*)*", //will match everything and put it under `$route.params.pathMatch`
      name: "home",
      component: HomeView,
    },
    {
      path: "/create",
      name: "create_view",
      component: CreateView,
    },
    // {
    // path: "/blog",
    // name: "blog",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
