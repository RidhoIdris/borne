<template>
  <div class="p-10">
    <div class="flex items-center justify-between">
      <UiTitle title="Cigarette électronique" />
      <UiFilter />
    </div>
    <div class="mt-10 grid grid-cols-3 gap-x-5 gap-y-10">
      <template
        v-for="product in Array.from({ length: 10 }, (_, i) => i + 1)"
        :key="product"
      >
        <div class="shadow-productCard overflow-hidden rounded-[32px] bg-white">
          <NuxtImg
            width="320"
            height="320"
            src="https://s3-alpha-sig.figma.com/img/6c67/0be0/c0fb8244250889a3d9f317da949214e9?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ckwaa9yrzvbm7OqvVgJiLHNWpq3OeB2wXdv0OKnQaxFZOf9cwyjrbsrji9Y8h7w5M1xcuP8iNQVjRsCDozV7Fp4V6~cFuGYyCvdGr2ILJk~S~qr3-V2F5vMRSf~fG0aop9bkI5TOLW8d0zZu5LISedsczJ2wARHNG~78iZJF1uZb6I8vARXlc7Hlb7~m0X585rgUQwV3ZXwobJNMW-07hm2A5Wi4llnbfQs0eRGEAjl0wW56deU3qNhial3EV1WmXaZNqiLxibKs0LOKGYx0NpDmERn22HwvlOd-x6EZhK98G0ej~d5rmY4rIsVDFBPl4yFE0T7GtLNKk6wIV4rfYQ__"
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
