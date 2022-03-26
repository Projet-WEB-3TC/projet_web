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
            v-model="selected"
            style="max-height: 100%; overflow-y: auto"
            :headers="headers"
            :items="notificationsPending"
            item-key="id"
            class="elevation-1"
          >
            <template #[`item.action`]="{ item }">
              <div class="text-truncate">
                <v-icon small @click="showDeleteDialog(item)">
                  mdi-delete
                </v-icon>
              </div>
            </template>
          </v-data-table>

          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title>Delete</v-card-title>
              <v-card-text
                >Etes vous sur de vouloir spprimer la notif?</v-card-text
              >
              <v-card-actions>
                <v-btn color="primary" text @click="dialogDelete = false"
                  >Close</v-btn
                >
                <v-btn color="primary" text @click="deleteItem()">Delete</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
      itemToDelete: null,
      dialogDelete: false,
      selected: [],
      users: [],
      notificationsPending: [
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
      headers: [
        { text: 'Titre', value: 'title' },
        { text: 'Corps', value: 'body' },
        { text: 'Id', value: 'id' },
        { text: 'Date', value: 'date' },
        { text: 'Delete', value: 'action', sortable: false },
      ],
    }
  },

  methods: {
    scheduleNotification() {
      if (LocalNotifications.checkPermissions() === 'denied') {
        LocalNotifications.requestPermissions()
      }
      if (LocalNotifications.checkPermissions() !== 'denied') {
        const now = new Date(Date.now() + 1000 * 5)
        const idd = now.valueOf()

        LocalNotifications.schedule({
          notifications: [
            {
              title: 'New Notif',
              body: "i'm the body",
              id: idd,
              schedule: { at: now },
              sound: null,
              attachments: null,
              actionTypeId: '',
              extra: null,
            },
          ],
        })
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

    deleteNotif(notif) {
      const filtered = this.notificationsPending.filter(function (
        value,
        index,
        arr
      ) {
        return value.id === notif.id
      })
      this.notificationsPending = filtered
    },

    showDeleteDialog(item) {
      this.itemToDelete = item
      this.dialogDelete = !this.dialogDelete
    },
    deleteItem() {
      const index = this.notificationsPending.indexOf(this.itemToDelete)
      this.notificationsPending.splice(index, 1)
      this.dialogDelete = false
    },
  },
}
</script>
