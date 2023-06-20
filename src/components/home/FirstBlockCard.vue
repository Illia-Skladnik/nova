<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';
  .card {
    height: 333px;
    width: 335px;
    position: relative;

    @include on2columns {
      height: 398px;
      width: 400px;
    }

    &__title {
      position: absolute;
      left: 30px;
      top: 191px;
      z-index: 1;

      font-family: 'Poppins', sans-serif;
      font-size: 56px;
      font-weight: 600;
      line-height: 68px;
      color: $vivid-orange-color;



      @include on2columns {
        left: 40px;
        top: 219px;
        font-size: 72px;
        line-height: 90px;
      }
    }

    &__description {
      position: absolute;
      font-family: 'Poppins', sans-serif;
      font-size: 18px;
      font-weight: 600;
      line-height: 26px;
      color: $white-color;
      left: 30px;
      top: 264px;
      z-index: 1;

      @include on2columns {
        font-size: 20px;
        line-height: 28px;
        left: 40px;
        top: 319px;
      }

    }

    &__picture {

    }

    &__image {

    }

    .card__overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 160px;
      backdrop-filter: blur(10px);

      @include on2columns {
        height: 201px;
      }
    }
  }
</style>

<template>
  <div class="card">
    <span class="card__title">{{ product.title }}</span>
    <span class="card__description">{{ product.description }}</span>

    <picture class="card__picture">
      <source media="(min-width: 860px)" :srcset="imageUrlDesktop">
      <img class="card__image" :src="imageUrlMpbile" alt="product">
      <div class="card__overlay"></div>
    </picture>
  </div>
</template>

<script setup>
  const props = defineProps(['product']);
  const imageUrlDesktop = new URL(`/src/assets/images/desktop/${props.product.image}`, import.meta.url);
  const imageUrlMpbile = new URL(`/src/assets/images/mobile/${props.product.image}`, import.meta.url);
</script>
