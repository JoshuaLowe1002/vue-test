<template>
    <div id="products">
        <div id="products-container">
            <div class="Main p-6 bg-white shadow-md rounded-lg">
                <span class="text-4xl font-extrabold">Products</span>
            </div>
            {{products}}
            <table class="table-fixed">
            <thead>
                <tr>
                <th class="w-1/4 px-4 py-2">Title</th>
                <th class="w-1/4 px-4 py-2">Stock</th>
                </tr>
            </thead>
            <tbody>
<!--                 <tr v-for="product in products.edges" :key="product.node.id">
                    <td class="border px-4 py-2">{{product.node.id}}</td>
                    <td class="border px-4 py-2">{{product.node.title}}</td>
                </tr>  -->
            </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
    name: 'products',
    apollo: {
        products: gql`{
            products(first: 3) {
                edges {
                    node {
                        id
                        title
                    }
                }
            }
        }`,
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