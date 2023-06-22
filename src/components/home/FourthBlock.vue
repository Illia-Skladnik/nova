<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';

  .fourthBlock {
    background-color: $dark-blue-color;
    padding: 60px 20px 30px;

    @include onDesktop {
      padding: 80px 0 100px;
    }

    &__blocks-wrapper {
      width: 335px;
      margin: 0 auto 40px;

      @include onDesktop {
        width: 1240px;
        display: flex;
        margin-bottom: 80px;
      }
    }

    &__block {
      width: 335px;
      height: 375px;
      background-color: $vivid-orange-color;
      margin-bottom: 20px;
      padding-top: 29px;

      @include onDesktop {
        padding-top: 50px;
        width: 400px;
        height: 392px;
        margin-right: 20px;
      }
    }

    .fourthBlock__block:last-of-type {
      margin-bottom: 0;

      @include onDesktop {
        margin-right: 0;
      }
    }

    &__title {
      color: $white-color;
      text-align: center;
      font-size: 32px;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      line-height: 41px;
      width: 300px;
      margin: 0 auto 40px;

      @include onDesktop {
        font-size: 56px;
        line-height: 68px;
        width: 1240px;
      }
    }

    &__description {
      display: block;
      color: $white-color;
      text-align: center;
      font-size: 16px;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      line-height: 25px;
      width: 335px;
      margin: 0 auto 40px;



      @include onDesktop {
        margin-bottom: 80px;
        width: 1240px;
      }
    }

    &__number {
      display: block;
      color: $dark-blue-color;

      font-size: 96px;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      line-height: 100px;
      margin: 0 0 20px 34px;

      @include onDesktop {
        font-size: 128px;
        margin: 0 0 30px 17px;
      }
    }

    &__block-title {
      display: block;
      color: $white-color;
      font-family: 'Poppins', sans-serif;
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;

      margin: 0 0 20px 34px;

      @include onDesktop {
        margin: 0 0 17px 17px;
      }
    }

    &__block-description {
      display: block;
      color: $white-color;
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
      margin-left: 34px;
      width: 267px;

      @include onDesktop {
        margin-left: 23px;
        width: 366px;
      }
    }

    &__offer-button {
      display: block;
      margin: 0 auto;
    }
  }
</style>

<template>
  <div class="fourthBlock">
    <div class="text-description">
      <h2 class="fourthBlock__title">Certyfikacja i kontrola jakości</h2>
      <span class="fourthBlock__description">System Terrain SDT posiada wszelkie niezbędne certyfikaty. Jest sprawdzany i testowany na każdym etapie produkcji. Rury i kształtki z polibutylenu produkowane są zgodnie ze standardem UNE EN ISO 15876. Proces produkcji jest monitorowany przez Hiszpańskie Stowarzyszenie Normalizacji i Certyfikacji AENOR oraz wewnętrzny dział kontroli jakości. Jakość kontrolowana jest na trzech etapach:</span>
    </div>

    <div class="fourthBlock__blocks-wrapper">
      <div class="fourthBlock__block">
        <span class="fourthBlock__number">1</span>
        <span class="fourthBlock__block-title">przyjęcie surowca</span>
        <span class="fourthBlock__block-description">Sprawdzenie certyfikatu producenta, oznakowanie partii, kilka testów na szybkość płynięcia (topienia).</span>
      </div>
      <div class="fourthBlock__block">
        <span class="fourthBlock__number">2</span>
        <span class="fourthBlock__block-title">proces produkcji</span>
        <span class="fourthBlock__block-description">Kontrola laserowan minimalnych, maksymalnych i średnich wymiarów rur: długości, średnicy zewnętrznej i wewnętrznej</span>
      </div>
      <div class="fourthBlock__block">
        <span class="fourthBlock__number">3</span>
        <span class="fourthBlock__block-title">wyroby gotowe</span>
        <span class="fourthBlock__block-description">Testy zachowania rur pod wpływem temperatury, wytrzymałości na rozciąganie przy łamaniu, wewnętrznemu ciśnieniu przy 20°C przez godzinę oraz wewnętrznemu ciśnieniu przy 95°C przez 22 godziny.</span>
      </div>
    </div>

    <OfferButton class="fourthBlock__offer-button"/>
  </div>
</template>


<script setup>
  import OfferButton from '../partials/OfferButton.vue';
</script>
