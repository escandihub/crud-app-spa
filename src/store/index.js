import Vue from 'vue'
import Vuex from 'vuex'
import product from "./product"
import auth from "./auth"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    product,
    auth
  }
})
