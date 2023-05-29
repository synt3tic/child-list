<script setup lang="ts">
import { ref } from "vue";
import InfoFields from "../components/InfoFields/InfoFields.vue";
import { useInfoStore } from "../stores/InfoStore";
import { Info } from "../types/types";

const store = useInfoStore();

const personalInfo = ref<Info>(store.myInfo);
const childrenInfo = ref<Info[]>(store.kidsInfo);
</script>
<template>
  <div v-if="personalInfo.age || childrenInfo[0]" class="preview">
    <div class="preview__info">
      <h2>Персональные данные</h2>
      <InfoFields :info="personalInfo" :editable="false" />
    </div>
    <div v-if="childrenInfo.length" class="preview__info">
      <div class="info__header">
        <h2>Дети</h2>
      </div>
      <InfoFields
        v-for="item in childrenInfo"
        :info="item"
        :key="item.id"
        :editable="false"
      />
    </div>
  </div>
  <p v-else>Вы не внесли данные</p>
</template>

<style scoped>
.preview {
  @apply flex flex-col items-start gap-8 w-full max-w-2xl px-5;
}

.preview__info {
  @apply flex flex-col gap-5 w-full font-bold;
}

.info__header {
  @apply flex justify-between;
}
</style>
