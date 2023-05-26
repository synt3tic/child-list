import { defineStore } from "pinia";
import { ref } from "vue";
import { Info } from "../types/types";

export const useInfoStore = defineStore("info", () => {
  const personalInfo = ref<Info>({
    name: "",
    age: "",
  });

  const childrenInfo = ref<Info[]>([]);

  const updatePersonalInfo = (info: Info) => {
    personalInfo.value = info;
  };

  const updateChildrenInfo = (info: Info[]) => {
    childrenInfo.value = info;
  };

  return {
    personalInfo,
    childrenInfo,
    updatePersonalInfo,
    updateChildrenInfo,
  };
});
