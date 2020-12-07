const fs = require('fs')
module.exports = {

  /**
   * Configure so that it runs over SSL locally.
   * See README.md for instructions on how to
   * configure this.
   */
  configureWebpack: config => {
    // if it's NOT in production or staging mode...
    if (!['production', 'staging'].includes(process.env.NODE_ENV)) {
      config.devServer = {
        disableHostCheck: true,
        host: 'caerfutures.test',
        https: {
          key: fs.readFileSync('./caerfutures.test-key.pem', 'utf8'),
          cert: fs.readFileSync('./caerfutures.test.pem', 'utf8'),
        },
      }
    }
  },

  transpileDependencies: [
    'feathers-vuex',
    'vuetify',
  ],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
