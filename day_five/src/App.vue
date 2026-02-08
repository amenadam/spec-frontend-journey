<script setup>
import { ref, watch } from "vue";

const password = ref("");
const message = ref("");

const passwordChecker = (psd) => {
  const passwordRegex = /^[a-zA-Z!@#$%^&*()_+\-=\[\]{}|;':",./<>?]*$/; //but not working
  if (psd.length === 0) return "";
  if (psd.length < 6) {
    return "Weak";
  }

  if (
    /[a-zA-z]/.test(psd) &&
    /[0-9]/.test(psd) &&
    /[!@#$%^&*()_+\-=[\]{};':",./<>?]/.test(psd)
  ) {
    return "Strong";
  }

  return "Medium";
};
watch(password, (newPsd) => {
  message.value = passwordChecker(newPsd);
});
</script>

<template>
  <div
    class="w-screen h-screen flex flex-col items-center justify-center bg-black text-white"
  >
    <div
      class="border border-white/10 rounded-2xl flex flex-col items-center px-4 py-8"
    >
      <h1
        :class="[
          'text-2xl font-semibold',
          message === 'Strong'
            ? 'text-green-500'
            : message === 'Medium'
              ? 'text-yellow-500'
              : 'text-red-500',
        ]"
      >
        {{ message.toUpperCase() }}
      </h1>
      <input
        v-model="password"
        placeholder="Enter your password"
        type="text"
        :class="[
          'min-w-100 bg-white/5 px-4 py-2 rounded-lg mt-3 focus:outline-none',
          message === 'Strong'
            ? 'focus:ring-1 focus:ring-green-500'
            : message === 'Medium'
              ? 'focus:ring-1 focus:ring-yellow-500'
              : message === 'Weak'
                ? 'focus:ring-1 focus:ring-red-500'
                : '',
        ]"
      />
    </div>
  </div>
</template>
