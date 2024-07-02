<script setup lang="ts">
const props = defineProps<{
  icon?: string;
  label?: string;
  class?: string;
}>();

const buttonClass = useTailwindMerge(
  "flex items-center justify-center gap-2 rounded-full border-[3px] border-current-text px-5 py-4 font-semibold text-current-text transition-all",
  { "hover:scale-95": true, "active:scale-100": true },
  props.class ? props.class : "",
);
</script>

<template>
  <button :class="buttonClass">
    <NuxtIcon v-if="props.icon" class="-mb-[3px] text-lg" :name="props.icon" />
    <span v-if="props.label">{{ props.label }}</span>
    <slot></slot>
  </button>
</template>
