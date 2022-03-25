<template>
  <v-row>
    <v-col class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
          <v-btn elevation="2" v-on:click="scheduleNotification()"
            >Send Notification</v-btn
          >
          <v-btn elevation="2" v-on:click="updateNotification()"
            >Update Notification</v-btn
          >
        </v-col>

        <v-col md="10">
          <v-data-table
            style="max-height: 100%; overflow-y: auto"
            :headers="headers"
            :items="notificationsPending"
            class="elevation-1"
            dense
            :items-per-page="20"
          >
          </v-data-table>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { LocalNotifications } from '@capacitor/local-notifications'

export default {
  name: 'IndexPage',

  data() {
    return {
      users: [],
      notificationsPending: [],
      headers: [
        { text: 'Titre', value: 'title' },
        { text: 'Corps', value: 'body' },
        { text: 'Id', value: 'id' },
        { text: 'Date', value: 'date' },
      ],
      id_notif: 1,
    }
  },

  methods: {
    scheduleNotification() {
      if (LocalNotifications.checkPermissions() === 'denied') {
        LocalNotifications.requestPermissions()
      }
      if (LocalNotifications.checkPermissions() !== 'denied') {
        LocalNotifications.schedule({
          notifications: [
            {
              title: 'New Notif',
              body: "i'm the body",
              id: this.id_notif,
              schedule: { at: new Date(Date.now() + 1000 * 5) },
              sound: null,
              attachments: null,
              actionTypeId: '',
              extra: null,
            },
          ],
        })
        this.id_notif++
      }
    },

    async updateNotification() {
      const notif = (await LocalNotifications.getPending()).notifications
      for (let index = 0; index < notif.length; index++) {
        if (
          this.notificationsPending.filter((e) => e.id === notif[index].id)
            .length === 0
        ) {
          this.notificationsPending.push({
            title: notif[index].title,
            body: notif[index].body,
            id: notif[index].id,
            date:
              new Date(notif[index].schedule.at).toLocaleDateString('fr') +
              ' ' +
              new Date(notif[index].schedule.at).toLocaleTimeString('fr'),
          })
        }
      }
    },
  },
}
</script>
