<template>
	<div class="product-details relative p-10 text-center md:ml-quarter">
		<router-link to="/products" class="text-gray-500 text-4xl text-left absolute left-4 no-before">&#8592;</router-link>
		<h2 class="text-indigo-600 font-bold text-4xl mb-10 px-4 md:px-20">{{details.title}}</h2>

		<div class="grid md:grid-cols-2 gap-10">
			<div class="p-20 shadow-md bg-white">
				<img :src='details.image' alt="image source" class="w-1/2 h-auto m-auto">			
			</div>
			<div class="flex flex-wrap">
				<div class="w-3/4 text-left">
					<p class="font-bold text-2xl text-indigo-600 mb-4">Description</p>
					<p class="pr-4">{{details.description}}</p>
				</div>
				<div class="w-1/4 text-left">
					<p class="font-bold text-2xl text-indigo-600 mb-4">Category</p>
					<p class="bg-yellow-500 text-white text-center rounded-full px-4 py-2">{{details.category}}</p>
				</div>
				<div class="w-full text-left mt-4">
					<p class="font-bold text-2xl text-indigo-600 mb-4">Price</p>
					<form class="">
						<input class="w-1/4 mr-4 p-2" type="text" :placeholder="details.price" v-model="details.price" /><p class="inline-block font-bold text-gray-500">Price&nbsp;</p><p class="inline-block text-gray-500">(including VAT): {{totalAmount}} €</p>
						<button class="block px-4 py-2 bg-indigo-500 text-white rounded-md my-4 focus:outline-none focus:ring focus:border-blue-300">Update product</button>
					</form>
				</div>	
			</div>		
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'ProductDetails',
	components: {
	},
	data () {
        return {
            details: null,
			vat: 0.2
        }
    },
	// Appel de chaque occurrence du tableau et calcul de la TVA de 20%
    mounted () {
        axios
        .get(`https://fakestoreapi.com/products/${this.$route.params.productId}`)
        .then(response => (this.details = response.data))
    },
    computed: {
        vatAmount() {
            return (this.details.price) * this.vat;
        },
        totalAmount(){
            return (this.details.price) + this.vatAmount
        }	
    }
}
</script>

<style scoped>
	.no-before:before{
		width: 0;
		height: 0;
	}
</style>>