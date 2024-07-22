<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
defineProps<{
  activateCallback: any;
}>();

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

const alert = useAlertStore();

const showAlert = () => {
  alert.show({
    title: "Création du ticket",
    message: "Votre panier a bien été transmis en caisse !",
    icon: "ticket",
  });
};
</script>
<template>
  <UiTitle title="Identification" />
  <div
    class="mt-10 gap-[60px] flex items-center flex-col justify-center text-center"
  >
    <NuxtIcon name="ticket" class="text-[180px] mt-[160px]" :filled="true" />
    <h1>
      “ <span class="uppercase text-purple-vapo font-bold">Thomas</span> ”
    </h1>
    <table
      class="w-full text-current-text shadow-[0px_4px_9px_0px_#00000033] rounded-xl overflow-hidden"
    >
      <thead>
        <tr class="bg-[#C8C8C7] rounded-t overflow-hidden">
          <th class="p-5 font-semibold text-xl text-left">Produit</th>
          <th class="p-5 font-semibold text-xl text-center">Qté</th>
          <th class="p-5 font-semibold text-xl text-right">Prix</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, itemIdx) in cartsData"
          :key="itemIdx"
          class="border-b"
        >
          <td class="p-5 text-left text-xl">{{ item.title }}</td>
          <td class="p-5 text-xl">{{ item.quantity }}</td>
          <td class="p-5 text-right font-semibold text-xl">
            {{ item.price }} €
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="bg-[#F3F3F3]">
          <td colspan="2" class="p-5 font-semibold text-xl text-left">Total</td>
          <td class="p-5 font-semibold text-xl text-right text-purple-vapo">
            {{ cartsData.reduce((acc, item) => acc + item.price, 0) }} €
          </td>
        </tr>
      </tfoot>
    </table>
    <UiButton
      label="Générer votre commande en caisse"
      icon="ticket"
      class="text-green border-green"
      @click="showAlert()"
    />
  </div>
</template>
