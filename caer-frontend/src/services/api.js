import feathers from '@feathersjs/feathers'
import auth from '@feathersjs/authentication-client'
import feathersVuex from 'feathers-vuex'
// import socketio from '@feathersjs/socketio-client'
// import io from 'socket.io-client'
import rest from '@feathersjs/rest-client'
import axios from 'axios'

// instantiate a feathers client
const app = feathers()

// configure socketio
// const socket = io(process.env.VUE_APP_API_URL)
// app.configure(socketio(socket))

// configure REST
const restClient = rest(process.env.VUE_APP_API_URL)
app.configure(restClient.axios(axios))

// configure authentication client
app.configure(auth({ jwtStrategy: 'auth0' }))

const api = app

const {
  BaseModel,
  clients,
  FeathersVuex,
  makeAuthPlugin,
  makeServicePlugin,
  models,
} = feathersVuex(app, { serverAlias: 'api', idField: '_id' })

export {
  api,
  BaseModel,
  clients,
  FeathersVuex,
  makeAuthPlugin,
  makeServicePlugin,
  models,
}
