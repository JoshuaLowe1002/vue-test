<template>
    <div id="app">
        <div class="fadeMe hidden" id="navclose" @click="hideNav()"></div>
        <div class="flyoutHide hidden" id="flyoutclose" @click="hideFlyout()"></div>
        <Navbar></Navbar>
        <Taskbar></Taskbar>
    	<router-view />
    </div>
</template>

<script>
import Navbar from './views/Navbar.vue';
import Taskbar from './views/Taskbar.vue';
import router from './router';
import {mapActions, mapMutations, mapGetters} from 'vuex';

export default {
    name: 'app',
    components: {
        Navbar,
        Taskbar
    },
    mounted() {
        this.authAction(); 
    },
    methods: {
        hideNav() {
            document.getElementById("navbar").style.display = "none";
            document.getElementById("navclose").style.display = "none";
        },
        hideFlyout() {
            document.getElementById("flyout").style.display = "none";
            router.push({ path: "/products" });
            this.$store.commit("flyout", false);
            document.getElementById("products-container").classList.toggle("flyout-smaller");
            document.getElementById("flyoutclose").style.display = "none";
        },
        ...mapActions(["authAction"]),
        ...mapMutations(["flyout"])
    }
};
</script>

<style>
    div.fadeMe {
        opacity: 0.7; 
        background: #000; 
        width: 100%;
        height: 100%; 
        z-index: 10;
        top: 0; 
        cursor: pointer;
        left: 0; 
        position: fixed; 
    }

    div.flyoutHide {
        opacity: 0.7; 
        background: #000; 
        width: 100%;
        height: 100%; 
        z-index: 100;
        top: 0; 
        cursor: pointer;
        left: 0; 
        position: fixed; 
    }

    .navbar-col {
        background-color: #202D5B;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 400ms;
    }

    :root {
        --animate-duration: 600ms;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

</style>
 