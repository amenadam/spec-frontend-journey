export default defineNuxtRouteMiddleware((to, from) => {
  const id = Number(to.params.id);

  if (!id || id <= 0) {
    return navigateTo("/");
  }
});
