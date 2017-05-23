import Vue from 'vue'
import Vuex from 'vuex'
import state from './states'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import openList from './modules/open/list'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    openList
  },
  state,
  getters,
  mutations,
  actions
})
