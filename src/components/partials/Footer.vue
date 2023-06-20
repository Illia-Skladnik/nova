<!-- eslint-disable vue/multi-word-component-names -->
<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';
  .footer {
    background-color: $dark-blue-color;
    padding-top: 30px;

    @include onDesktop {
      padding-top: 50px;
    }

    &__separator {
      background-color: $vivid-orange-color;
      width: 100%;
      height: 1px;

      margin-bottom: 40px;

      @include onDesktop {
        margin-bottom: 70px;
      }
    }

    &__logo {
      display: block;
      margin: 0 auto 42px;

      @include onDesktop {
        margin-bottom: 63px;
      }
    }

    &__social {
      margin: 0 auto 52px;

      @include onDesktop {
        margin-bottom: 63px;
      }
    }

    &__copyright {
      display: block;
      margin: 0 auto;
      width: max-content;
      color: $white-color;
      margin-bottom: 25px;

      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      font-weight: 300;
      line-height: 24px;

      @include onDesktop {
        font-weight: 400;
      }
    }
  }
</style>

<template>
  <footer class="footer">
    <div class="footer__separator"></div>
    <Logo class="footer__logo"/>
    <Socials class="footer__social"/>
    <span class="footer__copyright">{{ copyright }}</span>
  </footer>
</template>

<script setup>
  import Logo from './Logo.vue';
  import Socials from './Socials.vue';
  import { computed } from 'vue';

  const copyright  = computed(()=>{
    const date = (new Date()).getFullYear();
    return `© ${date} novaenergy. All rights reserved`
  })
</script>
