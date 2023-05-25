<script setup lang="ts">
import { computed, ref } from "vue";
import MyInput from "../UI/MyInput/MyInput.vue";
import { Info } from "../../types/types";
import { Props } from "./types";

const props = withDefaults(defineProps<Props>(), {
  editable: false,
  variation: "personal",
});
const emit = defineEmits(["updateValues", "removeChild"]);

const updateName = (newValue: string) => {
  emit("updateValues", "name", newValue, props.info.id);
};
const updateAge = (newValue: string) => {
  emit("updateValues", "age", newValue, props.info.id);
};

const removeChild = () => {
  emit("removeChild", props.info.id);
};

const classList = computed(() => {
  return {
    fields: true,
    fields_children: props.variation === "children",
  };
});
</script>

<template>
  <fieldset :class="classList">
    <MyInput :value="props.info.name" label="Имя" @update-value="updateName" />
    <MyInput
      :value="props.info.age"
      label="Возраст"
      @update-value="updateAge"
    />
    <button
      v-if="props.variation === 'children'"
      class="fields__button"
      @click="removeChild"
    >
      Удалить
    </button>
  </fieldset>
</template>

<style scoped>
.fields {
  @apply flex flex-col gap-2.5;
}

.fields_children {
  @apply flex-row;
}

.fields__button {
  @apply text-primary transition-all hover:text-primary-dark;
}
</style>
