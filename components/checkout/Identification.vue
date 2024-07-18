<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
defineProps<{
  activateCallback: any;
}>();
const isShowKeyboard = ref(false);

const input = ref("");
</script>
<template>
  <UiTitle title="Identification" />
  <div
    class="mt-10 gap-[60px] max-w-2xl mx-auto flex items-center flex-col justify-center text-center"
  >
    <NuxtIcon name="clients" class="text-[180px] mt-[160px]" :filled="true" />
    <h3 class="">Veuillez renseigner votre prénom</h3>
    <InputText
      v-model="input"
      placeholder="Prénom"
      class="w-full placeholder:italic rounded-full"
      @focus="isShowKeyboard = true"
    />
    <UiButton
      label="Valider votre identifiant"
      icon="check"
      class="text-green border-green"
      @click="activateCallback(3)"
    />
  </div>
  <Sidebar
    v-model:visible="isShowKeyboard"
    :show-close-icon="false"
    position="bottom"
  >
    <UiKeyboard :input="input" @on-change="(e) => (input = e)" />
  </Sidebar>
</template>
