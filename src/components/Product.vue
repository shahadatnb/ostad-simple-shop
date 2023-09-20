<script setup>
import { reactive, onBeforeMount } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router';
const route = useRoute()
const id = route.params.id
const product = reactive({})
onBeforeMount(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
        .then(res => {
            product.id = res.data.id
            product.title = res.data.title
            product.description = res.data.description
            product.price = res.data.price
            product.thumbnail = res.data.thumbnail
            product.images = res.data.images
        })
})
</script>

<template>
<div class="container mx-auto px-6">
    <div class="md:flex md:items-center">
        <div class="w-full h-64 md:w-1/2 lg:h-96">
            <img class="h-full w-full rounded-md object-cover max-w-lg mx-auto" :src="product.thumbnail" :alt="product.title">
        </div>
        <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
            <h3 class="text-gray-700 uppercase text-lg">{{ product.title }}</h3>
            <span class="text-gray-500 mt-3">${{ product.price }}</span>
            <hr class="my-3">
            <div class="mt-2 text-black">
                {{ product.description }}
            </div>
        </div>
    </div>
    
</div>

</template>