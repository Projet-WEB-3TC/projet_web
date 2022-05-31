<template>
  <div>
    <h1>Inscription 👋</h1>
    <OverForm
      v-if="signupForm"
      :fields="signupForm"
      @form-change="onFormChange"
    ></OverForm>
    <p>
      Une fois le formulaire remplit veuillez vous connecter à Overbookd pour
      remplir vos dispos ! <br />
      <span
        >Pensez à immédiatement les remplir pour être accepté au plus vite
        !</span
      >
    </p>
    <v-btn color="primary" @click="submitForm">Envoyer</v-btn>
  </div>
</template>

<script>
import OverForm from "../components/overForm";
import { getConfig } from "~/common/role";

export default {
  name: "Signup",
  components: { OverForm },
  auth: false,
  layout: "none",

  data() {
    return {
      signupForm: undefined,
      compiledForm: undefined,
    };
  },

  async mounted() {
    // fetch from API to check that sign ups are open
    const isSignupOpen = this.getConfig("isSignupOpen");
    if (!isSignupOpen) {
      alert(this.getConfig("fb_signup_closed"));
      await this.$router.push({
        path: "/login",
      });
    } else {
      this.signupForm = this.getConfig("signup_form_soft");
    }
  },

  methods: {
    getConfig(key) {
      return getConfig(this, key);
    },

    onFormChange(form) {
      this.compiledForm = form;
    },

    submitForm() {
      if (this.compiledForm.password !== this.compiledForm.password2) {
        alert("Les deux mots de passes ne sont pas les mêmes");
      } else if (!this.compiledForm.isValid) {
        alert("Les champs avec * sont obligatoires");
      } else {
        if (this.compiledForm.team !== undefined) {
          this.compiledForm.team = this.compiledForm.team
            .toLocaleString()
            .toLowerCase()
            .split(","); // Pour passer tout les labels en minuscule
          this.compiledForm.team.push("toValidate");
        } else {
          this.compiledForm.team = ["toValidate"];
        }
        console.log(this.compiledForm);
        this.$axios.post("/signup", this.compiledForm);
        this.$router.push({
          path: "/",
        });
        alert(
          `Inscription terminée, veuillez maintenant vous connecter pour remplir IMMEDIATEMENT vos disponibilités. C'est absolument essentiel et va vous permettre d'être validé.`
        );
      }
    },
  },
};
</script>

<style scoped>
.important {
  font-weight: bold;
  color: red;
}
</style>
