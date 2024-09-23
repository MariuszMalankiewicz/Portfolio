<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from "swiper/modules";

import 'swiper/css/navigation';
import 'swiper/css';

</script>
<template>
    <section class="min-w-[320px] font-Montserrat">
        <img src="../assets/images/wave_up.svg" alt="wave up">
        <div class="bg-blue text-white pb-6">
            <h1 class="text-[28px] sm:text-[32px] xl:text-[36px] 2xl:text-[40px] text-center font-bold py-8">Projects</h1>
            <Swiper :modules="[Navigation]" navigation class="md:w-2/3 lg:w-1/2"> 
              <SwiperSlide>
                <div class="bg-white w-[320px] lg:w-[400px] rounded-xl text-black shadow-xl mx-auto mb-6 mt-6">
                  <img src="/src/assets/images/mmblog.png" alt="portfolio images" class="rounded-t-xl">
                  <h1 class="font-bold text-xl ps-2 pt-4">MMblog</h1>
                  <div class="w-full flex flex-wrap pt-3 text-sm">
                    <p class="mx-2 mt-2 px-1 py-[1px] bg-light-gray rounded-md">Laravel</p>
                    <p class="mt-2 px-1 py-[1px] bg-light-gray rounded-md">Tailwind</p>
                </div>
                  <hr class="w-full h-1 text-light-gray mt-6">
                  <div class="flex flex-nowrap items-center pt-3 pb-6">
                      <a href="http://mmblog.c1.is/public/" target="blank" class="mx-2 mt-2 px-2 py-1 bg-blue hover:bg-blue/90 hover:font-semibold text-white rounded-md transition-all duration-150 ease-in-out">Website</a>
                      <!-- <a href="#" target="blank" class="mx-2 mt-2 px-2 py-1 bg-light-blue hover:bg-light-blue/90 hover:font-semibold text-white rounded-md transition-all duration-150 ease-in-out">Web design</a> -->
                      <a href="https://github.com/MariuszMalankiewicz/MMBlog" target="blank" class="mx-2 mt-2 px-2 py-1 bg-dark-gray hover:bg-dark-gray/90 hover:font-semibold text-white rounded-md transition-all duration-150 ease-in-out">Github</a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="bg-white w-[320px] lg:w-[400px] rounded-xl text-black shadow-xl mx-auto mb-6">
                  <img src="/src/assets/images/portfolio.png" alt="portfolio images" class="rounded-t-xl">
                  <h1 class="font-bold text-xl ps-2 pt-4">Portfolio</h1>
                  <div class="w-full flex flex-wrap pt-3 text-sm">
                    <p class="mx-2 mt-2 px-1 py-[1px] bg-light-gray rounded-md">Vue</p>
                    <p class="mt-2 px-1 py-[1px] bg-light-gray rounded-md">Tailwind</p>
                </div>
                  <hr class="w-full h-1 text-light-gray mt-6">
                  <div class="flex flex-nowrap items-center pt-3 pb-6">
                      <a href="https://mariuszmalankiewicz.netlify.app/" target="blank" class="mx-2 mt-2 px-2 py-1 bg-blue hover:bg-blue/90 hover:font-semibold text-white rounded-md transition-all duration-150 ease-in-out">Website</a>
                      <!-- <a href="#" target="blank" class="mx-2 mt-2 px-2 py-1 bg-light-blue hover:bg-light-blue/90 hover:font-semibold text-white rounded-md transition-all duration-150 ease-in-out">Web design</a> -->
                      <a href="https://github.com/MariuszMalankiewicz/Portfolio" target="blank" class="mx-2 mt-2 px-2 py-1 bg-dark-gray hover:bg-dark-gray/90 hover:font-semibold text-white rounded-md transition-all duration-150 ease-in-out">Github</a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="bg-white w-[320px] lg:w-[400px] rounded-xl text-black shadow-xl mx-auto mb-6">
                  <img src="/src/assets/images/tree_structure.png" alt="portfolio images" class="rounded-t-xl">
                  <h1 class="font-bold text-xl ps-2 pt-4">Tree Structure</h1>
                  <div class="w-full flex flex-wrap pt-3 text-sm">
                    <p class="mx-2 mt-2 px-1 py-[1px] bg-light-gray rounded-md">Laravel</p>
                    <p class="mt-2 px-1 py-[1px] bg-light-gray rounded-md">Bootstrap</p>
                </div>
                  <hr class="w-full h-1 text-light-gray mt-6">
                  <div class="flex flex-nowrap items-center pt-3 pb-6">
                      <a href="https://hosting2367263.online.pro/public/" target="blank" class="mx-2 mt-2 px-2 py-1 bg-blue hover:bg-blue/90 hover:font-semibold text-white rounded-md transition-all duration-150 ease-in-out">Website</a>
                      <!-- <a href="#" target="blank" class="mx-2 mt-2 px-2 py-1 bg-light-blue hover:bg-light-blue/90 hover:font-semibold text-white rounded-md transition-all duration-150 ease-in-out">Web design</a> -->
                      <a href="https://github.com/MariuszMalankiewicz/Tree-Structure" target="blank" class="mx-2 mt-2 px-2 py-1 bg-dark-gray hover:bg-dark-gray/90 hover:font-semibold text-white rounded-md transition-all duration-150 ease-in-out">Github</a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="bg-white w-[320px] lg:w-[400px] rounded-xl text-black shadow-xl mx-auto mb-6">
                  <img src="/src/assets/images/Memory_Game.png" alt="portfolio images" class="rounded-t-xl">
                  <h1 class="font-bold text-xl ps-2 pt-4">Memory Game</h1>
                  <div class="w-full flex flex-wrap pt-3 text-sm">
                    <p class="mx-2 mt-2 px-1 py-[1px] bg-light-gray rounded-md">HTML</p>
                    <p class="mt-2 px-1 py-[1px] bg-light-gray rounded-md">CSS</p>
                    <p class="mt-2 mx-2 px-1 py-[1px] bg-light-gray rounded-md">Java Script</p>
                </div>
                  <hr class="w-full h-1 text-light-gray mt-6">
                  <div class="flex flex-nowrap items-center pt-3 pb-6">
                      <a href="https://mariuszmalankiewicz.github.io/Memory-Game/" target="blank" class="mx-2 mt-2 px-2 py-1 bg-blue hover:bg-blue/90 hover:font-semibold text-white rounded-md transition-all duration-150 ease-in-out">Website</a>
                      <!-- <a href="#" target="blank" class="mx-2 mt-2 px-2 py-1 bg-light-blue hover:bg-light-blue/90 hover:font-semibold text-white rounded-md transition-all duration-150 ease-in-out">Web design</a> -->
                      <a href="https://github.com/MariuszMalankiewicz/Memory-Game" target="blank" class="mx-2 mt-2 px-2 py-1 bg-dark-gray hover:bg-dark-gray/90 hover:font-semibold text-white rounded-md transition-all duration-150 ease-in-out">Github</a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="bg-white w-[320px] lg:w-[400px] rounded-xl text-black shadow-xl mx-auto mb-6">
                  <img src="/src/assets/images/Todo_list.png" alt="portfolio images" class="rounded-t-xl">
                  <h1 class="font-bold text-xl ps-2 pt-4">Todo List</h1>
                  <div class="w-full flex flex-wrap pt-3 text-sm">
                    <p class="mx-2 mt-2 px-1 py-[1px] bg-light-gray rounded-md">HTML</p>
                    <p class="mt-2 px-1 py-[1px] bg-light-gray rounded-md">CSS</p>
                    <p class="mt-2 mx-2 px-1 py-[1px] bg-light-gray rounded-md">Java Script</p>
                </div>
                  <hr class="w-full h-1 text-light-gray mt-6">
                  <div class="flex flex-nowrap items-center pt-3 pb-6">
                      <a href="https://mariuszmalankiewicz.github.io/To-Do-List/" target="blank" class="mx-2 mt-2 px-2 py-1 bg-blue hover:bg-blue/90 hover:font-semibold text-white rounded-md transition-all duration-150 ease-in-out">Website</a>
                      <!-- <a href="#" target="blank" class="mx-2 mt-2 px-2 py-1 bg-light-blue hover:bg-light-blue/90 hover:font-semibold text-white rounded-md transition-all duration-150 ease-in-out">Web design</a> -->
                      <a href="https://github.com/MariuszMalankiewicz/To-Do-List" target="blank" class="mx-2 mt-2 px-2 py-1 bg-dark-gray hover:bg-dark-gray/90 hover:font-semibold text-white rounded-md transition-all duration-150 ease-in-out">Github</a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="bg-white w-[320px] lg:w-[400px] rounded-xl text-black shadow-xl mx-auto mb-6">
                  <img src="/src/assets/images/Rock_scissors_paper.png" alt="portfolio images" class="rounded-t-xl">
                  <h1 class="font-bold text-xl ps-2 pt-4">Rock Scissors Paper</h1>
                  <div class="w-full flex flex-wrap pt-3 text-sm">
                    <p class="mx-2 mt-2 px-1 py-[1px] bg-light-gray rounded-md">HTML</p>
                    <p class="mt-2 px-1 py-[1px] bg-light-gray rounded-md">CSS</p>
                    <p class="mt-2 mx-2 px-1 py-[1px] bg-light-gray rounded-md">Java Script</p>
                </div>
                  <hr class="w-full h-1 text-light-gray mt-6">
                  <div class="flex flex-nowrap items-center pt-3 pb-6">
                      <a href="https://mariuszmalankiewicz.github.io/Rock-scissors-paper/" target="blank" class="mx-2 mt-2 px-2 py-1 bg-blue hover:bg-blue/90 hover:font-semibold text-white rounded-md transition-all duration-150 ease-in-out">Website</a>
                      <!-- <a href="#" target="blank" class="mx-2 mt-2 px-2 py-1 bg-light-blue hover:bg-light-blue/90 hover:font-semibold text-white rounded-md transition-all duration-150 ease-in-out">Web design</a> -->
                      <a href="https://github.com/MariuszMalankiewicz/Rock-scissors-paper" target="blank" class="mx-2 mt-2 px-2 py-1 bg-dark-gray hover:bg-dark-gray/90 hover:font-semibold text-white rounded-md transition-all duration-150 ease-in-out">Github</a>
                  </div>
                </div>
              </SwiperSlide>
              
            </Swiper>
        </div>
        <img src="../assets/images/wave_down.svg" alt="wave down">
    </section>
</template>

<style> 
.swiper-button-next,
.swiper-button-prev {
    color: #ffffff !important;
}

@media (max-width:430px) {
  .swiper-button-next,
  .swiper-button-prev {
    display:none
}
}
@media (max-width:767px) {
  .swiper-button-prev {
    padding-left: 7%;
}
.swiper-button-next{
  padding-right: 7%;
}
}
</style>