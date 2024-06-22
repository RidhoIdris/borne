<script setup lang="ts">
const count = ref(0);
</script>

<template>
  <div class="flex h-screen w-screen items-center justify-center gap-2">
    <Button @click="count--"> - </Button>
    {{ count }}
    <Button @click="count++"> + </Button>
  </div>
</template>
