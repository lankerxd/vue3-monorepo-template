<script setup lang="ts">
  import { testFirstFunc } from '@lankerxd/first-project'
  // import { testFunc } from '@/test'
  import { version } from 'vue'

  testFirstFunc()
  // import Request from '@lankerxd/core/request'
  let data: any
  // const test = async () => {
  //   const firstProject = await import('@lankerxd/first-project')
  //   data = firstProject.testFirstFunc()
  //   console.log(firstProject.testFirstFunc(), data)
  // }
  // test()
</script>

<template>
  <p>SecondProject</p>
  <p>{{ data }}</p>
  <div>vue 版本: {{ version }}</div>
  <MyTest></MyTest>
</template>

<style lang="scss" scoped>
  .test {
    color: red;
    font-size: 14px;
    background-color: red;
  }
</style>
