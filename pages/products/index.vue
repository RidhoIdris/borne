<script setup lang="ts">
import Image from "primevue/image";
import { slugify } from "~/libs/helpers";

const route = useRoute();
const collection = route.query.collection as string;
</script>

<template>
  <div class="p-10">
    <div class="flex items-center justify-between">
      <UiTitle :title="collection ?? ''" />
      <UiFilter />
    </div>
    <div class="mt-10 grid grid-cols-3 gap-x-5 gap-y-10">
      <template v-for="product in 12" :key="product">
        <div class="overflow-hidden rounded-[32px] bg-white shadow-productCard">
          <Image width="320" height="320" src="/products/product-1.jpg" />
          <div class="border-t border-[#939393] p-[10px] text-current-text">
            <span>Mods & boxs</span>
            <div class="mt-5 flex flex-col gap-3">
              <h4 class="font-semibold">Box Centaurus M200 Lost Vape</h4>
              <p class="text-[#939393]">
                Jusqu'à 200W et fonctionne avec deux accus 18650
              </p>
            </div>
            <h3 class="py-5 text-center text-2xl font-semibold">59,90 €</h3>
            <NuxtLink
              :href="'products/' + slugify('Box Centaurus M200 Lost Vape')"
              class="w-full"
            >
              <UiButton
                class="w-full border-primary text-primary"
                label="Voir le produit"
                icon="chevron-right"
              />
            </NuxtLink>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
