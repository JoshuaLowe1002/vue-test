<template>
    <div id="products">
        <div id="products-container">
            <span class="text-3xl font-bold">Edit Product</span>
            <button @click="editProductList()" class="blue-button shadow-md hover:bg-red-500 text-white font-bold py-2 px-8 rounded float-right">
                Save
            </button>
            <form>
            <div class="container">
                <div class="left">
                    <span class="text-4xl font-bold">Product Details</span><br>
                    <span class="text-lg font-regular">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</span>
                </div>
                <div class="middle shadow-xl rounded-lg">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Product Title
                        </label>
                        <input v-model="productTitle" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="producttitle" type="text">
                    </div>
                     <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Description
                        </label>
                        <textarea v-model="description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32" id="description" type="text" placeholder="Description"></textarea>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="left">
                    <span class="text-4xl font-bold">Product Properties</span><br>
                    <span class="text-lg font-regular">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</span>
                </div>
                <div class="middle shadow-xl rounded-lg">
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
                        <input v-model="category" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category" type="text">
                        </div>
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
    name: 'editproduct',
    data () {
        return {
            productTitle: null,
            description: null,
            stock: null,
            price: null,
            category: null,
        }
    },
    methods: {
        refresh() {
            location.reload();
        },
        myFunction() {
            const filter = document.querySelector('#productSearch').value.toUpperCase();
            const trs = document.querySelectorAll('#productTable tr:not(.header)');
            trs.forEach(tr => tr.style.display = [...tr.children].find(td => td.innerHTML.toUpperCase().includes(filter)) ? '' : 'none');
        },
        editProductList() {
            this.productList[this.$route.params.userId-1].title = this.productTitle;
            this.productList[this.$route.params.userId-1].description = this.description;
            this.productList[this.$route.params.userId-1].stock = this.stock;
            this.productList[this.$route.params.userId-1].price = this.price;
            this.productList[this.$route.params.userId-1].category = this.category;
            router.push({ name: "products" });
        }
    },
    computed: {
        filteredList() {
            return this.products.filter(product => {
                return product.edges.node.title.toLowerCase().includes(this.search.toLowerCase())
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

        this.productTitle = this.productList[this.$route.params.userId-1].title;
        this.description = this.productList[this.$route.params.userId-1].description;
        this.stock = this.productList[this.$route.params.userId-1].stock;
        this.price = this.productList[this.$route.params.userId-1].price;
        this.category = this.productList[this.$route.params.userId-1].category;
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