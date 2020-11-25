import Vue from 'vue'
import VueRouter from 'vue-router'
import Desktop from '@/views/base/desktop/index.vue'

Vue.use(VueRouter)

// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Desktop
  },
]

const router = new VueRouter({
  routes
})

export default router
