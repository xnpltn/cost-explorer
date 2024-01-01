<script setup lang="ts">
import { appendFile } from 'fs';
import {useApiStore} from '../stores/apiData'
import Results from '../components/Results.vue'

import {useFormData} from '../stores/formData'
const formData = useFormData()

const apiData =  useApiStore()
apiData.fill(formData.city, formData.currency)

console.log(apiData.costs)


</script>

<template>
    <!-- <pre class="pt-10">{{  apiData.costs }}</pre> -->
    <section class=" grid place-items-center py-10">
        <div class=" bg-gray-900 rounded text-center py-10 px-10 text-white w-full">
            

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800 text-center">
            Expected Expenses
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Here are expected Expenses According to give data  {{ apiData.costs[1].cost}} </p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Details
                </th>
                <th scope="col" class="px-6 py-3">
                    Expected Amount | {{ formData.currency }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Meal (for {{ formData.people }} People)
                </th>
                <td class="px-6 py-4">
                    $ {{ (formData.people * apiData.costs[1].cost/2).toFixed(2) }}
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Transport (Cab / Taxi)
                </th>
                <td class="px-6 py-4">
                    $ {{  apiData.costs[30].cost }}
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Gas
                </th>
                <td class="px-6 py-4">
                    $ {{  apiData.costs[32].cost }}
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Talephone (person / Month )
                </th>
                <td class="px-6 py-4">
                    $ {{  apiData.costs[36].cost }}
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   WIFI ( 60 Mbps , Monthly )
                </th>
                <td class="px-6 py-4">
                    $ {{  apiData.costs[37].cost }}
                </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Apartment | Rent (3 Bed Rooms)
                </th>
                <td class="px-6 py-4">
                    $ {{  apiData.costs[49].cost }}
                </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Apartment | rent (1 Bed Room)
                </th>
                <td class="px-6 py-4">
                    $ {{  apiData.costs[47].cost }}
                </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Apartment | Buying / Per Square metre
                </th>
                <td class="px-6 py-4">
                    $ {{  apiData.costs[51].cost }} 
                </td>
            </tr>
            
            
            
        </tbody>
    </table>
</div>

            
        </div>
    </section>
    <h2 class=" text-black text-3xl">More Details</h2>
    <div class="">
        <section class="bg-white dark:bg-gray-900 border-t border-gray-700 w-full" v-for="category in apiData.costs">

            <div class="py-8 px-4 mx-auto max-w-screen-xl  grid  gap-8 " >
                <div class="">
                    <h1 class="mb-4 text-lg font-extrabold tracking-tight leading-none   lg:text-lg text-white">{{ category.item}}</h1>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                        <section>
                            

                            <div class="relative overflow-x-auto">
                                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                Details
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Amount ({{ formData.currency }})
                                            </th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Cost
                                            </th>
                                            <td class="px-6 py-4">
                                                {{ category.cost }}
                                            </td>
                                        </tr>

                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Low Range
                                            </th>
                                            <td class="px-6 py-4">
                                                {{ category.range.low }}
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                High Range
                                            </th>
                                            <td class="px-6 py-4">
                                                {{ category.range.low }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            
                        </section>

                    </div>
                </div>
                
            </div>
            
        </section>
    </div>
</template>


<!-- 


<p class="">
    for {{ users.people }}, if one meal is {{ apiData.costs[1]['cost'] }} then for {{ users.people }}, meal is {{ apiData.costs[1]['cost'] *  users.people}}
</p>

 -->