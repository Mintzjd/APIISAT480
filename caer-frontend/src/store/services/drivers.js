import { api, makeServicePlugin, BaseModel } from '@/services/api'

class Driver extends BaseModel {
  // eslint-disable-next-line no-useless-constructor
  constructor (data, options) {
    super(data, options)
  }

  static modelName = 'Driver'

  static instanceDefaults () {
    return {
       title: '',
       endpoints: {
         low: '',
         high: '',
       },
       description: '',
       references: [],
       createdAt: new Date(),
       updatedAt: new Date(),
    }
  }

  /**
   * This method will populate the data from related models (like Users)
   * when the instance is pulled from the API. So, for example, a Driver
   * has a `createdBy` and `updatedBy` field, both of which are ObjectId's
   * of the Users who created or updated the driver. These are not populated
   * on the frontend (by FeathersVuex) by default. We have to explicitly
   * show FV how to do it with this `setupInstance` method.
   *
   * @param {Driver}       driver        The Driver instance being populated
   * @param {FeathersVuex} object.models The list of models registered by FeathersVuex
   */
  static setupInstance (driver, { models }) {
    // if there is a user's ObjectId in the driver.createdBy field...
    if (driver.createdBy) {
      // use it to instantiate a new User object to the appropriate related model
      driver.createdBy = new models.api.User(driver.createdBy)
    }
    // if there is a user's ObjectId in the driver.updatedBy field...
    if (driver.updatedBy) {
      // use it to instantiate a new User object to the appropriate related model
      driver.updatedBy = new models.api.User(driver.updatedBy)
    }
    // finally, return the updated driver
    return driver
  }
}

const servicePath = 'drivers'

const servicePlugin = makeServicePlugin({
  Model: Driver,
  service: api.service(servicePath),
  servicePath,
})

export default servicePlugin
