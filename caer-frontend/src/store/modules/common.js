/**
 * @module store/modules/common
 * Defines common app settings in the store
 */

// mutation types
const SET_DESTINATION = 'SET_DESTINATION'

/**
 * @property {string} destination Stores user's intended destination during login process
 */
const initialState = {
  destination: null,
}

const state = { ...initialState }

const mutations = {
  [SET_DESTINATION] (state, destination) {
    state.destination = destination
  },
}

const actions = {
  setDestination ({ commit }, destination) {
    commit(SET_DESTINATION, destination)
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
