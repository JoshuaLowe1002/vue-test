<template>
    <div id="products">
        <div id="products-container">
            <div class="Main p-6 bg-white shadow-md rounded-lg">
                <span class="text-4xl font-extrabold">Products</span>
            </div>
            <div class="Main my-5 bg-white shadow-md rounded-lg">
                <button @click="refresh()" class="bg-red-500 mx-5 my-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Refresh
                </button>
            </div>
            <table class="table-fixed w-full rounded-lg bg-white my-5">
            <thead>
                <tr class="bg-blue-900 rounded-t-lg text-white">
                    <th class="w-1/4 px-4 py-2">Product Name</th>
                    <th class="w-1/4 px-4 py-2">Stock Level</th>
                    <th class="w-1/4 px-4 py-2">Category</th>
                    <th class="w-1/4 px-4 py-2">View</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products.edges" :key="product.node.id">
                    <td class="border px-4 py-2">{{product.node.title}}</td>
                    <td class="border px-4 py-2">{{product.node.totalInventory}}</td>
                    <td class="border px-4 py-2">{{product.node.productType}}</td>
                    <td class="border px-4 py-2 text-center"><button class="bg-blue-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">View Product</button></td>
                </tr> 
            </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
    name: 'products',
    data () {
        return {
            products: []
        }
    },
    apollo: {
        products: gql`{
            products(first: 100) {
                edges {
                    node {
                        id
                        title
                        totalInventory
                        productType
                        onlineStoreUrl
                    }
                }
            }
        }`,
    },
    methods: {
        refresh() {
            location.reload();
        }
    },
    mounted () {
        document.getElementById("navclose").style.display = "none";
        
        if (window.innerWidth < 600) {
            document.getElementById("navbar").style.display = "none";
        }
    }
};
</script>

<style>
#products {
  padding-top: 4.5rem;
  margin-left: 255px;
  height: 70vh;
}

#products-container {
    padding: 15px;
}

@media screen and (max-width: 600px) {
  #products {
      margin-left: 0px;
  }
}
</style>