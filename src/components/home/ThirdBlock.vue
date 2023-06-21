<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';

  .third {
    background-color: $dark-navy-blue-color;
    height: 1099px;

    @include onDesktop {
      height: 732px;
    }
  }
</style>

<template>
  <div class="third">
    Third Block
  </div>
</template>


<script setup>

</script>
