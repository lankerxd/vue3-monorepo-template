<script setup lang="ts">
  import {} from 'vue'
  import { testFirstFunc } from './index'

  console.log(testFirstFunc(), '我是MyTest组件执行的方法')
</script>

<template>
  <div class=""> 我是MyTest组件 </div>
</template>

<style lang="scss" scoped></style>
