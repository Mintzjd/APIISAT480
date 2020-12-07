<template>
  <v-card>
    <v-card-title>
      {{ topic }}
    </v-card-title>
    <v-card-text>
      <p>Your age in {{ timeHorizon }}</p>
      <p>
        Sometimes it is helpful to imagine how old
        you will be in the future.
      </p>
      <p>
        In {{ timeHorizon }}, how old will you be?
      </p>
      <p>
        <v-text-field
          v-model="age"
        />
        years old
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn>
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'AgeEntryPage',
    props: {
      topic: {
        type: String,
        default: '',
      },
      timeHorizon: {
        type: String,
        default: '',
      },
    },
    data: () => ({
      age: 0,
    }),
  }
</script>
