<script setup lang="ts">
import { clsxm } from "~/libs/helpers";

const props = defineProps<{
  icon?: string;
  label?: string;
  class?: string;
  iconClass?: string;
  size?: "small" | "large";
}>();

const buttonClass = clsxm(
  "flex items-center justify-center gap-2 rounded-full h-[50px] font-medium text-base border-[3px] border-current-text px-5 py-4 text-current-text transition-all",
  { "hover:scale-95": true, "active:scale-100": true },
  props.size === "large" && "h-[70px] font-semibold text-2xl",
  props.class ? props.class : "",
);

const iconClass = clsxm(
  "-mb-[3px] text-lg",
  props.size === "large" && "text-[26px]",
  props.iconClass ? props.iconClass : "",
);
</script>

<template>
  <button :class="buttonClass">
    <NuxtIcon v-if="props.icon" :class="iconClass" :name="props.icon" />
    <span v-if="props.label">{{ props.label }}</span>
    <slot></slot>
  </button>
</template>
