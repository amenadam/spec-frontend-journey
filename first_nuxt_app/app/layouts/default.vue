<template>
  <nav
    class="fixed w-screen bg-black px-8 py-4 flex justify-between items-center"
  >
    <NuxtLink class="text-white font-bold" to="/">Amenadam</NuxtLink>
    <ul class="text-white flex gap-10">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/other">Other</NuxtLink></li>
      <li><NuxtLink to="/another">Another</NuxtLink></li>
    </ul>
  </nav>
  <slot />
</template>
