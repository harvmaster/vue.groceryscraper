<template>
  <div class="flex justify-center py-4 transition-all">
    <nav class="bg-primary-50 text-primary-500 flex w-fit rounded-xl p-2 gap-1 group shadow-md transition-all">
      <div class="flex basis-full md:basis-auto gap-1">

        <router-link 
        class="rounded-xl px-4 py-2 hover:bg-primary-300 hover:text-primary-600 transition-all" 
        exact-active-class="transition-all text-primary-600 bg-primary-300 group-hover:bg-primary-200 hover:group-hover:bg-primary-300"
        to="/home" 
        >Home</router-link>
        
        <router-link
        class="rounded-xl px-4 py-2 hover:bg-primary-300 hover:text-primary-600 transition-all"
        exact-active-class="transition-all text-primary-600 bg-primary-300 group-hover:bg-primary-200 hover:group-hover:bg-primary-300"
        to="/"
        >Test</router-link>
        <router-link
        class="rounded-xl px-4 py-2 hover:bg-primary-300 hover:text-primary-600 transition-all"
        exact-active-class="transition-all text-primary-600 bg-primary-300 group-hover:bg-primary-200 hover:group-hover:bg-primary-300"
        to="/about"
        >About</router-link>
      </div>
        
      <!-- Search Input container -->
      <div class="search-container flex">
        <input 
          ref="searchInput"
          type="text" 
          class="search-input max-w-full rounded-xl text-background-950 peer m-1" 
          placeholder="Search for products..."
          />
          <!-- class="search-input rounded-xl text-background-950 w-0 focus:w-full focus:px-4 focus:outline-none transition-all duration-500 peer"  -->
      </div>
      <button class="rounded-xl px-4 p-2 bg-primary-50 hover:bg-primary-400 hover:text-primary-600 transition-all peer-focus:ml-1" @click="focusSearch"><v-icon name="io-search"></v-icon></button>
    </nav>
  </div>
</template>

<style scoped>
.search-container {
  width: 0%;
  max-width: 0%;
  /* transition: width 0.5s; */
  transition: all 0.5s;
  overflow: hidden;

  .search-input {
    width: 0%;
    max-width: 0%;
    transition: all 0.5s;
  }
}

.search-container:focus-within {
  width: 100%;
  max-width: 100%;

  .search-input {
    width: 100%;
    max-width: 100%;
  }
}
</style>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const route = computed(() => router.currentRoute.value);

const searchInput = ref<HTMLInputElement | null>(null);

const focusSearch = () => {
  if (searchInput.value) {
    console.log(searchInput.value)
    nextTick(() => {
      // searchInput.value.classList.toggle('hidden');
      searchInput.value.focus();
    });
  }
}

</script>