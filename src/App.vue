<template>
  <v-app id="app">
    <v-toolbar app color="blue-grey" lights-out dark>
      <v-toolbar-title class="headline text-uppercase">
        <span>Pnew</span>
        <span class="font-weight-light"> Test Platform</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom left>
        <v-btn slot="activator" icon>
          <v-icon>more_vert</v-icon>
        </v-btn>

        <v-list>
          <v-list-tile v-for="(item, i) in items" :key="i" @click="goToView(item.routeName)">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: { },
  data () {
    return {
      items: [
        { title: 'Home', routeName: 'home'},
        { title: 'Basic I/O', routeName: 'fstest'}
      ]
    }
  },
  methods: {
    goToView(path) {
      this.$router.push({ name: path, params:{ name: path } })
    }
  }
}
</script>
