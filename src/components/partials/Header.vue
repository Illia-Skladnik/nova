<!-- eslint-disable vue/multi-word-component-names -->
<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';

  .header {
    position: relative;
    &__picture {
      display: flex;
      justify-content: center;
    }

    &__image {
      height: 667px;
      position: absolute;

      @include onMobile {
        height: 870px;
      }

      @include onDesktop {
        width: 100%;
        object-fit: cover;
      }
    }
  }
</style>

<template>
  <header class="header">
    <picture class="header__picture">
      <source media="(min-width: 375px)" srcset="@/assets/images/desktop/main.jpg">
      <img class="header__image" src="@/assets/images/mobile/main.jpg" alt="banner">
    </picture>
  </header>
</template>

<script setup>

</script>
