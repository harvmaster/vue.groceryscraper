<template>
  <!-- <div class="flex justify-center p-2 md:p-4 transition-all gap-1 relative"> -->
  <div class="flex justify-center w-full">
    <div class="grid grid-cols-1 w-fit justify-items-center p-2 md:p-2 gap-2">

      <!-- Nav -->
      <div class="flex w-fit gap-1">
        <nav class="bg-primary-50 text-primary-500 flex w-fit rounded-xl basis-auto p-2 gap-1 group shadow-md transition-all">
          <div class="flex gap-1">

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
            
        </nav>
        
        <SearchInput class="relative z-50"/>
      </div>
      
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import SearchInput from '../../Inputs/SearchInput/SearchInput.vue';
</script>