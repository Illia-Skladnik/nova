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
      overflow: hidden;
    }

    &__image {
      height: #{$banner-height-mobile}px;
      position: absolute;
      width: 100%;
      object-fit: cover;
      // filter: blur(5px);

      @include onMobile {
        height: #{$banner-height-desktop}px;
      }

      @include onDesktop {
        width: 100%;
      }
    }

    &__logo {
      height: 37px;
      width: 197px;

      @include onDesktop {
        height: 49px;
        width: 268px;
      }
    }

    &__wrapper {
      margin: 0 auto;
      max-width: 1240px;
      display: flex;
      flex-direction: column;
    }

    &__nav {
      display: flex;
      justify-content: space-between;
      margin-bottom: 102px;

      @include onDesktop {
        margin-bottom: 168px;
      }
    }

    &__login-button {
      height: 49px;
      width: 171px;
      background-color: $dark-blue-color;
      color: $white-color;

      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 25px;
      display:  none;

      &:hover {
        background-color: $dark-navy-blue-color;
      }

      @include onDesktop {
        display: block;
      }
    }

    &__title {
      color: $white-color;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;

      &--green {
        color: $bright-green-color;
      }

      &--block {
        display: block;
      }

      @include onDesktop {
        font-size: 64px;
        line-height: 78px;
      }
    }

    &__title-wrapper {
      max-width: 752px;
      margin-bottom: 50px;
    }

    &__description {
      max-width: 387px;

      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 25px;
      color: $white-color;

      margin-bottom: 50px;
    }

    &__block {
      position: absolute;
      width: 100%;
      height: 100%;

      padding: 35px 20px 0;

      @include onDesktop {
        padding: 35px 100px 0;
      }
    }

    &__burger-menu {
      @include onDesktop {
        display: none;
      }
    }
  }

</style>

<template>
  <header class="header">
    <video
      autoplay
      muted
      loop
      :src="video"
      class="header__image"
    ></video>

    <div  class="header__block">
      <div class="header__wrapper">
      <nav class="header__nav">
        <Logo class="header__logo"/>
        <img
          class="header__burger-menu"
          :src="burgerMenu"
          alt="Burger menu"
        />

        <button class="header__login-button">
          ZALOGUJ
        </button>
      </nav>

      <div class="header__title-wrapper">
        <span class="header__title header__title--block">Instalacje wodne </span>
        <span class="header__title">i grzewcze </span>
        <span class="header__title header__title--green">z systemem wciskowym</span>
      </div>

      <div class="header__description">
        Prezentujemy systemy wciskowe z polibutylenu - materiału odpornego na mróz, chemię i wysokie ciśnienie!
      </div>
      <OfferButton/>
    </div>
    </div>

  </header>
</template>

<script setup>
  import Logo from './Logo.vue';
  import OfferButton from './OfferButton.vue';
  import burgerMenu from '@/assets/svg/burgerMenu.svg';

  const video = new URL('@/assets/videos/background.mov', import.meta.url);
</script>
