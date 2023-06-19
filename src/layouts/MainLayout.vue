<template>
  <v-app>
    <Header/>
    <router-view />
    <Footer/>
  </v-app>
</template>

<script setup>
  import Header from '../components/partials/Header.vue'
  import Footer from '../components/partials/Footer.vue'
</script>
