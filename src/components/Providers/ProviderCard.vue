<template>
  <div>
    <div class="col-12 col-md-4 col-sm-6 row provider-card q-pa-sm">
      
      <!-- Content -->
      <div class="col-12 row provider-card-content-container q-pa-md">
        <!-- Title -->
        <div class="col-12 row justify-center text-white q-pa-md">
          <h2 class="col-12 text-weight-bolder text-center no-margin">Coles</h2>
        </div>
        <!-- Provider Logo -->
        <div class="provider-logo" />
      </div>
      
    </div>
  </div>
</template>

<style scoped lang="scss">
.provider-card {
  position: relative;
  aspect-ratio: 1;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.4);
}

.provider-logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  aspect-ratio: auto 1;
  max-height: 100%;
  background-image: url('https://logos-world.net/wp-content/uploads/2022/04/Coles-Symbol.png');
  background-color: rgb(239, 37, 24);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1; /* Move the logo below the content */
  filter: blur(4px);
}

.provider-card-content-container {
  height: 100%;
  outline: 1rem solid #27272735;
  border-radius: 1em;
  z-index: 1; /* Ensure content is above the logo */
}
</style>

<script setup lang="ts">

</script>