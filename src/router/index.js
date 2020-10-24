import Vue from 'vue'
import VueRouter from 'vue-router'

import beforeEach from './before-each'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes
  // mode: process.env.ROUTER_MODE,
  // base: process.env.ROUTER_BASE
})
router.beforeEach(beforeEach)

export default router
