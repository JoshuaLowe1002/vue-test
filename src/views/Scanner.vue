<template>
  <div>
    <button @click="toggle()">Scan Barcode</button>
    <v-quagga v-if="active" :readerSize="readerSize" :onDetected="read" :readerTypes="['ean_reader']"></v-quagga>
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