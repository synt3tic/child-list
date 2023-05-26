<script setup lang="ts">
import { computed } from "vue";
import MyInput from "../UI/MyInput/MyInput.vue";
import { Props } from "./types";

const props = withDefaults(defineProps<Props>(), {
  editable: true,
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

const staticInfo = computed(() => {
  const correctYear = (number: number, titles = ["год", "года", "лет"]) => {
    const cases: number[] = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  };
  return `${props.info.name}, ${props.info.age} ${correctYear(
    +props.info.age
  )}`;
});
</script>

<template>
  <fieldset v-if="props.editable" :class="classList">
    <MyInput :value="props.info.name" label="Имя" @update-value="updateName" />
    <MyInput
      :value="props.info.age"
      label="Возраст"
      @update-value="updateAge"
      type="number"
    />
    <button
      v-if="props.variation === 'children'"
      class="fields__button"
      @click="removeChild"
    >
      Удалить
    </button>
  </fieldset>
  <div v-else class="fields_readonly">
    {{ staticInfo }}
  </div>
</template>

<style scoped>
.fields {
  @apply flex flex-col gap-2.5;
}

.fields_readonly {
  @apply w-fit px-5 py-2.5 bg-gray-l rounded;
}

.fields_children {
  @apply flex-row;
}

.fields__button {
  @apply text-primary transition-all hover:text-primary-dark;
}
</style>
