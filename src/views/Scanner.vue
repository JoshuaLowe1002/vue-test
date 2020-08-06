<template>
  <div>
    <button @click="toggle()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5">Scan Barcode</button>
    <v-quagga class="m-5" v-if="active" :readerSize="readerSize" :onDetected="read" :readerTypes="['ean_reader']"></v-quagga>
  </div>
</template>

<script>
import Vue from 'vue'
import VueQuagga from 'vue-quaggajs';

// register component 'v-quagga'
Vue.use(VueQuagga);


export default {
  name: 'VueBarcodeTest',
  data () {
    return {
      active: false,
      readerSize: {
        width: 640,
        height: 480
      },
      detecteds: []
    }
  },
  methods: {
      read(result) {
        this.toggle();
        alert(result.codeResult.code);
        setTimeout(1000);
      },

      toggle: function() {
				this.active = !this.active;
			}
  }
}
</script>