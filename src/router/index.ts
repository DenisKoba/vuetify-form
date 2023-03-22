// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/homepage',
    name: 'Homepage',
    component: () => import('@/views/Home.vue'),
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
