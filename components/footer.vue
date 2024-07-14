<script setup lang="ts">
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
</template>
