<script setup>
import { User } from "lucide-vue-next";

defineProps(["name", "role"]);
</script>
<template>
  <div
    class="flex gap-3 bg-white/5 px-4 md:px-8 py-5 rounded-2xl items-center hover:bg-white/10 cursor-pointer"
  >
    <User class="text-white" size="40px" />
    <div class="flex flex-col gap-0">
      <h1 class="">
        <span class="font-thin text-sm"> Name: </span>
        <strong>{{ name }}</strong>
      </h1>
      <p class="text-xs font-light text-white/50">{{ role }}</p>
    </div>
  </div>
</template>
