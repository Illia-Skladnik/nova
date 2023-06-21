<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';
  .table {
    height: 710px;
    width: 1240px;
    display: flex;

    &__table-items {
      position: relative;
      width: 925px;
      height: 710px;
      background-color: $white-color;
      border-radius: 4px;
      display: flex;
      .table__column:last-of-type {
        border-right: 0;
      }
    }

    &__titles {
      color: $white-color;
      width: 295px;
      font-family: 'Poppins', sans-serif;
      font-size: 20px;
      font-weight: 600;
      line-height: 71px;
      margin-right: 20px;
    }

    &__title {
      height: 71px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    }

    .table__title:last-of-type {
      border-bottom: none;
    }

    &__column {
      width: 232px;
      border-right: 1px solid rgba(217, 217, 217, 0.4);
    }

    &__row {
      height: 71px;
      border-bottom: 1px solid rgba(217, 217, 217, 0.4);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 229px;

      .table__item:last-of-type {
        margin-right: 0;
      }

      &--first {

      }

      &-left {

      }
    }

    .table__row:last-of-type {
      border-bottom: none;
    }

    &__item {
      margin-right: 8px;

      &--blue {
        height: 40px;
        width: 19px;
        background-color: $dark-blue-color;
      }

      &--orange {
        height: 40px;
        width: 19px;
        background-color: $vivid-orange-color;
      }

      &--inactive {
        height: 40px;
        width: 19px;
        background-color: rgba(217, 217, 217, 0.4);
      }
    }
    &__border {
      position: absolute;
      background-color: $white-color;
      border-radius: 4px;

      &--left {
        height: 100%;
        width: 20px;
      }

      &--right {
        height: 100%;
        width: 20px;
        right: 0;
      }

      &--top {
        background-color: $white-color;
        width: 100%;
        height: 20px;
        top: -5px;
      }

      &--bottom {
        background-color: $white-color;
        width: 100%;
        height: 20px;
        margin-bottom: -5px;
        bottom: 0;
      }
    }
  }
</style>

<template>
  <div class="table">
    <div class="table__titles">
      <div
        v-for="(title, index) in titles"
        :key="index"
        class="table__title"
      >
        {{ title }}
      </div>
    </div>
    <div class="table__table-items">
      <div class="table__border table__border--top"></div>
      <div class="table__border table__border--left"></div>
      <div class="table__border table__border--right"></div>
      <div class="table__border table__border--bottom"></div>
      <div class="table__column">
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
        </div>
          <!-- <div
            v-for="(item, index) in 10"
            :key="index"
            class="table__row"
          >
            <div
              v-for="(item, index) in col1"
              :key="index"
              class="table__item"
            >

            </div>
          </div> -->
        <!-- <div
          v-for="(item, index) in col1"
          :key="index"
          class="table__row"
        >
          <div class="table__item--blue" v-if="item <= index + 1"></div>
          <div class="table__item--inactive" v-else></div>
        </div> -->
      </div>
      <div class="table__column">
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
      </div>
      <div class="table__column">
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--blue"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
      </div>
      <div class="table__column">
        <div class="table__row">
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--orange"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
        <div class="table__row">
          <div class="table__item table__item--orange"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
          <div class="table__item table__item--inactive"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const titles = [
    'Szybkość montażu',
    'Przepływ przez kształtki',
    'Utrzymanie ciepła',
    'Szybkość montażu',
    'Rozszerzanie termiczne',
    'Odporność chemiczna',
    'Elastyczność',
    'Ilość potrzebnych kształtek',
    'Ilość potrzebnych narzędzi',
    'Cena',
  ];
</script>
