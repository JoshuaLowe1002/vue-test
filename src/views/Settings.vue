<template>
    <div id="settings">
        <div class="grid-container">
            <div class="Main p-6 bg-white shadow-md rounded-lg">
                <span class="text-4xl font-extrabold">Settings</span>
            </div>
            <div class="Left p-6 bg-white shadow-md rounded-lg" id="settings-left">
                <span class="text-2xl font-extrabold">Scanner Setting:</span>
                <br>
                <textarea readonly id="text-field" cols="1" rows="1"></textarea>
                <br>
                <button class="bg-red-500 mt-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="deleteStorage()">
                    Delete Stored Option
                </button>
            </div>

            <div class="Right p-6 bg-white shadow-md rounded-lg" id="settings-left">
                <span class="text-2xl font-extrabold">About:</span>
                <br>
                <span class="text-lg font-extrabold">Crescent v0.1 - Built on Vue</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'settings',
    mounted() {
        document.getElementById("text-field").value = localStorage.getItem("option");
        if (window.innerWidth < 600) {
            document.getElementById("navbar").style.display = "none";
        }
    },
    methods: {
        deleteStorage() {
            localStorage.removeItem("option");
            document.getElementById("text-field").value = "";
        }
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
    height: 175px;
}

#text-field {
  resize: none;
  height: 30px;
  width: 140px;
}
</style>