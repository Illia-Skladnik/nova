<style  scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';

    .item {
      display: block;

      &__image-wrapper {
        background-color: $dark-navy-blue-color;
        width: 264px;
        height: 285px;

        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
      }

      &__image {
        width: 219px;
        height: 217px;
      }

      &__title {
        color: $white-color;
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
        text-align: center;
        margin-bottom: 15px;
      }

      &__description {
        display: block;
        margin: 0 auto 15px;
        width: 208px;
        height: 53px;
        background-color: $vivid-orange-color;

        color: $white-color;
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        font-weight: 600;
        line-height: 53px;
        text-align: center;
      }

      &__price-wrapper {
        width: 219px;
        height: 70px;
        border: 2px solid $vivid-orange-color;
        margin: 0 auto;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }

      &__product {
        color: $white-color;
        font-family: 'Poppins', sans-serif;
        text-align: center;
        font-size: 16px;
        line-height: 25px;

      }

      &__price {
        color: $vivid-orange-color;
        font-family: 'Poppins', sans-serif;

        text-align: center;
        font-size: 16px;
        line-height: 25px;
      }
    }
</style>

<template>
  <div class="item">
    <div class="item__image-wrapper">
      <img class="item__image" :src="image" alt="product" />
    </div>
    <div class="item__title">{{ product.title }}</div>
    <div class="item__description">{{ product.description }}</div>
    <div class="item__price-wrapper">
      <div class="item__product">{{ product.product }}</div>
      <div class="item__price">{{ product.price }}</div>
    </div>
  </div>
</template>


<script setup>
  const image = new URL(`/src/assets/images/${props.product.image}`, import.meta.url);
  const props = defineProps(['product']);
</script>
