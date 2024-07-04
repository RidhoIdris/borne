<script setup lang="ts">
const collections = [
  {
    tile: "Cigarettes electroniques",
    icon: "accessoires",
  },
  {
    tile: "E-liquides",
    icon: "liquides",
  },
  {
    tile: "DIY",
    icon: "diy",
  },
  {
    tile: "Accessoires",
    icon: "accessoires",
  },
];
</script>

<template>
  <!-- Hero -->
  <div>
    <div class="flex h-[600px] items-center justify-center bg-slate-100">
      <HomeHero />
    </div>
    <h1 class="my-10 text-center uppercase">
      Parcourez notre catalogue produit
    </h1>
    <div class="mx-10 grid grid-cols-2 gap-[55px] px-10">
      <template
        v-for="(collection, collectionsIdx) in collections"
        :key="collectionsIdx"
      >
        <NuxtLink
          :href="'/products?collection=' + collection.tile"
          class="flex h-[428px] w-[428px] flex-col items-center justify-center relative"
        >
          <img
            src="/home/collections-bg.png"
            class="w-full h-full absolute inset-0 z-0"
          />
          <NuxtIcon
            class="relative z-10 text-primary text-[86px]"
            :name="collection.icon"
          />
          <h1 class="relative z-10 text-center">{{ collection.tile }}</h1>
        </NuxtLink>
      </template>
    </div>
    <div
      class="mt-10 flex items-center justify-center gap-5 border-t-4 border-primary bg-[#464644] px-10 py-5 text-white"
    >
      footer
    </div>
  </div>
</template>
