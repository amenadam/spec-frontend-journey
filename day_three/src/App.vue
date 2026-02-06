<script setup>
import { ref } from "vue";
import UserCard from "./components/UserCard.vue";
const users = ref([
  { name: "Abebe ", role: "Team Leader", status: "offline" },
  { name: "Solomon ", role: "Finance Officer", status: "online" },
  { name: "Kebede ", role: "CTO", status: "offline" },
]);

const showName = (name) => alert(`User ${name}`);
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
    <div class="flex gap-4 mt-3 flex-col md:flex-row">
      <UserCard
        v-for="user in users"
        :name="user.name"
        :role="user.role"
        :status="user.status"
        @view-profile="showName(user.name)"
      />
    </div>
  </div>
</template>

<style scoped></style>
