<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="row justify-between q-px-md q-py-sm">
      <div class="col-auto text-h4 text-weight-bold">
        Groceries
      </div>
      <div class="col-auto row self-center text-h5 text-weight-light">
        <!-- <div class="col-auto">
          Login
        </div>
        <div class="col-auto q-px-sm">
          <q-separator vertical />
        </div>
        <div class="col-auto">
          Signup
        </div> -->
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

</script>
