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
    <nav class="h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px] xl:h-[90px] shadow-md lg:shadow-lg xl:shadow-xl flex justify-end md:justify-center items-center pe-5">
        <AnOutlinedMenu class="md:hidden text-xl sm:text-2xl cursor-pointer" v-if="!show" @click="showToogle()"></AnOutlinedMenu>
        <ByClose class="md:hidden absolute top-5 right-5 z-10 text-xl cursor-pointer" v-if="show" @click="showToogle()"></ByClose>
        <!-- Nav belowe 768px -->
        <div class="absolute md:hidden top-0 left-0 flex flex-col justify-around items-center h-full w-full bg-blue font-semibold font-Montserrat" v-if="show">
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
        </div>
        <!-- Nav above 768px -->
        <div class="hidden md:block space-x-5 lg:space-x-10 xl:space-x-16 font-semibold font-Montserrat">
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
        
        </div>
    </nav>
</template>

<style scoped>

</style>
