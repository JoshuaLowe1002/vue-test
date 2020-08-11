<template>
    <div class="h-16 w-full taskbar-col py-10px fixed z-0 border-bottom-task">
        <div class="inline-block text-2xl mx-2 float-left" id="menu" @click="showNav()">
          <font-awesome-icon icon="bars" />
        </div>
        <div class="float-left search">
          <div class="relative mx-auto text-black">
          <input class="h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none s-width"
            type="search" name="search" placeholder="Search">
          <button type="submit" class="absolute right-0 top-0 mt-2 mr-3">
            <font-awesome-icon class="fs-4 text-black fill-current" icon="search" />
          </button>
          </div>
        </div>
        
        <div id="profile" class="float-right w-170">
          <div id="first" class="rounded-full circle-image bg-cover" style="background-image: url('https://avatars3.githubusercontent.com/u/25752941?s=460&u=131730e97ddb996d629a0c9a2a69d73a1254d8f9&v=4');"></div>
          <div id="second">
            <span class="font-medium text-m">Joshua Lowe</span>
          </div>
        </div>

        <div class="float-right p-3 px-2 mr-4">
          <font-awesome-icon class="fs-4 text-gray-600" icon="bell" />
        </div>

        <div class="float-right p-3 px-2 mr-4">
          <font-awesome-icon class="fs-4 text-gray-600" icon="life-ring" />
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
      document.getElementById("navclose").style.display = "block";
    },
    myFunction() {
      // Declare variables
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");

      // Loop through all table rows, and hide those who don't match the search query
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }

  }
};
</script>

<style>
#menu {
  cursor: pointer;
}

.circle-image {
  width: 41px !important;
  height: 41px !important;
  border: solid lightgray 2px;
  padding: 0px !important;
}

.w-170 {
  width: 170px;
}

.py-10px {
  padding-top: 10px;
  padding-bottom: 10px;
}

.taskbar-col {
  background-color: #F1F4F8;
}

.search {
  margin-left: 240px;
}

.s-width {
  width: 350px;
  background-color: #E0E3E7;
}

.border-bottom-task {
  border-bottom: solid 1px #DDDDDD;
}
        
</style>