<template>
    <div>        
        <router-link v-for="(product, index) in products" :key="index" :to="`products/${product.id}`">
            <div class="product-info flex text-left my-4 bg-white p-5 rounded-md shadow-md text-gray-500">
                <div class="w-1/2 pr-4">
                    <p class="font-bold">{{product.title}}</p>
                </div>
                <div class="w-1/6">
                    <p>{{product.category}}</p>
                </div>
                <div class="w-1/6 text-right">
                    <p>{{product.price_euro}}</p>
                </div>
                <div class="w-1/6 text-right">
                    <p>{{product.vat_price_euro}}</p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
import axios from 'axios'
import Product from '@/models/product'
export default {
    name: "ProductInfos",
	data () {
        return {
            products: [],
        }
    },
    //Appel API et récupération des données du tableau
    mounted () {
        axios
        .get('https://fakestoreapi.com/products/')
        .then(response => {
            this.products = response.data.map(raw_product => {return new Product(raw_product.id, raw_product.title, raw_product.category, raw_product.price, raw_product.image, raw_product.description)});
        })
    }
};
</script>