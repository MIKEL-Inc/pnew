<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to
          <br>Project El Camino
        </h1>
        <p class="subheading font-weight-regular">
          This is an Electron application to test various areas of future development.
        </p>
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>

        <v-layout justify-center>
          <v-timeline>
            <v-timeline-item v-for="next in whatsNext" :key="next.index" color="red lighten-2">
              <span slot="opposite">
                {{ next.date }}
                <v-chip v-if="next.complete" small color="green" text-color="white">
                  Done &nbsp;<v-icon>check_circle</v-icon>
                </v-chip></span>
              <v-card class="elevation-2">
                <v-card-title class="headline">
                  {{ next.title }}
                </v-card-title>
                <v-card-text>{{ next.text }}</v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      whatsNext: [
        {
          title: 'Enhanced JSON Editor',
          date: 'Feb 19',
          text: 'Provide enhanced data editing through enhanced JSON editor.',
          complete: false
        },
        {
          title: 'Custom Library Integration',
          date: 'Feb 19',
          text: 'Utilize custom built library to provide functionality in a portable format.',
          complete: false
        },
        {
          title: 'Write a File',
          date: '7 Feb 19',
          text: 'Write out a new JSON file to local filesystem using dialog.',
          complete: true
        },
        {
          title: 'Read a File',
          date: '7 Feb 19',
          text: 'Read in a local JSON file and display it on screen.',
          complete: true
        },
        {
          title: 'Build Electron App',
          date: '6 Feb 19',
          text: 'Build the basic app using the Electron framework for the Windows x64 platform.',
          complete: true
        },
        {
          title: 'Create Electron App',
          date: '6 Feb 19',
          text: 'Create the basic app using the Electron framework.',
          complete: true
        }
      ]
    })
  }
</script>

<style>

</style>
