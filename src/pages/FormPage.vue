<script setup lang="ts">
import MyButton from "../components/UI/MyButton/MyButton.vue";
import InfoFields from "../components/InfoFields/InfoFields.vue";
import { ref } from "vue";
import { Info } from "../types/types";

const personalInfo = ref<Info>({
  name: "",
  age: "",
});
const updatePersonalInfo = (value: string, newValue: string) => {
  personalInfo.value[value] = newValue;
};

const childrenInfo = ref<Info[]>([]);
const updateChildrenInfo = (value: string, newValue: string, id: number) => {
  childrenInfo.value.map((el) => {
    if (el.id === id) {
      el[value] = newValue;
    }
    return el;
  });
};
const addChild = () => {
  const emptyInfo: Info = {
    id: +new Date(),
    name: "",
    age: "",
  };
  childrenInfo.value.push(emptyInfo);
};
const removeChild = (id: number) => {
  childrenInfo.value = childrenInfo.value.filter((el) => el.id !== id);
};
</script>
<template>
  <form class="form">
    <div class="form__info">
      <h2>Персональные данные</h2>
      <InfoFields :info="personalInfo" @update-values="updatePersonalInfo" />
    </div>
    <div class="form__info">
      <div class="info__header">
        <h2>Дети (макс. 5)</h2>
        <MyButton
          variation="transparent"
          @click="addChild"
          :disabled="childrenInfo.length > 4"
        >
          Добавить ребёнка
        </MyButton>
      </div>
      <InfoFields
        v-for="item in childrenInfo"
        :info="item"
        :key="item.id"
        variation="children"
        @update-values="updateChildrenInfo"
        @remove-child="removeChild"
      />
    </div>
    <MyButton>Сохранить</MyButton>
  </form>
</template>

<style scoped>
.form {
  @apply flex flex-col items-start gap-8 w-full max-w-2xl px-5;
}

.form__info {
  @apply flex flex-col gap-5 w-full;
}

.info__header {
  @apply flex justify-between;
}
</style>
