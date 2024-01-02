<script setup lang="ts">

import NavbarButton from './NavbarButton.vue';
import NavbbarLogo from './NavbarLogo.vue'

</script>
<template>
    <nav class=" fixed w-full z-20 top-0 start-0 text-base px-8 bg-gradient-to-r from-blue-50 to-green-50">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NavbbarLogo/>
            <NavbarButton name="subscribe now"/> 
        </div>
    </nav>
</template>


<style scoped>


</style>


