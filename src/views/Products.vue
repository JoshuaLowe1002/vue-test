<template>
    <div id="products">
        <div id="products-container">
            <span class="text-3xl font-bold">{{ $t("message.products") }}</span>

            <button @click="refresh()" class="blue-button shadow-md hover:bg-red-500 text-white font-bold py-2 px-8 rounded float-right">
                    New
            </button>

            <div class="relative mx-auto text-black my-5">
                <input class="h-10 px-5 rounded-lg text-sm focus:outline-none s-width"
                type="search" name="search" placeholder="Search" id="productSearch" v-on:keyup="myFunction()">
            </div>


            <table class="table-fixed w-full rounded-lg bg-white my-5 border-collapse shadow-lg my-12" border="0" id="productTable">
            <thead>
                <tr class="rounded-t-lg text-black text-left header">
                    <th class="w-12 px-6 py-6"><input type="checkbox"></th>
                    <th class="w-1/4 px-4 py-2">{{ $t("message.productname") }}</th>
                    <th class="w-1/4 px-4 py-2">{{ $t("message.stock") }}</th>
                    <th class="w-1/4 px-4 py-2">{{ $t("message.category") }}</th>
                    <th class="w-1/4 px-4 py-2">Price</th>
                </tr>
            </thead>
            <tbody class="rounded-b-lg">
                <tr class="border" v-if="$apollo.loading">
                    <td class="px-4 py-2"></td>
                    <td class="px-4 py-2">Loading...</td>
                    <td class="px-4 py-2">Loading...</td>
                    <td class="px-4 py-2">Loading...</td>
                    <td class="px-4 py-2">Loading...</td>
                </tr>
                <tr v-for="product in products.edges" class="border" :key="product.node.id">
                    <td class="px-4 py-4"><input type="checkbox"></td>
                    <td class="px-4 py-2">{{product.node.title}}</td>
                    <td class="px-4 py-2">{{product.node.totalInventory}}</td>
                    <td class="px-4 py-2">{{product.node.productType}}</td>
                    <td class="px-4 py-2">£{{product.node.priceRange.maxVariantPrice.amount}}</td>
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
            products: [],
            search: ''
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
                        priceRange{
                            maxVariantPrice {
                                amount
                            }
                        }
                    }
                }
            }
        }`,
    },
    methods: {
        refresh() {
            location.reload();
        },
        myFunction() {
            const filter = document.querySelector('#productSearch').value.toUpperCase();
            const trs = document.querySelectorAll('#productTable tr:not(.header)');
            trs.forEach(tr => tr.style.display = [...tr.children].find(td => td.innerHTML.toUpperCase().includes(filter)) ? '' : 'none');
        }
    },
    computed: {
        filteredList() {
            return this.products.filter(product => {
                return product.edges.node.title.toLowerCase().includes(this.search.toLowerCase())
            })
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

.blue-button {
    background-color: #0077FF;
}

#products-container {
    padding: 25px;
}


@media screen and (max-width: 600px) {
  #products {
      margin-left: 0px;
  }
}
</style>