<script setup>
import WorkInProgress from '/src/assets/images/work-in-progress.png'
</script>

<template>
    <section class="font-Montserrat">
        <div :class="dynamicLeftMargin" class="flex flex-col md:flex-row md:justify-center items-center md:space-x-16 lg:space-x-32 2xl:space-x-64">
            <img :src="WorkInProgress" class="max-w-[250px] sm:max-w-[320px] md:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px]" alt="work in progress">
            <p class="max-w-[300px] sm:max-w-[320px] md:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px] 2xl:max-w-[420px] text-[24px] sm:text-[28px] xl:text-[32px] font-semibold pt-16 md:pt-0">Hi I’am Mariusz Malankiewicz i have experience with web design and website.</p>
        </div>
    </section>
</template>