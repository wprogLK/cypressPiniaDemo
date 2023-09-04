import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Counter from "@/views/Counter.vue";
import Result from "@/views/Result.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }, {
      path: "/counter",
      name: "counter",
      component: Counter
    },
    {
      path: "/result",
      name: "result",
      component: Result
    }


  ]
})

export default router
