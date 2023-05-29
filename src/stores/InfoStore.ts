import { defineStore } from "pinia";
import { ref } from "vue";
import { Info } from "../types/types";

export const useInfoStore = defineStore("info", () => {
  const myInfo = ref<Info>({
    name: "",
    age: "",
  });

  const kidsInfo = ref<Info[]>([]);

  const updateMyInfo = (info: Info) => {
    myInfo.value = Object.assign(info);
  };

  const updateKidsInfo = (info: Info[]) => {
    kidsInfo.value = Array.from(info);
  };

  return {
    myInfo,
    kidsInfo,
    updateMyInfo,
    updateKidsInfo,
  };
});
