<style  scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';
  .advantage {
    width: 375px;
    margin: 0 auto;
    position: relative;

    @include onDesktop {
      width: 1240px;
    }

    &__image {
      width: 375px;
      height: 375px;

      @include onDesktop {
        position: absolute;
        right: 0;
        width: 715px;
        height: 715px;
      }
    }

    &__text-block {
      position: absolute;
      width: 335px;
      height: 426px;
      top: 250px;
      left: 20px;

      background-color: $dark-blue-color;
      padding: 40px 24px 0 31px;

      @include onDesktop {
        padding: 75px 44px 0 72px;
        top: 83px;
        left: 0;
        width: 687px;
        height: 549px;
      }
    }

    &__title {
      color: $white-color;
      font-family: 'Poppins', sans-serif;
      font-size: 32px;
      font-weight: 600;
      line-height: 41px;

      @include onDesktop {
        font-size: 48px;
        line-height: 58px;
      }
    }

    &__description {
      display: block;
      color: $white-color;
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
      margin-bottom: 20px;

      @include onDesktop {
        font-size: 18px;
        font-weight: 400;
        line-height: 27px;
        margin-bottom: 57px;
      }
    }

    &__title-wrapper {
      margin-bottom: 30px;
    }

    &__slide-btn {
      height: 92px;
      width: 92px;

      &--prev {
        margin-right: 6px;

        @include onDesktop {
          margin-right: 10px;
        }
      }
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
      <img :src="arrowLeftWhite" alt="arrow" class="advantage__slide-btn advantage__slide-btn--prev" @click="$emit('prev')">
      <img :src="arrowRightGreen" alt="arrow" class="advantage__slide-btn" @click="$emit('next')">
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
  defineEmits(['next', 'prev']);
</script>
