<script setup lang="ts">
import {ref} from 'vue'
import FormInput from './FormInput.vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';

import {useFormData} from '/src/stores/formData'
const formData = useFormData()
const checked = ref(true)


</script>

<template>
 <form class="max-w-sm mx-auto">
    <div class="mb-5">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
        <input v-model="formData.name" type="text" id="name" class="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  " placeholder="Your Name" required>
    </div>
    <div class="mb-5">
        <label for="people" class="block mb-2 text-sm font-medium text-gray-900 ">Number of people</label>
        <input type="number" v-model="formData.people" id="people" class="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  " placeholder="Number of people" required>
    </div>
    <label class="relative inline-flex items-center mb-5 cursor-pointer">
        <input type="checkbox" v-model="checked" class="sr-only peer" checked>
        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span class="ms-3 text-sm font-medium text-black ">Include Children (under 12 y/o)</span>
    </label>
    <div class="mb-5" v-if="checked">
        <label for="children" class="block mb-2 text-sm font-medium text-gray-900 ">Number of children</label>
        <input v-model="formData.children" type="children" id="children" class="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  " placeholder="Number of children" required>
    </div>
    
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
    <select v-model="formData.currency" id="countries" class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="USD">US Dollars</option>
        <option value="CAD">CA Dollas</option>
        <option value="EUR">Euros</option>
    </select>

    <div class="mb-5">
        <label for="budget" class="block mb-2 text-sm font-medium text-gray-900 ">Maximum Rental budget (USD)</label>
        <input v-model="formData.budget" type="number" id="budget" class="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  " placeholder="Maximum Rental budget" required>
    </div>
    <div class="mb-5">
        <label for="region" class="block mb-2 text-sm font-medium text-gray-900 ">City/ province</label>
        <input v-model="formData.city" type="text" id="region" class="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  " placeholder="Region" required>
    </div>
    <RouterLink to="/details" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</RouterLink>
</form>
</template>
