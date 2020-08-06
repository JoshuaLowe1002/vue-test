<template>
  <div>

    <div id="scan">
      <div class="grid-container" v-if="menu">
        <div class="Main p-6 bg-white shadow-md rounded-lg">
            <span class="text-4xl font-extrabold">Please choose a scanning option</span>
        </div>
        <div class="Left bg-white shadow-md rounded-lg" id="option">
          <div class="bg-blue-500 h-40 w-40 p-12 rounded-full flex" id="large-icon">
            <font-awesome-icon class="text-6xl text-white" icon="camera" />
          </div>
          <h1 class="text-3xl font-bold">Camera Scanner</h1>
          <p>Use your devices' camera to scan barcodes.</p>
          <button @click="selectCamera()" class="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Select
          </button>
        </div>
        <div class="Right bg-white shadow-md rounded-lg" id="option">
          <div class="bg-blue-500 h-40 w-40 p-12 rounded-full flex" id="large-icon">
            <font-awesome-icon class="text-6xl text-white" icon="barcode" />
          </div>
                    
          <h1 class="text-3xl font-bold">Hardware Scanner</h1>
          <p>For hardware scanners...</p>
          <button @click="selectHardware()" class="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Select
          </button>

        </div>
      </div>

      <div id="camera-scan" v-if="camera">
        <div class="barcodeView">
          <StreamBarcodeReader
            @decode="onDecode"
            @loaded="onLoaded"
            class="m-5"
          ></StreamBarcodeReader>
        </div>
        <!-- <v-quagga class="m-5" v-if="active" :readerSize="readerSize" :onDetected="read" :readerTypes="['ean_reader']"></v-quagga> -->
      </div>

      <div id="hardware-scan" v-if="hardware">
        <h1 class="text-4xl mx-5 font-bold">Hardware Scanner</h1>
        <br>
        <h1 class="text-2xl mx-5 font-bold" id="pressed_keys"></h1>
        <br>
      </div>

    </div>
  </div>
</template>

<script>
import Vue from 'vue'
//import VueQuagga from 'vue-quaggajs';
import { StreamBarcodeReader } from "vue-barcode-reader";

// register component 'v-quagga'
//Vue.use(VueQuagga);

export default {
  name: 'VueBarcodeTest',
  components: {StreamBarcodeReader},
  data () {
    return {
      active: false,
      camera: false,
      result:"",
      hardware: false,
      menu: true,
      readerSize: {
        width: 640,
        height: 480
      },
      detecteds: []
    }
  },
  mounted() {
    var storedOption = localStorage.getItem('option');

    if (storedOption === "Camera"){
        this.camera = true;
        this.menu = false;
    }

    if (storedOption === "Hardware"){
        this.hardware = true;
        this.menu = false;
        this.hardwareScan();
    }
  },
  methods: {
      read(result) {
        this.toggle();
        document.getElementById("text-field").value = result.codeResult.code;
        setTimeout(1000);
      },

      onDecode(result){
        this.result=result;
        alert(this.result);
        },
      onLoaded(){console.log("Loaded")},


      toggle: function() {
        document.getElementById("text-field").value = "";
				this.active = !this.active;
      },
      
      selectCamera: function() {      
        localStorage.setItem('option', 'Camera');
        this.camera = true;
        this.menu = false;
      },
      
      selectHardware: function() {      
        localStorage.setItem('option', 'Hardware');
        this.hardware = true;
        this.menu = false;
        this.hardwareScan();
      },
      
      hardwareScan() {
        document.addEventListener('keypress', keypressHandler);
        document.addEventListener('keyup', keyupHandler);
        document.addEventListener('keydown', keydownHandler);
        function listenForKeyPress(listen) {
            console.log(listen);
            if (listen) {
                console.log("Adding keypress listener");
                document.addEventListener('keypress', keypressHandler);
            }
            else {
                console.log("Removing keypress listener");
                document.removeEventListener('keypress', keypressHandler);
            }
        }
        function keypressHandler(e) {
            const keypressoutput = document.getElementById('pressed_keys');
            console.log('pressed: ' + e.keyCode);
            if (e.keyCode == 13)    //  Enter key from DataWedge
                keypressoutput.innerHTML += "<BR>";
            else
                keypressoutput.innerHTML += e.key;
        }
        function keyupHandler(e) { console.log('up: ' + e.keyCode); }
        function keydownHandler(e) { console.log('down: ' + e.keyCode); }
      }
  }
}
</script>

<style scoped>
#scan {
  padding-top: 4.5rem;
  margin-left: 255px;
  height: 70vh;
}

#option {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    padding: 20px;
    width: 100%;
}

@media screen and (max-width: 600px) {
  #scan {
      margin-left: 0px;
  }
}

#pressed_keys {
  resize: none;
  height: 30px;
  width: 140px;
}

.barcodeView {
  width: 675px;
}
</style>