<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';

  .five {
    background-color: $dark-navy-blue-color;
    padding-bottom: 30px;

    @include onDesktop {
      padding-bottom: 70px;
    }

    &__title {
      display: block;
      margin: 0 auto;
      width: max-content;
      padding: 70px 0 40px;

      color: $white-color;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 32px;
      line-height: 41px;

      @include onDesktop {
        font-size: 56px;
        line-height: 68px;
        padding: 100px 0 80px;
      }
    }

    &__offer-button {
      display: block;
      margin: 0 auto;
    }

    &__carousel {
      margin-bottom: 40px;
      height: 675px!important;

      @include onDesktop {
        height: 715px!important;
      }
    }

    &__slider {
      padding-bottom: 40px;
      gap: 7px;

      @include onDesktop {
        gap: 9px;
      }
    }
  }

  .carousel-divider {
    border-bottom: 2px solid;
    width: 42px;
    border-color: rgba(255, 255, 255, 0.1);

    @include onDesktop {
      width: 57px;;
    }
  }

  .border-color-selected {
    border-color: #FAA51A;
  }
</style>

<template>
  <div class="five">
    <h2 class="five__title">Zalety polibutylenu</h2>

    <v-carousel
      :show-arrows="false"
      hide-delimiters
      v-model="slider"
      class="five__carousel"
      cycle
    >
      <v-carousel-item
        v-for="advantage, index in advantages"
        :key="index"
      >
        <AdvantageSliderItem
          :advantage="advantage"
          :index="index"
          @prev="prevSlider"
          @next="nextSlider"
        />
      </v-carousel-item>
    </v-carousel>

    <div class="d-flex justify-center five__slider">
      <div v-for="(slide,index) in advantages"
        :key="index"
        :aria-details="slide.title"
        :class="index === slider ? 'border-color-selected':''"
        class="carousel-divider">
      </div>
    </div>

    <OfferButtonVue class="five__offer-button"/>
  </div>
</template>


<script setup>
  import OfferButtonVue from '../partials/OfferButton.vue';
  import { ref } from 'vue';
  import AdvantageSliderItem from './AdvantageSliderItem.vue';

  const slider = ref(0);
  const prevSlider = () => {
    slider.value === 0
      ? slider.value = advantages.length - 1
      : slider.value -= 1;
  };
  const nextSlider = () => {
    slider.value === advantages.length - 1
      ? slider.value = 0
      : slider.value += 1;
  };

  const advantages = [
    {
      title: 'Odporny',
      description: 'Polibutylen jest wyjątkowo odporny na niskie temperatury. Nie pęka gdy zamarznie w nich woda, a instalację można montować nawet przy -15 st. C! Nie koroduje, nie reaguje z chemią i wytrzymuje uderzenia hydrauliczne aż do 36 barów przy 20 st C. Jest najbardziej trwałym tworzywem nawet po 50 latach użytkowania!',
      image: `advantage1.png`,
    },
    {
      title: 'Odporny',
      description: 'Polibutylen jest wyjątkowo odporny na niskie temperatury. Nie pęka gdy zamarznie w nich woda, a instalację można montować nawet przy -15 st. C! Nie koroduje, nie reaguje z chemią i wytrzymuje uderzenia hydrauliczne aż do 36 barów przy 20 st C. Jest najbardziej trwałym tworzywem nawet po 50 latach użytkowania!',
      image: `advantage1.png`,
    },
    {
      title: 'Odporny',
      description: 'Polibutylen jest wyjątkowo odporny na niskie temperatury. Nie pęka gdy zamarznie w nich woda, a instalację można montować nawet przy -15 st. C! Nie koroduje, nie reaguje z chemią i wytrzymuje uderzenia hydrauliczne aż do 36 barów przy 20 st C. Jest najbardziej trwałym tworzywem nawet po 50 latach użytkowania!',
      image: `advantage1.png`,
    },
    {
      title: 'Odporny',
      description: 'Polibutylen jest wyjątkowo odporny na niskie temperatury. Nie pęka gdy zamarznie w nich woda, a instalację można montować nawet przy -15 st. C! Nie koroduje, nie reaguje z chemią i wytrzymuje uderzenia hydrauliczne aż do 36 barów przy 20 st C. Jest najbardziej trwałym tworzywem nawet po 50 latach użytkowania!',
      image: `advantage1.png`,
    },
    {
      title: 'Odporny',
      description: 'Polibutylen jest wyjątkowo odporny na niskie temperatury. Nie pęka gdy zamarznie w nich woda, a instalację można montować nawet przy -15 st. C! Nie koroduje, nie reaguje z chemią i wytrzymuje uderzenia hydrauliczne aż do 36 barów przy 20 st C. Jest najbardziej trwałym tworzywem nawet po 50 latach użytkowania!',
      image: `advantage1.png`,
    },
    {
      title: 'Odporny',
      description: 'Polibutylen jest wyjątkowo odporny na niskie temperatury. Nie pęka gdy zamarznie w nich woda, a instalację można montować nawet przy -15 st. C! Nie koroduje, nie reaguje z chemią i wytrzymuje uderzenia hydrauliczne aż do 36 barów przy 20 st C. Jest najbardziej trwałym tworzywem nawet po 50 latach użytkowania!',
      image: `advantage1.png`,
    },
  ]
</script>
