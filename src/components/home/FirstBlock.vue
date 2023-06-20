<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';
  .first {
    background-color: $dark-navy-blue-color;
    padding: 60px 20px 0;
    height: max-content;

    @include onDesktop {
      padding-top: 120px;
    }

    &__title {
      display: block;
      padding-bottom: 80px;

      @include onDesktop {
        padding-bottom: 70px
      }

      &::after {
        content: 'Zalety instalacji z polibutylenu';
        font-family: 'Poppins', sans-serif;
        color: $white-color;
        font-size: 32px;
        font-weight: 600;
        line-height: 41px;
        margin: 0 auto;
        display: block;
        width: fit-content;
        text-align: center;

        @include onDesktop {
          content: 'Zalety instalacji hydraulicznej na wcisk';
          font-size: 56px;
          line-height: 68px;
        }
      }
    }

    &__cards-block {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      margin: 0 auto 40px;

      width: 335px;

      @include onDesktop {
        margin-bottom: 60;
      }

      @include on2columns {
        width: 820px;
      }

      @media (min-width: 1440px) {
        width: 1240px;
      }
    }

    &__card {
    }
  }
</style>

<template>
  <div class="first">
    <h2 class="first__title"></h2>
    <div class="first__cards-block">
      <FirstBlockCard
        class="first__card"
        v-for="product, index in products"
        :key="index"
        :product="product"
      />
    </div>


  </div>
</template>

<script setup>
  import FirstBlockCard from './FirstBlockCard.vue';
  const products = [
    {
      'title': '50%',
      'description': 'niższa cena od systemów miedzianych',
      'image': 'product1.jpg',
    },
    {
      'title': '10X',
      'description': 'szybszy montaż i oszczędność kosztów pracy',
      'image': 'product2.jpg',
    },
    {
      'title': '70%',
      'description': 'lepszy przepływ dzięki gładkiej powierzchni',
      'image': 'product3.jpg',
    },
    {
      'title': '10%',
      'description': 'mniejsze straty ciepła dzięki niskiej przewo',
      'image': 'product4.jpg',
    },
    {
      'title': '10 lat',
      'description': 'gwarancji producenta z ubezpieczeniem',
      'image': 'product5.jpg',
    },
    {
      'title': '10mln',
      'description': 'ubezpieczenia każdej instalacji',
      'image': 'product6.jpg',
    },
  ];
</script>
