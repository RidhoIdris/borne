<script setup lang="ts"></script>

<template>
  <!-- Hero -->
  <div>
    <div class="flex h-[600px] items-center justify-center bg-slate-100">
      <h1>Hero</h1>
    </div>
    <h1 class="my-10 text-center">Parcourez notre catalogue produit</h1>
    <div class="mx-10 grid grid-cols-2 gap-[55px] border px-10">
      <template
        v-for="card in [
          'Cigarettes electroniques',
          'E-liquides',
          'DIY',
          'Accessoires',
        ]"
        :key="card"
      >
        <NuxtLink
          href="/products"
          class="flex h-[428px] w-[428px] items-center justify-center border-4 border-primary"
        >
          <p>{{ card }}</p>
        </NuxtLink>
      </template>
    </div>
    <div
      class="mt-10 flex items-center justify-center gap-5 border-t-4 border-primary bg-[#464644] px-10 py-5 text-white"
    >
      footer
    </div>
  </div>
</template>
