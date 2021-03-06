import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Page1 from '../views/Page1.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Page1',
    component: Page1
  },
  {
    path: '/page2',
    name: 'page2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "page2" */ '../views/Page2.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
