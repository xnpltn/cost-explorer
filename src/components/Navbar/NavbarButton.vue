<script setup lang="ts">

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

</script>

<template>
    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse justify-center items-center border border-gray-400 hover:bg-green-200">
        <button type="button" class="text-gray-900 font-medium rounded-lg text-sm px-4 py-2 text-center uppercase">{{ name }} &rArr;</button>    
    </div>
</template>