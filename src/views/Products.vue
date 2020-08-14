<template>
    <div id="products">
        <Flyout v-bind:title="title" v-bind:description="description" v-bind:stock="stock" v-bind:price="price" v-bind:category="category" v-bind:currentid="currentId" />
        <div id="products-container">
            <span class="text-3xl font-bold">{{ $t("message.products") }}</span>

            <button @click="addProductPage()" class="blue-button shadow-md hover:bg-red-500 text-white font-bold py-2 px-8 rounded float-right">
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
                <tr class="border" v-for="Product in sort.values" :key="Product.id">
                    <td class="px-4 py-4"><input type="checkbox"></td>
                    <td class="px-4 py-2 blue-text cursor-pointer" @click="openFlyout(Product.id)">#{{Product.id}}</td>
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
            currentId: "hi",
            category: null,
            flyoutShow: false,
            pages: 5
        }
    },
    components: {
        Flyout,
    },
    methods: {
        onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        },
        refresh() {
            location.reload();
        },
        myFunction() {
            const filter = document.querySelector('#productSearch').value.toUpperCase();
            const trs = document.querySelectorAll('#productTable tr:not(.header)');
            trs.forEach(tr => tr.style.display = [...tr.children].find(td => td.innerHTML.toUpperCase().includes(filter)) ? '' : 'none');
        },
        addProductPage () {
            router.push({ name: "addproduct" });
        },
        openFlyout (id) {
            this.currentId = this.productList[id-1].id;
            if (document.getElementById("flyout") !== null){
                document.getElementById("flyout").style.display = "block";
            }
            document.getElementById("flyout").classList.toggle("animate__fadeOutRight");
            this.title = this.productList[id-1].title;
            this.description = this.productList[id-1].description;
            this.stock = this.productList[id-1].stock;
            this.price = this.productList[id-1].price;
            this.category = this.productList[id-1].category;
            document.getElementById("flyoutclose").style.display = "block";
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
        }
        
    },
    computed: {
        filteredList() {
            return this.productList.filter(product => {
                return product.title.toLowerCase().includes(this.search.toLowerCase())
            })
        },

        ...mapGetters(['productList']),
        ...mapMutations(['addProduct'])
    },
    mounted () {
        document.getElementById("navclose").style.display = "none";
        
        if (window.innerWidth < 600) {
            document.getElementById("navbar").style.display = "none";
        }

        console.log(this.productList[1].id);
        
        //this.$store.commit("addProduct", {title: "Test", stock: "5", category: "Test", price: "99"});
    }
};
</script>

<style>
.blue-button {
    background-color: #0077FF;
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