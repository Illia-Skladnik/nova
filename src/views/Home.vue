<!-- eslint-disable vue/multi-word-component-names -->
<style scoped lang="scss">
  .home {

  }
</style>

<template>
  <div class="home">
    <FirstBlock/>
    <SecondBlock/>
    <ThirdBlock/>
    <FourthBlock/>
  </div>
</template>

<script setup>
  import FirstBlock from '../components/home/FirstBlock.vue'
  import SecondBlock from '../components/home/SecondBlock.vue'
  import ThirdBlock from '../components/home/ThirdBlock.vue'
  import FourthBlock from '../components/home/FourthBlock.vue'
</script>
