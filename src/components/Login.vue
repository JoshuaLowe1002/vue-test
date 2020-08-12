<template>

<div>
    <div
    v-if="validationErrors.length"
    class="notification is-danger is-light"
    >
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative float-right mt-20 mx-3" role="alert">
    <div class="content">
        Please resolve the following error(s) before proceeding.
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
    <span class="font-bold text-4xl">{{greet}}</span>
    <br>
    <span class="font-bold text-sm">Not got an account? <a class="font-medium blue-text" href="/register">Register</a></span>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-6">
        <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">
            Email
        </label>
        <input v-model="email" autocomplete="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email">
        </div>
        <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
        </label>
        <input v-model="password" autocomplete="current-password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
        </div>
        <div class="flex items-center justify-between">
        <button @click.prevent="validate()" class="button is-success blue-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
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
      greet: null,
      validationErrors: [],
      firebaseError: ""
    };
  },
  mounted () {
      var myDate = new Date();
      var hrs = myDate.getHours();

      if (hrs < 12)
         this.greet = 'Good Morning!';
      else if (hrs >= 12 && hrs <= 17)
         this.greet = 'Good Afternoon!';
      else if (hrs >= 17 && hrs <= 24)
        this.greet = 'Good Evening!';
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
    },
  },
  methods: {
    ...mapActions(["signInAction"]),
    resetError() {
      this.validationErrors = [];
    },
    validate() {
      // Clear the errors before we validate again
      this.resetError();

      console.log("hi!");

      // email validation
      if (!this.email) {
        this.validationErrors.push("<strong>E-mail</strong> cannot be empty.");
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
      // when valid then sign in
      if (this.validationErrors.length <= 0) {
        this.signIn();
      }
    },
    signIn() {
      this.signInAction({ email: this.email, password: this.password });
      
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
  margin: -100px 0 0 -60px;
}
</style>