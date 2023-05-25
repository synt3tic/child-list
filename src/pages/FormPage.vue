<script setup lang="ts">
import MyButton from "../components/UI/MyButton/MyButton.vue";
import MyInput from "../components/UI/MyInput/MyInput.vue";
</script>
<template>
  <div class="flex flex-col gap-4 p-16">
    <MyInput :disabled="false" label="Имя" />
    <MyButton variation="transparent">кнопка</MyButton>
  </div>
</template>

<style scoped></style>
