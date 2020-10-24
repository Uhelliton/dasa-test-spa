import Vue from 'vue'
import Vuex from 'vuex'

// import modules vuex
import user from '../app/domains/users/vuex-module/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  }
})
