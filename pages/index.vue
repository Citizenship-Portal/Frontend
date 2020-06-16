<template>
  <div class="tw-flex tw-flex-col tw-min-h-screen">
    <Header/>
    <div class="grid-container tw-flex-1 tw-flex tw-flex-col tw-mx-auto tw-items-center" id="main-content">
      <img
        class="tw-mt-2 lg:tw-mt-12"
        src="https://images.unsplash.com/photo-1492217072584-7ff26c10eb75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&h=211"
        alt="Statue of Liberty">
      <div class="tw-container tw-p-6">
        <div class="tw-flex tw-items-center">
          <img alt="Logo" src="~/assets/images/logo.svg">
          <p class="tw-ml-4 tw-font-bold tw-text-ink tw-leading-tight">A unified portal where residents can access all
            their
            government information</p>
        </div>
        <div class="tw-mt-6 tw-flex tw-flex-col tw-space-y-6 tw-items-center">
          <nuxt-link to="/signup">
            <button class="usa-button">Create Account
            </button>
          </nuxt-link>
          <nuxt-link to="/login">
            <button class="usa-button">Current
              Account
            </button>
          </nuxt-link>
        </div>
        <h2 class="tw-mt-10 tw-text-ink tw-text-2xl tw-text-center">What can we help you find?</h2>
        <div class="tw-flex tw-flex-col tw-items-center tw-justify-center">
          <div class="tw-flex tw-flex-col tw-items-center tw-mt-6">
            <img src="~/assets/images/elections.svg" alt="Elections">
            <p class="font-bold text-ink">Register to Vote</p>
          </div>
          <div class="tw-flex tw-flex-col tw-items-center tw-mt-6">
            <img src="~/assets/images/ubi.svg" alt="Elections">
            <p class="tw-font-bold tw-text-ink">Universal Basic Income</p>
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
