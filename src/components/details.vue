<template>
<div> 

    <div id="details" class="p-3">
        <span class="text-lg font-bold">Description:</span>
        <br>
        <span class="text-md font-regular">{{description}}</span>
        <hr style="visibility: hidden; margin-top: 20px">
        <span class="text-lg font-bold">Price:</span>
        <br>
        <span class="text-md font-regular">£{{price}}</span>
        <hr style="visibility: hidden; margin-top: 20px">
        <span class="text-lg font-bold">Category:</span>
        <br>
        <span class="text-md font-regular">{{category}}</span>
    </div>

    <div id="stock" class="mt-6 p-3">
        <span class="text-lg font-bold">Stock:</span>
        <br>
        <span class="text-md font-regular mt-2" :class="stockClass(stock)">{{stock}}</span>
    </div>

</div>
</template>

<script>
import { mapGetters } from 'vuex';
import router from '../router';

export default {
    name: "details",
    data() {
        return {
            title: null,
            description: null,
            price: null,
            category: null,
            stock: null,
            id: null,
        }
    },
    watch: {
        $route() {
           this.title = this.productList[this.$route.params.productId-1].title;
           this.description = this.productList[this.$route.params.productId-1].description;
           this.price = this.productList[this.$route.params.productId-1].price;
           this.category = this.productList[this.$route.params.productId-1].category;
           this.stock = this.productList[this.$route.params.productId-1].stock;
        }
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
        }
    },
    computed: {
        ...mapGetters(['productList']),
    },
}
</script>

<style scoped>
#details {
    height: 320px;
    background-color: white;
}

#stock {
    height: 90px;
    background-color: white;
}
</style>