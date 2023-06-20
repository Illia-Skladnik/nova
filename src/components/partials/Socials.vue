<!-- eslint-disable vue/multi-word-component-names -->
<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  .socials {
    width: min-content;
    display: flex;
    justify-content: space-between;
    width: 154px;

    @include onDesktop {
      width: 160px;
    }

    &__social {
      background-position: center;
      height: 25px;
      width: 25px;
    }

    &__instagram {
      background-image: url('@/assets/svg/instagram.svg');

      &:hover {
        background-image: url('@/assets/svg/instagramActive.svg');
      }
    }

    &__facebook {
      background-image: url('@/assets/svg/facebook.svg');

      &:hover {
        background-image: url('@/assets/svg/facebookActive.svg');
      }
    }

    &__whatsapp {
      background-image: url('@/assets/svg/whatsapp.svg');

      &:hover {
        background-image: url('@/assets/svg/whatsappActive.svg');
      }
    }
  }
</style>

<template>
  <div class="socials">
    <div class="socials__social socials__instagram"></div>
    <div class="socials__social socials__facebook"></div>
    <div class="socials__social socials__whatsapp"></div>
  </div>
</template>

<script setup>
</script>
