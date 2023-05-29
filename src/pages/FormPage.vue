<script setup lang="ts">
import MyButton from "../components/UI/MyButton/MyButton.vue";
import InfoFields from "../components/InfoFields/InfoFields.vue";
import { computed, onMounted, ref } from "vue";
import { Info, InfoValue } from "../types/types";
import { useInfoStore } from "../stores/InfoStore";
import MyNotification from "../components/UI/MyNotification/MyNotification.vue";

const store = useInfoStore();

const personalInfo = ref<Info>({
  name: "",
  age: "",
});
const childrenInfo = ref<Info[]>([]);

onMounted(() => {
  personalInfo.value = Object.assign({}, store.personalInfo);
  childrenInfo.value = Array.from(store.childrenInfo);
});

const isNotificationVisible = ref(false);
const isValid = computed(() => {
  const personalInvoValid = personalInfo.value.age && personalInfo.value.name;
  const childrenInfoValid = childrenInfo.value.filter(
    (el) => el.age && el.name
  );
  return !!(
    (childrenInfoValid && personalInvoValid) ||
    (!childrenInfo.value.length && personalInvoValid)
  );
});
const notificationText = computed(() => {
  return isValid.value ? "Данные сохранены" : "Не все поля заполнены";
});
const changeNotificationVisible = () => {
  isNotificationVisible.value = true;
  setTimeout(() => {
    isNotificationVisible.value = false;
  }, 1000);
};

const updatePersonalInfo = (value: InfoValue, newValue: string) => {
  personalInfo.value[value] = newValue;
};
const updateChildrenInfo = (value: InfoValue, newValue: string, id: number) => {
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

const saveResult = () => {
  if (isValid.value) {
    store.updatePersonalInfo(personalInfo.value);
    store.updateChildrenInfo(childrenInfo.value);
    changeNotificationVisible();
  } else {
    changeNotificationVisible();
  }
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
          <img src="../assets/icons/add.svg" alt="add-icon" />
          Добавить ребёнка
        </MyButton>
      </div>
      <ul class="info__children-list">
        <TransitionGroup name="list">
          <InfoFields
            v-for="item in childrenInfo"
            :info="item"
            :key="item.id"
            variation="children"
            @update-values="updateChildrenInfo"
            @remove-child="removeChild"
          />
        </TransitionGroup>
      </ul>
    </div>
    <MyButton @click="saveResult">Сохранить</MyButton>
  </form>
  <Transition name="notification-slide">
    <MyNotification
      v-if="isNotificationVisible"
      :text="notificationText"
      :is-error="!isValid"
    />
  </Transition>
</template>

<style scoped>
.form {
  @apply flex flex-col items-start gap-8 w-full max-w-2xl px-5;
}

.form__info {
  @apply flex flex-col gap-5 w-full;
}

.form__info h2 {
  @apply font-medium;
}

.info__header {
  @apply flex justify-between transition-all duration-1000;
}

.info__children-list {
  @apply flex flex-col gap-2.5;
}

.notification-slide-enter-active,
.notification-slide-leave-active {
  @apply transition-all;
}

.list-enter-active,
.list-leave-active {
  @apply transition-all;
}
.list-enter-from,
.list-leave-to {
  @apply -translate-x-8 opacity-0;
}

.notification-slide-enter-from,
.notification-slide-leave-to {
  @apply translate-y-8 opacity-0;
}
</style>
