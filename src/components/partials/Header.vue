<!-- eslint-disable vue/multi-word-component-names -->
<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';

  .header {
    height: #{$banner-height-mobile}px;
    position: relative;

    @include onMobile {
      height: #{$banner-height-desktop}px;
    }


    &__picture {
      display: flex;
      justify-content: center;
    }

    &__image {
      height: #{$banner-height-mobile}px;
      position: absolute;

      @include onMobile {
        height: #{$banner-height-desktop}px;
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
      <source media="(min-width: 375px)" :srcset="desktopBanner">
      <img class="header__image" :src="mobileBanner" alt="banner">
    </picture>
  </header>
</template>

<script setup>
  const mobileBanner = new URL('@/assets/images/mobile/main.jpg', import.meta.url);
  const desktopBanner = new URL('@/assets/images/desktop/main.jpg', import.meta.url);
</script>
