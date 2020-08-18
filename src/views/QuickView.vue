<template>
    <div id="quickview">
        <div id="quick-bar">
            <span class="text-md font-regular float-left">You are currently previewing:</span>
            <font-awesome-icon @click="hideFlyout()" class="text-md float-right mt-1 cursor-pointer" icon="times" />
        </div>
        <div id="quick-title">
            <div id="title-container">
                <span class="text-2xl font-bold">{{title}}</span>
            </div>
            <div id="button-container">
                <button @click="openEdit()" class="blue shadow-md hover:bg-red-500 text-white font-bold py-2 px-6 rounded float-right">
                    Manage
                </button>
            </div>
        </div>
        <div id="quick-tabs">
            <div id="tab1" @click="currentTab = 'Details'" class="cursor-pointer" :class="{tabactive: currentTab === 'Details'}">
                <span class="text-md font-regular">Summary</span>
            </div>
            
            <div id="tab2" @click="currentTab = 'Timeline'" class="cursor-pointer" :class="{tabactive: currentTab === 'Timeline'}">
                <span class="text-md font-regular">Timeline</span>
            </div>
        </div>
        <div id="quick-content" class="p-6">
            <component v-bind:is="currentTab"></component>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import router from '../router';
import Details from '../components/details';
import Timeline from '../components/timeline'

export default {
    name: "QuickView",
    props: ["productId"],
    data() {
        return {
            title: null,
            description: null,
            price: null,
            category: null,
            stock: null,
            id: null,
            currentTab: "Details"
        }
    },
    components : {
        Details,
        Timeline
    },
    mounted () {
       this.id = this.$route.params.productId;

       if (this.$route.params.productId) {
           this.title = this.productList[this.$route.params.productId-1].title;
           this.description = this.productList[this.$route.params.productId-1].description;
           this.price = this.productList[this.$route.params.productId-1].price;
           this.category = this.productList[this.$route.params.productId-1].category;
           this.stock = this.productList[this.$route.params.productId-1].stock;
       }
    },
    methods: {
        stockClass(n) {
            if (n < 10){
                return "red-text";
            }
            if (n < 30){
                return "yellow-text";
            }
            if (n >= 30){
                return "green-text";
            }
        },
        openEdit() {
            this.hideFlyout();
            router.push({ path: '/products/' + this.id + '/manage' });
        },
        hideFlyout() {
            document.getElementById("flyout").style.display = "none";
            router.push({ path: "/products" });
            this.$store.commit("flyout", false);
            document.getElementById("flyoutclose").style.display = "none";  
        }
    },
    computed: {
        ...mapGetters(['productList']),
    },
}
</script>

<style scoped>

#quickview {
    height: 100vh;
    display: flex;
    flex-direction: column;
}
#quick-bar {
    height: 50px;
    padding: 14px;
    color: #999999;
    background-color: white;
    border-bottom: #DDDDDD solid 1px;
}

#stock {
    height: 90px;
    background-color: white;
}


.blue {
    background-color: #0077FF;
}

#quick-title {
    height: 100px;
    background-color: white;
    display: flex;
    flex-direction: row;
    padding: 15px;
}

#title-container {
    width: 65%;
}

#button-container {
    width: 35%;
}

#tab1 {
    width: 50%;
    border-bottom: #DDDDDD solid 2px;
    padding: 13px;
}

.tabactive {
    border-bottom: #0077FF solid 4px !important;
    color: black !important;
}

#tab2 {
    border-bottom: #DDDDDD solid 2px;
    width: 50%;
    padding: 13px;
}

#quick-tabs {
    height: 55px;
    background-color: white;
    display: flex;
    text-align: center;
    flex-direction: row;
    color: #999999;
}

#quick-content {
    height: 77%;
    background-color: #F1F4F8;
}
</style>