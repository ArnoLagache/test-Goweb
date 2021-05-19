<template>
    <div class="bg-indigo-600 flex text-left rounded-md p-5 text-white font-bold">
        <div class="w-1/2">
            <p>Product name</p>
        </div>
        <div class="w-1/6">
            <p>Category</p>
        </div>
        <div class="w-1/6 text-right">
            <p>Price</p>
        </div>
        <div class="w-1/6 text-right">
            <p>Price <span class="font-thin">(including VAT)</span></p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductInfosNav",
};
</script>