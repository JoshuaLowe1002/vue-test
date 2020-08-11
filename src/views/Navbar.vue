<template>
    <div class="h-full w-64 z-40 fixed navbar-col shadow-xl float-left p-2 text-white noselect" id="navbar">
        <div id="profile" onclick="highlightBox('profile')">
            <div id="first" class="rounded-lg bg-cover" style="background-image: url('https://avatars1.githubusercontent.com/u/24291894?s=280&v=4');"></div>
            <div id="second">
                <span class="font-bold text-lg">Bobs Ramen</span>
            </div>
            <div id="third">
            </div>
        </div>

        <div id="title" class="font-bold" v-if="isUserAuth"> </div>

        <div>
            <router-link to="login"> 
            <div id="wrapper" v-if="!isUserAuth">
                <div id="first" class="rounded-lg bg-cover bg-purple-500">
                    <font-awesome-icon class="fs-25" icon="cog" />
                </div>
                <div id="second" class="menuOptionTitle">
                    <span class="font-extrabold">Login</span>
                </div>
                    <div id="third">
                </div>
            </div>
            </router-link>
        </div>

        <div>
            <router-link to="register"> 
            <div id="wrapper" v-if="!isUserAuth">
                <div id="first" class="rounded-lg bg-cover bg-pink-500">
                    <font-awesome-icon class="fs-25" icon="cog" />
                </div>
                <div id="second" class="menuOptionTitle">
                    <span class="font-extrabold">Register</span>
                </div>
                    <div id="third">
                </div>
            </div>
            </router-link>
        </div>

        <div v-for="item in items" :key="item.message">
            <router-link :to="item.link"> 
            <div id="wrapper" :class="item.class" class="inactive" v-if="isUserAuth">
                <div id="first" class="rounded-lg bg-cover" :class="item.colour">
                    <font-awesome-icon class="fs-25" :icon="item.icon" />
                </div>
                <div id="second" class="menuOptionTitle">
                    <span class="font-bold">{{ $t("message." + item.message) }}</span>
                </div>
                    <div id="third">
                </div>
            </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Language from '../components/Language';


export default {
  name: 'Navbar',
  components: {
      Language
  },
  data() {
    return {
      msg: 'Post vue',
      items: [
        { message: 'home', link: '/', colour: "", icon: "chart-line", class:"active"},
        { message: 'orders', link: '/', colour: "", icon: "receipt"},
        { message: 'products', link: 'products', colour: "", icon: "box"},
        { message: 'picking', link: 'scan', colour: "", icon: "dolly-flatbed"},
        { message: 'settings', link: 'settings', colour: "", icon: "cog"}
      ]
    };
  },
  computed: {
    ...mapGetters(["isUserAuth"])
  },
};
</script>

<style>
        .fc-blue {
            background-color: #0077FF;
        }
        
        #profile {
            display: flex;
            height: 50px;
            margin-left: 1px;
            margin-right: 1px;
            padding: 2px;
            border-radius: 10px;
            cursor: pointer;
        }
        
        #wrapper {
            display: flex;
            height: 50px;
            margin-left: 1px;
            margin-right: 1px;
            margin-bottom: 10px;
            margin-top: 10px;
            padding: 2px;
            border-radius: 10px;
            cursor: pointer;
        }
        
        #title {
            margin-bottom: 20px;
            margin-top: 5px;
            border-top:rgba(0, 0, 0, 0.15) solid 1px;
            padding: 2px;
            width: 100%;
        }
        
        #first {
            width: 45px;
            margin-right: 7px;
            margin-right: 7px;
            padding: 10px;
        }

        .inactive {
            color: #A6ABBD;
        }

        .active {
            color: white;
        }
        
        #second {
            width: 65%;
            margin-right: 7px;
            padding-top: 9px;
        }

        .fs-25 {
            font-size: 25px;
        }

        .menuOptionTitle{
            padding-top: 11px;
        }
        
        #third {
            width: 12%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 25px;
        }
        
         :root {
            --animate-duration: 600ms;
        }
        
        .highlight {
            background-color: rgba(255, 255, 255, 0.1);
        }
        
        .noselect {
            -webkit-touch-callout: none;
            /* iOS Safari */
            -webkit-user-select: none;
            /* Safari */
            -khtml-user-select: none;
            /* Konqueror HTML */
            -moz-user-select: none;
            /* Old versions of Firefox */
            -ms-user-select: none;
            /* Internet Explorer/Edge */
            user-select: none;
        }
        
        #wrapper:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
        
        body {
            background-color: #F1F4F8;
        }

        

        
        .fa-arrow-alt-circle-right:before {
            content: "\f35a" !important;
        }
        
        .grid-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 5fr;
            gap: 10px 10px;
            grid-template-areas: "Main Main" "Left Right";
            width: 100%;
            height: 100%;
            padding: 15px;
        }
        
        .Main {
            grid-area: Main;
        }
        
        .Left {
            grid-area: Left;
        }
        
        .Right {
            grid-area: Right;
        }

        @media screen and (max-width: 600px) {
            #navbar {
                display: none;
            }
        }
        
</style>