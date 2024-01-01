<script setup lang="ts">
import { type } from 'os';

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})
</script>


<template>
    <div class="mb-5">
        <label :for="name" class="block mb-2 text-sm font-medium text-gray-900 ">{{ label }}</label>
        <input :type="name" :id="name" class="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  " :placeholder="name" required>
    </div>
</template>