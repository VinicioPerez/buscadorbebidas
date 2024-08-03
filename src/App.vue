<script setup>
  import { RouterView } from 'vue-router'
  import Header from './components/Header.vue';

</script>

<template>
  <Header />

  <main class="container mxauto mt-10">
    <RouterView />
  </main>
</template>

