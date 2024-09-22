<template>
    <div id="app">
      <nav class="flex gap-x-4 m-4">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/tech-stack">Tech-Stack</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view></router-view>
    </div>
</template>