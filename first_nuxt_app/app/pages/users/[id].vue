<script setup>
const route = useRoute();
const id = route.params.id;

const { data, error, status } = await useFetch(
  `https://spec-frontend-journey.vercel.app/users/${id}`,
  {
    transform: (res) => res.data,
  },
);
</script>

<template>
  <div
    class="w-screen h-screen flex flex-col items-center justify-center bg-black"
  >
    <h1 v-if="status === 'pending'" class="text-gray-400 text-xl">
      Loading...
    </h1>

    <h1 v-else-if="status === 'error'" class="text-red-500 text-xl">
      User not found
    </h1>

    <div v-if="data" class="text-white bg-white/5 px-4 py-6 rounded-2xl">
      <h1 class="font-bold text-xl">User Data</h1>
      <p>
        User name: <strong> {{ data?.fullName }}</strong>
      </p>
      <p>
        User type: <strong>{{ data?.userType }}</strong>
      </p>
    </div>

    <NuxtLink
      class="bg-white rounded-lg px-4 py-1 text-sm font-semibold mt-3"
      to="/"
    >
      Back to home
    </NuxtLink>
  </div>
</template>
