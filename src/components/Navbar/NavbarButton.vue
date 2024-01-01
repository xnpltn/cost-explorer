<script setup lang="ts">

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

</script>

<template>
    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" class="text-white font-medium rounded-lg text-sm px-4 py-2 text-center bg-gray-700 hover:bg-gray-800 ">{{ name }}</button>    
    </div>
</template>