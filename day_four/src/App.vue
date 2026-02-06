<script setup>
import { ref } from "vue";

const count = ref(0);

//other way (method handler)
const increament = (event) => {
  count.value++;
};
const decreament = (event) => {
  count.value--;
};
</script>

<template>
  <div
    class="w-screen h-screen flex flex-col items-center justify-center bg-black text-white"
  >
    <div
      class="flex flex-col items-center justify-center bg-white/5 px-6 py-8 rounded-2xl"
    >
      <h1 class="text-8xl">{{ count }}</h1>
      <div class="flex gap-3 mt-4">
        <button
          @click="increament"
          class="bg-white/15 flex items-center justify-center cursor-pointer hover:bg-white/10 border border-white/50 w-20 h-20 rounded-2xl text-3xl pb-1 active:scale-95"
        >
          +
        </button>
        <button
          :disabled="count === 0"
          @click="count--"
          :class="
            count === 0
              ? 'cursor-not-allowed bg-white/15 flex items-center justify-center hover:bg-white/10 border border-white/50 w-20 h-20 rounded-2xl text-3xl pb-1 active:scale-95'
              : 'bg-white/15 flex items-center justify-center cursor-pointer hover:bg-white/10 border border-white/50 w-20 h-20 rounded-2xl text-3xl pb-1 active:scale-95'
          "
        >
          -
        </button>
      </div>
    </div>
  </div>
</template>
