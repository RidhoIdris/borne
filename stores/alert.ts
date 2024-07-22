/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from "pinia";

export const useAlertStore = defineStore("alertStore", {
  state: () => {
    return {
      visible: false,
      content: {
        title: "",
        message: "",
        icon: "",
      },
    };
  },
  actions: {
    show({
      title = "",
      message = "",
      icon = "empty-panier",
    }: {
      title?: string;
      message?: string;
      icon?: string;
    }) {
      this.visible = true;
      this.content = { title, message, icon };
    },
    hide() {
      this.visible = false;
      this.content = { title: "", message: "", icon: "" };
    },
  },
});
