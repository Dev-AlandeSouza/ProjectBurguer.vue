import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/homeview', // Alterado de '/home' para '/homeview'
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/orderregistra',
    name: 'OrderRegistra',
    component: () => import('../views/OrderRegistra.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
