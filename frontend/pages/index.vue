<template>
  <v-app>
    <v-content>
      <v-card width="500" class="mx-auto mt-9" align="center">
        <v-card-title>Bienvenue sur Overbookd Companion!</v-card-title>
        <v-card-text>
          <v-text-field label="Username" prepend-icon="mdi-account-circle" />
          <v-text-field
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-card-text>

        <v-divider />
        <v-card-actions>
          <v-btn value="Signup" to="/signup" color="success">
            S'inscrire
          </v-btn>
          <v-btn value="Accueil" to="/acceuil" color="info">
            Se connecter
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-content>
  </v-app>
</template>
<script>
export default {
  layout: "empty",

  data() {
    return {
      showPassword: false,
    };
  },
};
</script>
<style></style>
