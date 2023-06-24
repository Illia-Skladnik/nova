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
 .carousel-divider {
   border-bottom: 2px solid;
   width: 33px;
   border-color: rgba(255, 255, 255, 0.1);
 }
 .carousel-title {
   min-width: 205px;
 }

 .carousel-title-prev {
   background: linear-gradient(89.92deg, #FFFFFF 49.98%, rgba(255, 255, 255, 0) 98.06%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   background-clip: text;
   text-fill-color: transparent;
 }
  .carousel-title-next {
    background: linear-gradient(270.26deg, #FFFFFF 40.5%, rgba(255, 255, 255, 0) 99.77%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
 .border-color-selected {
   border-color: #FAA51A;
 }
 .carousel-prev {
   position: absolute;
   top: 0;
   left: 0;
 }
 .carousel-next {
   position: absolute;
   top: 0;
   right: 0;
 }
 .max-width {
   max-width: 375px;
   margin: 0  auto;
 }
</style>

<template>
  <div class="text-center">
    <v-window v-model="benefitSlider" touch continuous class="max-width">
      <v-window-item class="text-center" v-for="(slide, key) in slides" :key="key">
        <div class="text-h5 carousel-title-prev font-weight-bold carousel-prev">{{prevSlideTitle(key)}}</div>
        <div class="text-h5 text-success font-weight-bold carousel-title mx-5">{{ slide.title }}</div>
        <div class="text-h5 carousel-title-next font-weight-bold carousel-next">{{ nextSlideTitle(key) }}</div>
      </v-window-item>
    </v-window>

    <div class="px-16 py-8 d-flex justify-center">
      <div v-for="(slide,index) in slides"
        :key="index"
        :aria-details="slide.title"
        :class="index === benefitSlider ? 'border-color-selected':''"
        class="carousel-divider mx-1">
      </div>
    </div>
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

      <v-carousel class="carousel-wrapper__carousel" :show-arrows="false" hide-delimiters v-model="benefitSlider" cycle >
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
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            </div>
          </div>
        </v-carousel-item>

        <v-carousel-item>
          <div class="carousel-wrapper__item-1">
            <div class="carousel-wrapper__row">
              <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            </div>
            <div class="carousel-wrapper__separator"></div>
            <div class="carousel-wrapper__row">
              <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--blue"></div>
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
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            </div>
            <div class="carousel-wrapper__separator"></div>
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
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            </div>
          </div>
        </v-carousel-item>

        <v-carousel-item>
          <div class="carousel-wrapper__item-1">
            <div class="carousel-wrapper__row">
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
            </div>
            <div class="carousel-wrapper__separator"></div>
            <div class="carousel-wrapper__row">
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
            </div>
            <div class="carousel-wrapper__separator"></div>
            <div class="carousel-wrapper__row">
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
            </div>
            <div class="carousel-wrapper__separator"></div>
            <div class="carousel-wrapper__row">
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
            </div>
            <div class="carousel-wrapper__separator"></div>
            <div class="carousel-wrapper__row">
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            </div>
            <div class="carousel-wrapper__separator"></div>
            <div class="carousel-wrapper__row">
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
            </div>
            <div class="carousel-wrapper__separator"></div>
            <div class="carousel-wrapper__row">
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
            </div>
            <div class="carousel-wrapper__separator"></div>
            <div class="carousel-wrapper__row">
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            </div>
            <div class="carousel-wrapper__separator"></div>
            <div class="carousel-wrapper__row">
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            </div>
            <div class="carousel-wrapper__separator"></div>
            <div class="carousel-wrapper__row">
              <div class="carousel-wrapper__value carousel-wrapper__value--orange"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
              <div class="carousel-wrapper__value carousel-wrapper__value--inactive"></div>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        benefitSlider:0,
        slides: [
          {
            title:'Miedź prasowana',
          },
          {
            title:'Polipropylen zgrzewany',
          },
          {
            title:'Pex',
          },
          {
            title:'Polibutylen',
          },
        ],
      }
    },
    methods: {
      prevSlideTitle(key) {
        let prev = key - 1;
        if (prev < 0) {
          prev = this.slides.length - 1;
        }
        return this.slides[prev].title.slice(-3)
      },
      nextSlideTitle(key) {
        let next = key + 1;
        if (next > this.slides.length - 1) {
          next = 0;
        }
        return this.slides[next].title.slice(0,3)
      }
    }
  }
</script>

