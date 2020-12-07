<template>
  <v-card>
    <v-card-title>
      {{ topic }}
    </v-card-title>
    <v-card-text>
      {{ $t('pages.participant-introduction.intro', [topic, timeHorizon]) }}
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="primary"
        to="/specify-age"
      >
        {{ $t('pages.participant-introduction.start') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'PariticipantIntroductionPage',
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
  }
</script>
