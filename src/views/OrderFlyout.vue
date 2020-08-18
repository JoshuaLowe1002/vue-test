<template>
    <div class="h-full fixed navbar-col animate__animated animate__fadeInRight animate__fadeOutRight shadow-xl p-2 text-white noselect hidden" id="flyout">
        <div id="profile" onclick="highlightBox('profile')">
            <div id="first" class="rounded-lg bg-cover" style="background-image: url('https://eal-website.s3.amazonaws.com/cms/hierarchy/small/ecommerce.png');"></div>
            <div id="second">
                <span class="font-bold text-lg ml-3">Order Quick View</span>
            </div>
            <div id="third">
            </div>
        </div>

        <div id="title" class="font-bold" v-if="isUserAuth"> </div>

            <div class="p-2 mb-3">
                <span class="text-xl font-bold">Customer</span>
                <hr class="mb-4">
                <span class="text-lg font-medium">{{customer}}</span>
            </div>
            
            <div class="p-2 mb-3">
                <span class="text-xl font-bold">Products</span>
                <hr class="mb-4">
                <ul>
                    <li v-for="Product in products" :key="Product">{{Product}}</li>
                </ul>
            </div>

            <div class="p-2 mb-3">
                <span class="text-xl font-bold">Status</span>
                <hr class="mb-4">
                <span class="text-lg font-medium">{{status}}</span>
            </div>

        <button @click="editProduct()" class="m-2 blue-button shadow-md hover:bg-red-500 text-white font-bold py-2 px-8 rounded">
            Edit
        </button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Language from '../components/Language';
import router from "../router";


export default {
  name: 'OrderFlyout',
  components: {
      Language

  },
  props: ['customer', 'products', 'status'],
  mounted () {
      if (localStorage.getItem("company") !== null){
        this.company = localStorage.getItem("company");
      }
  },
  methods: {
      editProduct() {
          var routeLink = '/editproduct/' + this.currentid
          document.getElementById("flyout").classList.add("animate__fadeOutRight");
          document.getElementById("flyoutclose").style.display = "none";
          router.push({ path: routeLink });
      }
  },
  computed: {
    ...mapGetters(["isUserAuth", "orderList"])
  },
};
</script>

<style scoped>
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

        .fade-enter-active,
            .fade-leave-active {
            transition-duration: 0.3s;
            transition-property: opacity;
            transition-timing-function: ease;
            }

            .fade-enter,
            .fade-leave-active {
            opacity: 0
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

        #flyout {
            right: 0;
            top: 0;
            width: 400px;
            z-index: 1000;
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

        .active {
            color: white !important;
        }

        body {
            padding: 0;
            margin: 0;
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