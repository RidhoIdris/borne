<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex items-center gap-[5px]">
    <h1 class="uppercase">{{ props.title }}</h1>
    <NuxtImg
      width="86"
      height="20"
      src="/smoke.svg"
      class="mt-1.5"
      alt="smoke"
    />
  </div>
</template>
