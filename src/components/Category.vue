<script setup lang="ts">

const props = defineProps({
    categories: {
        type: Array,
        required: true
    }
})

</script>

<template>
    <section class="bg-white dark:bg-gray-900 border-t border-gray-700" v-for="category in categories">

        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16" >
            <div class="flex flex-col justify-center">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-lg dark:text-white">{{ category.item}}</h1> 
                <p class="mb-8 text-lg font-normal text-gray-500 lg:text-base dark:text-gray-400">hello World</p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                    <section>
                        

                        <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
</template>