<script setup lang="ts">
import {ref} from 'vue'
import FormInput from './FormInput.vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';

import {useFormData} from '../../stores/formData'
const formData = useFormData()
const checked = ref(true)
</script>

<template> 
    <section class=" font-bold pb-20">
        <div class="max-w-2xl px-4 py-8 mx-auto lg:py-16">
            <h2 class="mb-4 text-xl font-bold text-gray-900 text-center">Fill out the form...</h2>
            <form action="#">
                <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                    <div class="sm:col-span-2">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                        <input v-model="formData.name" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  placeholder="Tell us your name name" required>
                    </div>
                    <div class="w-full">
                        <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 ">Number of people</label>
                        <input v-model="formData.people" type="number" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="Apple" placeholder="Number of people" required>
                    </div>
                    <div class=" w-full">
                        <label class="relative inline-flex items-center mb-5 cursor-pointer">
                            <input type="checkbox" v-model="checked" class="sr-only peer" checked>
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ms-3 text-sm font-medium text-black ">Include Children (under 12 y/o)</span>
                        </label>
                    </div>
                    <div class="w-full" v-if="checked">
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 ">Number of Children</label>
                        <input v-model="formData.children" type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  placeholder="Number of children" required>
                    </div>
                    <div>
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
                        <select v-model="formData.currency" id="countries" class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="USD">US Dollars</option>
                            <option value="CAD">Canadian Dollas</option>
                            <option value="EUR">Euros</option>
                            <option value="BRL">Brazilian Real</option>
                        </select>
                    </div>
                    <div>
                        <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 ">Maximum Rental budget | {{ formData.currency }}</label>
                        <input v-model="formData.budget" type="number" name="item-weight" id="item-weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  placeholder="Maaximum budget" required>
                    </div> 
                    <div>
                        <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 ">City or province</label>
                        <input v-model="formData.city" type="text" name="item-weight" id="item-weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  placeholder="City" required>
                    </div> 
                    <div>
                        <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 ">Pick Visiting Date</label>
                        <input v-model="formData.date" type="date" name="item-weight" id="item-weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  placeholder="City" required>
                    </div>
                    
                </div>
                <div class="flex items-center space-x-4">
                    <button type="submit"><RouterLink to="/details" class="text-black  bg-blue-100 hover:bg-blue-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</RouterLink></button>
                </div>
            </form>
        </div>
    </section>

</template>
