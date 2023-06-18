<template>
  <div>
       <OtherHeader/> 
       <main class="main-content main-content--short-form">
      <div class="container">
        <div class="row">
          <div class="col col--text">
            <div class="content-details">
              <h1>About Us</h1>
              <p>
                AnyDayCash.com was created to help consumers access money
                without hassle and wasted time.
              </p>
              <p>
                We understand emergencies exist that may require access to cash.
                That’s why we simplified the process of finding a lender or
                lending partner to get the money you need. You no longer have to
                visit dozens of websites, fill out numerous requests or stand in
                line at a local store. We are not a lender or lending partner,
                but submitting your information through our secure online form
                will help us connect you with one of our participating lenders
                and lending partners in our network. The lenders and lending
                partners we work with are willing to help you get the cash you
                need. Each lender or lending partner in our network has made the
                approval process quick and easy, usually with a loan agreement
                that you can review and sign online.
              </p>
              <p>
                We look forward to helping you with your personal lending needs.
              </p>
            </div>
          </div>
          <ShotForm/>
        </div>
      </div>
    </main>
    <FooterPart/>
  </div>
  
</template>

<script setup>
 import OtherHeader from "../components/OtherHeader.vue";
 import ShotForm from "../components/ShotForm.vue";
 import FooterPart from '../components/FooterPart.vue'

</script>

<style  scoped>

</style>
