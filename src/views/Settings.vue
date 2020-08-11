<template>
    <div id="settings">
        <div class="grid-container">
            <div class="Main p-6 bg-white shadow-md rounded-lg">
                <span class="text-4xl font-extrabold">{{ $t("message.settings") }}</span>
            </div>
            <div class="Left p-6 bg-white shadow-md rounded-lg" id="settings-left">
                <span class="text-2xl font-extrabold">{{ $t("message.scannersetting") }}</span>
                <br>
                <textarea readonly id="text-field" cols="1" rows="1"></textarea>
                <br>
                <button class="bg-red-500 mt-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="deleteStorage()">
                    {{ $t("message.delete") }}
                </button>
            </div>

            <div class="Right p-6 bg-white shadow-md rounded-lg" id="settings-left">
                <span class="text-2xl font-extrabold">{{ $t("message.userinfo") }}</span>
                <br>
                <span class="text-lg font-extrabold">Name: {{ getUser.displayName }}</span>
                <br>
                <span class="text-lg font-extrabold">Email: {{ getUser.email }}</span>
                <br>
                <button class="bg-red-500 mt-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="signOut()">
                    {{ $t("message.logout") }}
                </button>
                <Language class="my-4" />
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import Language from '../components/Language';


export default {
    name: 'settings',
    components: {
        Language
    },
    mounted() {
        document.getElementById("text-field").value = localStorage.getItem("option");
        document.getElementById("navclose").style.display = "none";
        if (window.innerWidth < 600) {
            document.getElementById("navbar").style.display = "none";
        }
        
    },
    methods: {
        ...mapActions(["signOutAction"]),
        deleteStorage() {
            localStorage.removeItem("option");
            document.getElementById("text-field").value = "";
        },
        signOut() {
            this.signOutAction();
        }
    },
    computed: {
        ...mapGetters(['getUser', 'isUserAuth'])
    }
};
</script>

<style>
#settings {
  padding-top: 4.5rem;
  margin-left: 255px;
  height: 70vh;
}

@media screen and (max-width: 600px) {
  #settings {
      margin-left: 0px;
  }

  #settings-left{
    height: 250px !important;
}
}

#settings-left{
    height: 250px;
}

#text-field {
  resize: none;
  height: 30px;
  width: 140px;
}
</style>