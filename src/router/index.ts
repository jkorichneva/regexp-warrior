import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/overview',
      name: 'overview',
      component: () => import('../views/Overview.vue')
    },
    {
      path: '/play/chapter/:chapterId',
      name: 'chapter',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ChapterView.vue'),
      props: true
    },
    {
      path: '/play/chapter/:chapterId/level/:levelId',
      name: 'level',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LevelView.vue'),
      props: true
    }
  ]
})

export default router
