<script setup lang="ts">
const alert = useAlertStore();
</script>
<template>
  <Dialog
    v-model:visible="alert.visible"
    class="bg-white"
    modal
    :closable="false"
    footer=""
    :style="{ width: '750px' }"
  >
    <template #container="{ closeCallback }">
      <div class="p-10 flex flex-col gap-10">
        <UiTitle :title="alert.content.title" />
        <div class="text-current-text">
          <div class="flex items-center gap-5">
            <NuxtIcon class="text-[120px]" :name="alert.content.icon" filled />
            <p class="font-semibold text-[32px]">
              {{ alert.content.message }}
            </p>
          </div>
          <div class="flex items-center justify-end mt-5">
            <UiButton
              icon="check"
              label="OK"
              class="text-green border-green"
              @click="closeCallback"
            />
          </div>
        </div>
      </div>
    </template>
  </Dialog>
</template>
