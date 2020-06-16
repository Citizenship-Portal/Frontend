<template>
  <div class="tw-flex tw-flex-col tw-min-h-screen">
    <Header>Citizenship Portal</Header>
    <div class="grid-container tw-flex-1 tw-w-full tw-flex tw-flex-col tw-mx-auto tw-items-center" id="main-content">
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
            <p class="tw-font-bold tw-text-ink">Register to Vote</p>
          </div>
          <div class="tw-flex tw-flex-col tw-items-center tw-mt-6">
            <img src="~/assets/images/ubi.svg" alt="Elections">
            <p class="tw-font-bold tw-text-ink">Universal Basic Income</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>


    <Modal :open="open" @close="open = false">
      <div class="tw-max-w-xl tw-w-full tw-bg-white tw-rounded-lg tw-shadow-2xl tw-px-6 tw-py-6 tw-mx-auto">
        <h2 class="font-semibold text-gray-90 tw-text-4xl tw-leading-tight tw-border-b-2 tw-border-gray-20 tw-pb-4">
          Please Read</h2>
        <p class="tw-mt-4 tw-text-gray-70 tw-text-xl tw-leading-relaxed">This is NOT an official site of the US Government in any way. This is a demo
          concept of an idea <a href="https://twitter.com/andrewyang/status/1262012732402028547">proposed by Andrew
            Yang</a>.</p>
        <div class="tw-mt-6">
          <a href="https://google.com"
                  class="tw-px-4 visited:tw-text-white tw-py-2 tw-text-white tw-font-semibold tw-bg-red-50 hover:tw-bg-red-60 tw-border tw-border-transparent tw-rounded focus:tw-outline-none focus:tw-shadow-outline">
            Leave website
          </a>
          <button @click="open = false"
                  class="tw-ml-4 tw-px-4 tw-py-2 tw-text-gray-80 tw-font-semibold tw-bg-white hover:tw-bg-gray-10 tw-border tw-rounded focus:tw-outline-none focus:tw-shadow-outline">
            Understood, continue
          </button>
        </div>
      </div>
    </Modal>

  </div>
</template>

<script>

import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

export default {
  components: {Modal, Footer, Header},
  data() {
    return {
      open: true
    }
  },
}
</script>

<style>

</style>
