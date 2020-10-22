import Vue from 'vue'
import VueRouter from 'vue-router'

// import beforeEach from './beforeEach'
import routes from './routes'

Vue.use(VueRouter)

export default new VueRouter({
  routes: routes
  // mode: process.env.ROUTER_MODE,
  // base: process.env.ROUTER_BASE
})
