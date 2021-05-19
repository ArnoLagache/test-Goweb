<template>
	<div class="home md:px-10 px-4 py-20 text-center md:ml-quarter">
		<h1 class="text-indigo-600 font-bold text-4xl mb-20">Products Management</h1>
		<ProductInfosNav></ProductInfosNav>		
		<ProductInfos></ProductInfos>
	</div>
</template>

<script>
import ProductInfosNav from '@/components/ProductInfosNav/'
import ProductInfos from '@/components/ProductInfos/'

export default {
	name: 'Home',
	components: {
		ProductInfosNav,
		ProductInfos
	}
}
</script>