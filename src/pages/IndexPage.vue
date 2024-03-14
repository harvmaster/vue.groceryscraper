<template>
  <q-page class="row items-center justify-center">

    <!-- Title Screen -->
    <div class="col-12 row items-center page-section landing-section relative">
      <div class="backdrop" />
      <div class="col-12 row page-content title-container justify-center">

        <!-- Title -->
        <div class="col-auto q-py-xl title-header">
          <div class="col-12">
            <h1 class="text-h1 text-weight-bolder text-center no-margin q-pb-md page-header">Welcome to Groceries</h1>
          </div>
          <!-- Subtitle -->
          <div class="col-12">
            <h2 class="text-h4 text-weight-bolder text-center no-margin page-header">Your one stop shop for all your grocery needs</h2>
          </div>
        </div>

        <!-- Search -->
        <div class="col-12 row justify-center">
          <q-input class="col search-bar" color="primary" bg-color="white" outlined v-model="search" label="Search for groceries" />
        </div>
      </div>
    </div>

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

    <!-- Scrapers -->
    <div class="col-12 row justify-center">
      <div class="col-12 col-md-8 row justify-center q-pa-xl">
        
      </div>
    </div>


    <!-- <div class="col-12 col-md-8 row items-between page-section"> -->
    <div class="col-12 col-md-8 row items-between">
      <!-- <div class="col-12 row page-content"> -->
      <div class="col-12 row justify-center">

        
        <!-- Current Scrapers -->
        <div class="col-12 q-pa-xl">
          <div class="col-12">
            <h2 class="text-h3 text-center no-margin q-pb-md">Current Providers</h2>
          </div>
          <div class="col-12 row justify-center">

            <div class="col-12 col-sm-6 col-md-4 row justify-center">
              <div class="provider-content col-12 col-md-12 row justify-start q-pa-md">

                <img class="provider-avatar col-12 col-md-6" src="https://logos-world.net/wp-content/uploads/2022/04/Coles-Symbol.png" alt="Coles" />
                <div class="col-12 col-md-12 self-center">
                  <h3 class="text-h4 text-start no-margin">Coles</h3>
                </div>
                
                <!-- Stats -->
                <div class="col-12 row">
                  <p class="text-weight-light text-h6 no-margin">Comparative Prices: </p>
                  <p class="text-green-4 q-pl-sm text-h6 no-margin" >10%</p>
                </div>
                <div class="col-12 row">
                  <p class="text-weight-light text-h6 no-margin">Store Prices: </p>
                  <p class="text-green-4 q-pl-sm text-h6 no-margin" >10%</p>
                </div>
                <div class="col-12 row">
                  <p class="text-weight-light text-h6 no-margin">Sales: </p>
                  <p class="text-red-4 q-pl-sm text-h6 no-margin" >-10%</p>
                </div>
              
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
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
  // transform: translateY(-50%);
}

.search-bar {
  max-width: 50em;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.212);
}
.page-section {
  height: calc(100vh - 4em);
}
.provider-avatar {
  max-width: 10em;
  // max-height: 10em;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  // img {
  //   width: 100%;
  //   height: 100%;
  // }
}
.provider-content {
  box-shadow: 4px 4px 4px 8px rgba(0, 0, 0, 0.212);
  border-radius: 1em;
}
.landing-section {
  // https://ideogram.ai/api/images/direct/7O2w5iKUSsO1zgy1lElUMw.png
  // https://ideogram.ai/api/images/direct/8NbQxLISRCSNW3mP_o7Wkg.jpg
  // https://ideogram.ai/api/images/direct/1UhTIWYeQkCXY6eXG2PyXg.jpg
  background-color: rgba(0, 0, 0, 0.3);

  // background-image: url('https://ideogram.ai/api/images/direct/8NbQxLISRCSNW3mP_o7Wkg.jpg');
  // background-size: cover;
}
.title-container {
  // background-color: rgba(255, 255, 255, 0.8);
  // border-radius: 1em;
  // box-shadow: 4px 4px 4px 8px rgba(0, 0, 0, 0.212);
  color: white;
  // font-weight: bolder;
}
.page-header {
  text-shadow: 1px 1px 4px rgb(0, 0, 0);
}
.title-header {
  // background-color: rgba(255, 255, 255, 0.8);
  // border-radius: 1em;
  // box-shadow: 4px 4px 4px 8px rgba(0, 0, 0, 0.212);
  color: white;
  // font-weight: bolder;

}
.stats-bar {
  background-color: #272727;
}
</style>

<script setup lang="ts">

</script>
