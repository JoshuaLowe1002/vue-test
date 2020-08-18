<template>
    <div v-if="getFlyout" v-show="getFlyout" class="h-full animate__animated animate__fadeInRight background-col fixed shadow-xl noselect" id="flyout">
        <div id="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Language from '../components/Language';   
import router from "../router";


export default {
  name: 'Flyout',
  components: {
      Language,
  },
  props: ['title', 'description', 'stock', 'price', 'category', 'show', 'currentid'],
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
    ...mapGetters(["isUserAuth", "productList", "getFlyout"])
  },
};
</script>

<style scoped>
    #flyout-top {
        display: flex;
        height: 130px;
        padding: 2px;  
    }

    #flyout {
        right: 0;
        top: 0;
        width: 600px;
        z-index: 1000;
        background-color: #F1F4F8;
    }            
</style>