<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';
  .eight {
    background-color: $dark-blue-color;
    padding: 60px 20px 60px;
    position: relative;
    overflow: hidden;

    @include onDesktop {
      padding: 120px 100px 80px;
    }

    &__title {
      display: block;
      width: max-content;
      margin: 0 auto 40px;
      color: $white-color;
      font-family: 'Poppins', sans-serif;

      font-size: 32px;
      font-weight: 600;
      line-height: 41px;

      @include onDesktop {
        color: $white-color;
        font-size: 56px;
        line-height: 68px;
        margin-bottom: 89px;
      }
    }

    &__question {
      display: block;
      color: $white-color;
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      font-weight: 600;
      line-height: 25px;

      @include onDesktop {
        font-size: 24px;
        line-height: 50px;
      }
    }

    &__answer {
      display: block;
      color: $white-color;
      font-family: 'Poppins', sans-serif;

      margin-top: 10px;

      @include onDesktop {
        margin-top: 20px;
      }

      &--disabled {
        display: none;
      }
    }

    &__separator {
      width: 100%;
      background-color: $white-color;
      height: 1px;
      margin: 20px 0;

      @include onDesktop {
        margin: 40px 0 50px;
      }

      &--last {
        margin-bottom: 40px;

        @include onDesktop {
          margin-bottom: 80px;
        }
      }
    }

    &__first-line {
      display: flex;
      justify-content: space-between;
    }

    &__arrow {
      height: 26px;
      width: 26px;

      @include onDesktop {
        height: 50px;
        width: 50px;
      }

      &--rotate {
        transform: rotate(180deg);
      }
    }

    &__button {
      display: block;
      margin: 0 auto;
      position: relative;
    }

    &__background {
      width: 430px;
      height: 538px;

      position: absolute;
      display: block;
      left: -100px;
      top: 600px;
      z-index: 0;

      @include onDesktop {
        width: 967px;
        height: 972px;
        left: 0;
        top: 900px;
      }
    }
  }
</style>

