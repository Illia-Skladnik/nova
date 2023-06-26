<style  scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';
  .advantage {
    width: 375px;
    margin: 0 auto;
    position: relative;
    // height: 1500px!important;

    &__picture {
      // width: 375px;
      // height: 375px;
    }

    &__image {
      width: 375px;
      height: 375px;
    }

    &__text-block {
      position: absolute;
      width: 335px;
      height: 426px;
      top: 250px;
      left: 20px;

      background-color: $dark-blue-color;
      padding: 40px 24px 0 31px;
    }

    &__title {
      color: $white-color;
      font-family: 'Poppins', sans-serif;
      font-size: 32px;
      font-weight: 600;
      line-height: 41px;
    }

    &__description {
      display: block;
      color: $white-color;
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
      margin-bottom: 20px;
    }

    &__title-wrapper {
      margin-bottom: 30px;
    }
  }
</style>

<template>
  <div class="advantage">
    <picture class="advantage__picture">
      <source media="(min-width: 1440px)" :srcset="advantageDesk">
      <img class="advantage__image" :src="advantageMob" alt="advantage">
    </picture>

    <div class="advantage__text-block">
      <div class="advantage__title-wrapper">
        <span class="advantage__title">{{ itemNumber }}. </span>
        <span class="advantage__title">{{ advantage.title }}</span>
      </div>

      <span class="advantage__description">{{ advantage.description }}</span>
      <img :src="arrowLeftWhite" alt="arrow">
      <img :src="arrowRightGreen" alt="arrow">
    </div>
  </div>
</template>

<script setup>
  import arrowLeftWhite from '@/assets/svg/arrowLeftWhite.svg';
  import arrowRightGreen from '@/assets/svg/arrowRightGreen.svg';
  import { computed } from 'vue';

  const itemNumber = computed(() => props.index + 1 );
  const advantageMob = new URL(`/src/assets/images/mobile/${props.advantage.image}`, import.meta.url);
  const advantageDesk = new URL(`/src/assets/images/desktop/${props.advantage.image}`, import.meta.url);
  const props = defineProps(['advantage', 'index']);
</script>
