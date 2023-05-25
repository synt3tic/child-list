<script setup lang="ts">
import MyHeader from "./components/MyHeader/MyHeader.vue";
</script>

<template>
  <MyHeader />
  <main class="main">
    <router-view />
  </main>
</template>

<style scoped>
.main {
  @apply flex justify-center w-full py-7;
}
</style>
