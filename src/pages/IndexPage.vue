<template>
  <q-page class="row items-center justify-center">

    <!-- Title Screen -->
    <div class="col-12 row items-center page-section landing-section relative">
      <div class="backdrop" />
      <div class="col-12 row page-content title-container justify-center">

        <!-- Title -->
        <div class="col-auto q-py-xl title-header q-px-md">
          <div class="col-12">
            <h1 class="text-h1 text-weight-bolder text-center no-margin q-pb-md page-header">Welcome to Groceries</h1>
          </div>
          <!-- Subtitle -->
          <div class="col-12">
            <h2 class="text-h4 text-weight-bolder text-center no-margin page-header">Your one stop shop for all your grocery needs</h2>
          </div>
        </div>

        <!-- Search -->
        <div class="col-12 row justify-center q-px-md">
          <q-input class="col search-bar" color="primary" bg-color="white" outlined v-model="search" label="Search for groceries" />
        </div>
      </div>
    </div>
    <!-- End Title Screen -->

    <!-- Stats -->
    <div class="col-12 row justify-center stats-bar text-white q-pa-xl">
      <div class="col-12 col-md-8 row justify-center">
        <div class="col-auto row justify-center">
           <div class="col-auto col-md row justify-center">
              <h2 class="col-12 text-weight-bolder text-center no-margin">15k+</h2>
              <p class="col-12 text-center">Products</p>
            </div>
            <div class="col-auto col-md row justify-center">
              <h2 class="col-12 text-weight-bolder text-center no-margin">24+</h2>
              <p class="col-12 text-center">Months of History</p>
            </div>
          </div>
          <div class="col-auto row justify-center">
            <div class="col-auto col-md row justify-center">
              <h2 class="col-12 text-weight-bolder text-center no-margin">300k+</h2>
              <p class="col-12 text-center">Prices Saved</p>
            </div>
            <div class="col-auto col-md row justify-center">
              <h2 class="col-12 text-weight-bolder text-center no-margin">9,000+</h2>
              <p class="col-12 text-center">Store Comparisons</p>
          </div>
          </div>
      </div>
    </div>
    <!-- End Stats -->

    <!-- Scrapers -->
    <div class="col-12 row justify-center bg-27">
      <div class="col-12 col-md-8 row justify-center q-px-xl">
        
        <!-- Coles -->
        <provider-card class="col-12 col-sm-6 col-md-4 q-pa-md" />
        <provider-card class="col-12 col-sm-6 col-md-4 q-pa-md" />
        <provider-card class="col-12 col-sm-6 col-md-4 q-pa-md" />
      </div>
    </div>
    <!-- End Scrapers -->

  </q-page>
</template>

<style scoped lang="scss">
.relative {
  position: relative;
}
.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://ideogram.ai/api/images/direct/1UhTIWYeQkCXY6eXG2PyXg.jpg');
  background-size: cover;
  background-position: center;
  z-index: -1;
  // transform: translateY;
  filter: blur(8px);
}

.search-bar {
  max-width: 50em;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.212);
}
.page-section {
  height: calc(100vh - 4em);
}

.stats-bar {
  background-color: #272727;
}

.bg-27 {
  background-color: #272727;
}
</style>

<script setup lang="ts">
import ProviderCard from 'components/Providers/ProviderCard.vue'

</script>
