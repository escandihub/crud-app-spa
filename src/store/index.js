import Vue from 'vue'
import Vuex from 'vuex'
import product from "./product"
import auth from "./auth"
import notify from "./notify"
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
    auth,
    notify
  }
})
