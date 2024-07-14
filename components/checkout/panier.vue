<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
defineProps<{
  activateCallback: any;
}>();

const isEmpty = ref(true);

const cartsData = ref([
  {
    title: "Cartouches Pods ELFA Pro 2ml ElfBar",
    price: 8.9,
    quantity: 1,
    image: "/products/product-1.jpg",
  },
  {
    title: "Fraise Kiwi Furiosa Classics 50 ml",
    price: 19.9,
    quantity: 1,
    image: "/products/product-1.jpg",
  },
  {
    title: "Fraise Des Bois Le French Liquide Sensation Nature 10ml",
    price: 5.9,
    quantity: 1,
    image: "/products/product-1.jpg",
  },
  {
    title: "Kit Aegis Nano 2 GeekVape",
    price: 36.9,
    quantity: 1,
    image: "/products/product-1.jpg",
  },
  {
    title: "Cartouches Pods ELFA Pro 2ml ElfBar",
    price: 8.9,
    quantity: 1,
    image: "/products/product-1.jpg",
  },
  {
    title: "Fraise Kiwi Furiosa Classics 50 ml",
    price: 19.9,
    quantity: 1,
    image: "/products/product-1.jpg",
  },
]);

const quantity = ref([
  { value: "1", text: "1" },
  { value: "2", text: "2" },
  { value: "3", text: "3" },
  { value: "4", text: "4" },
]);
</script>
<template>
  <UiTitle title="Panier" />
  <div
    v-if="isEmpty"
    class="mt-10 flex items-center flex-col justify-center text-center"
  >
    <NuxtIcon name="empty-panier" class="text-[180px]" :filled="true" />
    <h3 class="my-[60px]">Votre panier est vide pour le moment...</h3>
    <UiButton
      label="Commencer vos achats"
      icon="cigarettes"
      size="large"
      class="text-purple-vapo border-purple-vapo"
      @click="isEmpty = false"
    />
  </div>
  <div v-else class="mt-10">
    <div>
      <div class="relative">
        <div
          class="absolute h-[10px] w-full rotate-180 bg-filterBorder z-10"
        ></div>
        <div
          class="absolute bottom-0 h-[10px] w-full bg-filterBorder z-10"
        ></div>
        <div class="h-[774px] overflow-auto">
          <template v-for="(item, itemIdx) in cartsData" :key="itemIdx">
            <div
              class="p-5 flex items-center justify-between border-t border-light-grey"
            >
              <div class="flex items-stretch justify-center gap-5">
                <Image
                  :alt="item.title"
                  :src="item.image"
                  class="size-[164px] border-2 border-purple-vapo"
                />
                <div class="flex flex-col justify-between py-8">
                  <h3>{{ item.title }}</h3>
                  <h3>{{ item.price }} €</h3>
                </div>
              </div>
              <div class="flex flex-col items-stretch justify-center gap-5">
                <h1 class="text-right">
                  {{
                    new Intl.NumberFormat("en-US", {
                      style: "decimal",
                      minimumFractionDigits: 2,
                    }).format(item.price * Number(item.quantity)) + " €"
                  }}
                </h1>
                <UiDropdown
                  class="w-[150px]"
                  :options="quantity"
                  :selected="
                    quantity.find(
                      (q) => q.value.toString() === item.quantity.toString(),
                    )
                  "
                  placeholder="Qté"
                  @update:selected="(value) => (item.quantity = value.value)"
                />
              </div>
            </div>
          </template>
        </div>
      </div>
      <div
        class="flex items-center h-[70px] justify-between p-5 mt-5 bg-[#F3F3F3]"
      >
        <h2>Total</h2>
        <h1 class="text-purple-vapo">
          {{
            cartsData
              .reduce((total, item) => {
                return total + item.price * item.quantity;
              }, 0)
              .toFixed(2) + " €"
          }}
        </h1>
      </div>
      <div class="flex items-center justify-end mt-10">
        <UiButton
          size="small"
          label="Valider votre panier"
          class="text-green border-green"
          icon="check"
          @click="activateCallback(2)"
        />
      </div>
    </div>
  </div>
  <div class="mt-[120px]">
    <CheckoutRecommended />
  </div>
</template>
