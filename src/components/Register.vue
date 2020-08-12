<template>
<div>
    <div
    v-if="validationErrors.length"
    class="notification is-danger is-light"
    >
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative float-right mt-20 mx-3" role="alert">
    <div class="content">
        <ul style="margin-top:0.3em;">
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
    <span class="font-bold text-4xl" v-if="step === 0">Let’s get started</span>
    <span class="font-bold text-4xl" v-if="step === 1">You’re nearly there</span>
    <span class="font-bold text-4xl" v-if="step === 2">One Final Step</span>
    <br>
    <span class="font-bold text-sm">Already a user? <a class="font-medium blue-text" href="/login">Sign In</a></span>
    <form id="regForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-6">
        <div v-if="step === 0">
            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">
                Firstly tell us your name?
            </label>
            <input v-model="name" autocomplete="name" v-on:keyup="updateName()" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Joe Bloggs">
            </div>


            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">
                Hi{{this.emailName}}, what’s your email address?
            </label>
            <input v-model="email" autocomplete="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email">
            </div>

            <button @click.prevent="validate('email'); next();" class="button is-success blue-button shadow-lg  text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="button">
                Continue
            </button>
        </div>

        <div v-if="step === 1">
            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">
                Please tell us your business name
            </label>
            <input v-model="company" autocomplete="company" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="company" type="text" placeholder="Company Name">
            </div>

            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">
                Please provide a contact number 
            </label>
            <input v-model="phone" autocomplete="phone" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="Phone Number">
            </div>

            <button @click.prevent="validate('company'); next();" class="button is-success blue-button shadow-lg mr-3 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="button">
                Continue
            </button>

            <a class="inline-block align-baseline font-bold text-xs text-blue-500 hover:text-blue-800" @click.prevent="prev()" href="#">
              Go Back
            </a>
        </div>

        <div v-if="step === 2">
            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Finally enter your password
            </label>
            <input v-model="password" autocomplete="current-password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
            </div>

            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Please confirm your password
            </label>
            <input v-model="passwordRepeat" autocomplete="new-password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="repeat-password" type="password" placeholder="Password">
            </div>

            <button @click.prevent="validate('pass');" class="button is-success bg-green-500 mr-3 shadow-lg  text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="button">
                Register
            </button>

            <a class="inline-block align-baseline font-bold text-xs text-blue-500 hover:text-blue-800" @click.prevent="prev()" href="#">
              Go Back
            </a>
          </div>

          <div style="text-align:center;margin-top:20px;">
            <span class="step active"></span>
            <span class="step"></span>
            <span class="step"></span>
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
      phone: null,
      emailName: null,
      passwordRepeat: null,
      messages: [],
      step: 0,
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

    prev() {
      this.step--;
      this.stepCount();
    },
    next() {
      if (this.validationErrors.length <= 0){
        this.step++;
        this.stepCount();
      }
    },

    stepCount() {
      var i, x = document.getElementsByClassName("step");
      for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
      }
      //... and adds the "active" class to the current step:
      x[this.step].className += " active";
    },

    updateName() {
      this.emailName = " " + document.getElementById("name").value.replace(/ .*/,'');
    },

    validate(type) {
      // Clear the errors before we validate again
      this.resetError();
      
      if (type === "email"){
        if (!this.email) {
          this.validationErrors.push("<strong>E-mail</strong> cannot be empty.");
        }
        if (!this.name) {
          this.validationErrors.push("<strong>Name</strong> cannot be empty.");
        }
        if (this.email.toLowerCase().indexOf("fulfilmentcrowd.com") === -1) {
          this.validationErrors.push("<strong>E-mail</strong> must be registered to fulfilmentcrowd.");
        }
        if (/.+@.+/.test(this.email) != true) {
          this.validationErrors.push("<strong>E-mail</strong> must be valid.");
        }
      }

      if (type === "company"){
        if (!this.company) {
          this.validationErrors.push("<strong>Company Name</strong> cannot be empty.");
        }
        if (/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(this.phone) != true) {
          this.validationErrors.push("<strong>Phone Number</strong> is not valid.");
        }
      }

      if (type === "pass"){
        if (!this.password) {
          this.validationErrors.push("<strong>Password</strong> cannot be empty");
        }
        if (/.{8,}/.test(this.password) != true) {
          this.validationErrors.push(
            "<strong>Password</strong> must be at least 8 characters long"
          );
        }
        if (!(this.password === this.passwordRepeat)) {
          this.validationErrors.push("<strong>Passwords</strong> did not match");
        }
        if (this.validationErrors.length <= 0) {
          this.signUp();
        }
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

.tab {
  display: none;
}

.blue-text {
    color: #0077FF;
}

.step {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbbbbb;
  border: none;
  border-radius: 50%;
  display: inline-block;
  opacity: 0.5;
}

/* Mark the active step: */
.step.active {
  background-color: #0077FF;
  opacity: 1;
}

.step.finish {
  background-color: #0077FF;
  opacity: 1;
}
</style>