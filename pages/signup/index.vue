<template>
  <div class="tw-min-h-screen tw-flex tw-flex-col">
    <Header>Citizenship Portal - Sign Up</Header>
    <div class="grid-container tw-mt-4 tw-flex-1 tw-w-full" id="main-content">
      <form class="usa-form">
        <fieldset class="usa-fieldset">
          <legend class="usa-legend">Sign In Info</legend>

          <label class="usa-label" for="email">E-mail Address <span class="tw-ml-1 text-red">*</span></label>
          <input class="usa-input" id="email" name="email" type="text" autocapitalize="off" autocorrect="off">

          <label class="usa-label" for="username">Username <span class="tw-ml-1 text-red">*</span></label>
          <input class="usa-input" id="username" name="username" type="text" autocapitalize="off" autocorrect="off">

          <label class="usa-label" for="password-sign-up">Password <span class="tw-ml-1 text-red">*</span></label>
          <input class="usa-input" id="password-sign-up" name="password" type="password">
          <p class="usa-form__note">
            <a title="Show password" href="javascript:void(0);"
               class="usa-show-password"
               aria-controls="password-sign-up">Show password</a>
          </p>

          <input class="usa-button" type="submit" value="Enter Contact Info">
        </fieldset>
      </form>

    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default {
  name: "signup",
  components: {Footer, Header}
}
</script>

<style scoped>

</style>
