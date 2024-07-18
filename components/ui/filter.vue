<script lang="ts" setup>
const visible = ref(false);
const activeTab = ref<number | null>(null);

const filters = reactive([
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
]);
</script>
<template>
  <div>
    <UiButton @click="visible = !visible">
      <NuxtIcon class="text-lg" name="filter" />
      <span>Filtrer</span>
    </UiButton>
    <Sidebar
      v-model:visible="visible"
      :show-close-icon="false"
      header="Right Drawer"
      position="right"
    >
      <template #header>
        <div class="relative flex w-full items-end gap-2">
          <h2>Filtrer par</h2>
          <div class="mb-2 h-0.5 w-full flex-1 bg-primary"></div>
          <NuxtIcon
            class="absolute -right-2 -top-2 cursor-pointer text-xl transition-all duration-500 hover:-rotate-180"
            name="close"
            @click="visible = false"
          />
        </div>
      </template>
      <div class="relative">
        <div
          class="absolute left-0 top-0 h-[10px] w-full rotate-180 bg-filterBorder"
        ></div>
        <template v-for="(filter, filterIndex) in filters" :key="filterIndex">
          <div class="p-5 border-b border-light-grey">
            <button
              class="flex text-current-text w-full font-semibold items-center justify-between"
              @click="
                activeTab = activeTab === filterIndex ? null : filterIndex
              "
            >
              <span>{{ filter.title }}</span>
              <NuxtIcon
                :class="[
                  'transform transition-transform text-[34px] duration-500',
                  {
                    'rotate-180': activeTab === filterIndex,
                  },
                ]"
                name="arrow-down"
              />
            </button>
            <div
              :class="[
                'overflow-hidden h-full transition-all ease-in-out duration-500',
                {
                  'max-h-0': activeTab !== filterIndex,
                  'max-h-[1000px]': activeTab === filterIndex,
                },
              ]"
            >
              <div
                v-if="filter.type === 'checkbox'"
                class="pt-5 flex flex-col gap-5"
              >
                <template
                  v-for="(option, optionIndex) in filter.options"
                  :key="optionIndex"
                >
                  <div class="flex items-center">
                    <Checkbox
                      v-model="filter.model"
                      :input-id="
                        filter.title + '_' + option.value + '_' + optionIndex
                      "
                      :name="filter.title"
                      :value="option.value"
                    />
                    <label
                      :for="
                        filter.title + '_' + option.value + '_' + optionIndex
                      "
                      class="ml-10px text-current-text cursor-pointer"
                    >
                      {{ option.label }}
                    </label>
                  </div>
                </template>
              </div>
              <div
                v-else-if="filter.type === 'range'"
                class="pb-5 pt-8 pl-3 pr-5"
              >
                <Slider
                  v-model="filter.model"
                  :step="5"
                  :min="0"
                  :max="200"
                  range
                  class="w-full"
                />
              </div>
            </div>
          </div>
        </template>
      </div>

      <template #footer>
        <div class="px-[30px]">
          <div class="h-[10px] w-full bg-filterBorder"></div>
          <div class="flex items-center justify-between gap-2 py-[30px]">
            <UiButton
              class="border-red text-red"
              label="Tout effacer"
              icon="trash"
              @click="visible = !visible"
            >
            </UiButton>
            <UiButton
              class="border-green text-green"
              label="Voir les résultats"
              icon="check"
              @click="visible = !visible"
            >
            </UiButton>
          </div>
        </div>
      </template>
    </Sidebar>
  </div>
</template>
