<script setup>
import { ref, computed } from 'vue';
import Navigation from '/src/components/layout/Navigation.vue'

const isExpand = ref(false);

const handleExpandUpdate = () => {
  isExpand.value = !isExpand.value;
};

const dynamicWidth = computed(() => {
  return isExpand.value ? 'w-[150px] transition-all duration-300 ease-in-out' : 'w-[50px] duration-300 ease-in-out';
});

const dynamicMargin = computed(() => {
  return isExpand.value ? 'ml-[170px] transition-all duration-300 ease-in-out' : 'ml-[70px] duration-300 ease-in-out';
});

</script>

<template>
    <div id="app" class="flex">
      <Navigation @ChangeExpand="handleExpandUpdate" :class="dynamicWidth" class="md:w-[300px]"></Navigation>
      <main :class="dynamicMargin" class="w-full md:ml-[320px] flex items-center justify-center">
        <router-view></router-view>
      </main>
    </div>
</template>

