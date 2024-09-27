<script setup>
import { ref } from 'vue'

import ImageCard from '/src/components/common/ImageCard.vue'
import NavImageCardButton from '/src/components/common/NavImageCardButton.vue'

import MMBlog from '/src/assets/images/mmblog.png'
import Portfolio from '/src/assets/images/portfolio.png'

const cards = ref([
  {imageSrc: MMBlog, title: "MMBlog", technology: "Laravel | PHP | MySQL | Tailwind | JavaScript",},
  {imageSrc: Portfolio, title: "Portfolio", technology: "Vue | Tailwind",},
]);
</script>

<template>
  <section class="px-4 mt-[80px] font-Montserrat mb-12">
      <h1 class="text-[32px] sm:text-[44px] md:text-[52px] text-center font-bold text-blue">Portfolio</h1>
      <nav class="flex flex-wrap items-center justify-center gap-3 mt-12">
        <NavImageCardButton class="text-white bg-blue">Show All</NavImageCardButton>
        <NavImageCardButton class="cursor-no-drop line-through">Front-End</NavImageCardButton>
        <NavImageCardButton class="cursor-no-drop line-through">Back-End</NavImageCardButton>
        <NavImageCardButton class="cursor-no-drop line-through">Full-Stack</NavImageCardButton>
      </nav>
      <div class="mt-12 flex flex-wrap items-center justify-center gap-12">
      <ImageCard v-for="(card, index) in cards" :key="index" :imageSrc="card.imageSrc" :title="card.title" :technology="card.technology"></ImageCard>
    </div>
  </section>
  </template>