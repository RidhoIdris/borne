<template>
  <div
    class="relative mx-auto flex min-h-screen w-full max-w-[1080px] flex-col border"
  >
    <UiNavbar />
    <Loading />
    <slot />
    <svg
      class="absolute bottom-0 right-0"
      width="757"
      height="318"
      viewBox="0 0 757 318"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.05"
        d="M160.528 318H112.18L0 221.277L31.1507 57.831L188.387 3.09699L277.906 80.282L286.875 33.2251L382.321 0L458.859 65.9914L450.664 108.991L602.364 55.9924L757 189.626L732.534 318H372.324L398.708 179.564L344.503 198.433L304.531 163.969L283.321 275.255L160.528 318Z"
        fill="#793282"
      />
    </svg>
  </div>
</template>
