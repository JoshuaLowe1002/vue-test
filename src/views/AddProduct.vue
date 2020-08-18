<template>
    <div>
        <div>
            <span class="text-3xl font-bold">Product</span>
            <button @click="addProductToList()" v-if="!edit" class="blue-button shadow-md hover:bg-red-500 text-white font-bold py-2 px-8 rounded float-right">
                Create
            </button>
            
            <button @click="editProductList()" v-if="edit" class="blue-button shadow-md hover:bg-red-500 text-white font-bold py-2 px-8 rounded float-right">
                Update
            </button>
            
            <form>

                <div class="shadow-xl rounded-lg bg-white w-full p-4 mb-8 mt-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Product Title
                        </label>
                        <input v-model="productTitle" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="producttitle" type="text" placeholder="Water Bottle">
                    </div>
                     <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Description
                        </label>
                        <textarea v-model="description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32" id="description" type="text" placeholder="Description"></textarea>
                    </div>
                </div>


                <div class="shadow-xl rounded-lg bg-white w-full p-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Stock Level
                        </label>
                        <input v-model="stock" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="stock" type="number" placeholder="0">
                    </div>

                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Price
                        </label>
                        <input v-model="price" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="number" min="1" step="0.01" placeholder="0.00">
                    </div>

                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Category
                        </label>
                        <div class="inline-block relative w-64">
                        <input v-model="category" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category" type="text" placeholder="Category Name">
                        </div>
                    </div>
                </div>
            </form>

        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import router from '../router';

export default {
    name: 'addproduct',
    data () {
        return {
            productTitle: null,
            description: null,
            stock: null,
            price: null,
            category: null,
        }
    },
    props: ['productId', 'edit'],
    methods: {
        refresh() {
            location.reload();
        },
        myFunction() {
            const filter = document.querySelector('#productSearch').value.toUpperCase();
            const trs = document.querySelectorAll('#productTable tr:not(.header)');
            trs.forEach(tr => tr.style.display = [...tr.children].find(td => td.innerHTML.toUpperCase().includes(filter)) ? '' : 'none');
        },
        addProductToList() {
            this.$store.commit("addProduct", {title: this.productTitle, description: this.description, stock: this.stock, price: this.price, category: this.category});
            this.hideFlyout();
            Object.keys(this.$data).forEach(key => this.$data[key] = null);
            this.$store.commit("flyout", false);
        },
        editProductList() {
            if (this.$route.params.productId) {
                console.log(this.productList[this.productId].title);
                this.productList[this.productId].title = this.productTitle;
                this.productList[this.productId].description = this.description;
                this.productList[this.productId].stock = this.stock;
                this.productList[this.productId].price = this.price;
                this.productList[this.productId].category = this.category;
                this.hideFlyout();
                Object.keys(this.$data).forEach(key => this.$data[key] = null);
            }
            this.$store.commit("flyout", false);
        },
        hideFlyout() {
            document.getElementById("flyout").classList.add("animate__fadeOutRight");
            Object.keys(this.$data).forEach(key => this.$data[key] = null);
            document.getElementById("flyoutclose").style.display = "none";
        },
    },
    computed: {
        ...mapGetters(['productList', 'getFlyout']),
        ...mapMutations(['addProduct', 'flyout'])
    },
    mounted () {
        document.getElementById("navclose").style.display = "none";

        if (this.edit) {
            this.productTitle = this.productList[this.productId].title;
            this.description = this.productList[this.productId].description;
            this.stock = this.productList[this.productId].stock;
            this.price = this.productList[this.productId].price;
            this.category = this.productList[this.productId].category;
        }
        
        if (window.innerWidth < 600) {
            document.getElementById("navbar").style.display = "none";
        }
        
        //this.$store.commit("addProduct", {title: "Test", stock: "5", category: "Test", price: "99"});
    }
};
</script>

<style scoped>
.container {
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:flex-start;
    align-items:stretch;
    margin-top: 30px;
}

textarea {
   resize: none;
}

.left {order:1; flex-basis:100%; height:300px;}
.middle {order:3; background: white;flex-basis:100%; height:300px; margin-left: 30px; padding: 20px;}

@media screen and (min-width:600px) {
   .container {
       flex-wrap:nowrap;
   } 

    .left {
        flex-basis:40%;
        order:1;
    }
    .middle {
        flex-basis:60%;
        order:2;
    }
    .right {
        flex-basis:200px;
        order:3;
    }
}
</style>