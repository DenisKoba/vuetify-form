// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/game',
    name: 'Game',
    component: () => import('@/views/Game.vue'),
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Form.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
