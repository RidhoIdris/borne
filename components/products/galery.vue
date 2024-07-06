<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore from "swiper";

import "swiper/css";
import { Thumbs } from "swiper/modules";

const swiperThumbsRef = ref<SwiperCore>();
</script>

<template>
  <div class="flex flex-col gap-5">
    <div
      class="h-[460px] w-[460px] bg-white border-2 overflow-hidden border-[#C8C8C7] rounded-xl flex items-center justify-center"
    >
      <Swiper
        :slides-per-view="1"
        pagination
        :loop="false"
        class="h-full relative"
        :modules="[Thumbs]"
        :thumbs="{ swiper: swiperThumbsRef }"
      >
        <SwiperSlide v-for="image in 8" :key="image">
          <Image
            preview
            class="w-full h-full"
            image-class="object-contain w-full h-full"
            src="/products/product-1.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    <Swiper
      :slides-per-view="5"
      pagination
      :loop="false"
      :space-between="20"
      :modules="[Thumbs]"
      class="w-[460px]"
      :grab-cursor="true"
      @swiper="(swiper) => (swiperThumbsRef = swiper)"
    >
      <template v-for="image in 8" :key="image">
        <SwiperSlide
          class="!h-[76px] !w-[76px] border-2 bg-white overflow-hidden border-[#C8C8C7] rounded-lg flex items-center justify-center"
        >
          <Image
            class="w-full h-full"
            image-class="object-contain w-full h-full"
            src="/products/product-1.jpg"
          />
        </SwiperSlide>
      </template>
    </Swiper>
  </div>
</template>

<style>
.swiper-slide-thumb-active {
  border-color: #793282 !important;
}
</style>
