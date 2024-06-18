<template>
  <div class="grid grid-cols-1 justify-items-center md:max-w-[1920px]">

    <!-- Primary information -->
    <div class="w-full grid grid-cols-1 md:grid-cols-[auto_1fr] bg-gradient-to-b from-background-50 to-primary-200">
      <div class="max-h-[50svh] aspect-square p-4">
        <div class="size-full overflow-hidden shadow-[0px_0px_40px_-15px] rounded-3xl">
          <img :src="product?.img_url" class="w-full h-full object-cover" />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <h1 class="text-primary-500">{{ product?.name }}</h1>
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