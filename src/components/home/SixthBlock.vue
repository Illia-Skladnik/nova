<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';
  .six {
    background-color: $dark-blue-color;
    padding: 70px 0 100px;

    // &__products-wrapper-desktop {
    //   display: none;
    //   width: 1240px;
    //   padding-top: 100px;

    //   @include onDesktop {
    //     display: flex;
    //   }
    // }

    &__title {
      display: block;
      margin: 0 auto;
      width: max-content;
      color: $white-color;
      font-family: 'Poppins', sans-serif;
      font-size: 32px;
      font-weight: 600;
      line-height: 41px;
      margin-bottom: 40px;

      @include onDesktop {
        font-size: 56px;
        line-height: 68px;
        margin-bottom: 80px;
      }
    }

    &__products-wrapper {
      display: none;
      margin: 0 auto 80px;
      width: 1240px;
      flex-wrap: wrap;
      row-gap: 30px;
      column-gap: 20px;

      @include onDesktop {
        display: flex;
      }
    }

    &__button {
      display: block;
      margin: 0 auto;
    }
  }
</style>

<template>
  <div class="six">
    <h2 class="six__title">Przykładowe ceny</h2>
    <div class="six__products-wrapper">
      <ProductCardSix
        v-for="product, index in products"
        :key="index"
        :product="product"
      />
    </div>
    <OfferButton class="six__button"/>

  </div>
</template>


<script setup>
  import OfferButton from '../partials/OfferButton.vue';
  import ProductCardSix from './ProductCardSix.vue';

  const products = [
    {
      title: 'Rura 5 metrów Ø 25 mm',
      description: '126 zł netto',
      product: 'odpowiednik miedziany: ',
      price: '369 zł netto',
      image: 'cord.png',
    },
    {
      title: 'Rura 5 metrów Ø 25 mm',
      description: '126 zł netto',
      product: 'odpowiednik miedziany: ',
      price: '369 zł netto',
      image: 'cord.png',
    },
    {
      title: 'Rura 5 metrów Ø 25 mm',
      description: '126 zł netto',
      product: 'odpowiednik miedziany: ',
      price: '369 zł netto',
      image: 'cord.png',
    },
    {
      title: 'Rura 5 metrów Ø 25 mm',
      description: '126 zł netto',
      product: 'odpowiednik miedziany: ',
      price: '369 zł netto',
      image: 'cord.png',
    },
    {
      title: 'Rura 5 metrów Ø 25 mm',
      description: '126 zł netto',
      product: 'odpowiednik miedziany: ',
      price: '369 zł netto',
      image: 'cord.png',
    },
    {
      title: 'Rura 5 metrów Ø 25 mm',
      description: '126 zł netto',
      product: 'odpowiednik miedziany: ',
      price: '369 zł netto',
      image: 'cord.png',
    },
  ];
</script>
