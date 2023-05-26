<script setup lang="ts">
import { Props } from "./types";

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  type: "text",
});
const emit = defineEmits(["updateValue"]);

const updateValue = (e: Event) => {
  emit("updateValue", (e.target as HTMLInputElement).value);
};
</script>

<template>
  <label for="input" class="my-input">
    <input
      id="input"
      placeholder="&nbsp;"
      :type="props.type"
      :value="props.value"
      @change="updateValue"
    />
    <span class="label">{{ props.label }}</span>
    <span class="focus-bg"></span>
  </label>
</template>

<style scoped>
.my-input {
  @apply relative m-auto w-full rounded overflow-hidden;
}

.my-input .label {
  @apply absolute bottom-[17px] left-4 text-sm text-gray translate-y-0 transition-all pointer-events-none;
}

.my-input .focus-bg {
  @apply absolute top-0 left-0 w-full h-full -z-10 scale-x-0 origin-left;
}

.my-input input {
  @apply appearance-none w-full border border-gray-l p-4 pb-0 h-14 text-sm outline-none rounded bg-white 
  transition-all hover:shadow-md;
}

.my-input input:not(:placeholder-shown) + .label {
  @apply -translate-y-3;
}

.my-input input:focus {
  @apply bg-white;
}

.my-input input:focus + .label {
  @apply -translate-y-3;
}
</style>
