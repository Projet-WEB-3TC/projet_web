<template>
  <v-app>
    <v-content>
      <v-card width="500" class="mx-auto mt-9" align="center">
        <v-card-title>Bienvenue sur Overbookd Companion!</v-card-title>
        <v-card-text>
          <v-text-field
            prepend-icon="mdi-account-circle"
            v-model="credentials.username"
            label="email"
            type="text"
            required
            autofocus
            outlined
            solo
            filled
          />
          <v-text-field
            v-model="credentials.password"
            label="password"
            required
            outlined
            clearable
            solo
            filled
            @keydown.enter="login()"
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
          <v-btn color="info" @click="login()"> Se connecter </v-btn>
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
      credentials: {
        username: undefined,
        password: undefined,
      },
    };
  },
  methods: {
    async login() {
      try {
        console.log(this.credentials.body);
        // this.$axios.post("/login", this.credentials); // try to log user in
        console.log("connected to API");
        await this.$router.push({
          path: "/Acceuil",
        }); // redirect to homepage
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
<style></style>
