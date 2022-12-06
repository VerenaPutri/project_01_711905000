import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../views/Dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: dashboard,
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "Overview" */ '../views/makanan.vue')
      },
      {
        path: 'messages',
        component: () => import(/* webpackChunkName: "Messages" */ '../views/minuman.vue')
      },
      {
        path: 'profile',
        component: () => import(/* webpackChunkName: "Profile" */ '../views/snack.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router