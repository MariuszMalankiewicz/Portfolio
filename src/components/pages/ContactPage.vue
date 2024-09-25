<script setup>
import Contact from '/src/assets/images/contact.png'
</script>

<template>
    <section class="min-w-[320px] font-Montserrat flex flex-col items-center pb-10">
        <h1 class="text-[28px] sm:text-[32px] xl:text-[36px] 2xl:text-[40px] text-center text-blue font-bold pt-10 sm:pt-12 pb-6 sm:pb-10 md:pb-12">Contact</h1>
        <div class="w-full flex flex-col justify-center items-center md:flex-row md:space-x-10 lg:space-x-20 xl:space-x-28 2xl:space-x-36">
            <img :src="Contact" class="max-w-[250px] sm:max-w-[320px] md:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px] 2xl:max-w-[420px]" alt="Contact us-rafiki.png">
            <form action="#" class="w-3/4 md:w-[300px] lg:w-[340px] xl:w-[380px] 2xl:w-[420px]">
            <label for="name" class="flex flex-col mt-4"><p class="text-dark-gray">Name</p><input type="text" placeholder="Your name" class="placeholder:text-xs placeholder:ps-1 placeholder:pt-1 focus:text-dark-gray focus:text-text-sm text-dark-gray border-b-2 border-dark-gray focus:outline-none"></label>
            <label for="email" class="flex flex-col mt-4"><p class="text-dark-gray">Email</p><input type="email" placeholder="Your email" class="placeholder:text-xs placeholder:ps-1 placeholder:pt-1 focus:text-dark-gray focus:text-text-sm text-dark-gray border-b-2 border-dark-gray focus:outline-none"></label>
            <label for="message" class="flex flex-col mt-4"><p class="text-dark-gray">Message</p><textarea placeholder="Your message" class="placeholder:text-xs placeholder:ps-2 placeholder:pt-1 focus:text-dark-gray focus:text-text-sm text-dark-gray focus:ps-1 border-b-2 border-l-2 border-r-2 rounded-b-md border-dark-gray focus:outline-none" cols="30" rows="3"></textarea></label>
            <input type="submit" value="Send" class="bg-blue text-white mt-4 rounded-md px-4 sm:px-6 py-2 hover:cursor-pointer hover:font-semibold hover:bg-blue/90 transition-all duration-150 ease-in-out">
            </form>
        </div>
    </section>
</template>
