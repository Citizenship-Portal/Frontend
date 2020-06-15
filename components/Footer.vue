<template>
  <div>
    <div>
      <a href="#" @click="scrollToTop" class="px-5 underline text-primary visited:text-primary ">Return to top</a>
    </div>
    <div class="flex flex-col bg-base-lightest mt-3">
      <a href="#" class="text-ink font-bold p-5 visited:text-ink border-black border-t">Documentation</a>
      <a href="#" class="text-ink font-bold p-5 visited:text-ink border-black border-t">Features</a>
      <a href="#" class="text-ink font-bold p-5 visited:text-ink border-black border-t">About us</a>
      <a href="#" class="text-ink font-bold p-5 visited:text-ink border-black border-t">Getting started</a>
      <div class="text-ink p-5 border-black border-t flex justify-between">
        <span>(800) CALL-GOVT</span>
        <span>info@agency.gov</span>
      </div>
      <div class="bg-base-lighter p-5 flex items-center">
        <img class="w-12 h-12 rounded-full"
             src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Great_Seal_of_the_United_States_%28obverse%29.svg"
             alt="Seal">
        <p class="font-bold text-2xl leading-tight ml-4">Department of Technology</p>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    scrollToTop() {
      window.scrollTo({top: 0, behavior: 'smooth'})
    }
  }
}
</script>

<style scoped>

</style>
