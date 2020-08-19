<template>
<div id="products">
    <div id="products-container">
        <div v-if="getLoadingStatus">
            <span class="text-4xl">⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜</span><br>
            <span class="text-4xl">⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜</span><br>
            <span class="text-4xl">⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜</span><br>
            <span class="text-4xl">⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜</span><br>
            <span class="text-4xl">⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜</span><br>
            <span class="text-4xl">⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜</span><br>
            <span class="text-4xl">⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜</span><br>
            <span class="text-4xl">⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜</span><br>
            <span class="text-4xl">⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜</span>
        </div>
        <div v-else>
            <span class="text-4xl">📦 📦 📦 📦 📦 📦 📦 📦 📦</span><br>
            <span class="text-4xl">📦 📦 📦 📦 📦 📦 📦 📦 📦</span><br>
            <span class="text-4xl">📦 📦 📦 📦 📦 📦 📦 📦 📦</span><br>
            <span class="text-4xl">📦 📦 📦 📦 📦 📦 📦 📦 📦</span><br>
            <span class="text-4xl">📦 📦 📦 📦 📦 📦 📦 📦 📦</span><br>
            <span class="text-4xl">📦 📦 📦 📦 📦 📦 📦 📦 📦</span><br>
            <span class="text-4xl">📦 📦 📦 📦 📦 📦 📦 📦 📦</span><br>
            <span class="text-4xl">📦 📦 📦 📦 📦 📦 📦 📦 📦</span><br>
            <span class="text-4xl">📦 📦 📦 📦 📦 📦 📦 📦 📦</span>
        </div>
        <div :class="theme" />
    </div>
</div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
export default {
    name: "Hello",
    computed: { 
        ...mapGetters(['getLoadingStatus']),
        ...mapMutations(['setLoadingStatus'])
     },
     created() {
        this.theme = localStorage.getItem('theme') || 'theme-light'
    },

     mounted () {
         this.$store.commit('setLoadingStatus', true);
         setTimeout(this.loadingFalse, 2000);
     },
     methods: {
         loadingFalse(){ 
             this.$store.commit('setLoadingStatus', false);     
          }
     }
}

</script>

<style>
.loader {
  border: 16px solid grey; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>