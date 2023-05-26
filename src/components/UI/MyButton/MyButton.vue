<script setup lang="ts">
import { computed } from "vue";
import { Props } from "./types";

const props = withDefaults(defineProps<Props>(), {
  variation: "primary",
  disabled: false,
});

const classList = computed(() => {
  return {
    "my-button": true,
    "my-button_transparent": props.variation === "transparent",
  };
});
</script>

<template>
  <button :class="classList" :disabled="props.disabled">
    <slot />
  </button>
</template>

<style scoped>
.my-button {
  @apply flex gap-2 w-fit px-5 py-2.5 bg-primary rounded-full text-sm text-white transition-all 
  hover:bg-primary-dark active:scale-95 disabled:bg-gray-l disabled:grayscale disabled:active:scale-100;
}

.my-button_transparent {
  @apply bg-transparent border-2 border-primary text-primary hover:bg-gray-l;
}
</style>
