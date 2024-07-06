<template>
  <div
    class="sticky top-0 z-20 flex h-[68px] items-center justify-between border-b-4 border-primary bg-white px-10 py-4 shadow-[0px_4px_9px_0px_#00000033]"
  >
    <NuxtLink to="/">
      <Image src="/logo-text.png" class="w-[320px]" />
    </NuxtLink>
    <div class="flex items-center gap-10">
      <NuxtIcon name="search" class="cursor-pointer text-[34px]" />
      <NuxtLink href="/checkout">
        <NuxtIcon name="cart" class="cursor-pointer text-[34px]" />
      </NuxtLink>
      <NuxtIcon name="menu" class="cursor-pointer text-[34px]" />
    </div>
  </div>
</template>
