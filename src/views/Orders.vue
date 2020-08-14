<template>
    <div id="products">
        <OrderFlyout v-bind:customer="customer" v-bind:products="products" v-bind:status="status" v-bind:currentid="currentId" />
        <div id="products-container">
            <span class="text-3xl font-bold">{{ $t("message.orders") }}</span>

            <button @click="createOrderPage()" class="blue-button shadow-md hover:bg-red-500 text-white font-bold py-2 px-8 rounded float-right">
                {{ $t("message.new") }}
            </button>

            <div class="relative mx-auto text-black mr-4 float-right">
                <input class="h-10 px-5 rounded-lg text-sm focus:outline-none s-width"
                type="search" name="search" placeholder="Search" id="productSearch" v-model="search">
            </div>


            <sorted-table :values="pageOfItems" class="table-fixed w-full rounded-lg bg-white border-collapse shadow-lg my-12" border="0" id="productTable">
            <thead>
                <tr class="rounded-t-lg text-black text-left header">
                    <th class="w-12 px-4 py-6"><input type="checkbox"></th>
                    <th scope="col" class="w-24 px-4 py-2"><sort-link name="id">ID</sort-link></th>
                    <th scope="col" class="w-1/4 px-4 py-2"><sort-link name="title">Customer</sort-link></th>
                    <th scope="col" class="w-1/4 px-4 py-2"><sort-link name="stock">Status</sort-link></th>
                    <th scope="col" class="w-1/4 px-4 py-2"><sort-link name="title">No. Of Products</sort-link></th>
                    <th scope="col" class="w-1/4 px-4 py-2"><sort-link name="title">Price</sort-link></th>
                </tr>
            </thead>
            <template #body="sort">
            <tbody class="rounded-b-lg">
                <tr class="border" v-for="Order in sort.values" :key="Order.id">
                    <td class="px-4 py-4"><input type="checkbox"></td>
                    <td class="px-4 py-2 blue-text cursor-pointer" @click="openFlyout(Order.id)">#{{Order.id}}</td>
                    <td class="px-4 py-2">{{Order.customer}}</td>
                    <td class="px-4 py-2"><span :class="statusClass(Order.status)">{{Order.status}}</span></td>
                    <td class="px-4 py-2">{{Order.products.length}}</td>
                    <td class="px-4 py-2">£{{Order.price}}</td>
                </tr> 
            </tbody>
            </template>
            </sorted-table>
             <jw-pagination :items="filteredList" :pageSize="pages" @changePage="onChangePage"></jw-pagination>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import router from '../router';
import OrderFlyout from './OrderFlyout';

export default {
    name: 'orders',
    data () {
        return {
            search: '',
            ascending: false,
            sortColumn: '',
            customer: null,
            products: null,
            status: null,
            pageOfItems: [],
            currentId: "hi",
            flyoutShow: false,
            pages: 5
        }
    },
    components: {
        OrderFlyout,
    },
    methods: {
        onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        },
        createOrderPage () {
            router.push({ name: "addorder" });
        },
        openFlyout (id) {
            this.currentId = this.productList[id-1].id;
            if (document.getElementById("flyout") !== null){
                document.getElementById("flyout").style.display = "block";
            }
            document.getElementById("flyout").classList.toggle("animate__fadeOutRight");
            this.customer = this.orderList[id-1].customer;
            this.products = this.orderList[id-1].products;
            this.status = this.orderList[id-1].status;
            document.getElementById("flyoutclose").style.display = "block";
        },
        statusClass(n) {
            if (n === "Paid"){
                return "blue-status-text";
            }
            if (n === "Awaiting Payment" || n === "Ready to ship"){
                return "yellow-status-text";
            }
            if (n === "Packed"){
                return "pink-text";
            }
            if (n === "Shipped"){
                return "green-text";
            }
        }
        
    },
    computed: {
        filteredList() {
            return this.orderList.filter(order => {
                return order.customer.toLowerCase().includes(this.search.toLowerCase())
            })
        },

        ...mapGetters(['productList', 'orderList']),
        ...mapMutations(['addProduct'])
    },
    mounted () {
        document.getElementById("navclose").style.display = "none";
        
        if (window.innerWidth < 600) {
            document.getElementById("navbar").style.display = "none";
        }
        
        //this.$store.commit("addProduct", {title: "Test", stock: "5", category: "Test", price: "99"});
    }
};
</script>

<style scoped>
.green-text {
    background-color: #12C45F;
    color: white;
    font-weight: 500;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 100px; 
    min-width: 75px;
    text-align: center;
    display: inline-block;      
}

.yellow-status-text {
    background-color: #FFA500;
    color: white;
    font-weight: 500;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 100px; 
    min-width: 150px;
    text-align: center;
    display: inline-block;  
}

.red-text {
    background-color: #DC143C;
    color: white;
    font-weight: 500;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 100px; 
    min-width: 75px;
    text-align: center;
    display: inline-block;  
}

.blue-status-text {
    background-color: #0077FF;
    color: white;
    font-weight: 500;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 100px; 
    min-width: 75px;
    text-align: center;
    display: inline-block;  
}

.pink-text {
    background-color: #FF0066;
    color: white;
    font-weight: 500;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 100px; 
    min-width: 75px;
    text-align: center;
    display: inline-block;  
}
</style>