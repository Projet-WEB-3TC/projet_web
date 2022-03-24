<template>
  <v-row>
    <v-col class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
          <v-btn elevation="2" v-on:click="scheduleNotfication()"
            >Send Notification</v-btn
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
        { text: 'Date', value: 'date' },
      ],
    }
  },

  methods: {
    scheduleNotfication() {
      if (LocalNotifications.checkPermissions() === 'denied') {
        LocalNotifications.requestPermissions()
      }
      if (LocalNotifications.checkPermissions() !== 'denied') {
        LocalNotifications.schedule({
          notifications: [
            {
              title: 'New Notif',
              body: "i'm the body",
              id: 1,
              schedule: { at: new Date(Date.now() + 1000 * 5) },
              sound: null,
              attachments: null,
              actionTypeId: '',
              extra: null,
            },
          ],
        })
      }
      this.notificationsPending.push({
        title: 'New Notif',
        body: "i'm the body",
        date:
          new Date(Date.now() + 1000 * 5).toLocaleDateString('fr') +
          ' ' +
          new Date(Date.now() + 1000 * 5).toLocaleTimeString('fr'),
      })
    },
  },
}
</script>
