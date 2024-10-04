<script setup>
import { ref, computed } from 'vue'

import ImageCard from '/src/components/common/ImageCard.vue'
import NavImageCardButton from '/src/components/common/NavImageCardButton.vue'

import MMBlog from '/src/assets/images/mmblog.png'
import Portfolio from '/src/assets/images/portfolio.png'
import TaskManagmentSystem from '/src/assets/images/task-managment-system.png'
import CarsSpot from '/src/assets/images/cars-spot.png'
import MemoryGame from '/src/assets/images/memory-game.png'
import ToDoList from '/src/assets/images/todo-list.png'
import RockScissorsAndPaper from '/src/assets/images/rock-scissors-paper.png'
import TreeStructure from '/src/assets/images/tree-structure.png'
import ToDoList2 from '/src/assets/images/todo-list-2.png'

const filter = ref(null);

const filterItems = (type) => {
  filter.value = type;
};

const filteredItems = computed(() => {
    if (!filter.value) {
        return cards.value;
      }
      return cards.value.filter(item => item.type === filter.value);
    });

const activeButton = ref('buttonAll');

const toggleActiveButton = (type) =>{
  activeButton.value = activeButton.value === type ? type : type;
}

  //  isActive.value ? 'text-white bg-blue' : 'text-gray-600 bg-white'

const cards = ref([
  {
    imageSrc: MMBlog,
    title: "MMBlog",
    description: "Blogs allow people to share knowledge, experiences, and advice on a variety of topics. They can solve the problem of lack of access to information, helping users find answers to questions and learn new things in a simple and accessible way.",
    technology: "Laravel | PHP | MySQL | Tailwind | JavaScript",
    live: "#",
    github: "https://github.com/MariuszMalankiewicz/MMBlog",
    type: 'fullstack',
  },
  {
    imageSrc: Portfolio,
    title: "Portfolio",
    description: "A portfolio website solves the problem of effectively showcasing skills and experience, allowing individuals to stand out in the job market. It facilitates professional presentation of projects, helps build a personal brand, and ensures accessibility and interactivity, which can attract clients or employers.",
    technology: "Vue | Tailwind",
    live: "https://mariuszmalankiewicz.netlify.app/",
    github: "https://github.com/MariuszMalankiewicz/Portfolio",
    type: 'frontend',
  },

  {
    imageSrc: TaskManagmentSystem,
    title: "Task Managment System",
    description: "A Task Management System solves the problem of organizing, prioritizing, and tracking task progress in projects. It facilitates task assignment, deadline monitoring, and team collaboration, which enhances work efficiency and eliminates chaos.",
    technology: "Laravel | Postman",
    live: "#",
    github: "https://github.com/MariuszMalankiewicz/task-managment-system",
    type: 'backend'
  },

  {
    imageSrc: CarsSpot,
    title: "Cars Spot",
    description: "Cars Spot is a company dealing in car sales that has faced issues related to inadequate customer service, complaints handling, and poor organization of logistical processes. This led to delivery delays and customer dissatisfaction.",
    technology: "Vue | Tailwind",
    live: "https://cars-spott.netlify.app/",
    github: "https://github.com/MariuszMalankiewicz/cars-spot",
    type: 'frontend'
  },

  {
    imageSrc: MemoryGame,
    title: "Memory Game",
    description: "The Memory Game improves memory and concentration by exercising the ability to remember and recognize pairs of cards or images that are face down. It helps enhance cognitive skills, especially in children, and serves as memory training for adults.",
    technology: "HTML5 | CSS3 | JavaScript",
    live: "https://mariuszmalankiewicz.github.io/Memory-Game/",
    github: "https://github.com/MariuszMalankiewicz/Memory-Game",
    type: 'frontend'
  },

  {
    imageSrc: ToDoList,
    title: "ToDo List",
    description: "A to-do list solves the problem of task organization by helping with time management, prioritization, and remembering obligations. It facilitates planning and increases productivity.",
    technology: "HTML5 | CSS3 | JavaScript",
    live: "https://mariuszmalankiewicz.github.io/To-Do-List/",
    github: "https://github.com/MariuszMalankiewicz/To-Do-List",
    type: 'frontend'
  },

  {
    imageSrc: RockScissorsAndPaper,
    title: "Rock Scissors And Paper",
    description: "The Rock, Scissors, and Paper (RSP) problem involves simulating a game where two players simultaneously choose one of three options: rock, scissors, or paper. The rules are as follows Rock beats scissors. Scissors beat paper. Paper beats rock. The problem is to develop an algorithm that correctly determines the outcome of the game by comparing the choices of both players.",
    technology: "HTML5 | CSS3 | JavaScript",
    live: "https://mariuszmalankiewicz.github.io/Rock-scissors-paper/",
    github: "https://github.com/MariuszMalankiewicz/Rock-scissors-paper",
    type: 'frontend'
  },

  {
    imageSrc: TreeStructure,
    title: "Tree Structure",
    description: "A tree structure solves the problem of organizing and quickly searching hierarchical data, such as parent-child relationships. It enables efficient operations like searching, inserting, and deleting elements in complex data sets.",
    technology: "Laravel | Bootstrap | JavaScript",
    live: "#",
    github: "https://github.com/MariuszMalankiewicz/Tree-Structure",
    type: 'fullstack'
  },

  {
    imageSrc: ToDoList2,
    title: "ToDoList",
    description: "A to-do list solves the problem of task organization by helping with time management, prioritization, and remembering obligations. It facilitates planning and increases productivity.",
    technology: "Vue3 | Tailwind",
    live: "https://vue-todo-list-mm.netlify.app/",
    github: "https://github.com/MariuszMalankiewicz/Vue3TodoList",
    type: 'frontend'
  },

]);
</script>

