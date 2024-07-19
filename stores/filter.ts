/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from "pinia";

export const defaultFilters = [
  {
    title: "Marques",
    type: "checkbox",
    model: "",
    options: [
      { label: "Aspire", value: "aspire" },
      { label: "Bp mods", value: "bpmods" },
      { label: "creavap", value: "creavap" },
      { label: "Da one", value: "daone" },
      { label: "Dotmod", value: "dotmod" },
    ],
  },
  {
    title: "Prix",
    type: "range",
    model: [25, 150],
    options: [],
  },
  {
    title: "Catégories",
    type: "checkbox",
    model: "",
    options: [
      { label: "Aspire", value: "aspire" },
      { label: "Bp mods", value: "bpmods" },
      { label: "creavap", value: "creavap" },
      { label: "Da one", value: "daone" },
      { label: "Dotmod", value: "dotmod" },
    ],
  },
  {
    title: "Saveurs",
    type: "checkbox",
    model: "",
    options: [
      { label: "Aspire", value: "aspire" },
      { label: "Bp mods", value: "bpmods" },
      { label: "creavap", value: "creavap" },
      { label: "Da one", value: "daone" },
      { label: "Dotmod", value: "dotmod" },
    ],
  },
  {
    title: "Taux de nicotine",
    type: "checkbox",
    model: "",
    options: [
      { label: "Aspire", value: "aspire" },
      { label: "Bp mods", value: "bpmods" },
      { label: "creavap", value: "creavap" },
      { label: "Da one", value: "daone" },
      { label: "Dotmod", value: "dotmod" },
    ],
  },
  {
    title: "Couleurs",
    type: "checkbox",
    model: "",
    options: [
      { label: "Orange", value: "bg-[#F57212]" },
      { label: "Marron", value: "bg-[#A16020]" },
      { label: "Jaune", value: "bg-[#FFD700]" },
      { label: "Rouge", value: "bg-[#D90000]" },
      { label: "Vert", value: "bg-[#22C55E]" },
    ],
  },
];

export const useFilterStore = defineStore("filterStore", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      filters: defaultFilters,
      filtered: [] as any,
    };
  },
  actions: {
    removeFilter(index: number) {
      this.filtered = this.filtered.filter((_: any, i: number) => i !== index);
    },
  },
});
