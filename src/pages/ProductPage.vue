<template>
  <div class="grid grid-cols-1 justify-items-center md:max-w-[1920px]">

    
    <!-- Primary information -->
    <div class="w-full max-w-4xl grid grid-cols-1 md:grid-cols-[auto_1fr] gap-2">
      <div class="md:col-span-2 p-4 ">
        <router-link to="/products" class="bg-background-50 hover:bg-primary-100 transition-all cursor-pointer rounded-xl p-4">
          <v-icon name="io-arrow-back" class="h-full"/>
        </router-link>
      </div>

      <div class="md:col-span-2 px-4">
        [
        <router-link v-for="(tag, index) of product?.tags" :key="tag" :to="`/tags/${tag}`" class="text-background-500 hover:text-background-700 transition-all cursor-pointer rounded-xl p-1 text-sm">
          {{ tag }}{{ index !== product.tags.length - 1 ? ', ' : ''}}
        </router-link>
        ]
      </div>

      <div class="max-h-[50svh] h-full w-full md:max-w-[28rem] aspect-square p-4">
        <!-- <div class="size-full overflow-hidden shadow-[0px_0px_40px_-15px] rounded-3xl"> -->
        <div class="size-full overflow-hidden shadow-md rounded-3xl">
          <img :src="product?.img_url" class="w-full h-full object-cover" />
        </div>
      </div>

      <div class="flex flex-col gap-2 md:py-8 px-4">
        <h1 class="text-background-950 font-bold text-4xl">{{ product?.name }}</h1>
        <h2 class="text-primary-400">{{ product?.retailer_name }}</h2>
        <h3 class="text-primary-300">{{ product?.price }}</h3>
        <p class="text-primary-200">{{ product?.description }}</p>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import { Product } from '../types';

import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const productId = computed(() => router.currentRoute.value.params.id);

const product = ref<Product | null>(null);
const getProduct = async () => {
  // Fetch product data
  const response = await fetch(`https://api.groceryscraper.mc.hzuccon.com/api/products/${productId.value}`);
  const data: Product = await response.json();
  product.value = data;

  console.log(data);
}

onMounted(() => {
  getProduct();
});
</script>