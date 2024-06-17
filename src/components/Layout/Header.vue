<template>
  <div class="" ref="headerElement">
    <slot>
      
    </slot>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const headerElement = ref<HTMLElement | null>(null);
onMounted(() => {
  console.log(headerElement.value?.clientHeight)
  document.styleSheets[0].insertRule(':root { --header-height: ' + headerElement.value?.clientHeight + 'px; }');
})
</script>