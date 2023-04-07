<script setup lang="ts">
  import {} from 'vue'
  import { useCounterStore } from '@/store/index'
  const store = useCounterStore()
</script>

<template>
  <div class=""> home {{ store.count }} </div>
</template>
<style lang="scss" scoped>
  .test {
    color: red;
    font-size: 12px;
  }
</style>
