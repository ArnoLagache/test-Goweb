<template>
	<div class="product-product relative p-10 text-center md:ml-quarter">
		<router-link to="/products" class="text-gray-500 text-4xl text-left absolute left-4 no-before">&#8592;</router-link>
		<h2 class="text-indigo-600 font-bold text-4xl mb-10 px-4 md:px-20">{{product.title}}</h2>

		<div class="grid md:grid-cols-2 gap-10">
			<div class="p-20 shadow-md bg-white">
				<img :src='product.image' alt="image source" class="w-1/2 h-auto m-auto">			
			</div>
			<div class="flex flex-wrap">
				<div class="w-3/4 text-left">
					<p class="font-bold text-2xl text-indigo-600 mb-4">Description</p>
					<p class="pr-4">{{product.description}}</p>
				</div>
				<div class="w-1/4 text-left">
					<p class="font-bold text-2xl text-indigo-600 mb-4">Category</p>
					<p class="bg-yellow-500 text-white text-center rounded-full px-4 py-2">{{product.category}}</p>
				</div>
				<div class="w-full text-left mt-4">
					<p class="font-bold text-2xl text-indigo-600 mb-4">Price</p>
					<form class="">
						<input class="w-1/4 mr-4 p-2" type="text" placeholder="€" v-model="product.price_euro" />
						<p class="inline-block font-bold text-gray-500">Price&nbsp;</p>
						<p class="inline-block text-gray-500">(including VAT): {{product.vat_price_euro}}</p>
						<button class="block px-4 py-2 bg-indigo-500 text-white rounded-md my-4 focus:outline-none focus:ring focus:border-blue-300">Update product</button>
					</form>
				</div>	
			</div>		
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import Product from '@/models/product'

export default {
	name: 'Productproduct',
	components: {
	},
	data () {
        return {
            product: new Product(),
        }
    },
    mounted () {
        axios
        .get(`https://fakestoreapi.com/products/${this.$route.params.productId}`)
        .then(response => {
			this.product = new Product(response.data.id, response.data.title, response.data.category, response.data.price, response.data.image, response.data.description)
		})
    }
}
</script>

<style scoped>
	.no-before:before{
		width: 0;
		height: 0;
	}
</style>>