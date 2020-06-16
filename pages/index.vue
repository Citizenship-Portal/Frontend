<template>
  <div class="flex flex-col min-h-screen">
    <Header/>
    <div class="flex-1">
      <img
        class="mt-2"
        src="https://images.unsplash.com/photo-1492217072584-7ff26c10eb75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&h=211"
        alt="Statue of Liberty">
      <div class="container p-6">
        <div class="flex items-center">
          <img alt="Logo" src="~/assets/images/logo.svg">
          <p class="ml-4 font-bold text-ink leading-tight">A unified portal where residents can access all their
            government information</p>
        </div>
        <div class="mt-6">
          <nuxt-link to="/signup">
            <button class="mx-auto block btn bg-primary hover:bg-primary-dark active:bg-primary-darker">Create Account
            </button>
          </nuxt-link>
          <nuxt-link to="/login">
            <button class="mt-6 mx-auto block btn bg-primary hover:bg-primary-dark active:bg-primary-darker">Current
              Account
            </button>
          </nuxt-link>
        </div>
        <h2 class="mt-10 text-ink text-2xl text-center">What can we help you find?</h2>
        <div class="flex flex-col items-center justify-center">
          <div class="flex flex-col items-center mt-6">
            <img src="~/assets/images/elections.svg" alt="Elections">
            <p class="font-bold text-ink">Register to Vote</p>
          </div>
          <div class="flex flex-col items-center mt-6">
            <img src="~/assets/images/ubi.svg" alt="Elections">
            <p class="font-bold text-ink">Universal Basic Income</p>
          </div>
        </div>
      </div>
    </div>
    <Footer class="mt-12 flex-shrink-0"/>
  </div>
</template>

<script>

import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  components: {Footer, Header},


}
</script>

<style>

</style>
