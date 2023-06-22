<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';
  .nine {
    background-color: $dark-navy-blue-color;
    padding: 20px;

    @include onDesktop {
      padding: 55px 40px;
    }

    &__wrapper {
      width: 335px;
      height: 1227px;
      margin: 0 auto;

      @include onDesktop {
        display: flex;
        width: 1360px;
        height: 732px;
      }
    }

    &__form-wrapper {
      background-color: $dark-blue-color;
      width: 335px;
      height: 740px;
      padding: 60px 17px 38px;

      @include onDesktop {
        width: 680px;
        height: 732px;
        padding: 45px 0 44px 50px;
      }
    }

    &__input {
      width: 301px;
      height: 48px;
      background-color: $white-color;
      padding-left: 20px;

      &--large {
        height: 164px;

        @include onDesktop {
          height: 121px;
          width: 580px;
        }
      }
    }

    &__form {
      .nine__input-lable:last-of-type {
        margin-bottom: 29px;

        @include onDesktop {
          margin-bottom: 40px;
        }
      }
    }

    &__input-lable {
      display: block;
      margin-bottom: 20px;
    }

    &__input-title {
      color: $white-color;
      font-size: 16px;
      font-family: 'Poppins', sans-serif;
      line-height: 25px;
      margin-bottom: 5px;
      display: block;
    }

    &__button {
      display: block;
    }

    &__title {
      color: $white-color;
      font-size: 32px;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      line-height: 41px;

      margin-bottom: 31px;

      @include onDesktop {
        margin-bottom: 40px;
        color: var(--color-palette-white, #FFF);
        font-size: 56px;
        line-height: 68px;
      }
    }
  }
</style>

<template>
  <div class="nine">
    <div class="nine__wrapper">
      <div class="nine__form-wrapper">
        <div class="nine__title">Masz pytania?</div>
        <form @submit.prevent="onSubmit" class="nine__form">
          <label class="nine__input-lable">
            <span class="nine__input-title">Imię</span>
            <input class="nine__input" type="text" placeholder="Imię"/>
          </label>

          <label class="nine__input-lable">
            <span class="nine__input-title">Telefon</span>
            <input class="nine__input" type="text" placeholder="Telefon"/>
          </label>

          <label class="nine__input-lable">
            <span class="nine__input-title">E-mail</span>
            <input class="nine__input" type="text" placeholder="E-mail"/>
          </label>

          <label class="nine__input-lable">
            <span class="nine__input-title">Treść pytania</span>
            <input class="nine__input nine__input--large" type="text" placeholder="Treść pytania"/>
          </label>

          <OfferButton type="submit" class="nine__button"/>
        </form>
      </div>
      <picture class="header__picture">
        <source media="(min-width: 1440px)" :srcset="imgUrlDesk">
        <img class="header__image" :src="imgUrlMob" alt="banner">
      </picture>
    </div>
  </div>
</template>


<script setup>
  const onSubmit = () => {
    console.log('submit');
  };
  const imgUrlMob = new URL('@/assets/images/mobile/employee.jpg', import.meta.url);
  const imgUrlDesk = new URL('@/assets/images/desktop/employee.jpg', import.meta.url);
  import OfferButton from '../partials/OfferButton.vue';
</script>
