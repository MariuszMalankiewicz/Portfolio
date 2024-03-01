<script setup>
import { AnOutlinedMenu } from "@kalimahapps/vue-icons";
import { ByClose } from "@kalimahapps/vue-icons";

import { ref } from 'vue'

const show = ref(false)

const showToogle = ()=>{
    show.value = !show.value
}
</script>

<template>
    <nav class="fixed z-20 min-w-[320px] w-full font-Montserrat bg-white/90 h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px] xl:h-[90px] shadow-md lg:shadow-lg xl:shadow-xl flex justify-end md:justify-center items-center pe-5">
        <AnOutlinedMenu class="md:hidden text-xl sm:text-2xl cursor-pointer" v-if="!show" @click="showToogle()"></AnOutlinedMenu>
        <ByClose class="md:hidden fixed top-5 right-5 z-10 text-xl cursor-pointer" v-if="show" @click="showToogle()"></ByClose>
        <!-- Nav belowe 768px -->
        <div class="fixed md:hidden h-screen  top-0 left-0 flex flex-col justify-around items-center w-2/3 bg-white font-semibold shadow-2xl" v-if="show">
            <a href="#about" class="hover:underline hover:font-bold transition-all duration-150 ease-in-out">About</a>
            <a href="#projects" class="hover:underline hover:font-bold transition-all duration-150 ease-in-out">Projects</a>
            <a href="#contact" class="hover:underline hover:font-bold transition-all duration-150 ease-in-out">Contact</a>
        </div>
        <!-- Nav above 768px -->
        <div class="hidden md:block space-x-5 lg:space-x-10 xl:space-x-16 font-semibold">
            <a href="#about" class="hover:underline hover:font-bold transition-all duration-150 ease-in-out">About</a>
            <a href="#projects" class="hover:underline hover:font-bold transition-all duration-150 ease-in-out">Projects</a>
            <a href="#contact" class="hover:underline hover:font-bold transition-all duration-150 ease-in-out">Contact</a>
        </div>
    </nav>
</template>

<style>
html{
    scroll-behavior: smooth;
}
</style>