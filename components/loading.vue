<script setup lang="ts">
const isLoading = useLoading();
</script>
<template>
  <transition name="fade">
    <div
      v-if="isLoading"
      :class="{ 'cursor-wait': isLoading }"
      class="animate-fade-in absolute left-0 top-0 z-[1102] flex h-screen w-full items-center justify-center overflow-hidden bg-white"
    >
      <Image src="/loading.png" class="h-[110px] w-[110px] animate-spin" />
    </div>
  </transition>
</template>
