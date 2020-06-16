<template>
  <div class="tw-min-h-screen tw-flex tw-flex-col">
    <Header>Citizenship Portal - Sign Up</Header>
    <div class="grid-container tw-p-6 tw-flex-1 tw-w-full tw-flex tw-flex-col tw-justify-center" id="main-content">
      <div class="tw-flex tw-flex-col tw-justify-center tw-items-center">
        <h2 class="tw-font-bold text-green tw-text-3xl">Congratulations!</h2>
        <h4 class="text-ink tw-font-bold tw-mt-6 tw-mx-6 tw-text-center">You’re now able to access all your appropriate
          citizenship
          documents from this
          portal. </h4>
      </div>
      <h4 class="text-ink tw-font-bold tw-mt-6 tw-text-center">What would you like to do first?</h4>
      <div class="tw-flex tw-flex-col tw-items-center tw-justify-center md:tw-flex-row md:tw-justify-between">
        <div class="tw-flex tw-flex-col tw-items-center tw-mt-6">
          <img src="~/assets/images/elections.svg" alt="Elections">
          <p class="tw-font-bold tw-text-ink tw-mt-2">Register to Vote</p>
        </div>
        <div class="tw-flex tw-flex-col tw-items-center tw-mt-6">
          <img src="~/assets/images/ubi.svg" alt="UBI">
          <p class="tw-font-bold tw-text-ink tw-mt-2">Universal Basic Income</p>
        </div>
        <div class="tw-flex tw-flex-col tw-items-center tw-mt-6">
          <img src="~/assets/images/passport.svg" alt="Passport">
          <p class="tw-font-bold tw-text-ink tw-mt-2">Apply For / Renew Passport</p>
        </div>
      </div>
    </div>
    <Footer class="mt-12"/>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default {
  name: "success",
  components: {Footer, Header}
}
</script>

<style scoped>

</style>
