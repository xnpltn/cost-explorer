<script setup lang="ts">
import {useApiStore} from '../stores/apiData'
import {useFormData} from '../stores/formData'


const formData = useFormData()
const apiData =  useApiStore()

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
</template>