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
}>();
const selected = ref();

const buttonClass = clsxm(
  "flex items-center w-full h-[68px] justify-between border-[3px] border-primary bg-white rounded-full overflow-hidden",
  props.class ? props.class : "",
);
</script>

<template>
  <div class="relative">
    <Listbox v-model="selected">
      <ListboxButton v-slot="{ open }" :class="buttonClass">
        <span
          class="p-5 font-light"
          :class="selected?.value ? 'text-current-text' : 'text-border-grey'"
        >
          {{ selected?.text ?? props.placeholder }}
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
          class="bg-white absolute z-20 w-full rounded-3xl shadow-[0px_4px_9px_0px_#00000033]"
        >
          <ListboxOption
            v-for="item in props.options"
            :key="item.value"
            class="h-[68px] px-5 border-b border-border-grey flex items-center hover:font-medium text-current-text hover:bg-[#F3F3F3] cursor-pointer"
            :value="item"
          >
            {{ item?.text }}
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </Listbox>
  </div>
</template>
