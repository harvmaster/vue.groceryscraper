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
    <div class="col-12 row justify-center bg-27">
      <div class="col-12 col-md-8 row justify-center q-pa-xl">
        
        <!-- Coles -->
        <div class="col-12 col-md-4 col-sm-6 row provider-card">
          <div class="provider-logo" />
          <div class="col-12 row items-end justify-center provider-content-container q-pa-md">
            <div class="col-12 row q-col-gutter-y-sm provider-content fit  text-white text-weight-bold q-pa-xs">
              <div class="col-12 column">
                <div class="col-auto height-auto">
                  <div class="col-auto q-pa-sm text-h3 text-weight-bolder">
                    Coles
                  </div>
                </div>

                <div class="col-auto row self-center justify-center height-auto q-pa-sm">
                  <div class="col-4 text-center row justify-center stat">
                    <p class="col-auto text-h5 no-margin">+10%</p>
                    <p class="col-12 text-h5 no-margin">Comparative Prices</p>
                  </div>
                </div>
                
                <div class="col-auto row justify-evenly height-auto q-pa-sm">
                  <div class="col-12 row justify-evenly height-auto q-pa-sm">
                    <div class="col-4 text-center row justify-center stat">
                      <p class="col-auto text-h5 no-margin">-10%</p>
                      <p class="col-12 text-h5 no-margin">Store Prices</p>
                    </div>
                    <div class="col-4 text-center row justify-center stat">
                      <p class="col-auto text-h5 no-margin">-10%</p>
                      <p class="col-12 text-h5 no-margin">Store Prices</p>
                    </div>  
                  </div>

                  <!-- <div>
                    <p class="text-h5 no-margin">Comparative Prices: <span class="text-red-1 text-weight-bolder">+10%</span></p>
                    <p class="text-h5 no-margin">Store Prices: <span class="text-green-4 text-weight-bolder">-10%</span></p>
                    <p class="text-h5 no-margin">Sales: <span class="text-red-1 text-weight-bolder">-10%</span></p>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="col-4 row provider-card">
          <div class="provider-logo" />
          <div class="col-12 row items-end justify-center provider-content-container q-pa-md">
            <div class="col-12 row q-col-gutter-y-sm provider-content text-weight-bold q-pa-xs">
              <div class="col-auto">
                <div class="col-auto q-pa-sm text-h5 text-weight-bolder">
                  Coles
                </div>
              </div>
              <div class="col-12">
                <div>
                  <p class="text-h6 no
                  -margin">Comparative Prices: <span class="text-red-1 text-weight-bolder">+10%</span></p>
                  <p class="text-h6">Store Prices: <span class="text-green-4 text-weight-bolder">-10%</span></p>
                  <p class="text-h6">Sales: <span class="text-red-1 text-weight-bolder">-10%</span></p>
                </div>
              </div>
            </div>
          </div>
        </div> -->

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
// .provider-content {
//   box-shadow: 4px 4px 4px 8px rgba(0, 0, 0, 0.212);
//   border-radius: 1em;
// }
.landing-section {
  // https://ideogram.ai/api/images/direct/7O2w5iKUSsO1zgy1lElUMw.png
  // https://ideogram.ai/api/images/direct/8NbQxLISRCSNW3mP_o7Wkg.jpg
  // https://ideogram.ai/api/images/direct/1UhTIWYeQkCXY6eXG2PyXg.jpg
  background-color: rgba(0, 0, 0, 0.3);
  // backdrop-filter: blur(20px);


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
.text-h1 {
  font-size: min(6rem, 16vw);
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

// .provider-card {
//   position: relative;
//   aspect-ratio: 1;
//   height: auto;
//   border-radius: 1em;
//   overflow: hidden;
//   box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.4);
// }

// .provider-logo {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   // object-fit: cover;
//   height: auto;
//   aspect-ratio: 16/9;
//   // height: 100%;
//   background-image: url('https://logos-world.net/wp-content/uploads/2022/04/Coles-Symbol.png');
//   background-size: contain;
//   background-position: center;
//   background-repeat: repeat;
//   z-index: 0;
// }
// .provider-content-container {
  
// }
// .provider-content {
//   height: min-content;
//   padding: 0.2em;
//   // padding: 0.5em 1em;
//   background-color: rgb(255, 255, 255);
//   // background-color: rgb(236, 24, 24); // Color match to coles
//   // border-radius: 2em;
//   // box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.7);

//   color: #272727;
//   font-weight: bolder;
//   backdrop-filter: blur(8px);
//   // backdrop-filter: blur(8px) brightness(1) sepia(0.5);
//   border-radius: 0.8rem;
//   // text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.199);
//   // outline: 1px solid white;

//   div {
//     padding: 0.1em;
//     div {
//       border-radius: 0.8rem;
//       background-color: rgb(245, 245, 245);
//     }
//   }
// }

.provider-card {
  position: relative;
  aspect-ratio: 1;
  border-radius: 1em;
  overflow: hidden;
  box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.4);
}

.provider-logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://logos-world.net/wp-content/uploads/2022/04/Coles-Symbol.png');
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  z-index: 0;
  filter: blur(4px);
}
.provider-content-container {
  
}
.provider-content {
  height: min-content;
  padding: 0.2em;
  // padding: 0.5em 1em;
  // background-color: rgb(255, 255, 255);
  // background-color: rgb(236, 24, 24); // Color match to coles
  // border-radius: 2em;
  // box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.7);

  color: #272727;
  font-weight: bolder;
  backdrop-filter: blur(8px) brightness(0.8);
  // backdrop-filter: blur(8px) brightness(1) sepia(0.5);
  border-radius: 0.8rem;
  // text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.199);
  // outline: 1px solid white;

  // div {
  //   padding: 0.1em;
  //   div {
  //     border-radius: 0.8rem;
  //     background-color: rgb(245, 245, 245);
  //   }
  // }
}

.height-auto {
  height: auto;
}

.bg-27 {
  background-color: #272727;
}
</style>

<script setup lang="ts">

</script>
