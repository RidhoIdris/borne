<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
</script>
<template>
  <div class="text-current-text">
    <h3>Produits recommandés :</h3>
    <Swiper
      :slides-per-view="5"
      pagination
      :loop="false"
      :space-between="20"
      :grab-cursor="true"
      class="mt-5"
    >
      <template v-for="image in 8" :key="image">
        <SwiperSlide class="flex flex-col items-center justify-center">
          <div
            class="size-[184px] border-2 border-light-grey rounded-lg overflow-hidden"
          >
            <Image
              class="w-full h-full"
              image-class="object-contain w-full h-full"
              src="/products/product-3.jpg"
            />
          </div>
          <p class="text-center font-light mt-10px">
            Kit Aegis Nano 2 GeekVape
          </p>
          <UiButton
            size="small"
            label="Ajouter au panier"
            class="text-red border-red mt-10px"
          />
        </SwiperSlide>
      </template>
    </Swiper>
  </div>
</template>
