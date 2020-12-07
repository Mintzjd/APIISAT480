<template>
  <v-row class="text-center">
    <v-col cols="12">
      <v-img
        :src="require('../assets/logo.png')"
        class="my-3"
        contain
        height="200"
      />
    </v-col>

    <v-col class="mb-4">
      <h1 class="display-2 font-weight-bold mb-3">
        {{ $t('pages.welcome.message') }} CAER App
      </h1>

      <p class="subheading font-weight-regular">
        Creative Anticipatory Ethical Reasoning
      </p>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      greeting: {
        type: String,
        default: 'Hello',
      },
    },
    data: () => ({
    }),
  }
</script>
