<script setup>
import { ref, computed } from 'vue';
import Navigation from '/src/components/layout/Navigation.vue'
import Footer from '/src/components/layout/Footer.vue'

const isExpand = ref(false);

const handleExpandUpdate = () => {
  isExpand.value = !isExpand.value;
};

const dynamicWidth = computed(() => {
  return isExpand.value ? 'w-[150px] md:w-[300px] transition-all duration-300 ease-in-out' : 'w-[50px] duration-300 ease-in-out';
});

const dynamicMargin = computed(() => {
  return isExpand.value ? 'ml-[150px] md:ml-[300px] transition-all duration-300 ease-in-out' : 'ml-[50px] duration-300 ease-in-out';
});


</script>

<template>
    <div id="app" class="flex">
      <Navigation @ChangeExpand="handleExpandUpdate" :class="dynamicWidth"></Navigation>
      <main :class="dynamicMargin" class= "w-full flex flex-col items-center justify-center">
        <router-view></router-view>
        <Footer></Footer>
      </main>
    </div>
</template>

