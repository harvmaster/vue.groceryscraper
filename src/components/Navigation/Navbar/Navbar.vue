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
        <button class="rounded-xl px-4 p-2 bg-primary-100 text-primary-400 hover:bg-primary-300 hover:text-primary-700 transition-all shadow-md z-50" @mousedown="toggleSearchFocus">
          <v-icon scale='1' :name="searchFocus ? 'io-close' : 'io-search'"></v-icon>
        </button>
      </div>

      <!-- Search functionality -->
      <transition name="fade">
        <div v-if="searchFocus" class="fixed top-0 left-1/2 -translate-x-1/2 bg-opacity-25 bg-background-950  size-full px-2">
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
                  @focus="setFocused(true)"
                  @blur="setFocused(false)"
                />
              </div>

              <!-- results -->
              <transition name="fade">
                <div v-if="searchInput" class="p-2 w-full max-w-md bg-primary-50 shadow-md rounded-2xl ">
                  <div class="grid grid-col-1 gap-1 max-h-[50svh] w-full overflow-y-scroll overflow-x-hidden primary-scroll scrollbar scrollbar-track-primary-200 scrollbar-thumb-primary-400 scrollbar-thumb-rounded-lg">

                    <transition-group name="fade"> 
                      <div class="p-2 bg-primary-50 hover:bg-primary-100 cursor-pointer rounded-2xl max-w-full w-full overflow-hidden transition-all " v-for="i in 100">
                        <div class="flex gap-2">
                          <div class="w-12 h-12 bg-primary-100 rounded-xl flex-initial"></div>
                          <div class="flex flex-col flex-1 overflow-x-hidden">
                            <h1 class="text-primary-500 truncate">Product Name that is really long and wont fit on a single line</h1>
                            <h2 class="text-primary-400 truncate">Category</h2>
                          </div>
                        </div>
                      </div>
                    </transition-group>
                  </div>
                </div>
              </transition>

            </div>
          </div>
        </div>
      </transition>

      
    </div>
  </div>
</template>

<style scoped>
.search-container {
  max-height: 0px;
  transition: all 0.5s;
  padding: 0;
}

.search-container:focus-within {
  max-height: 4rem;
  padding: 0.125rem;
  margin-right: 10px;
  
}

.primary-scroll::-webkit-scrollbar {
  width: 10px;
  transform: translateX(-1em);

}
.primary-scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  transform: translateX(-1em);
}

.primary-scroll::-webkit-scrollbar-track {
  border-radius: 10px;
  transform: translateX(-1em);

  /* transform: translateX(200%); */
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

const searchInputElement = ref<HTMLInputElement | null>(null);
const searchInput = ref<string>('');

const searchFocused = ref(false);
const setFocused = (focus: boolean) => {
  nextTick(() => searchFocused.value = focus)
}

const searchFocus = ref(false);
const setSearchFocus = (focus: boolean) => {
  searchFocus.value = focus;
}
const toggleSearchFocus = () => {
  searchFocus.value = !searchFocus.value;
  if (searchFocus.value) {
    searchInputElement.value?.focus();
  } else {
    searchInput.value = '';
  }
}

</script>