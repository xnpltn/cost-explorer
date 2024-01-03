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
    <section class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto " v-if="apiData.costs.length">
        <div class="  rounded text-center py-4 px-10 text-white w-full">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <caption class="p-5 text-lg font-semibold rtl:text-right text-gray-900  dark:text-white bg-gray-800 text-center">
                        Expected Expenses
                        <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Here are predicted Expenses According to given data in {{ formData.city.toUpperCase()}} </p>
                    </caption>
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Details
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Predicted Amount | {{ formData.currency }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Meal (for {{ formData.people }} People)
                            </th>
                            <td class="px-6 py-4">
                                 {{ (formData.people * apiData.costs[1].cost/2).toFixed(2) }}
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Transport| 1km (Cab / Taxi)
                            </th>
                            <td class="px-6 py-4">
                                 {{  apiData.costs[30].cost }}
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Gas | liter
                            </th>
                            <td class="px-6 py-4">
                                 {{  apiData.costs[32].cost }}
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Talephone (person / Month )
                            </th>
                            <td class="px-6 py-4">
                                 {{  apiData.costs[36].cost }}
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            WIFI ( 60 Mbps , Monthly )
                            </th>
                            <td class="px-6 py-4">
                                 {{  apiData.costs[37].cost }}
                            </td>
                        </tr>

                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apartment | Rent (3 Bed Rooms)
                            </th>
                            <td class="px-6 py-4">
                                 {{  apiData.costs[49].cost }}
                            </td>
                        </tr>

                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apartment | rent (1 Bed Room)
                            </th>
                            <td class="px-6 py-4">
                                 {{  apiData.costs[47].cost }}
                            </td>
                        </tr>

                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apartment | Buying / Per Square metre
                            </th>
                            <td class="px-6 py-4">
                                 {{  apiData.costs[51].cost }} 
                            </td>
                        </tr>    
                    </tbody>
                </table>
                
            </div>
              
            <div class=" w-full flex justify-center mt-5">
                <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <ul>
                        <li>
                            <p>Predicted Monthly Expenses({{ formData.currency }}):  {{ (apiData.getMonthlyTotal + (formData.people * apiData.costs[1].cost/2)).toFixed(2) }}</p>
                        </li>
                        <li>
                            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Above imformation may change at before {{ formData.date }}, make sure you check again. </p>
                        </li>
                        <li>
                            <div class="mb-3 font-normal text-red-500 " v-if="! compareRent(formData.budget, Number(apiData.costs[49].cost) )">
                                <div class="flex items-center justify-center">
                                    <img src="/alert.svg" class=" w-6"/>
                                    <p>Your Rent is lower than expected!</p>
                                </div>
                            </div> 
                        </li>
                        <li v-if="formData.children > 0">
                            <div class="mb-3 font-normal text-red-500 " v-if="! compareRent(formData.budget, Number(apiData.costs[49].cost) )">
                                <div class="flex items-center justify-center">
                                    <img src="/alert.svg" class=" w-6"/>
                                    <p>The total expenses may vary because of {{ formData.children }} children</p>
                                </div>
                            </div> 
                        </li>
                    </ul>
                    
                </div>
            </div>

        </div>
    </section>

</template>