<script setup lang="ts">
import { slugify } from "~/libs/helpers";

const props = defineProps<{
  isShowMenu: boolean;
  setIsShowMenu: (value: boolean) => void;
}>();

const menus = reactive([
  {
    title: "Cigarettes électroniques",
    icon: "cigarettes",
    link: "#",
    child: [
      {
        title: "Kits & pods",
        link: `/products/${slugify("Kits & pods")}`,
      },
      {
        title: "Puff",
        link: `/products/${slugify("Puff")}`,
      },
      {
        title: "Résistances",
        link: `/products/${slugify("Résistances")}`,
      },
      {
        title: "Mods et box",
        link: `/products/${slugify("Mods et box")}`,
      },
      {
        title: "Clearomiseurs",
        link: `/products/${slugify("Clearomiseurs")}`,
      },
      {
        title: "Atomiseurs reconstructibles",
        link: `/products/${slugify("Atomiseurs reconstructibles")}`,
      },
    ],
  },
  {
    title: "E-liquides",
    icon: "liquides",
    link: "#",
    child: [
      {
        title: "Kits & pods",
        link: `/products/${slugify("Kits & pods")}`,
      },
      {
        title: "Puff",
        link: `/products/${slugify("Puff")}`,
      },
      {
        title: "Résistances",
        link: `/products/${slugify("Résistances")}`,
      },
      {
        title: "Mods et box",
        link: `/products/${slugify("Mods et box")}`,
      },
      {
        title: "Clearomiseurs",
        link: `/products/${slugify("Clearomiseurs")}`,
      },
      {
        title: "Atomiseurs reconstructibles",
        link: `/products/${slugify("Atomiseurs reconstructibles")}`,
      },
    ],
  },
  {
    title: "DIY",
    icon: "diy",
    link: "#",
    child: [
      {
        title: "Kits & pods",
        link: `/products/${slugify("Kits & pods")}`,
      },
      {
        title: "Puff",
        link: `/products/${slugify("Puff")}`,
      },
      {
        title: "Résistances",
        link: `/products/${slugify("Résistances")}`,
      },
      {
        title: "Mods et box",
        link: `/products/${slugify("Mods et box")}`,
      },
      {
        title: "Clearomiseurs",
        link: `/products/${slugify("Clearomiseurs")}`,
      },
      {
        title: "Atomiseurs reconstructibles",
        link: `/products/${slugify("Atomiseurs reconstructibles")}`,
      },
    ],
  },
  {
    title: "Accessoires",
    icon: "accessoires",
    link: "#",
    child: [
      {
        title: "Kits & pods",
        link: `/products/${slugify("Kits & pods")}`,
      },
      {
        title: "Puff",
        link: `/products/${slugify("Puff")}`,
      },
      {
        title: "Résistances",
        link: `/products/${slugify("Résistances")}`,
      },
      {
        title: "Mods et box",
        link: `/products/${slugify("Mods et box")}`,
      },
      {
        title: "Clearomiseurs",
        link: `/products/${slugify("Clearomiseurs")}`,
      },
      {
        title: "Atomiseurs reconstructibles",
        link: `/products/${slugify("Atomiseurs reconstructibles")}`,
      },
    ],
  },
]);

const isShowSubMenu = ref(false);
const subMenuActive = ref<number | null>(null);

watch(
  () => props.isShowMenu,
  (value) => {
    if (!value) {
      setTimeout(() => {
        subMenuActive.value = null;
        isShowSubMenu.value = false;
      }, 500);
    }
  },
);
</script>
<template>
  <div
    :class="[
      'bg-white h-[calc(100vh-68px)] transition-all overflow-hidden duration-500 ease-in-out shadow-[0px_4px_9px_0px_#00000033]',
      { 'max-h-0': !isShowMenu },
      { 'max-h-[2000px]': isShowMenu },
    ]"
  >
    <div class="p-10">
      <UiTitle title="nos produits" />
      <div class="mt-10">
        <template v-for="(menu, menuIdx) in menus" :key="menuIdx">
          <button
            class="flex cursor-pointer w-full items-center justify-between py-5 border-y border-light-grey"
            @click="
              isShowSubMenu = true;
              subMenuActive = menuIdx;
            "
          >
            <div class="flex items-center gap-5">
              <NuxtIcon :name="menu.icon" class="text-[60px]" filled />
              <span class="text-[32px] font-semibold text-current-text">{{
                menu.title
              }}</span>
            </div>
            <NuxtIcon
              name="arrow-left"
              class="text-[50px] text-current-text rotate-180"
            />
          </button>
        </template>
      </div>
    </div>
  </div>
  <div
    :class="[
      'bg-white h-[calc(100vh-68px)] transition-all absolute top-0 overflow-hidden w-full duration-500 ease-in-out',
      { '-translate-x-full': !isShowSubMenu },
      { 'translate-x-0': isShowSubMenu },
    ]"
  >
    <div class="p-10 relative">
      <svg
        width="279"
        height="118"
        viewBox="0 0 279 118"
        fill="none"
        class="absolute top-0 left-5 z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.05"
          d="M219.836 0H237.655L279 35.8908L267.519 96.5407L209.568 116.851L176.575 88.2098L173.269 105.671L138.092 118L109.883 93.5126L112.903 77.5568L56.9927 97.223L0 47.6358L9.01736 0H141.776L132.052 51.3692L152.03 44.3676L166.762 57.1562L174.579 15.8612L219.836 0Z"
          fill="#793282"
        />
      </svg>

      <div class="flex relative z-10 items-center gap-5">
        <button @click="isShowSubMenu = false">
          <NuxtIcon name="arrow-left" class="text-[50px] text-current-text" />
        </button>
        <UiTitle :title="menus[subMenuActive ?? -1]?.title" />
      </div>
      <div class="mt-10">
        <template
          v-for="(menu, menuIdx) in menus[subMenuActive ?? -1]?.child"
          :key="menuIdx"
        >
          <NuxtLink
            :href="menu.link"
            class="flex cursor-pointer w-full items-center justify-between py-5 border-y border-light-grey"
            @click="setIsShowMenu(false)"
          >
            <div class="flex items-center gap-5">
              <!-- <NuxtIcon :name="menu." class="text-[60px]" filled /> -->
              <span class="text-[32px] font-semibold text-current-text">{{
                menu.title
              }}</span>
            </div>
            <NuxtIcon
              name="arrow-left"
              class="text-[50px] text-current-text rotate-180"
            />
          </NuxtLink>
        </template>
      </div>
    </div>
  </div>
</template>
