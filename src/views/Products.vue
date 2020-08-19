<template>
    <div id="products">

        <Flyout>
            <QuickView />
        </Flyout>

        <div id="products-container">
            <span class="text-3xl font-bold">{{ $t("message.products") }}</span>

            <button @click="openFlyout(null, 'create')" class="blue-button shadow-md hover:bg-red-500 text-white font-bold py-2 px-8 rounded float-right">
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
                    <th scope="col" class="w-1/4 px-4 py-2"><sort-link name="title">Name</sort-link></th>
                    <th scope="col" class="w-1/4 px-4 py-2"><sort-link name="stock">Stock</sort-link></th>
                    <th scope="col" class="w-1/4 px-4 py-2"><sort-link name="category">Category</sort-link></th>
                    <th scope="col" class="w-1/4 px-4 py-2"><sort-link name="price">Price</sort-link></th>
                </tr>
            </thead>
            <template #body="sort">
            <tbody class="rounded-b-lg">
                <tr @click="openFlyout(Product.id)" :class="{rowactive: rowSelected === Product.id}" class="border cursor-pointer hover:bg-gray-100" id="productrow" v-for="Product in sort.values" :key="Product.id">
                    <td class="px-4 py-4"><input type="checkbox"></td>
                    <td class="px-4 py-2 blue-text">#{{Product.id}}</td>
                    <td class="px-4 py-2">{{Product.title}}</td>
                    <td class="px-4 py-2"><span :class="stockClass(Product.stock)">{{Product.stock}}</span></td> 
                    <td class="px-4 py-2">{{Product.category}}</td>
                    <td class="px-4 py-2">£{{Product.price}}</td>
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
import Flyout from './Flyout';
import AddProduct from "./AddProduct";
import QuickView from "./QuickView";

export default {
    name: 'products',
    data () {
        return {
            search: '',
            ascending: false,
            sortColumn: '',
            title: null,
            description: null,
            stock: null,
            pageOfItems: [],
            price: null,
            currentId: 0,
            category: null,
            pages: 5,
            productFlyout: false,
            edit: false,
            rowSelected: null
        }
    },
    components: {
        Flyout,
        AddProduct,
        QuickView
    },
    methods: {
        onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        },
        openFlyout (id) {

            this.rowSelected = id;

            this.currentId = id;

            this.$store.commit("flyout", true);

            document.getElementById("products-container").classList.add("flyout-smaller");
            document.getElementById("taskbar").classList.add("taskbar-smaller");

            if (id) {
                router.push({ path: "/products/" + id });
            }


        },
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
        
    },
    computed: {
        filteredList() {
            return this.productList.filter(product => {
                return product.title.toLowerCase().includes(this.search.toLowerCase())
            })
        },

        ...mapGetters(['productList', 'getFlyout']),
        ...mapMutations(['addProduct', 'flyout'])
    },
    mounted () {
        document.getElementById("navclose").style.display = "none";
        
        this.$store.commit("flyout", false);

        if(window.location.search.length > 1){
            var searchvalue = window.location.search;
            searchvalue = searchvalue.replace(/\?/g,'')
            this.search = searchvalue;
        }
        
        if (this.$route.params.productId) {
            this.$store.commit("flyout", true);
            this.openFlyout(null, "edit");
        }
        
        if (window.innerWidth < 600) {
            document.getElementById("navbar").style.display = "none";
        }
    }
};
</script>

<style>
.blue-button {
    background-color: #0077FF;
}

.rowactive {
    @apply bg-gray-300;
}

#products-container {
    padding-top: 90px !important;
    margin-left: 255px;
    height: 70vh;
    padding: 25px;
}


@media screen and (max-width: 600px) {
  #products {
      margin-left: 0px;
  }
}

.flyout-smaller {
    width: 58.8%;
}

.taskbar-smaller {
    width: 73% !important;
}

.green-text {
    background-color: #12C45F;
    color: white;
    font-weight: 500;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 100px; 
    width: 75px;
    text-align: center;
    display: inline-block;      
}

.yellow-text {
    background-color: #FFA500;
    color: white;
    font-weight: 500;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 100px; 
    width: 75px;
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
    width: 75px;
    text-align: center;
    display: inline-block;  
}

.pagination {
    justify-content: center;
    flex-wrap: wrap;
}
.pagination {
    display: -ms-flexbox;
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: .25rem;
}

.page-link {
    position: relative;
    display: block;
    padding: .5rem .75rem !important;
    margin-left: -1px;
    line-height: 1.25;
    color: #007bff;
    background-color: #fff;
    border: 1px solid #dee2e6;
}

.page-item.disabled .page-link {
    color: #6c757d;
    pointer-events: none;
    cursor: auto;
    background-color: #fff;
    border-color: #dee2e6;
}
.page-item:first-child .page-link {
    margin-left: 0;
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
}

.page-item.active .page-link {
    z-index: 1;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
}
</style>