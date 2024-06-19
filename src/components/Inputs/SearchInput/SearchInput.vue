<template>
  <div class="">
    <button class="size-full rounded-xl px-4 p-2 bg-primary-100 text-primary-400 hover:bg-primary-300 hover:text-primary-700 transition-all shadow-md z-10" @mousedown="toggleSearchFocus">
      <v-icon scale='1' :name="searchFocus ? 'io-close' : 'io-search'"></v-icon>
    </button>
    <!-- Search functionality -->
    <transition name="fade">
      <div v-if="searchFocus" class="fixed top-0 left-1/2 -translate-x-1/2 bg-opacity-25 bg-background-950  size-full px-2 -z-10">
        <div class="size-full relative grid grid-cols-1 justify-items-center">

          <!-- Exit on click around -->
          <div class="absolute size-full" @mousedown="() => setSearchFocus(false)">

          </div>
        
          <!-- Search -->
          <div class="grid grid-cols-1 gap-2 w-fit justify-items-center translate-y-[--header-height] h-min">

            <!-- input -->
            <div class="w-screen pointer-events-auto flex justify-center max-w-full md:max-w-md">
              <input
                ref="searchInputElement"
                type="text" 
                class="rounded-xl text-background-950 h-12 px-2 w-full md:max-w-md w-md outline-primary-300"
                placeholder="Search for products..."
                v-model="searchInput"
                @input="handleSearchInput"
              />
            </div>

            <!-- results -->
            <transition name="fade">
              <div v-if="searchInput" class="p-2 w-full max-w-md bg-primary-50 shadow-md rounded-2xl ">
                <div class="grid grid-col-1 gap-1 max-h-[50svh] w-full overflow-y-auto overflow-x-hidden primary-scroll scrollbar scrollbar-track-primary-200 scrollbar-thumb-primary-400 scrollbar-thumb-rounded-lg">

                  <!-- Each Result Listing -->
                  <transition-group name="fade"> 
                    <router-link class="p-2 bg-primary-50 hover:bg-primary-100 cursor-pointer rounded-2xl max-w-full w-full overflow-hidden transition-all" v-for="product of searchResults" :key="product.retailer_product_id" :to="`/products/${product.barcode}`">
                      <div class="flex gap-2">
                        <div class="w-12 h-12 bg-primary-100 rounded-xl flex-initial">
                          <img :src="product.img_url" class="w-full h-full object-cover rounded-xl" />
                        </div>
                        <div class="flex flex-col flex-1 overflow-x-hidden">
                          <h1 class="text-primary-500 truncate">{{ product.name }}</h1>
                          <h2 class="text-primary-400 truncate">{{ product.retailer_name }}</h2>
                        </div>
                      </div>
                    </router-link>
                  </transition-group>

                </div>
              </div>
            </transition>

          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.primary-scroll::-webkit-scrollbar {
  width: 10px;
}
.primary-scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
}

.primary-scroll::-webkit-scrollbar-track {
  border-radius: 10px;
}

/* Fade Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-move {
  transition: transform 0.25s ease;
}
</style>

<script setup lang="ts">
import { nextTick, ref } from 'vue';
import { Product } from '../../../types';

const searchInputElement = ref<HTMLInputElement | null>(null);
const searchInput = ref<string>('');

// Search UI
const searchFocus = ref(false);
const setSearchFocus = (focus: boolean) => {
  searchFocus.value = focus;
}
const toggleSearchFocus = (event: Event) => {
  event.stopPropagation();
  event.preventDefault();

  searchFocus.value = !searchFocus.value;
  if (searchFocus.value) {
    nextTick(() => {
      searchInputElement.value?.focus();
    })
  } else {
    searchInput.value = '';
  }
}

//Search Functionality
const searchResults = ref<Product[]>([]);
const searchProducts = async (query: string) => {
  if (!query) return searchResults.value = [];

  const response = await fetch(`https://api.groceryscraper.mc.hzuccon.com/api/products/search?q=${query}`);
  const data = await response.json();

  searchResults.value = data;
}

// Debounce input requests
const debounceInput = (fn: Function, delay: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  }
}

const handleSearchInput = debounceInput((e: Event) => {
  searchProducts(searchInput.value);
}, 300);
</script>