<script setup lang="ts">

import NavbarButton from './NavbarButton.vue';
import NavbbarLogo from './NavbarLogo.vue'

</script>
<template>
    <nav class="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b  border-gray-600 text-base px-8">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NavbbarLogo/>
            <NavbarButton name="Sign Up"/> 
        </div>
    </nav>
</template>


<style scoped>


</style>


