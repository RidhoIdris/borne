<script setup lang="ts">
const colors = ref([
  { value: "Rétro", text: "Rétro" },
  { value: "Noir", text: "Noir" },
  { value: "Bleu", text: "Bleu" },
  { value: "Silver", text: "Silver" },
]);

const qty = ref([
  { value: "1", text: "1" },
  { value: "2", text: "2" },
  { value: "3", text: "3" },
  { value: "4", text: "4" },
]);
</script>
<template>
  <div>
    <div class="flex items-center justify-between">
      <h2 class="text-orange leading-[0.95]">Sur commande</h2>
      <h1 class="font-bold leading-[0]">59,90 €</h1>
    </div>
    <div class="mx-auto w-[124px] h-0.5 bg-light-grey my-5"></div>
    <div class="flex flex-col gap-5">
      <h3 class="text-anthracite-grey">Description :</h3>
      <p class="font-light text-current-text">
        Lost Vape développe sa gamme Centaurus avec la nouvelle box Centaurus
        M200 ! Ultra design et travaillée, elle est entièrement conçue en
        alliage d'aluminium et en acier inoxydable. Si son format reste assez
        rectangulaire avec des dimensions de 93 x 56,7 x 26 mm pour un poids de
        152 g., elle reste agréable en main et ergonomique. Les panneaux
        latéraux forment de jolies gravures au centre desquels on peut
        distinguer le désormais célèbre centaure de la marque. De plus, ces
        panneaux sont magnétiques et donc interchangeables !
      </p>
    </div>
    <div class="flex flex-col gap-10px mt-5">
      <h3 class="text-anthracite-grey">Couleurs :</h3>
      <UiDropdown :options="colors" placeholder="Sélectionner un couleurs" />
    </div>
    <div class="flex gap-5 mt-12">
      <UiDropdown class="w-[150px]" :options="qty" placeholder="Qté" />
      <UiButton
        label="Ajouter au panier"
        icon="cart"
        icon-class="text-2xl"
        size="large"
        class="w-full border-red text-red font-semibold text-2xl"
      />
    </div>
  </div>
</template>
