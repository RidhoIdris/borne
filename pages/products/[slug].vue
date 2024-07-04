<script setup lang="ts">
const router = useRouter();
const slug = router.currentRoute.value.params.slug;
</script>

<template>
  <h1>Products Detail {{ slug }}</h1>
</template>
