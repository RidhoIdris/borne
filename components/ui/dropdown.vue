<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { clsxm } from "~/libs/helpers";

const props = defineProps<{
  options: {
    value: string | number;
    text: string;
  }[];
  placeholder: string;
  class?: string;
  selected?: {
    value: string | number;
    text: string;
  };
}>();

const selectedValue = ref(props.selected);

const emit = defineEmits(["update:selected"]);

// Watch for changes to selectedValue and emit an event to update the parent
watch(selectedValue, (newValue) => {
  emit("update:selected", newValue);
});

const buttonClass = clsxm(
  "flex items-center w-full h-[68px] justify-between border-[3px] border-primary bg-white rounded-full overflow-hidden",
  props.class ? props.class : "",
);
</script>

<template>
  <div class="relative">
    <Listbox v-model="selectedValue">
      <ListboxButton v-slot="{ open }" :class="buttonClass">
        <span
          class="p-5 font-light"
          :class="
            selectedValue?.value ? 'text-current-text' : 'text-border-grey'
          "
        >
          {{ selectedValue?.text ?? props.placeholder }}
        </span>
        <button
          class="w-[68px] h-[68px] bg-primary text-white rounded-full flex items-center justify-center text-4xl"
        >
          <NuxtIcon
            class="overflow-hidden w-9 h-9 transition-transform"
            :class="{
              'transform rotate-180': open,
            }"
            name="arrow-down"
          />
        </button>
      </ListboxButton>
      <transition
        leave-active-class="transition duration-300 ease-in-out"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="bg-white absolute z-20 w-full overflow-hidden rounded-3xl shadow-[0px_4px_9px_0px_#00000033]"
        >
          <ListboxOption
            v-for="item in props.options"
            :key="item.value"
            class="h-[68px] px-5 border-b border-border-grey last:border-b-0 flex items-center hover:font-medium text-current-text hover:bg-[#F3F3F3] cursor-pointer"
            :value="item"
          >
            {{ item?.text }}
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </Listbox>
  </div>
</template>
