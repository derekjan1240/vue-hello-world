import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: import("@/views/Home.vue")
  },
  {
    path: "/todo",
    name: "TodoList",
    component: () => import("@/views/TodoList.vue")
  },
  {
    path: "/featureB",
    name: "FeatureB",
    component: () => import("@/views/FeatureB.vue")
  },
  {
    path: "/featureC",
    name: "FeatureC",
    component: () => import("@/views/FeatureC.vue")
  },
  // TEMP
  // {
  //   path: "/users/:userId",
  //   component: User,
  //   children: [
  //     {
  //       path: "posts",
  //       component: () => import("@/views/Post.vue")
  //     }
  //   ]
  // },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/Page404"),
    hidden: true
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    redirect: "/404",
    hidden: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
