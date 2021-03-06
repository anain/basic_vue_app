import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/records',
    name: 'Records',
    component: () => import('../views/Records.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
