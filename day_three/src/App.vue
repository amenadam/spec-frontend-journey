<script setup>
import UserCard from "./components/UserCard.vue";
const users = [
  { name: "Abebe ", role: "Team Leader" },
  { name: "Solomon ", role: "Finance Officer" },
  { name: "Kebede ", role: "CTO" },
];
</script>

<template>
  <div
    class="w-screen h-screen flex flex-col items-center justify-center bg-black text-white"
  >
    <h1
      class="text-2xl font-semibold animate-pulse hover:-translate-y-1 hover:tracking-wider cursor-pointer transition-all"
    >
      Users
    </h1>
    <div class="flex gap-3 mt-3 flex-col md:flex-row">
      <UserCard v-for="user in users" :name="user.name" :role="user.role" />
    </div>
  </div>
</template>

<style scoped></style>
