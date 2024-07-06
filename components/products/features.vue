<script lang="ts" setup>
const features = [
  {
    title: "Marque",
    description: "Lost Vape",
  },
  {
    title: "Couleur",
    description: "Noir, Bleu, Silver, Gunmetal, Rose, Or, Vert",
  },
  {
    title: "Type de matériels",
    description: "Mods & Boxs",
  },
  {
    title: "Type de mods",
    description: "Boxs électroniques",
  },
  {
    title: "Type de batteries",
    description: "2 accus",
  },
  {
    title: "Puissance maximum",
    description: "200W",
  },
  {
    title: "Connecteur de charge",
    description: "Chargement + Mise à jour",
  },
  {
    title: "Compatibilité atomiseurs",
    description: "26mm max.",
  },
  {
    title: "Connectique",
    description: "510",
  },
  {
    title: "Protections électroniques",
    description: "Oui",
  },
  {
    title: "Poids (en gramme)",
    description: "152g",
  },
  {
    title: "Dimensions (en mm)",
    description: "93 x 56,7 x 26 mm",
  },
  {
    title: "Modes de fonctionnement",
    description: "VW / RDA DIY",
  },
  {
    title: "Nom",
    description: "Box Centaurus M200",
  },
  {
    title: "Plage de puissance",
    description: "5-200W",
  },
  {
    title: "Écran",
    description: "5-TFT 0,96",
  },
];
</script>

<template>
  <div class="mt-10 text-current-text">
    <div class="flex items-end">
      <h2 class="whitespace-nowrap">Caractéristiques :</h2>
      <div class="h-0.5 w-full bg-purple-vapo rounded mb-2 ml-[5px]" />
    </div>
    <div class="mt-5">
      <template v-for="(feature, index) in features" :key="index">
        <div
          :class="{
            'border-b': index === features.length - 1,
          }"
          class="flex border-t border-light-grey"
        >
          <div class="w-[300px] font-semibold px-5 py-7 bg-[#F3F3F3]">
            {{ feature.title }}
          </div>
          <div class="flex-1 px-5 py-7 font-light bg-white">
            {{ feature.description }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
