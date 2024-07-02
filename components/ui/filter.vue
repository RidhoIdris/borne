<script lang="ts" setup>
const visible = ref(false);
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
        <div
          v-for="(filter, filterIndex) in [
            'Marques',
            'Prix',
            'Catégories',
            'Saveurs',
            'Taux de nicotine',
            'Couleurs',
          ]"
          :key="filterIndex"
          :class="{
            'flex cursor-pointer items-center justify-between gap-2 border-t border-[#C8C8C7] p-5 hover:bg-[#C8C8C7]/20': true,
            'border-b': filterIndex === 5,
          }"
        >
          <span class="font-semibold text-current-text">{{ filter }}</span>
          <NuxtIcon class="text-2xl text-current-text" name="arrow-down" />
        </div>
      </div>

      <template #footer>
        <div class="px-[30px]">
          <div class="h-[10px] w-full bg-filterBorder"></div>
          <div class="flex items-center justify-between gap-2 py-[30px]">
            <UiButton
              class="border-red text-red"
              label="Tout effacer"
              icon="trash"
            >
            </UiButton>
            <UiButton
              class="border-green text-green"
              label="Voir les résultats"
              icon="check"
            >
            </UiButton>
          </div>
        </div>
      </template>
    </Sidebar>
  </div>
</template>
