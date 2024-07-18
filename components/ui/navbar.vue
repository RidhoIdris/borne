<script setup lang="ts">
const isShowMenu = ref(false);
</script>
<template>
  <div class="fixed max-w-[1080px] w-full left-1/2 -translate-x-1/2 top-0 z-20">
    <div
      class="flex h-[68px] items-center justify-between border-b-4 border-primary bg-white px-10 py-4 shadow-[0px_4px_9px_0px_#00000033]"
    >
      <NuxtLink to="/">
        <Image src="/logo-text.png" class="w-[320px]" />
      </NuxtLink>
      <div class="flex items-center gap-10">
        <NuxtIcon name="search" class="cursor-pointer text-[34px]" />
        <NuxtLink href="/checkout">
          <NuxtIcon name="cart" class="cursor-pointer text-[34px]" />
        </NuxtLink>
        <button @click="isShowMenu = !isShowMenu">
          <NuxtIcon
            :name="!isShowMenu ? 'menu' : 'close'"
            class="cursor-pointer text-[34px]"
          />
        </button>
      </div>
    </div>
    <div class="overflow-x-hidden relative">
      <UiMenu
        :is-show-menu="isShowMenu"
        :set-is-show-menu="(e) => (isShowMenu = e)"
      />
    </div>
  </div>
</template>
