import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/homeview',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pedidosview',
    name: 'PedidosView',
    component: () => import(/* webpackChunkName: "pedidos" */ '../views/PedidosView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
