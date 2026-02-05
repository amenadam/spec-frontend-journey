<script setup>
import { User } from "lucide-vue-next";

const props = defineProps(["name", "role", "status"]);

const emit = defineEmits(["view-profile"]);

const viewProfile = () => {
  emit("view-profile", props.name);
};
</script>
<template>
  <div
    :class="
      status === 'online'
        ? 'flex gap-3 bg-white/5 px-4 md:px-8 py-5 rounded-2xl items-center hover:bg-white/10 cursor-pointer border border-dashed border-green-600/50 scale-105'
        : 'flex gap-3 bg-white/5 px-4 md:px-8 py-5 rounded-2xl items-center hover:bg-white/10 cursor-pointer'
    "
  >
    <div class="flex flex-col items-center justify-center">
      <User class="text-white" size="50px" />
      <div
        v-if="status === 'online'"
        class="flex gap-1 items-center mt-1 border border-green-600 px-2 py-0.5 rounded-full bg-green-600/20"
      >
        <div class="w-2 h-2 rounded-full bg-green-600"></div>
        <p class="text-[8px]">Online</p>
      </div>
      <div
        v-if="status === 'offline'"
        class="flex gap-1 items-center mt-1 border border-gray-600 px-2 py-0.5 rounded-full bg-gray-600/20"
      >
        <div class="w-2 h-2 rounded-full bg-gray-600"></div>
        <p class="text-[8px]">Offline</p>
      </div>
    </div>
    <div class="flex flex-col gap-0">
      <h1 class="">
        <span class="font-thin text-sm"> Name: </span>
        <strong>{{ name }}</strong>
      </h1>
      <p class="text-xs font-light text-white/50">{{ role }}</p>
      <button
        @click="viewProfile"
        class="bg-white/20 rounded-2xl px-2 text-xs mt-3 py-1 cursor-pointer hover:bg-white/10 hover:scale-90 font-light"
      >
        View Profile
      </button>
    </div>
  </div>
</template>
