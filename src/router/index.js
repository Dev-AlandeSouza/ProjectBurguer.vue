import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/homeview',
    name: 'home',
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
