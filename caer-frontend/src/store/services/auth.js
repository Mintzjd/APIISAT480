// for decoding JWTs and serializing errors
import jws from 'jwt-decode'
import serializeError from 'serialize-error'

import { api, makeAuthPlugin, models } from '@/services/api'

// factory function to create auth0.WebAuth instance
import { createAuth0Client } from '@/services/auth0'

// used to specify namespaced scopes for additional auth0 functions
// const ns = process.env.VUE_APP_AUTH0_NAMESPACE

/**
 * A local instance of {@link module:services/auth0}
 * @private
 */
const auth0 = createAuth0Client({
  audience: process.env.VUE_APP_AUTH0_AUDIENCE,
  clientID: process.env.VUE_APP_AUTH0_CLIENT_ID,
  domain: process.env.VUE_APP_AUTH0_DOMAIN,
  redirectUri: process.env.VUE_APP_AUTH0_REDIRECT_URI,
  scope: 'openid profile email',
})

const userService = 'users'

export default makeAuthPlugin({
  userService,
  state: {
    entityIdField: 'user_id',
    errorOnLogin: null,
    errorOnRefresh: null,
    expiresAt: null,
    isLoginPending: false,
    isRefreshPending: false,
  },
  actions: {
    login: ({ commit, state }) => {
      commit('setLoginPending')
      if (state.errorOnLogin) commit('clearLoginError')
      auth0.login({ api_url: process.env.VUE_APP_API_URL })
    },
    handleLogin: async ({ commit, dispatch }) => {
      try {
        // extract values
        const { accessToken } = await auth0.handle()
        const accessTokenPayload = jws(accessToken)
        // set auth service data in the store
        commit('setAccessToken', accessToken)
        commit('setPayload', accessTokenPayload)
        commit('setExpiresAt', accessTokenPayload.exp * 1000)
        commit('unsetLoginPending')
        await dispatch('authenticate', { strategy: 'auth0', accessToken })
      } catch (error) {
        commit('setLoginError', error)
        commit('unsetLoginPending')
      }
    },
    logout: async ({ commit }) => {
      commit('setLogoutPending')
      // clear data from all models
      for (const model in models.api.byServicePath) {
        if (!['auth', 'undefined'].includes(model)) {
          commit(`${model}/clearAll`, null, { root: true })
        }
      }
      // logout of the API
      await api.logout()
      commit('logout')
      commit('unsetLogoutPending')
      // logout of Auth0 (triggers redirect)
      await auth0.logout(process.env.VUE_APP_AUTH0_LOGOUT_URI)
    },
    checkSession: async ({ commit, dispatch, state }) => {
      commit('setRefreshPending')
      const now = new Date().getTime()
      // check login status
      if (state.expiresAt && now < state.expiresAt - 5000) {
        // already logged in
        api.reAuthenticate()
        commit('unsetRefreshPending')
      } else if (state.expiresAt && now >= state.expiresAt - 5000) {
        // we need to refresh the session
        commit('clearRefreshError')
        try {
          const { accessToken } = await auth0.checkSession()
          const payload = jws(accessToken)
          commit('setAccessToken', accessToken)
          commit('setPayload', payload)
          commit('setExpiresAt', payload.exp * 1000)
          await api.authenticate({ strategy: 'auth0', accessToken })
          commit('unsetRefreshPending')
        } catch (error) {
          commit('setRefreshError', error)
          commit('unsetRefreshPending')
        }
      } else {
        // fresh login needed
        commit('unsetRefreshPending')
        dispatch('login')
      }
    },
  },
  getters: {
    accessToken: state => state.accessToken,
    isAuthenticated: state => state.expiresAt && new Date().getTime() < state.expiresAt,
    isExpired: state => state.expiresAt && new Date().getTime() >= state.expiresAt,
  },
  mutations: {
    setLoginPending: state => {
      state.isLoginPending = true
    },
    unsetLoginPending: state => {
      state.isLoginPending = false
    },
    setLoginError: (state, error) => {
      state.errorOnLogin = Object.assign({}, serializeError(error))
    },
    clearLoginError: (state) => {
      state.errorOnLogin = null
    },
    setRefreshPending: state => {
      state.isRefreshPending = true
    },
    unsetRefreshPending: state => {
      state.isRefreshPending = false
    },
    setRefreshError: (state, error) => {
      state.errorOnRefresh = Object.assign({}, serializeError(error))
    },
    clearRefreshError: (state) => {
      state.errorOnRefresh = null
    },
    setExpiresAt: (state, expiresAt) => {
      state.expiresAt = expiresAt
    },
    logout: state => {
      state.payload = null
      state.accessToken = null
      if (state.user) state.user = null
      state.expiresAt = null
    },
  },
})
