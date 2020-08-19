<template>
<div id="uppertaskbar">
    <div class="h-16 w-full taskbar-col py-10px fixed z-0 border-bottom-task" id="taskbar">
        <div class="inline-block text-2xl mx-2 float-left" id="menu" @click="showNav()">
          <font-awesome-icon icon="bars" />
        </div>
        <div class="float-left search" v-if="isUserAuth">
          <div class="relative mx-auto text-black">
          
          <input class="h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none s-width"
            type="search" name="search" placeholder="Search" v-model="search" id="globalsearch">
          
          <button type="submit" class="absolute right-0 top-0 mt-2 mr-3">
            <font-awesome-icon class="fs-4 text-black fill-current" icon="search" />
          </button>
          </div>
        </div>
        
        <div id="profile" v-if="isUserAuth" class="float-right w-170">
          <div id="first" class="rounded-full bg-orange-500 circle-image bg-cover" style="padding-top: 5px !important; padding-left: 10px !important;"><span class="font-medium text-lg text-white">{{firstTwo}}</span></div>
          <div id="second">
            <span class="font-medium text-m">{{getUser.displayName}}</span>
          </div>
        </div>

        <div class="float-right p-3 px-2 mr-4" v-if="isUserAuth">
          <font-awesome-icon class="fs-4 text-gray-600" icon="bell" />
        </div>

        <div class="float-right p-3 px-2 mr-4">
          <font-awesome-icon class="fs-4 text-gray-600" icon="life-ring" />
        </div>

    </div>

    <div class="searchbox shadow-2xl hidden" id="searchdropdown">
      <div id="productsearch">
        <span class="text-2xl">Products    </span> <span @click="showAll('products')" class="blue-text text-md cursor-pointer">Show All ({{productsFilteredList.length}})</span>
        <div v-for="Product in productsFilteredList.slice(0,3)" :key="Product.title" style="height: 20px">
         <span @click="productManage(Product.id)" class="cursor-pointer">{{Product.title}}</span>
        </div>
      </div>

      <div id="productsearch" class="mt-8">
        <span class="text-2xl">Orders    </span> <span @click="showAll('orders')" class="blue-text text-md cursor-pointer">Show All ({{ordersFilteredList.length}})</span>
        <div v-for="Order in ordersFilteredList.slice(0,3)" :key="Order.title" style="height: 20px">
          <span>#{{Order.id}} - {{Order.customer}}</span>
        </div>
      </div>

    </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
import firebase from 'firebase';
import router from '../router';

export default {
  computed: {
      productsFilteredList() {
        return this.productList.filter(product => {
            return product.title.toLowerCase().includes(this.search.toLowerCase())
        })
      },
      ordersFilteredList() {
        return this.orderList.filter(order => {
            return order.customer.toLowerCase().includes(this.search.toLowerCase())
        })
      },
    ...mapGetters(['getUser', 'isUserAuth', 'productList', 'orderList'])
  },
  data () {
    return {
      firstTwo: '',
      search: ''
    }
  },
  mounted () {
    var user = firebase.auth().currentUser;

    if (user){
      var initials = this.getUser.displayName.match(/\b\w/g) || [];
      initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
      this.firstTwo = initials;
    }

    document.addEventListener("click", (evt) => {
      const flyoutElement = document.getElementById("globalsearch");
      let targetElement = evt.target; // clicked element

      do {
          if (targetElement == flyoutElement) {
              // This is a click inside. Do nothing, just return.
              document.getElementById("searchdropdown").style.display = "block";
              return;
          }
          // Go up the DOM
          targetElement = targetElement.parentNode;
      } while (targetElement);

      // This is a click outside.
      document.getElementById("searchdropdown").style.display = "none";
    });
  },
  methods: {
    showNav() {
      document.getElementById("navbar").style.display = "block";
      document.getElementById("navclose").style.display = "block";
    },
    productManage(id, mode) {
      if (mode === "products"){
        router.push({ path: '/products/' + id + '/manage' });
      }
      if (mode === "orders"){
        router.push({ path: '/orders/' + id + '/manage' });
      }
    },
    showAll(mode) {
      if (mode === "products"){
        router.push({ path: '/products/?' + this.search });
      }
      if (mode === "orders"){
        router.push({ path: '/orders/?' + this.search });
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

.searchbox {
  margin-left: 278px;
  margin-top: 55px;
  background-color: white;
  z-index: 1000;
  position:absolute;
  width: 346px;
  padding: 20px;
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