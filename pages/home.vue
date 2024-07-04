<script setup lang="ts">
const collections = [
  {
    tile: "Cigarettes electroniques",
    icon: "cigarettes",
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

const footers = [
  [
    {
      title: "Premier réseau de magasins de e-cigarette",
      icon: "top",
    },
    {
      title: "Une équipe de spécialistes à votre écoute",
      icon: "audience",
    },
  ],
  [
    {
      title: "Le meilleur en France pour le matériel de vapotage",
      icon: "cigarettes",
    },
    {
      title: "Des boutiques près de chez vous pour vous conseiller",
      icon: "magasin",
    },
  ],
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
      class="mt-10 grid grid-cols-1 divide-y divide-[#C8C8C7] border-t-4 border-primary bg-[#464644] px-10 text-white"
    >
      <div
        v-for="(footer, footerIdx) in footers"
        :key="footerIdx"
        class="grid grid-cols-2 py-5 divide-x-4 divide-primary"
      >
        <div
          v-for="(footerItem, footerItemIdx) in footer"
          :key="footerItemIdx"
          class="flex items-center gap-5 first:pr-10 last:pl-10"
        >
          <NuxtIcon
            :name="footerItem.icon"
            class="text-black-vapo text-6xl flex items-center justify-center w-[60px] h-[60px]"
          />
          <h3 class="text-xl text-white font-medium">{{ footerItem.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
