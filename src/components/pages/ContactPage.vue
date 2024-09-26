<script setup>
import Contact from '/src/assets/images/contact.png'
</script>

<template>
    <section class="px-4 mt-[80px] font-Montserrat mb-12">
        <h1 class="text-[32px] sm:text-[44px] md:text-[52px] text-center font-bold text-blue">Contact</h1>
        <div class="flex flex-col xl:flex-row xl:flex-wrap justify-center items-center lg:space-x-12 2xl:space-x-24">
            <img :src="Contact" class="w-[340px] sm:w-[400px] md:w-[440px] lg:w-[480px] xl:w-[520px] 2xl:w-[600px] mb-4" alt="Contact us-rafiki.png">
            <div class="w-[100%] xl:w-[450px] 2xl:w-[600px] text-[15px] sm:text-[16px] md:text-[17px]">
                <form action="#">
                <label for="name" class="flex flex-col"><p class="text-dark-gray">Name</p><input type="text" placeholder="Your name" class="placeholder:text-xs placeholder:ps-1 placeholder:pt-1 focus:text-dark-gray focus:text-text-sm text-dark-gray border-b-2 border-dark-gray focus:outline-none"></label>
                <label for="email" class="flex flex-col mt-4"><p class="text-dark-gray">Email</p><input type="email" placeholder="Your email" class="placeholder:text-xs placeholder:ps-1 placeholder:pt-1 focus:text-dark-gray focus:text-text-sm text-dark-gray border-b-2 border-dark-gray focus:outline-none"></label>
                <label for="message" class="flex flex-col mt-4"><p class="text-dark-gray">Message</p><textarea placeholder="Your message" class="placeholder:text-xs placeholder:ps-2 placeholder:pt-1 focus:text-dark-gray focus:text-text-sm text-dark-gray focus:ps-1 border-b-2 border-l-2 border-r-2 rounded-b-md border-dark-gray focus:outline-none" cols="30" rows="3"></textarea></label>
                <input type="submit" value="Send" class="bg-blue text-white mt-4 rounded-md px-4 sm:px-6 py-2 hover:cursor-pointer hover:font-semibold hover:bg-blue/90 transition-all duration-150 ease-in-out">
            </form>
            </div>
        </div>
    </section>
</template>
