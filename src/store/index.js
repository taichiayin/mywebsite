import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
    // uiData: [
    // 	{
    // 		name: 'Calculator',
    // 		poster: 'img/components/calculator.png',
    // 		desc: 'Simulate calculator',
    // 		date: '2020/07/07',
    // 	},
    // ],
  },
  mutations: {
    setToken(state, data) {
      state.token = data
    }
  },
  actions: {},
  modules: {}
})
