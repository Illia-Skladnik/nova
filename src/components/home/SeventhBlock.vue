<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';
  .seven {
    position: relative;
    background-color: $dark-navy-blue-color;
    padding: 60px 14px 60px 20px;
    overflow: hidden;

    @include onDesktop {
      padding: 149px 23px 149px 100px;
    }

    &__wrapper {
      position: relative;
      width: 343px;
      margin: 0 auto;

      @include onDesktop {
        width: 1394px;
        display: flex;
      }
    }

    &__title {
      color: $white-color;
      font-size: 32px;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      line-height: 41px;
      margin-bottom: 20px;
      width: max-content;

      @include onDesktop {
        font-size: 56px;
        line-height: 68px;
        margin-bottom: 30px;
      }
    }

    &__description {
      display: block;
      color: $white-color;
      font-size: 16px;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      line-height: 25px;
      margin-bottom: 20px;

      @include onDesktop {
        margin-bottom: 40px;
      }
    }

    &__text {
      color: $white-color;
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
    }

    &__circle {
      margin: 0 10px 2px 0;
    }

    &__image {
      width: 343px;
      height: 282px;

      @include onDesktop {
        width: 574px;
        height: 472px;
      }
    }

    &__list-item {
      list-style-type: none;
      margin-bottom: 15px;
    }

    .seven__list-item:last-of-type {
      margin-bottom: 0;
    }

    &__unstorted-list {
      margin-bottom: 40px;

      @include onDesktop {
        margin-bottom: 50px;
      }
    }

    &__text-wrapper {
      margin:  0 57px 40px 0;
      position: relative;

      @include onDesktop {
        margin-bottom: 0;
      }
    }

    &__background {
      width: 430px;
      height: 538px;

      position: absolute;
      display: block;
      left: -100px;
      top: 0;

      @include onDesktop {
        width: 967px;
        height: 972px;
        left: 0;
        top: 0;
      }
    }
  }
</style>

<template>
  <div class="seven">
    <img :src="background" alt="background" class="seven__background"/>
    <div class="seven__wrapper">
      <div class="seven__text-wrapper">
      <h2 class="seven__title">Wsparcie techniczne</h2>
      <span class="seven__description">Zarejestruj się teraz, dołącz do grona elitarnej grupy instalatorów. Czekają na CIebie:</span>
      <ul class="seven__unstorted-list">
        <li class="seven__list-item">
          <svg class="seven__circle" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" fill="#FFCC00"/>
          </svg>
          <span class="seven__text">Wsparcie techniczne</span>
        </li>

        <li class="seven__list-item">
          <svg class="seven__circle" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" fill="#FFCC00"/>
          </svg>
          <span class="seven__text">Darmowe szkolenia</span>
        </li>

        <li class="seven__list-item">
          <svg class="seven__circle" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" fill="#FFCC00"/>
          </svg>
          <span class="seven__text">Profesjonalne doradztwo</span>
        </li>
        <li class="seven__list-item">
          <svg class="seven__circle" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" fill="#FFCC00"/>
          </svg>
          <span class="seven__text">Przydatne narzędzia do wyliczeń, checklisty, tabele wymiarów</span>
        </li>
      </ul>
      <OfferButton />
      </div>

      <img :src="engine" alt="engine" class="seven__image">
    </div>
  </div>
</template>

<script setup>
  import OfferButton from '../partials/OfferButton.vue';

  const background = new URL('/src/assets/images/seven-block-background.png', import.meta.url);
  const engine = new URL('@/assets/images/engine.png', import.meta.url);
</script>
