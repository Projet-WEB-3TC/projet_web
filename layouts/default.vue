<template>
  <v-app dark>
    <v-bottom-navigation app fixed grow color="primary">
      <v-btn value="Accueil" to="/">
        <span>Accueil</span>
        <v-icon>mdi-apps</v-icon>
      </v-btn>

      <v-btn value="Calendar" to="/calendar">
        <span>Calendrier</span>
        <v-icon>mdi-calendar</v-icon>
      </v-btn>

      <v-btn value="Trombi" to="/trombinoscope">
        <span>Trombinoscope</span>
        <v-icon>mdi-image</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-app-bar fixed app :style="isJauneActive ? jauneStyle : ''">
      <v-img
        :src="'img/logo/' + logo"
        alt="overbookd"
        class="logo"
        max-height="400"
        max-width="300"
        contain
        align-center
        center
      ></v-img>
      <v-spacer />
      <v-app-bar-nav-icon>
        <v-btn icon @click="toggleTheme">
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
      </v-app-bar-nav-icon>
      <v-btn icon @click="logout()">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container style="max-width: none">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
const { version } = require('../package.json')

export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: false,
      isWhiteMode: true, // let this set to true
      counter: 0,
      isJauneActive: false,
      jauneStyle: 'background-color: #FFD13C; color: #003C71',
      isDialogOpen: false,
      version,

      file: undefined,
      stepDetail: undefined,
    }
  },

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs
    },
    logo() {
      if (this.isJauneActive) {
        return 'Ricard.png'
      }
      return this.$vuetify.theme.dark
        ? 'overbookd_logo_blanc.png'
        : 'overbookd_logo_noir.png'
    },
  },

  mounted() {
    this.$vuetify.theme.dark = localStorage.theme || false
  },

  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.theme = this.$vuetify.theme.dark
    },

    clickOnTitle() {
      this.counter++
      if (this.counter > 10) {
        this.isJauneActive = true
        this.title = 'RICARD - Pastis'
      }
    },
  },
}
</script>

<style></style>
