<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';

  .product-card {
    width: 400px;

    &__image-wrapper {
      width: 400px;
      height: 362px;

      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $dark-navy-blue-color;
      margin-bottom: 20px;
    }

    &__image {
      width: 278px;
      height: 275px;
    }

    &__title {
      display: block;

      color: $white-color;
      font-size: 28px;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      line-height: 41px;
      margin-bottom: 15px;
    }

    &__description {
      display: block;
      background-color: $vivid-orange-color;
      color: $white-color;
      font-family: 'Poppins', sans-serif;
      font-size: 32px;
      font-weight: 600;
      line-height: 53px;
      margin-bottom: 10px;

      width: 208px;
      height: 53px;
      text-align: center;
    }

    &__product {
      color: $white-color;
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      line-height: 45px;
    }

    &__price {
      color: $vivid-orange-color;
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      line-height: 45px;
    }

    &__price-wrapper {
      border: 2px solid $vivid-orange-color;
      width: max-content;

      width: 309px;
      height: 45px;
      text-align: center;
    }
  }
</style>

<template>
  <div class="product-card">
    <div class="product-card__image-wrapper">
      <img class="product-card__image" :src="imageUrl" alt="cord"/>
    </div>
    <span class="product-card__title">{{ product.title }}</span>
    <span class="product-card__description">{{ product.description }}</span>
    <div class="product-card__price-wrapper">
      <span class="product-card__product">{{ product.product }}</span>
      <span class="product-card__price">{{ product.price }}</span>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps(['product']);
  const imageUrl = new URL(`/src/assets/images/${props.product.image}`, import.meta.url);
</script>
