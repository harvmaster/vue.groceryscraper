<template>
  <div class="min-h-svh w-full bg-background-50">
    <Header class="sticky top-0 z-50">
      <navbar class="sticky top-0 z-50"/>
    </Header>

    <router-view :key="route.path" />
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import { ref, computed, onMounted, onActivated, watch } from 'vue';
import { useRouter } from 'vue-router';

import Header from '../components/Layout/Header.vue';
import Navbar from '../components/Navigation/Navbar/Navbar.vue';

const router = useRouter();

const route = computed(() => router.currentRoute.value);

const headerElement = ref<HTMLElement | null>(null);
watch(headerElement, () => {
  console.log(headerElement.value?.nodeName)
  document.styleSheets[0].insertRule(':root { --header-height: ' + headerElement.value?.clientHeight + 'px; }');
});

</script>