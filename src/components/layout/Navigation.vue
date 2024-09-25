<script setup>
import { ref } from 'vue'
import { BsArrowRightCircle } from '@kalimahapps/vue-icons';
import { BsArrowLeftCircle } from '@kalimahapps/vue-icons';
import { ByPortfolio, AnOutlinedMail, CgSmartphoneChip, AkPerson, AkHomeAlt1, BsArrowsAngleContract, BsArrowsAngleExpand } from '@kalimahapps/vue-icons';

const isOpen = ref(false);

const isOpenToggle = ()=>{
    isOpen.value = !isOpen.value;
}

import { defineEmits } from 'vue';

const emit = defineEmits(['ChangeExpand']);

const ToggleExpand = () => {
  emit('ChangeExpand', true);
};
</script>

<template>
    <nav class="fixed h-screen font-Montserrat bg-blue/90 shadow-md lg:shadow-lg xl:shadow-xl">
         <BsArrowRightCircle class="animate-bounce z-10 fixed top-[15px] left-[10px] text-[25px] text-white cursor-pointer" v-if="!isOpen" @click="isOpenToggle(); ToggleExpand()"></BsArrowRightCircle>
         <BsArrowLeftCircle class="animate-bounce fixed top-[15px] left-[110px] md:left-[250px] text-white z-50 text-[25px] cursor-pointer" v-if="isOpen" @click="isOpenToggle(); ToggleExpand()"></BsArrowLeftCircle>

        <div :class="dynamicWidth" class="md:hidden h-full flex flex-col items-center justify-around">
            <router-link v-if="isOpen" to="/"><AkHomeAlt1 class="text-white text-[25px]"></AkHomeAlt1></router-link>
            <router-link v-if="isOpen" to="/about"><AkPerson class="text-white text-[30px]"></AkPerson></router-link>
            <router-link v-if="isOpen" to="/tech-stack"><CgSmartphoneChip class="text-white text-[30px]"></CgSmartphoneChip></router-link>
            <router-link v-if="isOpen" to="/portfolio"><ByPortfolio class="text-white text-[30px]"></ByPortfolio></router-link>
            <router-link v-if="isOpen" to="/contact"><AnOutlinedMail class="text-white text-[30px]"></AnOutlinedMail></router-link>
        </div>




        <!-- Nav above 768px -->
        <div :class="dynamicWidth" class="hidden h-full md:flex flex-col justify-around items-center font-semibold text-white">
            <router-link v-if="isOpen" class="hover:underline hover:font-bold transition-all duration-150 ease-in-out" to="/">Home</router-link>
            <router-link v-if="isOpen" class="hover:underline hover:font-bold transition-all duration-150 ease-in-out" to="/about">About</router-link>
            <router-link v-if="isOpen" class="hover:underline hover:font-bold transition-all duration-150 ease-in-out" to="/tech-stack">Tech-Stack</router-link>
            <router-link v-if="isOpen" class="hover:underline hover:font-bold transition-all duration-150 ease-in-out" to="/portfolio">Portfolio</router-link>
            <router-link v-if="isOpen" class="hover:underline hover:font-bold transition-all duration-150 ease-in-out" to="/contact">Contact</router-link>
        </div>
    </nav>
</template>