<template>
  <div class="p-10">
    <div class="flex items-center justify-between">
      <UiTitle title="Cigarette électronique" />
      <UiFilter />
    </div>
    <div class="mt-10 grid grid-cols-3 gap-x-5 gap-y-10">
      <template
        v-for="product in Array.from({ length: 12 }, (_, i) => i + 1)"
        :key="product"
      >
        <div class="shadow-productCard overflow-hidden rounded-[32px] bg-white">
          <NuxtImg
            width="320"
            height="320"
            src="https://s3-alpha-sig.figma.com/img/86d8/3590/2b91b01e3b902d95b84ae261a93d5793?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k8rtrczxQ3AlQ9ljIYLpwxyxwjJa3Moyv5IN7QTiAxrniiMYkbRKDdfhZ~l6GgBGo92gYt7YHg3NtRiZb3qNOZUTOohlwPqSr1107tuM9MEIHx6H7dGAEgZ6qQMK-f9iljoXDqDddnj21sqMZQ3orKyZiyoq1zyBto6fiQzOeVQIUQDOpG~tjrEM7B3cULUOopN9Si9NoGXhHt~G2YbBvhcWyfAvCkQmlFWzKgR4ZmNOYdTgpUYT1-bvxDJIvCakMUj7GAzFMukyhfaa81njPVoR4lCRvWTY6JCywXOGv3QZK2yI9QZjeOY35B8sfrQMDHzvtS2CJOj9QJwR7w8v4w__"
          />
          <div class="border-t border-[#939393] p-[10px] text-current-text">
            <span>Mods & boxs</span>
            <div class="mt-5 flex flex-col gap-3">
              <h4 class="font-semibold">Box Centaurus M200 Lost Vape</h4>
              <p class="text-[#939393]">
                Jusqu'à 200W et fonctionne avec deux accus 18650
              </p>
            </div>
            <h3 class="py-5 text-center text-2xl font-semibold">59,90 €</h3>
            <div class="w-full">
              <UiButton
                class="w-full border-primary text-primary"
                label="Voir le produit"
                icon="chevron-right"
              ></UiButton>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
