<template>
    <div id="app">
        <div class="fadeMe hidden" id="navclose" @click="hideNav()"></div>
        <Navbar></Navbar>
        <Taskbar></Taskbar>
    	<router-view />
    </div>
</template>

<script>
import Navbar from './views/Navbar.vue';
import Taskbar from './views/Taskbar.vue';
import {mapActions} from 'vuex';

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
        ...mapActions(["authAction"])
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
    .navbar-col {
        background-color: #202D5B;
    }
</style>
 