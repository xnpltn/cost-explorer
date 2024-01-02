<script setup lang="ts">
import {useApiStore} from '../stores/apiData'
import { ref } from 'vue';
import {useFormData} from '../stores/formData'

const formData = useFormData()
const apiData =  useApiStore()
apiData.fill(formData.city, formData.currency)

let show = ref(true)
window.addEventListener('load', ()=>{
     const loader = document.getElementById("loading") as HTMLDivElement
     loader.style.display = 'none'
     loader.className = 'none'
     show.value = false
})


const compareRent = (budgetRent: number, apiRent: number ): boolean =>{
    if(budgetRent >= apiRent){
        return true
    }
    return false
}

let show404 = ref(false)




</script>

<template>

    <div class="bg-black text-white w-full h-full absolute text-center  place-content-center grid z-50" id="loading" v-if="!apiData.costs.length">
        <div class="flex items-center justify-center flex-col">
            <img src="/logo.png" class="w-64"/>
            <div class="border-t-4 border-blue-500 border-solid h-8 w-8 rounded-full animate-spin"></div>
        </div>
        <p class=" text-white text-2xl">Almost there ...</p>
    </div>
    <div class=" bg-red-600 grid place-content-center text-white" v-if="!apiData.costs.length">
        404
    </div>
    <section class="bg-[url('/background.jpg')] pt-20"  v-if="apiData.costs.length" >
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
            <h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-2xl">Hi {{ formData.name }} ,</h1>
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Get living Details with Cost Explorer,</h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Cost Explorer somplifies your research about places.</p>
            <p class="mb-4 text-sm font-normal text-gray-500 lg:text-sm sm:px-16 lg:px-48 dark:text-gray-200">Subscribe for weekely updates</p>
            <form class="w-full max-w-md mx-auto">   
                <label for="default-email" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email sign-up</label>
                <div class="relative">
                    <div class="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                    </div>
                    <input type="email" id="default-email" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add email here" required>
                    <button type="submit" class=" absolute end-2.5 bottom-2.5 bg-blue-50 hover:bg-blue-800 hover:text-white   font-medium rounded-lg text-sm px-4 py-2 text-gray-900 ">Subscribe</button>
                </div>
            </form>
        </div>
    
    </section>

        <section class=" mt-4" v-if="apiData.costs.length">
            <div class="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-5 z-10 relative">
                <h1 class=" text-xl font-extrabold tracking-tight leading-none text-black  md:text-2xl lg:text-3xl ">Predicted expense based on your information, for {{ formData.city.toUpperCase()}}</h1>
            </div>
        </section>
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

    <section class=" bg-[url('/background.jpg')] " v-if="apiData.costs.length">
        <div class="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">More details on cost of living in {{ formData.city.toUpperCase()}}</h1>
        </div>
    </section>

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
