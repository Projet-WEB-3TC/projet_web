<template>
  <v-app dark>
    <v-bottom-navigation app fixed grow color="primary">
      <v-btn value="Acceuil">
        <span>Accueil</span>
        <v-icon>mdi-apps</v-icon>
      </v-btn>

      <v-btn value="Calendar">
        <span>Calendrier</span>
        <v-icon>mdi-calendar</v-icon>
      </v-btn>

      <v-btn value="Trombi">
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
      <div v-if="isPreProd" class="watermark">PREPROD</div>
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
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
const { version } = require('../package.json')
export default {
  name: 'DefaultLayout',
  middleware: 'user',
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

    async logout() {
      await this.$auth.logout()
      await this.$router.push({
        path: '/login',
      })
    },
  },
}
</script>

<style>
.watermark {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;

  color: #ec0000;
  font-size: 100px;
  font-weight: 500px;
  display: grid;
  justify-content: center;
  align-content: center;
  opacity: 1;
  animation: wiggle 2s infinite;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently */
}

@keyframes wiggle {
  0% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(0deg);
  }
  85% {
    transform: rotate(5deg);
  }
  95% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
