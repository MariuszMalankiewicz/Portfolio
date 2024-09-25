<script setup>
import HandCoding from '/src/assets/images/hand-coding.png'
</script>

<template>
    <section class="w-full px-5 pt-32 sm:pt-36 md:pt-40 lg:pt-44 xl:pt-48 2xl:pt-52 mb-16 font-Montserrat">
        <h1 class="text-[28px] sm:text-[32px] xl:text-[36px] 2xl:text-[40px] text-center font-bold text-blue">About</h1>
        <div class="flex flex-col md:flex-row md:justify-center items-center md:space-x-16 lg:space-x-32 2xl:space-x-64 mt-16">
            <img :src="HandCoding" class="max-w-[250px] sm:max-w-[320px] md:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px]" alt="work in progress">
            <div class="max-w-[600px] text-[16px]">
                <p>Hi, i'm Malankiewicz</p>
                <p>and I am a web developer with a passion for creating functional, modern, and aesthetically pleasing websites and web applications. I have experience working with front-end technologies such as HTML5, CSS3, Tailwind, Bootstrap, JavaScript, Vue.js, as well as back-end technologies like PHP and Laravel, and databases such as MySQL and SQLite. In my daily work, I follow principles of responsiveness, performance, and clean code organization, allowing me to deliver solutions that meet high user expectations. My goal is continuous growth and the pursuit of innovative solutions that streamline the development process and improve the quality of the projects I work on. I value clean application architecture and attention to visual details that enhance the user experience. I always strive to stay up-to-date with the latest trends in web technologies, learning new frameworks, tools, and methods. I believe that through constant skill development and teamwork, I am capable of tackling any challenge. Feel free to explore my projects and contact me for collaboration opportunities!</p>
            </div>
        </div>
    </section>
</template>