<template>
  <v-col cols="12">
    <v-card color="#385F73" dark class="justify-center">
      <v-card-title class="text-h5">
        Bienvenue sur Overbookd {{ this.me.firstname }}
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
export default {
  name: "Acceuil",
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
    };
  },

  mounted() {
    console.log(this.me);
    this.firstname = this.me.firstname;
  },

  computed: {
    me() {
      return this.$accessor.user.me;
    },
  },
};
</script>
