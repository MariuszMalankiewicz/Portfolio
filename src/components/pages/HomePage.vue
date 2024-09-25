<script setup>
import ManLooking from '/src/assets/images/man-looking.png'
</script>

<template>
    <section class="font-Montserrat">
        <div :class="dynamicLeftMargin" class="flex flex-col md:flex-row md:flex-wrap md:gap-x-[80px] justify-center items-center px-6 md:mt-[24px] lg:mt-[48px] xl:mt-[72px]">
            <img :src="ManLooking" class="mt-16 w-[250px] sm:w-[320px] md:w-[420px] lg:w-[490px] xl:w-[560px]" alt="work in progress">
        <div>
            <div class="mt-12 max-w-[350px] lg:max-w-[370px] xl:max-w-[410px]">
                <h3 class="font-bold text-[19px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px]">Hi, I’am Malankiewicz</h3>
                <p class="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] sm:mt-[4px] md:leading-[30px]">and I am a web developer with a passion for creating functional, modern and aesthetic websites and web applications. I have experience working with front-end as well as back-end and databases.                     <router-link to="/about"><AnOutlinedMail class="underline text-blue hover:text-blue/70 transition-all duration-150 ease-in-out">read more</AnOutlinedMail></router-link></p>
            </div>
            <div class="flex flex-wrap justify-start items-center gap-[20px] mt-6 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] mb-12">
                    <router-link to="/portfolio"><AnOutlinedMail class="bg-blue text-white mt-4 rounded-md px-4 sm:px-6 py-2 hover:cursor-pointer hover:font-semibold hover:bg-blue/90 transition-all duration-150 ease-in-out">Portfolio</AnOutlinedMail></router-link>
                    <router-link to="/tech-stack"><AnOutlinedMail class="bg-light-blue text-white mt-4 rounded-md px-4 sm:px-6 py-2 hover:cursor-pointer hover:font-semibold hover:bg-blue/90 transition-all duration-150 ease-in-out">Tech Stack</AnOutlinedMail></router-link>
                    <router-link to="/contact"><AnOutlinedMail class="bg-dark-gray text-white mt-4 rounded-md px-4 sm:px-6 py-2 hover:cursor-pointer hover:font-semibold hover:bg-blue/90 transition-all duration-150 ease-in-out">Contact</AnOutlinedMail></router-link>
            </div>
        </div>
        </div>
    </section>
</template>