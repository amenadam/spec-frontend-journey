<script setup>
import { ref } from "vue";
const pageNo = ref("");
</script>
<template>
  <div class="h-screen flex flex-col items-center justify-center bg-black">
    <h1 class="text-white font-bold text-3xl">First Time Creating Nuxt App</h1>
    <div class="flex gap-3 mt-3">
      <NuxtLink
        class="bg-white rounded-lg px-4 py-1 text-sm font-semibold cursor-pointer hover:opacity-80 hover:scale-95 transition-all"
        to="/other"
        >Other Page</NuxtLink
      >
      <NuxtLink
        class="bg-white rounded-lg px-4 py-1 text-sm font-semibold cursor-pointer hover:opacity-80 hover:scale-95 transition-all"
        to="/another"
        >Another one</NuxtLink
      >
    </div>

    <div class="flex flex-col gap-3 mt-3 min-w-100">
      <input
        type="text"
        class="bg-white/5 text-white px-4 py-1 rounded-lg focus:outline-none focus:ring-1 focus:ring-white/10"
        placeholder="Enter user id to get user info"
        v-model="pageNo"
      />
      <NuxtLink
        :to="{ name: 'users-id', params: { id: pageNo ? pageNo : 0 } }"
        class="bg-white text-center rounded-lg px-4 py-1 text-sm font-semibold cursor-pointer hover:opacity-80 hover:scale-95 transition-all"
        >User pages</NuxtLink
      >
    </div>
  </div>
</template>
