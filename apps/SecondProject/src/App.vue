<script setup lang="ts">
  import { testFirstFunc } from '@lankerxd/first-project'
  import { testFunc } from '@/test'
  import { version } from 'vue'
  testFunc()
  // import Request from '@lankerxd/core/request'
  const data = testFirstFunc()
</script>

<template>
  <p>SecondProject</p>
  <p>{{ data }}</p>
  <div>vue 版本: {{ version }}</div>
</template>

<style lang="scss" scoped>
  .test {
    color: red;
    font-size: 14px;
    background-color: red;
  }
</style>
