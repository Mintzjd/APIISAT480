import Vue from 'vue'
import Vuex from 'vuex'
import { FeathersVuex } from '@/services/api'
import common from '@/store/modules/common'

Vue.use(Vuex)
Vue.use(FeathersVuex)

const requireModule = require.context('@/store/services', false, /\.js$/)
const servicePlugins = requireModule.keys().map(path => requireModule(path).default)

export default new Vuex.Store({
  state: {},
  modules: { common },
  mutations: {},
  actions: {},
  plugins: [
    ...servicePlugins,
  ],
})
