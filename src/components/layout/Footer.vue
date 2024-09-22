<script setup>
import { AkLinkedinBoxFill } from "@kalimahapps/vue-icons";
import { AkGithubFill } from "@kalimahapps/vue-icons";
</script>

<template>
    <section class="min-w-[320px] font-Montserrat flex flex-col items-center py-10 sm:py-12 md:py-14 lg:py-16 xl:py-18 2xl:py-20 bg-blue text-white">
        <div class="space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 2xl:space-x-14">
            <a href="#about" class="hover:underline hover:font-bold transition-all duration-150 ease-in-out">About</a>
            <a href="#projects" class="hover:underline hover:font-bold transition-all duration-150 ease-in-out">Projects</a>
            <a href="#contact" class="hover:underline hover:font-bold transition-all duration-150 ease-in-out">Contact</a>
        </div>
        <hr class="w-3/4 max-w-[240px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[300px] xl:max-w-[320px] 2xl:max-w-[340px] h-1 my-6 sm:my-8 md:my-10 lg:my-12">
        <div class="flex items-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 2xl:space-x-14">
            <a href="https://linkedin.com/in/mariusz-malankiewicz" target="_blank" class="rounded-full bg-white p-2"><AkLinkedinBoxFill class="text-blue text-xl sm:text-2xl md:text-3xl"></AkLinkedinBoxFill></a>
            <a href="https://github.com/MariuszMalankiewicz" target="_blank" class="rounded-full bg-white p-2"><AkGithubFill class="text-black text-xl sm:text-2xl md:text-3xl"></AkGithubFill></a>
        </div>
        <p class="pt-6 sm:pt-8 md:pt-10 lg:pt-12">Copyright all rights reserved</p>
        
    </section>
</template>