<template>
  <section class="px-4 mt-[80px] font-Montserrat mb-12">
      <h1 class="text-[32px] sm:text-[44px] md:text-[52px] text-center font-bold text-blue">Portfolio</h1>
      <nav class="flex flex-wrap items-center justify-center gap-3 mt-12">
        
        <NavImageCardButton
          @click="filterItems(null); toggleActiveButton('buttonAll');"
          :class="[activeButton === 'buttonAll' ? 'text-white bg-blue' : 'text-gray-600 bg-white']"
          class="transition-all duration-300 ease-in-out">
          Show All
        </NavImageCardButton>
    
        <NavImageCardButton 
          @click="filterItems('frontend'); toggleActiveButton('buttonFrontend');"
          :class="[activeButton === 'buttonFrontend' ? 'text-white bg-blue' : 'text-gray-600 bg-white']"
          class="transition-all duration-300 ease-in-out">
            Front-End
        </NavImageCardButton>

        <NavImageCardButton 
          @click="filterItems('backend'); toggleActiveButton('buttonBackend');"
          :class="[activeButton === 'buttonBackend' ? 'text-white bg-blue' : 'text-gray-600 bg-white']"
          class="transition-all duration-300 ease-in-out">
          Back-End
        </NavImageCardButton>

        <NavImageCardButton 
          @click="filterItems('fullstack'); toggleActiveButton('buttonFullStack');"
          :class="[activeButton === 'buttonFullStack' ? 'text-white bg-blue' : 'text-gray-600 bg-white']"
          class="transition-all duration-300 ease-in-out">
          Full-Stack
        </NavImageCardButton>
      
      </nav>
      <div class="mt-12 flex flex-wrap items-center justify-center gap-12">
      <ImageCard
        v-for="(card, index) in filteredItems" 
        :key="index" 
        :imageSrc="card.imageSrc" 
        :title="card.title" 
        :description="card.description" 
        :technology="card.technology"
        :live="card.live"
        :github="card.github">
      </ImageCard>
    </div>
  </section>
  </template>