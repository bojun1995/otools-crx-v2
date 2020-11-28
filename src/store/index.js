import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 平台
import base from './base.js'

export default new Vuex.Store({
  modules: {
    BASE: base,
  }
})
