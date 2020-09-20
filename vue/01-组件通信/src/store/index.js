import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: ''
  },
  mutations: {
    sendMessage(state, msg) {
      state.msg = msg
    }
  },
  getters: {},
  actions: {}
})
