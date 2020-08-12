<template>
<div>
    <div
    v-if="validationErrors.length"
    class="notification is-danger is-light"
    >
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative float-right mt-20 mx-3" role="alert">
    <div class="content">
        <ul style="margin-top:0.3em; margin-left: 1em">
        <li
            v-for="(error, index) in validationErrors"
            :key="`error-${index}`"
            v-html="error"
        />
        </ul>
    </div>
    </div>
    </div>

    <div class="w-full max-w-xs" id="outPopUp">
        
    <form id="regForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="tab">

          <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">
              Full Name
          </label>
          <input v-model="name" autocomplete="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Joe Bloggs">
          </div>


          <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">
              Email
          </label>
          <input v-model="email" autocomplete="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email">
          </div>

        </div>


        <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">
            Company
        </label>
        <input v-model="company" autocomplete="company" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="company" type="text" placeholder="Company Name">
        </div>

        <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
        </label>
        <input v-model="password" autocomplete="current-password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
        </div>

        <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Repeat Password
        </label>
        <input v-model="passwordRepeat" autocomplete="new-password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="repeat-password" type="password" placeholder="Password">
        </div>

        <div class="flex items-center justify-between">
        <button @click.prevent="validate()" class="button is-success bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Register
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
        </a>
        </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
        &copy;2020 fulfilmentcrowd. All rights reserved.
    </p>
    </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      email: null,
      password: null,
      name: null,
      company: null,
      passwordRepeat: null,
      messages: [],
      validationErrors: []
    };
  },
  computed: {
    ...mapGetters(['getUser']),
    nextRoute () {
      return this.$route.query.redirect || '/'
    }
  },
  watch: {
    getUser (auth) {
      if(!!auth){
        this.$router.replace(this.nextRoute)
      }
    }
  },
firestore() {
      return {
        users: db.collection('users'),
      }
    },
  methods: {
    ...mapActions(["signUpAction"]),
    resetError() {
      this.validationErrors = [];
    },

    validate() {
      // Clear the errors before we validate again
      this.resetError();

      // email validation
      if (!this.email) {
        this.validationErrors.push("<strong>E-mail</strong> cannot be empty.");
      }
      if (this.email.toLowerCase().indexOf("fulfilmentcrowd.com") === -1) {
        this.validationErrors.push("<strong>E-mail</strong> must be registered to fulfilmentcrowd.");
      }
      if (/.+@.+/.test(this.email) != true) {
        this.validationErrors.push("<strong>E-mail</strong> must be valid.");
      }
      // password validation
      if (!this.password) {
        this.validationErrors.push("<strong>Password</strong> cannot be empty");
      }
      if (/.{6,}/.test(this.password) != true) {
        this.validationErrors.push(
          "<strong>Password</strong> must be at least 6 characters long"
        );
      }
      if (!(this.password === this.passwordRepeat)) {
        this.validationErrors.push("<strong>Passwords</strong> did not match");
      }

      // when valid then sign in
      if (this.validationErrors.length <= 0) {
        this.signUp();
      }
    },
    signUp() {
      this.validationErrors.push("<strong>Please check your inbox to activate your account</strong>");
      this.signUpAction({ email: this.email, password: this.password, name: this.name, company: this.company });
    }
  }
};
</script>

<style>
#outPopUp {
  position: absolute;
  z-index: 15;
  top: 50%;
  left: 50%;
  margin: -250px 0 0 -60px;
}
</style>