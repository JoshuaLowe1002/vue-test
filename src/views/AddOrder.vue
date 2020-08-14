<template>
    <div id="products">
        <div id="products-container">
            <span class="text-3xl font-bold">Create Order</span>
            <button @click="addOrderToList()" class="blue-button shadow-md hover:bg-red-500 text-white font-bold py-2 px-8 rounded float-right">
                Save
            </button>

            <div class="container">
                <div class="left">
                    <span class="text-4xl font-bold">Order Details</span><br>
                    <span class="text-lg font-regular">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</span>
                </div>
                <div class="middle shadow-xl rounded-lg">
                    <div class="inline-block relative w-full mb-4">
                    
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Product List
                    </label>
                    

                    <select v-model="productSelection" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option v-for="Product in productList" :key="Product.title">{{Product.title}} (£{{Product.price}})</option>
                    </select>

                    <button @click="addProductToProducts()" class="blue-button shadow-md hover:bg-red-500 mt-4 text-white font-bold py-2 px-8 rounded float-right">
                        Add Product
                    </button>
                </div>


                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Products
                    </label>
                    <ul style="overflow:hidden; overflow-y:scroll; height:100px;">
                        <li v-for="Product in products" :key="Product">{{Product}}</li>
                    </ul>
                </div>
            
            </div>

            </div>

            <div class="container">
                <div class="left">
                    <span class="text-4xl font-bold">Order Properties</span><br>
                    <span class="text-lg font-regular">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</span>
                </div>
                <div class="middle shadow-xl rounded-lg">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Customer
                        </label>
                        <input v-model="customer" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="customer" type="text" placeholder="Customer Name">
                    </div>

                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Status
                        </label>
                        <div class="inline-block relative w-64">
                        <select v-model="status" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Awaiting Payment</option>
                            <option>Paid</option>
                            <option>Packed</option>
                            <option>Ready to ship</option>
                            <option>Shipped</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Total
                        </label>
                        <span class="text-3xl font-bold">£{{price}}</span>
                    </div>
                </div>
            </div>

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
            priceList: [],
            price: 0,
            status: "Awaiting Payment",
            customer: null,
            productSelection: null,
            products: [],
            category: null,
        }
    },
    methods: {
        addProductToProducts() {
            var productPrice = this.productSelection.split('(').pop();
            productPrice = productPrice.replace(")", "");
            productPrice = productPrice.replace("£", "");
            this.priceList.push(productPrice);
            this.price = this.sum(this.priceList);
            this.products.push(this.productSelection.substring(0, this.productSelection.indexOf('(')));
        },
        sum(input){
             
            if (toString.call(input) !== "[object Array]")
                return false;
                
                var total =  0;
                for(var i=0;i<input.length;i++)
                {                  
                    if(isNaN(input[i])){
                    continue;
                    }
                    total += Number(input[i]);
                }
                return total;
            },
        addOrderToList() {
            this.$store.commit("addIncome", this.sum(this.priceList));
            this.$store.commit("addOrder", {customer: this.customer, products: this.products, price: this.price, status: this.status});
            router.push({ name: "orders" });
        }
    },
    computed: {
        ...mapGetters(['productList', 'getIncome']),
        ...mapMutations(['addProduct', 'addOrder', 'addIncome'])
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