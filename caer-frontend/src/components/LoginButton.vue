<template>
  <v-btn @click="login">
    {{ $t('login') }}
  </v-btn>
</template>

<script>
  export default {
    name: 'LoginButton',
    methods: {
      login () {
        // login function to be written.
        this.$store.dispatch('auth/login')
      },
    },
  }
</script>
