<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <div class="p-10">
    <div class="flex items-center justify-between">
      <div>
        <h2>Box Centaurus M200 Lost Vape</h2>
        <h3 class="text-[#939393]">200W, 2 accus 18650, atomiseurs 26mm max</h3>
      </div>
      <UiButton
        label="Retour"
        icon="arrow-left"
        @click="router.back()"
      ></UiButton>
    </div>

    <div class="py-10 flex gap-8">
      <ProductsGalery />
      <ProductsDescriptions />
    </div>
    <ProductsAssociated />
    <ProductsFeatures />
  </div>
</template>
