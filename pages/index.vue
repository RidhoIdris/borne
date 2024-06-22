<script setup lang="ts">
const isLoading = useLoading();
const router = useRouter();

definePageMeta({
  layout: "splash",
});

onMounted(() => {
  // First delay of 3 seconds before running the next setTimeout
  setTimeout(() => {
    isLoading.value = true;
    // The action to perform after the initial 3 seconds delay
    setTimeout(() => {
      isLoading.value = false;
      router.push("/home");
    }, 3000); // This setTimeout runs for 3 seconds
  }, 2000); // Initial delay of 3 seconds
});
</script>

<template>
  <div class="flex h-full w-full flex-1 items-center justify-center gap-2">
    <Image src="/logo.svg" class="animate-scale-up" />
  </div>
</template>
