<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Test from './components/Testing/Test.vue';
import TheNavbar from './components/Navbar/Navbar.vue'
import  { onMounted } from 'vue';
import BottonNavbar from './components/Navbar/BottonNavbar.vue';

onMounted(()=>{
console.log("Mounted");
  
})
</script>

<template>
  <header>

    <div class="wrapper">
      <TheNavbar/>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />
  <BottonNavbar/>
</template>

