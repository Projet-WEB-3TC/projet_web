<template>
  <div id="app">
    <v-card style="justify-content: center" max-width="80%">
      <v-container>
        <!-- a modifier pour recupe la date d'anniv-->
        <v-row align="center">
          <v-col cols="12">
            <v-autocomplete
              v-model="value"
              :items="liste"
              dense
              filled
              label="Prénom Nom"
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-container>
      <v-row no-gutters>
        <!--
          <button @click ="btnClick">
            Bouton
          </button>
          -->
        <v-card
          tile
          v-for="(items, i) in items"
          :key="i"
          color="#d6cdcc"
          width="160px"
          min-width="50px"
          style="justify-content: center"
        >
          <v-img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
            width="75%"
            style="margin: auto"
          ></v-img>
          <v-card-title
            >{{ nickname }} ({{ firstname }} {{ lastname }})
          </v-card-title>
          <v-card-subtitle> hard, culture </v-card-subtitle>
          <v-card-text style="overflow-y: hidden">
            {{ telephone }}
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      id: 5,
      nickname: "Surnom",
      firstname: "Prénom",
      lastname: "Nom",
      telephone: "0X XX XX XX XX",
      items: ["hard1", "hard2", "hard3", "hard4"],
      value: null,
      btnClick: () => {
        alert("bravo tu as cliqué sur le bouton");
      },
    };
  },
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0f0d0f;
  margin-top: 40px;
}
</style>
