<script setup>
import waveUp from '/src/assets/images/wave.svg'
import { AkLinkedinBoxFill } from "@kalimahapps/vue-icons";
import { AkGithubFill } from "@kalimahapps/vue-icons";
</script>

<template>
    <img :src="waveUp" class="bg-white" alt="">
    <section class="w-full font-Montserrat flex flex-col items-center bg-blue text-white py-10 sm:py-12 md:py-14 lg:py-16 xl:py-18 2xl:py-20">
        <div class="flex flex-wrap items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 2xl:space-x-14 text-[14px] sm:text-[15px]">
            <router-link to="/about"><AkPerson class="text-white hover:underline hover:font-bold transition-all duration-150 ease-in-out">About</AkPerson></router-link>
            <router-link to="/portfolio"><ByPortfolio class="text-white">Portfolio</ByPortfolio></router-link>
            <router-link to="/contact"><AnOutlinedMail class="text-white">Contact</AnOutlinedMail></router-link>
        </div>
        <hr class="w-3/4 max-w-[240px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[300px] xl:max-w-[320px] 2xl:max-w-[340px] h-1 my-6 sm:my-8 md:my-10 lg:my-12">
        <div class="flex items-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 2xl:space-x-14 text-[20px] sm:text-[24px]">
            <a href="https://linkedin.com/in/mariusz-malankiewicz" target="_blank" class="rounded-full bg-white p-2"><AkLinkedinBoxFill class="text-blue"></AkLinkedinBoxFill></a>
            <a href="https://github.com/MariuszMalankiewicz" target="_blank" class="rounded-full bg-white p-2"><AkGithubFill class="text-black"></AkGithubFill></a>
        </div>
        <p class="pt-6 sm:pt-8 md:pt-10 lg:pt-12 text-[12px] sm:text-[14px]">Copyright all rights reserved</p>
    </section>
</template>
