import { api, makeServicePlugin, BaseModel } from '@/services/api'

class User extends BaseModel {
  // eslint-disable-next-line no-useless-constructor
  constructor (data, options) {
    super(data, options)
  }

  static modelName = 'User'

  static instanceDefaults () {
    return {
       first_name: '',
       last_name: '',
       email: '',
       user_id: '',
    }
  }
}

const servicePath = 'users'

const servicePlugin = makeServicePlugin({
  Model: User,
  service: api.service(servicePath),
  servicePath,
})

export default servicePlugin
