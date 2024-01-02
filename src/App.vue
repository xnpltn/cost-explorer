<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Test from './components/Testing/Test.vue';
import TheNavbar from './components/Navbar/Navbar.vue'
import  { onMounted } from 'vue';
import BottonNavbar from './components/Navbar/BottonNavbar.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <header>
    <div class="wrapper">
      <TheNavbar/>
    </div>
  </header>
  <RouterView />
  <Footer/>
</template>

