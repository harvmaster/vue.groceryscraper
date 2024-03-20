<template>
  <div class="">
    <q-carousel
      v-model="slide"
      transition-prev="jump-right"
      transition-next="jump-left"
      swipeable
      animated
      control-color="white"
      prev-icon="arrow_left"
      next-icon="arrow_right"
      navigation-icon="radio_button_unchecked"
      navigation
      arrows
      height="300px"
      class="provider-carousel text-white rounded-borders no-padding"
    >
      <q-carousel-slide name="style" class="row no-padding">
        <div class="col-md col-12 logo coles-logo full-height row flex-center shadow-5 q-pa-lg">
          <img class="logo-img" src="https://logos-world.net/wp-content/uploads/2022/04/Coles-Symbol.png" alt="Coles" />
        </div>
        <div class="col-12 col-md-8 row flex-center q-pa-md q-col-gutter-md">
          <!-- Stats -->

          <div class="col-12 row justify-center q-col-gutter-y-md">
            
            <!-- Prices -->
            <div class="col-12 col-md-auto row justify-center">
              <h2 class="col-12 text-weight-bolder text-center no-margin">{{ providers.coles.stats.prices.change * 100 }}%</h2>
              <div class="col-12">
                <p class="col-12 text-center no-margin text-subtitle2">Prices</p>
                <p class="col-12 text-center text-caption text-grey-4 no-margin">
                  {{ providers.coles.stats.prices.period }}
                </p>
              </div>
            </div>
            
            <!-- Sales -->
            <div class="col-12 col-md-auto row justify-center">
              <h2 class="col-12 text-weight-bolder text-center no-margin">{{ providers.coles.stats.sales.change * 100 }}%</h2>
              <div class="col-12">
                <p class="col-12 text-center no-margin text-subtitle2">Sales</p>
                <p class="col-12 text-center text-caption text-grey-4 no-margin">
                  {{ providers.coles.stats.sales.period }}
                </p>
              </div>
            </div>
            
          </div>

          <div class="col-12 row justify-center q-col-gutter-y-md">

            <!-- Comparison -->
            <div class="col-12 col-md-auto row justify-center">
              <h2 class="col-12 text-weight-bolder text-center no-margin">{{ providers.coles.stats.comparison.change * 100 }}%</h2>
              <div class="col-12">
                <p class="col-12 text-center no-margin text-subtitle2">Comparison</p>
                <p class="col-12 text-center text-caption text-grey-4 no-margin">
                  {{ providers.coles.stats.comparison.period }}
                </p>
              </div>
            </div>
            
            <!-- average Price -->
            <div class="col-12 col-md-auto row justify-center">
              <h2 class="col-12 text-weight-bolder text-center no-margin">{{ providers.coles.stats.averagePrice.change * 100 }}%</h2>
              <div class="col-12">
                <p class="col-12 text-center no-margin text-subtitle2">Average Price</p>
                <p class="col-12 text-center text-caption text-grey-4 no-margin">
                  {{ providers.coles.stats.averagePrice.period }}
                </p>
              </div>
            </div>

          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="live_tv" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="layers" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-icon name="terrain" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
    </q-carousel>
    <!-- <div class="col-12 row justify-center stats-bar text-white q-pa-xl">
            <div class="col-12 col-md-8 row justify-center">
              <div class="col-auto row justify-center">
                <div class="col-auto col-md row justify-center">
                  <h2 class="col-12 text-weight-bolder text-center no-margin">+8%</h2>
                  <div class="col-12 text-center row justify-center">
                    <p class="col-12 text-subtitle2 no-margin">
                      Prices
                    </p>
                    <p class="col-12 text-caption text-grey-4 no-margin">
                      30 Days
                    </p>
                  </div>
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
          </div> -->
  </div>

</template>

<style lang="scss" scoped>
.provider-carousel {
  background-color: #2e2e2e;
}
.coles-logo {
  background-color: rgb(239, 37, 24) !important;
}
.logo-img {
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: 1/1;
}
.logo {
  position: relative;
}
.logo::after {
  @media (max-width: 768px) {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -200%);
    width: 1.5em;
    height: 1.5em;
    background-color: white;
    // clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    // clip-path: polygon(100% 0%, 0% 50%, 100% 100%);polygon(54% 85%, 88% 33%, 100% 53%, 53% 100%, 0 53%, 0 34%);
    clip-path: polygon(50% 80%, 100% 30%, 100% 50%, 50% 100%, 0 50%, 0 30%);
    z-index: 2;
    animation: bounce 1s infinite;
  }
}

@keyframes bounce {
  0% {
    transform: translate(-50%, -200%);
  }
  50% {
    transform: translate(-50%, -225%);
  }
  100% {
    transform: translate(-50%, -200%);
  }
}
</style>

<script lang="ts" setup>
import { ref } from 'vue'

const slide = ref('style')

const providers = {
  coles: {
    name: 'coles',
    stats: {
      prices: {
        change: 0.08,
        period: '30 Days'
      },
      sales: {
        change: -0.24,
        period: '30 Days'
      },
      comparison: {
        change: -0.09,
        period: '30 Days'
      },
      averagePrice: {
        change: 0.06,
        period: '30 Days'
      }
    }
  }
}

</script>