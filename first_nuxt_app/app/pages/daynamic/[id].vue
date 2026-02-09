<script setup>
const id = useRoute().params.id;
</script>
<template>
  <div
    class="w-screen h-screen flex flex-col items-center justify-center bg-black"
  >
    <h1 class="text-white font-bold text-3xl">{{ id }}</h1>
    <NuxtLink
      class="bg-white rounded-lg px-4 py-1 text-sm font-semibold cursor-pointer hover:opacity-80 hover:scale-95 transition-all mt-3"
      to="/"
      >Back to home</NuxtLink
    >
  </div>
</template>
