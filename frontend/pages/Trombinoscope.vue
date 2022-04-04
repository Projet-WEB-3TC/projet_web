<template>
  <div id="app">
    <v-card dark max-width="99%">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <!-- a modifier pour recupe la date d'anniv style="justify-content: center" max-width="80%
                <v-row align="center">
                  <v-col cols="12">-->
            <v-autocomplete
              v-model="value"
              auto-select-first
              :items="items"
              dense
              label="Prénom Nom"
            ></v-autocomplete>
            <v-spacer></v-spacer>
            <!--<v-icon>mdi-magnify</v-icon>-->
            <v-spacer></v-spacer>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-container dense fluid >
      <v-row dense>
        <v-col v-for="(item, i) in items" :key="i" :cols="6">
          <v-card dark class="mx-auto"
            ><!--on peut ajouter max-width="180px"-->

            <v-img src="https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg" style="margin: auto"></v-img>
            <v-card-title dense outlined>{{ firstname }} {{ lastname }} </v-card-title>
            <v-btn icon :href="'tel:+33' + telephone">
              <v-icon small dense outlined>mdi-phone</v-icon>
            </v-btn>
            <v-card-actions>
              <!-- mettre le texte de description plus petit-->
              <v-btn color="#ca1501" text>Plus </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>
                <v-card-text font-size=12px>
                  {{ telephone }} <bn></bn>
                  {{ nickname }} {{team}} <bn></bn>
                  description du hard
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Trombinoscope',
  data() {
    return {
      id: 5,
      nickname: 'Surnom',
      firstname: 'Prénom',
      lastname: 'Nom',
      telephone: '0X XX XX XX XX',
      team: 'Team',
      show: false,
      items: ['hard1', 'hard2', 'hard3', 'hard4', 'hard5', 'hard6'],
      value: null,
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0f0d0f;
  margin-top: 15px;
}
</style>
