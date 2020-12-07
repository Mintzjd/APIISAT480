<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('./assets/logo.png')"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer />
      <login-button v-if="!isAuthenticated" />
      <v-btn
        v-else
      >
        Logout
      </v-btn>
    </v-app-bar>

    <v-main>
      <hello-world />
    </v-main>
  </v-app>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld'
  import LoginButton from '@/components/LoginButton'
  export default {
    name: 'App',

    components: {
      HelloWorld,
      LoginButton,
    },

    data: () => ({
    //
    }),
    computed: {
      isAuthenticated () {
        return this.$store.getters['auth/isAuthenticated']
      },
    },
  }
</script>
