import { api, makeServicePlugin, BaseModel } from '@/services/api'

class Topic extends BaseModel {
    // eslint-disable-next-line no-useless-constructor
    constructor (data, options) {
        super(data, options)
    }

    static modelName = 'Topic'

    static instanceDefaults () {
        return {
            createdBy: new Date(),
            updatedBy: new Date(),
            time_horizon: 0,
            title: '',
            references: [],
            description: '',
            photo: '',
            drivers: [],
        }
    }
}

const servicePath = 'topics'

const servicePlugin = makeServicePlugin({
    Model: Topic,
    service: api.service(servicePath),
    servicePath,
})

export default servicePlugin
