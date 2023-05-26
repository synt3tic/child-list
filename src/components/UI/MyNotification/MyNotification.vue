<script setup lang="ts">
import { Props } from "./types";

const props = defineProps<Props>();
</script>

<template>
  <div class="notification">
    <div class="notification__text">
      <p>{{ props.text }}</p>
    </div>
    <img
      v-if="props.isError"
      src="../../../assets/icons/error.svg"
      alt="succes-icon"
    />
    <img v-else src="../../../assets/icons/succes.svg" alt="succes-icon" />
  </div>
</template>

<style scoped>
.notification {
  @apply absolute bottom-8 flex gap-4 w-fit h-fit p-5 bg-white rounded-lg shadow-md;
}

.notification__text {
  @apply flex flex-col gap-2 w-56 md:w-72 justify-center;
}

.notification__text p {
  @apply text-sm;
}
</style>
