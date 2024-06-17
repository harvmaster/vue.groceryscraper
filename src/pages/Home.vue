<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-1 gap-4 md:gap-0 md:max-w-[1920px]">

      <!-- Title Sections -->
      <div class="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 px-4 md:p-4 justify-center md:max-h-[--content-height]">

        <!-- Title-section_Text -->
        <div class="flex flex-col justify-center items-center gap-y-4 rounded-3xl h-fit min-h-[--content-height] md:min-h-0">
          <div class="w-fit h-fit flex flex-col gap-4">
            <div class="">
              <!-- Column of Titles -->
              <h1 class="text-7xl font-bold text-background-950 grid grid-cols-[auto_1fr]">
                <div class="col-span-1">Get</div>
                <div class="row-span-2 text-9xl max-h-min"><img src="../assets/Images/low-poly-groceries.webp" class="max-h-36" /></div>
                <div class="col-span-1">Your</div>
                <div class="col-span-2">Shopping</div>
                <div class="col-span-2">Done</div>
                <div class="col-span-2">Cheaper</div>
              </h1>

              <h1 class="text-2xl font-bold text-background-700">Across the most popular supermarkets</h1>
            </div>
            <div class="flex w-full justify-center">
              <router-link 
                to="/search" 
                class="w-full text-center bg-primary-800 text-background-200 px-8 py-4 rounded-3xl text-2xl font-bold items-center flex justify-center gap-4 hover:bg-gradient-to-r hover:from-primary-800 hover:to-primary-700 transition-all"
              >
                <v-icon name="io-search" class="h-full"/>
                Best Prices
              </router-link>
            </div>
          </div>
        </div>

        <!-- Title-section_image -->
        <div class="h-full max-h-full overflow-hidden shadow-[0px_0px_40px_-15px] rounded-3xl">
          <img class="max-h-full h-full" src="https://ideogram.ai/assets/image/lossless/response/eJKff04MTKiRVsDk7XiVWw" alt="logo" />
        </div>

      </div>
      <!-- End of Title-section -->

      <!-- Statistics-section -->
      <div class="px-4">
        <div class="text-center bg-gradient-to-b md:bg-gradient-to-r from-background-800 to-primary-800 py-8 grid grid-cols-1 md:grid-cols-4 gap-y-4 rounded-3xl shadow-[0px_0px_40px_-15px]">
          <div class="flex flex-col items-center gap-2">
            <h1 class="text-6xl font-bold text-background-200">12%</h1>
            <h1 class="text-2xl font-bold text-background-200">Avg price (1m)</h1>
          </div>
          <div class="flex flex-col items-center gap-2">
            <h1 class="text-6xl font-bold text-background-200">-5%</h1>
            <h1 class="text-2xl font-bold text-background-200">Products on sale (1m)</h1>
          </div>
          <div class="flex flex-col items-center gap-2">
            <h1 class="text-6xl font-bold text-background-200">120k</h1>
            <h1 class="text-2xl font-bold text-background-200">Products</h1>
          </div>
          <div class="flex flex-col items-center gap-2">
            <h1 class="text-6xl font-bold text-background-200">51</h1>
            <h1 class="text-2xl font-bold text-background-200">Categories</h1>
          </div>
        </div>
      </div>
      <!-- end Statistics-section -->

      <!-- Guide-section -->
      <div class="px-4">
        
        <div class="grid grid-cols-1 gap-4 px-4 justify-items-center">

          <!-- Step 1 -->
          <div class="w-fit h-[50svh] max-h-[50svh] grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
            
            <!-- Text -->
            <div class="flex flex-col items-center justify-center text-4xl">
              <div class="w-fit">
                <strong>Step 1</strong>
                <div class="">
                  Add your items to the cart
                </div>
              </div>
            </div>

            <!-- Img -->
            <div class="">
              <!-- <spline-viewer url="https://prod.spline.design/Hs-kyea3bMszLuG8/scene.splinecode"></spline-viewer> -->
            </div>
          </div>

          <!-- Step 2 -->
          <div class="w-fit h-[50svh] max-h-[50svh] grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">

            <!-- Img -->
            <div class="">
              <!-- <spline-viewer url="https://prod.spline.design/Hs-kyea3bMszLuG8/scene.splinecode"></spline-viewer> -->
            </div>

            <!-- Text -->
            <div class="flex flex-col items-center justify-center text-4xl">
              <div class="w-fit">
                <strong>Step 1</strong>
                <div class="">
                  Add your items to the cart
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <!-- End Guide-section -->

    </div>
    
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">

</script>