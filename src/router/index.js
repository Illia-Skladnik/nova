// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '@/views/Home.vue'

const routes = [
    {
      path:'/',
      name:'home',
      // component: () => import('@/views/Home.vue')
      component: () => HomeVue
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
