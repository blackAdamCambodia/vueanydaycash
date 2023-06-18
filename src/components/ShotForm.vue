<template>
  <div class="col col--short-form">
    <form class="short-form" action="./form" @submit.prevent="handleSubmit">
      <div class="short-form__row">
        <div class="short-form__header">Start Your Speedy Form!</div>
      </div>
      <div class="short-form__row">
        <select v-model="FormData.selectedAmount" name="RequestedAmount" class="select">
          <option value="" disabled="disabled" selected="selected">Select Loan Amount</option>
          <option value="500">Up to $500</option>
          <option value="1000">$500 to $1,000</option>
          <option value="2500">$1,000 to $2,500</option>
          <option value="5000">$2,500 to $5,000</option>
          <option value="35000">Above $5,000</option>
        </select>
      </div>
      <div class="short-form__row">
        <input v-model="FormData.email" type="email" name="Email" placeholder="Email" class="input">
      </div>
      <div class="short-form__row">
        <button type="submit" class="btn">
          Get Started
          <svg class="icon profit-icon btn__icon btn__icon--header" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
            <use xlink:href="#arrow"></use>
          </svg>
        </button>
      </div>
      <div class="short-form__row">
        <div class="short-form__e-signature">
          By clicking [Get Started], you agree that this acts as your
          digital signature, that you accept the
          <a href="./termsOfUse" target="_blank" class="popupContent">Terms of Use</a>,
          and
          <a href="./privacyPolicy" target="_blank">Privacy Policy</a>.
        </div>
      </div>
      <div class="short-form__row">
        <div class="short-form__ssl-logo">
          <sslLogo />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import sslLogo from '../components/icons/sslLogo.vue';

export default {
  components: {
    sslLogo 
  },
  data() {
    return {
      FormData: {
        selectedAmount: '',
        email: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.FormData.selectedAmount); 
      console.log(this.FormData.email); 

      
    }
  }
};
</script>

<style scoped>
   
</style>
