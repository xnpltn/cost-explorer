<script setup>
import Form from '../components/Form/Form.vue';
import { useRouter, useRoute } from 'vue-router';

</script>
<template>
  <button class=" bg-red-800">test router</button>
  <div class="home-view pt-20">
    <section class="bg-[url('/background.jpg')]  ">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
            
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">Welcome to Cost Explorer</h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Cost Explorer minimizes your research time about places</p>
            <p class="mb-4 text-sm font-normal text-gray-500 lg:text-sm sm:px-16 lg:px-48 dark:text-gray-200">Subscribe for weekely updates</p>
            <form class="w-full max-w-md mx-auto">   
                <label for="default-email" class="mb-2 text-sm font-medium text-white sr-only">Email sign-up</label>
                <div class="relative">
                    <div class="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                    </div>
                    <input type="email" id="default-email" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email here..." required>
                    <button type="submit" class="text-black absolute end-2.5 bottom-2.5 bg-blue-100 hover:bg-blue-500  font-medium rounded-lg text-sm px-4 py-2 ">Subscribe</button>
                </div>
            </form>
        </div>
    </section>
    <section>
      <Form/>
    </section>
  </div>
</template>


