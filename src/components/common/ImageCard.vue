<template>
    <div class="border-[1.5px] max-w-[360px] sm:max-w-[420px] text-start">
        <img :src="imageSrc" alt="Card Image">
        <h3 class="px-4 pt-6 pb-2 font-bold text-[19px] sm:text-[24px]">{{ title }}</h3>
        <p class="px-4 pb-2 leading-[26px] text-[13px] sm:text-[14px]">{{ technology }}</p>
        <p class="px-4 text-[15px] sm:text-[16px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos rerum tempora, nulla quae, eos reprehenderit, fuga nesciunt odio est error quisquam asperiores cumque iste. Maiores magnam iste sapiente <span class="text-blue underline">read more...</span></p>
        <div class="mb-6 ml-4 space-y-4 felx flex-wrap"> 
            <button class="bg-blue/90 text-white mt-4 rounded-md px-4 py-1.5 mr-4">Live</button>
            <button class="border-[1.5px] border-gray-300 text-gray-500 rounded-md px-4 py-1.5">Github</button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    imageSrc: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    technology: {
        type: String,
        required: true,
    },
});
</script>