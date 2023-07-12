<template>
  <v-app>
    <Header/>
    <!-- <router-view /> -->
    <Home/>
    <Footer/>
  </v-app>
</template>

<script setup>
  import Header from '../components/partials/Header.vue'
  import Footer from '../components/partials/Footer.vue'
  import Home from '../views/Home.vue'
</script>
