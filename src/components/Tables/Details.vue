<script setup lang="ts">
import {useApiStore} from '../../stores/apiData'
import {useFormData} from '../../stores/formData'
const formData = useFormData()
const apiData =  useApiStore()
apiData.fill(formData.city, formData.currency)

const compareRent = (budgetRent: number, apiRent: number ): boolean =>{
    if(budgetRent >= apiRent){
        return true
    }
    return false
}



</script>


<template>
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 " v-if="apiData.costs.length">
        <section class="  border-b border-gray-700 w-full py-10 px-20" v-for="category in apiData.costs">
            <h1 class=" text-gray-900 text-lg text-center"> {{ category.item }}</h1>
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
</template>