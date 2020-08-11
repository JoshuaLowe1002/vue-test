<template>
    <div id="home">
        <div id="home-container">
            <div class="Main p-6 bg-white shadow-md rounded-lg">
                <span class="text-4xl font-extrabold">{{ $t("message.welcome") }} </span><span class="text-4xl">{{ $t("message.crescent") }}</span>
            </div>
            <h1 class="text-3xl my-5 text-center font-semibold">{{ $t("message.hello") }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    mounted () {
        document.getElementById("navclose").style.display = "none";
        
        if (window.innerWidth < 600) {
            document.getElementById("navbar").style.display = "none";
        }
    }
};
</script>

<style>
#home {
  padding-top: 4.5rem;
  margin-left: 255px;
  height: 70vh;
}

#home-container {
    padding: 15px;
}

@media screen and (max-width: 600px) {
  #home {
      margin-left: 0px;
  }
}
</style>