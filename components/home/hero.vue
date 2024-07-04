<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore from "swiper";

import "swiper/css";

const swiperRef = ref<SwiperCore>();
const images = ["/hero/slide-1.jpg", "/hero/slide-2.jpg", "/hero/slide-3.jpg"];
</script>
<template>
  <Swiper
    :slides-per-view="1"
    pagination
    :loop="false"
    class="h-full relative"
    @swiper="(swiper) => (swiperRef = swiper)"
  >
    <template v-for="image in images" :key="image">
      <SwiperSlide>
        <Image
          class="h-full"
          image-class="h-full object-cover object-center"
          :src="image"
        />
      </SwiperSlide>
    </template>
    <div class="absolute bottom-[10px] left-1/2 -translate-x-1/2 z-10">
      <div class="flex items-center justify-center gap-[10px]">
        <div>
          <button
            class="w-8 rounded-full flex items-center justify-center p-2 bg-white/40 text-current-text"
            @click="swiperRef?.slidePrev()"
          >
            <i class="pi pi-angle-left"></i>
          </button>
        </div>
        <div
          class="p-2 bg-white/40 flex items-center justify-center gap-2 rounded-full"
        >
          <template v-for="swipeIndex in images.length" :key="swipeIndex">
            <button
              :class="{
                'bg-primary w-12': swipeIndex - 1 === swiperRef?.activeIndex,
                'bg-[#0E0E0E] w-[19px]':
                  swipeIndex - 1 !== swiperRef?.activeIndex,
              }"
              class="h-4 rounded-full transition-all"
              @click="swiperRef?.slideTo(swipeIndex - 1)"
            ></button>
          </template>
        </div>
        <div>
          <button
            class="w-8 rounded-full flex items-center justify-center p-2 bg-white/40 text-current-text"
            @click="swiperRef?.slideNext()"
          >
            <i class="pi pi-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  </Swiper>
</template>
