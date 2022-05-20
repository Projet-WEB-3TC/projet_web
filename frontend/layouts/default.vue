<template>
  <v-app dark>
    <v-bottom-navigation fixed app :style="isJauneActive ? jauneStyle : ''">
      <v-btn value="Accueil" to="/acceuil">
        <span>Accueil</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn value="Calendar" to="/calendar">
        <span>Calendrier</span>
        <v-icon>mdi-calendar</v-icon>
      </v-btn>

      <v-btn value="Trombi" to="/trombinoscope">
        <span>Annuaire</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn value="Notif" to="/notif">
        <span>Notifications</span>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-app-bar fixed app :style="isJauneActive ? jauneStyle : ''">
      <v-img
        :src="'img/logo/' + logo"
        alt="overbookd"
        class="logo"
        max-height="400"
        max-width="200"
        align-center
        center
        @click="clickOnTitle"
      ></v-img>
      <v-spacer />
      <v-app-bar-nav-icon>
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template #activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-toolbar :style="isJauneActive ? jauneStyle : ''">
              <v-btn
                icon
                @click="
                  dialog = false;
                  toggleTheme;
                "
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Paramètres</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn
                  text
                  @click="
                    dialog = false;
                    toggleTheme;
                  "
                >
                  Save
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-list three-line subheader>
              <v-subheader>General</v-subheader>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="notifications"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Notifications</v-list-item-title>
                  <v-list-item-subtitle
                    >Activer les notifications sur votre Overbookd
                    personnel.</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="sound"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Sound</v-list-item-title>
                  <v-list-item-subtitle
                    >Activer les sons de l'application.</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-btn icon @click="toggleTheme">
                    <v-icon>mdi-theme-light-dark</v-icon>
                  </v-btn>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Dark Mode</v-list-item-title>
                  <v-list-item-subtitle
                    >Activer le thème Dark ou Light de
                    Overbookd.</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-btn value="Deconnecter" to="/" icon @click="logout()">
                    <v-icon>mdi-logout</v-icon>
                  </v-btn>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Se Déconnecter</v-list-item-title>
                  <v-list-item-subtitle
                    >Je souhaite de quitter la meilleure application de tous les
                    temps.</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-dialog>
      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <v-container style="max-width: none">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
const { version } = require("../package.json");

export default {
  name: "DefaultLayout",
  data() {
    return {
      drawer: false,
      isWhiteMode: true, // let this set to true
      counter: 0,
      isJauneActive: false,
      jauneStyle: "background-color: #FFD13C; color: #003C71",
      isDialogOpen: false,
      zoomEnabled: false,
      version,
      file: undefined,
      stepDetail: undefined,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    };
  },

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs;
    },
    logo() {
      if (this.isJauneActive) {
        return "Ricard.png";
      }
      return this.$vuetify.theme.dark
        ? "overbookd_logo_blanc.png"
        : "overbookd_logo_noir.png";
    },
  },

  mounted() {
    this.$vuetify.theme.dark = localStorage.theme || false;
  },

  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.theme = this.$vuetify.theme.dark;
    },

    clickOnTitle() {
      this.counter++;
      if (this.counter > 10) {
        this.isJauneActive = true;
      }
      this.counter++;
      if (this.isJauneActive === true && this.counter > 20) {
        this.isJauneActive = false;
        this.counter = 0;
      }
    },
  },
};
</script>

<style></style>
