<template>
    <div class="h-16 w-full bg-white shadow-xl py-3 fixed z-0">
        <div class="inline-block text-2xl mx-2" id="menu" @click="showNav()">
          <font-awesome-icon icon="bars" />
        </div>
        <div class="inline-block float-right">
          <img class="h-10 t-1" style="margin-right: 15px;" src="../../public/img/fclogo.png">
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Post vue'
    };
  },
  methods: {
    showNav() {
      document.getElementById("navbar").style.display = "block";
    }
  }
};
</script>

<style>
#menu {
  cursor: pointer;
}
        
</style>