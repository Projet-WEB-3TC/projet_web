<template>
  <v-col cols="12">
    <v-card color="#385F73" dark class="justify-center">
      <v-card-title class="text-h5">
        Bienvenue sur Overbookd {{ firstname }}
      </v-card-title>

      <v-card-subtitle
        ><br />
        C'est pour le moment une version bêta, mais bientôt vous pourrez
        retrouver ici toutes les fonctionnalités d'Overbookd adaptées pour
        mobile !
      </v-card-subtitle>

      <v-card-actions>
        <v-btn text> Télécharger votre planning </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { LocalNotifications } from "@capacitor/local-notifications";

export default {
  name: "Acceuil",
  auth: false,
  data() {
    return {
      id: 5,
      nickname: "Surnom",
      firstname: "Prénom",
      lastname: "Nom",
      telephone: "0X XX XX XX XX",
      show: false,
      items: ["hard1", "hard2", "hard3", "hard4", "hard5"],
      value: null,
      myFTs: null,
    };
  },
  computed: {
    me() {
      return this.$accessor.user.me;
    },
  },

  async mounted() {
    try {
      console.log(this.me);
      this.firstname = this.me.firstname;
      const ftTMP = await this.$axios.get(`/FT/orga-requis/${this.me._id}`);
      await this.$accessor.FT.SET_ALL_FTS(ftTMP.data[0].fts);
      this.myFTs = this.$accessor.FT.Fts;
      console.log(this.myFTs);

      if (LocalNotifications.checkPermissions() === "denied") {
        LocalNotifications.requestPermissions();
      }
      if (LocalNotifications.checkPermissions() !== "denied") {
        const pendingNotif = (await LocalNotifications.getPending())
          .notifications;

        pendingNotif.forEach((notif) => {
          LocalNotifications.cancel(notif.id);
          pendingNotif.push(notif);
        });

        this.myFTs.forEach((ft) => {
          if (ft.start > Date.now() + 1000 * 5) {
            LocalNotifications.schedule({
              notifications: [
                {
                  title: ft.name + " " + ft.TFname,
                  body: ft.description,
                  id: ft._id + ft.start,
                  schedule: {
                    at: new Date(ft.start - 1000 * 60 * 5), // 5 min before start time
                  },
                  sound: null,
                  attachments: null,
                  actionTypeId: "",
                  extra: null,
                },
              ],
            });
            console.log(
              "Notif " +
                ft._id +
                " " +
                ft.name +
                ft.TFname +
                " scheduled at " +
                new Date(ft.start)
            );
          }
        });
      }
    } catch (e) {
      console.error(e);
    }
  },

  methods: {},
};
</script>
