<style  scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';
  .second {
    background-color: $dark-blue-color;
    padding-top: 60px;
    padding-bottom: 60px;

    @include onDesktop {
      padding-bottom: 100px;
      padding-top: 100px;
    }

    &__title {
      font-family: 'Poppins', sans-serif;
      font-size: 32px;
      font-weight: 600;
      line-height: 41px;
      color: $white-color;
      margin: 0 auto 40px;
      display: block;
      width: fit-content;
      text-align: center;

      @include onDesktop {
        font-size: 56px;
        line-height: 68px;
        margin-bottom: 82px;
      }
    }

    &__carousel {
      @include onDesktop {
        display: none;
      }
    }

    &__benefits-table {
      display: none;

      @include onDesktop {
        display: flex;
        margin: 0 auto;
      }
    }

    &__benefits-title {
      display: none;

      @include onDesktop {
        display: block;
        margin-bottom: 5px;
      }
    }

    &__center-wrapper {
      margin: 0 auto;
      width: 1240px;
      display: flex;
      justify-content: end;
    }

    &__titles-wrapper {
      width: 925px;
      display: flex;
      justify-content: space-between;
    }

    &__column-title {
      width: 231px;
      height: 72px;
      font-family: 'Poppins', sans-serif;
      font-size: 24px;
      font-weight: 600;
      text-align: center;
      color: $white-color;
      line-height: 72px;

      &--orange {
        color: $vivid-orange-color;
      }

      &--low {
        line-height: 36px;
      }
    }
  }

  .v-btn--density-default {
    height: 50px;
    width: 50px;
  }
</style>

<template>
  <div class="second">
    <h2 class="second__title">Przewaga polibutylenu nad innymi materiałami</h2>
    <SecondBlockCarousel class="second__carousel"/>
    <div class="second__benefits-title">
      <div class="second__center-wrapper">
        <div class="second__center-wrapper">
          <div class="second__titles-wrapper">
            <div class="second__column-title">Miedź prasowana</div>
            <div class="second__column-title second__column-title--low">Polipropylen zgrzewany</div>
            <div class="second__column-title">Pex</div>
            <div class="second__column-title second__column-title--orange">Polibutylen</div>
          </div>
        </div>
      </div>
    </div>
    <BenefitsTable class="second__benefits-table"/>
  </div>
</template>

<script setup>
  import SecondBlockCarousel from '@/components/home/SecondBlockCarousel.vue';
  import BenefitsTable from '@/components/home/BenefitsTable.vue';
</script>
