<template>
  <div class="flex items-center justify-between border-b border-base-lighter">
    <h1 class="px-4 text-gray-90 font-bold text-sm"><slot></slot></h1>
    <button class="block uppercase bg-primary hover:bg-primary-dark text-white p-3 text-sm focus:outline-none focus:shadow-outline">Menu</button>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
