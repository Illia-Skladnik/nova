<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';
  .carousel-wrapper {
    display: flex;
    width: 335px;
    margin: 0 auto;

    &__titles-wrapper {
      width: 190px;
      height: 100px;
      margin-right: 20px;
    }

    &__carousel {
      width: 125px;
      height: 610px!important;
      border-radius: 4px;
    }

    &__title {
      color: $white-color;
      width: 190px;
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
      margin-right: 20px;
      margin: 19px 0;

      &--first {
        margin-top: 9px;
      }
    }

    &__item-1 {
      width: 100%;
      background-color: $white-color;
      border-radius: 4px;
      padding: 9px;
    }

    &__item-2 {
      width: 100%;
      height: 100%;
      background-color: purple;
    }

    &__value {
      height: 24px;
      width: 11px;
      margin-right: 5px;


      &--blue {
        background-color: $dark-blue-color;
      }

      &--orange {
        background-color: $vivid-orange-color;
      }

      &--inactive {
        background-color: rgba(217, 217, 217, 0.4);
      }
    }

    &__row {
      display: flex;
      margin-bottom: 19px;

      .carousel-wrapper__value:last-of-type {
        margin-right: 0;
      }
    }

    &__separator {
      width: 100%;
      height: 1px;
      background-color: #efeff0;
      margin-bottom: 19px;
    }

    &__title-separator {
      background-color: rgba(255, 255, 255, 0.15);
      height: 1px;
      width: 100%;
    }
  }

  .v-carousel__controls__item.v-btn.v-btn--icon {
    background: #ebece9;
    height: 2px;
    width: 40px;
    border-radius: 0;
  }

  .v-carousel__controls__item.v-btn.v-btn--icon.v-btn--active {
    background: #1f1f1f;
  }

    .v-carousel__controls__item.v-btn.v-btn--icon.v-btn--active:hover {
    background: white;
  }

 .v-btn__content .v-icon {
    display: none;
  }
</style>

<template>
  <div class="carousel-wrapper">
    <div class="carousel-wrapper__titles-wrapper">
      <div class="carousel-wrapper__title carousel-wrapper__title--first">Szybkość montażu</div>
      <div class="carousel-wrapper__title-separator"></div>
      <div class="carousel-wrapper__title">Przepływ przez kształtki</div>
      <div class="carousel-wrapper__title-separator"></div>
      <div class="carousel-wrapper__title">Utrzymanie ciepła</div>
      <div class="carousel-wrapper__title-separator"></div>
      <div class="carousel-wrapper__title">Szybkość montażu</div>
      <div class="carousel-wrapper__title-separator"></div>
      <div class="carousel-wrapper__title">Rozszerzanie termiczne</div>
      <div class="carousel-wrapper__title-separator"></div>
      <div class="carousel-wrapper__title">Odporność chemiczna</div>
      <div class="carousel-wrapper__title-separator"></div>
      <div class="carousel-wrapper__title">Elastyczność</div>
      <div class="carousel-wrapper__title-separator"></div>
      <div class="carousel-wrapper__title">Ilość potrzebnych kształtek</div>
      <div class="carousel-wrapper__title-separator"></div>
      <div class="carousel-wrapper__title">Ilość potrzebnych narzędzi</div>
      <div class="carousel-wrapper__title-separator"></div>
      <div class="carousel-wrapper__title">Cena</div>
    </div>

    <v-carousel class="carousel-wrapper__carousel" :show-arrows="false" hide-delimiter-background>
      <v-carousel-item>
        <div class="carousel-wrapper__item-1">
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
          </div>
        </div>
      </v-carousel-item>

      <v-carousel-item>
        <div class="carousel-wrapper__item-1">
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__title-separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
          </div>
        </div>
      </v-carousel-item>

      <v-carousel-item>
        <div class="carousel-wrapper__item-1">
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
          </div>
        </div>
      </v-carousel-item>

      <v-carousel-item>
        <div class="carousel-wrapper__item-1">
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
          </div>
          <div class="carousel-wrapper__separator"></div>
          <div class="carousel-wrapper__row">
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
            <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>

</template>

<script setup>
  // const titles = [
  //   'Szybkość montażu',
  //   'Przepływ przez kształtki',
  //   'Utrzymanie ciepła',
  //   'Szybkość montażu',
  //   'Rozszerzanie termiczne',
  //   'Odporność chemiczna',
  //   'Elastyczność',
  //   'Ilość potrzebnych kształtek',
  //   'Ilość potrzebnych narzędzi',
  //   'Cena',
  // ];
</script>

