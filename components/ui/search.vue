<!-- eslint-disable vue/no-v-html -->
<script setup lang="ts">
const props = defineProps<{
  isShowSearch: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const isShowKeyboard = ref(false);

const disableScroll = () => {
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
};

const enableScroll = () => {
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
};

watch(
  () => props.isShowSearch,
  (newValue: boolean) => {
    if (newValue) {
      disableScroll();
    } else {
      enableScroll();
    }
  },
);

const items = [
  { name: "Fraise Kiwi Furiosa Classics", price: "19,90€" },
  { name: "Fraise Des Bois Sensation Nature", price: "5,90€" },
  { name: "Framboise Bleue Pitaya Ice Cool By Liquidarom", price: "5,90€" },
  { name: "Fraisiers Retro", price: "22,90€" },
  { name: "Vanille Custard Deluxe", price: "7,90€" },
  { name: "Menthe Glaciale Extra Fresh", price: "6,50€" },
  { name: "Pomme Verte Acidulée", price: "5,90€" },
  { name: "Cerise Noire Intense", price: "8,90€" },
  { name: "Ananas Tropical Sunset", price: "7,50€" },
  { name: "Citron Meringuée Gourmand", price: "9,90€" },
  { name: "Bubble Gum Nostalgie", price: "6,90€" },
  { name: "Caramel Beurre Salé", price: "8,50€" },
  { name: "Mangue Alphonso Royal", price: "10,90€" },
  { name: "Réglisse Intense Black Edition", price: "7,90€" },
];

const searchTerm = ref("");

const filteredItems = computed(() => {
  if (!searchTerm.value) return [];
  const lowercaseSearch = searchTerm.value.toLowerCase();
  return items.filter((item) =>
    item.name.toLowerCase().includes(lowercaseSearch),
  );
});

const highlightText = (text: string): string => {
  if (!searchTerm.value) return text;
  const regex = new RegExp(`(${searchTerm.value})`, "gi");
  return text.replace(regex, '<span class="text-primary">$1</span>');
};
</script>
<template>
  <Teleport to="body">
    <transition
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isShowSearch"
        class="bg-current-text/80 backdrop-blur max-w-[1080px] left-1/2 -translate-x-1/2 fixed inset-0 z-30 p-[30px] h-screen w-screen"
      >
        <div
          class="border relative flex flex-col overflow-y-auto border-dashed border-primary h-full p-5"
        >
          <NuxtIcon
            class="absolute right-5 top-5 cursor-pointer text-white text-[32px] transition-all duration-500 hover:-rotate-180"
            name="close"
            @click="emit('close')"
          />
          <div class="max-w-[680px] w-full mx-auto mt-[200px]">
            <div class="relative w-full">
              <InputText
                :value="searchTerm"
                placeholder="Rechercher"
                :class="[
                  'w-full pr-[70px] text-2xl font-medium placeholder:italic rounded-full',
                  {
                    '!border-[#464644]': !searchTerm,
                    '!border-primary': searchTerm,
                  },
                ]"
                @input="(e: any) => (searchTerm = e.target.value)"
                @focus="isShowKeyboard = true"
              />
              <button
                :class="[
                  'absolute top-0 right-0 size-[68px] rounded-full flex items-center justify-center',
                  {
                    '!bg-[#464644]': !searchTerm,
                    '!bg-primary': searchTerm,
                  },
                ]"
              >
                <NuxtIcon
                  :name="searchTerm ? 'arrow-left' : 'search'"
                  :class="[
                    'text-white text-[26px]',
                    {
                      'rotate-180': searchTerm,
                    },
                  ]"
                />
              </button>
            </div>
            <ul
              :class="[
                'mt-10 transition-all overflow-hidden ease-in-out duration-500 ',
                {
                  'max-h-0': filteredItems.length === 0,
                  'max-h-[3000px]': filteredItems.length > 0,
                },
              ]"
            >
              <li
                v-for="item in filteredItems"
                :key="item.name"
                class="mb-2 flex items-center justify-between py-5 last:border-b-0 border-white border-b"
              >
                <span
                  class="font-semibold text-white text-2xl"
                  v-html="highlightText(item.name)"
                ></span>
                <span class="font-semibold text-white text-2xl">{{
                  item.price
                }}</span>
              </li>
              <div v-if="filteredItems.length > 0" class="mx-auto mt-10">
                <UiButton
                  class="text-white border-white mx-auto"
                  label="Afficher le résultat de recherche"
                  icon="categories"
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
  <Sidebar
    v-model:visible="isShowKeyboard"
    :show-close-icon="false"
    position="bottom"
  >
    <UiKeyboard :input="searchTerm" @on-change="(e) => (searchTerm = e)" />
  </Sidebar>
</template>
