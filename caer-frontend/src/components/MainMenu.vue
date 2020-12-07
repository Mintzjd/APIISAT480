<template>
  <v-row class="text-center">
    <v-column>
      <h1>CAER App</h1>
      <v-text-field
        v-model="sessionId"
        block
        class="ma-1"
        outlined
        x-large
        label="Session ID"
      >
        10003456
      </v-text-field>
      <br>
      <v-btn
        block
        class="ma-1"
        x-large
        outlined
        @click="getStarted()"
      >
        {{ $t('pages.main-menu.get-started') }}
      </v-btn>
      <h6>(Requires Session ID)</h6>
      <br>
      <v-btn
        block
        class="ma-2"
        x-large
        outlined
        @click="newTopic()"
      >
        {{ $t('pages.main-menu.create-new-topic') }}
      </v-btn>
      <br>
      <v-btn
        block
        class="ma-2"
        x-large
        outlined
        @click="viewScenarios()"
      >
        {{ $t('pages.main-menu.view-scenarios') }}
      </v-btn>
      <br>
      <v-btn
        class="ma-2"
        x-large
        color="accent"
        @click="signOut()"
      >
        {{ $t('pages.main-menu.sign-out') }}
      </v-btn>
    </v-column>
  </v-row>
</template>

<script>
  export default {
    name: 'MainMenu',
    data: () => ({
      sessionId: '1238901',
    }),
  }
</script>