<template>
  <div>
    <div class="eight">
    <h2 class="eight__title">FAQ</h2>

    <div
      class="eight__faq-block"
    >
      <div class="eight__first-line">
        <span class="eight__question">Jakich narzędzi potrzebuję?</span>
        <img
          class="eight__arrow"
          :src="arrowDown"
          :class="questions.one ? '' : 'eight__arrow--rotate'"
          alt="arrow"
          @click="toggleQuestion('one')"
        >
      </div>

      <span
        class="eight__answer"
        :class="questions.one ? 'eight__answer--disabled' : ''"
      >
        Będą potrzebne Ci tylko niewielkie nożyce do cięcia rur oraz smar silikonowy. Przydatny jest również znacznik, który pomaga stwierdzić, czy rura została wciśnięta w kształtkę na wystarczającą głębokość.
      </span>
      <div class="eight__separator"></div>
    </div>

    <div
      class="eight__faq-block"
    >
      <div class="eight__first-line">
        <span class="eight__question">Jaka jest żywotność instalacji z polibutylenu?</span>
        <img
          class="eight__arrow"
          :src="arrowDown"
          :class="questions.two ? '' : 'eight__arrow--rotate'"
          alt="arrow"
          @click="toggleQuestion('two')"
        >
      </div>

      <span
        class="eight__answer"
        :class="questions.two ? 'eight__answer--disabled' : ''"
      >
        Będą potrzebne Ci tylko niewielkie nożyce do cięcia rur oraz smar silikonowy. Przydatny jest również znacznik, który pomaga stwierdzić, czy rura została wciśnięta w kształtkę na wystarczającą głębokość.
      </span>
      <div class="eight__separator"></div>
    </div>

    <div
      class="eight__faq-block"
    >
      <div class="eight__first-line">
        <span class="eight__question">Czy gwarancja producenta objęta jest jakimiś ograniczeniami?</span>
        <img
          class="eight__arrow"
          :src="arrowDown"
          :class="questions.three ? '' : 'eight__arrow--rotate'"
          alt="arrow"
          @click="toggleQuestion('three')"
        >
      </div>

      <span
        class="eight__answer"
        :class="questions.three ? 'eight__answer--disabled' : ''"
      >
        Będą potrzebne Ci tylko niewielkie nożyce do cięcia rur oraz smar silikonowy. Przydatny jest również znacznik, który pomaga stwierdzić, czy rura została wciśnięta w kształtkę na wystarczającą głębokość.
      </span>
      <div class="eight__separator"></div>
    </div>

    <div
      class="eight__faq-block"
    >
      <div class="eight__first-line">
        <span class="eight__question">Korzystam z programów komputerowych do projektowania instalacji. Czy znajdę w nich system Terrain SDP?</span>
        <img
          :class="questions.four ? '' : 'eight__arrow--rotate'"
          class="eight__arrow"
          :src="arrowDown"
          alt="arrow"
          @click="toggleQuestion('four')"
        >
      </div>

      <span
        class="eight__answer"
        :class="questions.four ? 'eight__answer--disabled' : ''"
      >
        Będą potrzebne Ci tylko niewielkie nożyce do cięcia rur oraz smar silikonowy. Przydatny jest również znacznik, który pomaga stwierdzić, czy rura została wciśnięta w kształtkę na wystarczającą głębokość.
      </span>
      <div class="eight__separator"></div>
    </div>

    <div
      class="eight__faq-block"
    >
      <div class="eight__first-line">
        <span class="eight__question">Czy system Terrain SDP można łączyć z innymi materiałami?</span>
        <img
          :class="questions.five ? '' : 'eight__arrow--rotate'"
          class="eight__arrow"
          :src="arrowDown"
          alt="arrow"
          @click="toggleQuestion('five')"
        >
      </div>

      <span
        class="eight__answer"
        :class="questions.five ? 'eight__answer--disabled' : ''"
      >
        Będą potrzebne Ci tylko niewielkie nożyce do cięcia rur oraz smar silikonowy. Przydatny jest również znacznik, który pomaga stwierdzić, czy rura została wciśnięta w kształtkę na wystarczającą głębokość.
      </span>
      <div class="eight__separator"></div>
    </div>

    <div
      class="eight__faq-block"
    >
      <div class="eight__first-line">
        <span class="eight__question">Czy montaż na wcisk możliwy jest dla rur o wszystkich średnicach?</span>
        <img
          :class="questions.six ? '' : 'eight__arrow--rotate'"
          class="eight__arrow"
          :src="arrowDown"
          alt="arrow"
          @click="toggleQuestion('six')"
        >
      </div>

      <span
        class="eight__answer"
        :class="questions.six ? 'eight__answer--disabled' : ''"
      >
        Będą potrzebne Ci tylko niewielkie nożyce do cięcia rur oraz smar silikonowy. Przydatny jest również znacznik, który pomaga stwierdzić, czy rura została wciśnięta w kształtkę na wystarczającą głębokość.
      </span>
      <div class="eight__separator"></div>
    </div>

    <div
      class="eight__faq-block"
    >
      <div class="eight__first-line">
        <span class="eight__question">Czy rejestracja jest potrzebna, by dokonywać zakupów w sklepie?</span>
        <img
          :class="questions.seven ? '' : 'eight__arrow--rotate'"
          class="eight__arrow"
          :src="arrowDown"
          alt="arrow"
          @click="toggleQuestion('seven')"
        >
      </div>

      <span
        class="eight__answer"
        :class="questions.seven ? 'eight__answer--disabled' : ''"
      >
        Będą potrzebne Ci tylko niewielkie nożyce do cięcia rur oraz smar silikonowy. Przydatny jest również znacznik, który pomaga stwierdzić, czy rura została wciśnięta w kształtkę na wystarczającą głębokość.
      </span>
      <div class="eight__separator"></div>
    </div>

    <div
      class="eight__faq-block"
    >
      <div class="eight__first-line">
        <span class="eight__question">Czy rejestracja jest potrzebna, by dokonywać zakupów w sklepie?</span>
        <img
          :class="questions.eight ? '' : 'eight__arrow--rotate'"
          class="eight__arrow"
          :src="arrowDown"
          alt="arrow"
          @click="toggleQuestion('eight')"
        >
      </div>

      <span
        class="eight__answer"
        :class="questions.eight ? 'eight__answer--disabled' : ''"
      >
        Będą potrzebne Ci tylko niewielkie nożyce do cięcia rur oraz smar silikonowy. Przydatny jest również znacznik, który pomaga stwierdzić, czy rura została wciśnięta w kształtkę na wystarczającą głębokość.
      </span>
      <div class="eight__separator"></div>
    </div>

    <div
      class="eight__faq-block"
    >
      <div class="eight__first-line">
        <span class="eight__question">Czy rejestracja jest potrzebna, by dokonywać zakupów w sklepie?</span>
        <img
          :class="questions.nine ? '' : 'eight__arrow--rotate'"
          class="eight__arrow"
          :src="arrowDown"
          alt="arrow"
          @click="toggleQuestion('nine')"
        >
      </div>

      <span
        class="eight__answer"
        :class="questions.nine ? 'eight__answer--disabled' : ''"
      >
        Będą potrzebne Ci tylko niewielkie nożyce do cięcia rur oraz smar silikonowy. Przydatny jest również znacznik, który pomaga stwierdzić, czy rura została wciśnięta w kształtkę na wystarczającą głębokość.
      </span>
      <div class="eight__separator eight__separator--last"></div>
    </div>

    <OfferButton class="eight__button"/>
    <img :src="background" alt="background" class="eight__background"/>
  </div>
  </div>

</template>


<script setup>
  import { ref } from 'vue';
  import arrowDown from '@/assets/svg/arrowDown.svg';
  import OfferButton from '../partials/OfferButton.vue';

  const background = new URL('/src/assets/images/pipes.png', import.meta.url);
  const questions = ref({
    one: true,
    two: true,
    three: true,
    four: true,
    five: true,
    six: true,
    seven: true,
    eight: true,
    nine: true,
  })

  const toggleQuestion = (num) => {
    for (const question in questions.value) {
      question === num
        ? questions.value[num] = !questions.value[num]
        : questions.value[question] = true;
    }
  }

</script>
