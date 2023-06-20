<!-- eslint-disable vue/multi-word-component-names -->
<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  .logo {
    height: 37px;
    width: 197px;

    @include onDesktop {
      height: 49px;
      width: 268px;
    }
  }
</style>


<template>
    <img
      class="logo"
      :src="logo"
      alt="logo"
    />
</template>


<script setup>
  import logo from '@/assets/svg/logo.svg';
</script>
