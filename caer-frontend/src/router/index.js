import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/handle-auth',
    name: 'handle-auth',
  },
  {
    /**
     * TODO: Make this actually redirect to the main menu
     */
    path: '/main-menu',
    name: 'main-menu',
    component: Home,
  },
  {
    /**
     * TODO: Make this actually redirect to the main menu
     */
    path: '/update-profile',
    name: 'update-profile',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

/**
 * Define Hooks
 */
const handleLogin = async (to, from, next) => {
  // if it's NOT the /handle-auth route
  if (to.path !== '/handle-auth') {
    // carry on (i.e. skip this function)
    next()
  } else {
    /**
     * The Vuex store's auth/handleLogin action parses
     * the response sent from Auth0, extracts the access
     * token and id token and saves them in the store.
     * It also gets the user's profile from the API and
     * stores it in the store.state.auth.user field.
     *
     * If unsuccessful, state.auth.errorOnLogin is set
     * to contain any relevant error messages/info, but
     * otherwise, it is null.
     * see: store/services/auth.js:41
     */
    await store.dispatch('auth/handleLogin')
    // if there was no error
    if (!store.state.auth.errorOnLogin) {
      // get the user's profile from the store
      const user = store.getters['auth/user']
      // check to see if the user's names are set
      if (!user.first_name || !user.last_name) {
        // redirect to the update profile page
        next('/update-profile')
      } else {
        // redirect to their desination or main menu
        const destination = store.getters['common/destination'] || '/main-menu'
        next(destination)
      }
    }
  }
}

/**
 * Register Hooks
 */
router.beforeEach(handleLogin)

export default router
