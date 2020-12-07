import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export const options = {
  icons: {
    iconfont: 'mdiSvg',
  },
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#DACCE6',
        secondary: '#F4EFE1',
        accent: '#450084',
        error: '#A4232B',
        info: '#D2EBF5',
        success: '#DEEBA7',
        warning: '#FFBD00',
        anchor: '#3C738B',
      },
    },
  },
}

export default new Vuetify(options)
