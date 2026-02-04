<script setup>
import { ref } from "vue";

const name = ref("");
</script>

<template>
  <div
    class="w-screen h-screen flex flex-col items-center justify-center bg-black text-white"
  >
    <h1
      v-if="name"
      class="font-semibold animate-pulse hover:-translate-y-1 hover:tracking-wider cursor-pointer transition-all"
    >
      Hello {{ name }}, How are you?
    </h1>
    <input
      type="text"
      placeholder="enter your name"
      v-model="name"
      class="border border-white/20 rounded px-3 py-2 mt-3"
    />
  </div>
</template>

<style scoped></style>
