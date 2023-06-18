<template>
    <div>
        <OtherHeader/> 
     <!-- Why Choose Us main part start -->
     <main class="main-content main-content--short-form">
      <div class="container">
        <div class="row">
          <div class="col col--text">
            <div class="content-details">
              <h1>Why Choose Us?</h1>
              <p class="extraPadding">
                We know there are several ways to obtain a loan. However, here
                are a few reasons why you should consider our service to connect
                with a lender or lending partner:
              </p>
              <p class="extraPadding"><strong>Speed</strong></p>
              <p class="extraPadding">
                Our service is fast. We may be able to connect you with a lender
                or lending partner to offer you a loan as soon as the next
                business day. The next step is to complete the request form so
                we can speedily connect you with a lender or lending partner
                that is ready to work with you.
              </p>
              <p class="extraPadding"><strong>Safety</strong></p>
              <p class="extraPadding">We protect and secure your personal information.</p>
              <p class="extraPadding">
                A number of websites claim to offer some sort of quick service
                to connect you with lenders or lending partners, but be careful!
                Some websites are actually designed to infect your computer with
                viruses and malware that steals sensitive information like your
                bank account number. Be aware of unsecured websites making false
                claims about their security technology. Also, be cautious if you
                see a website with all the security logos on display but without
                linking to the security provider’s certification page. Giving
                your personal information to these websites can make you an easy
                target for hackers and thieves.
              </p>
              <p class="extraPadding"><strong>Convenience</strong></p>
              <p class="extraPadding">
                Avoid long lines and having to get out of the house to connect
                with a lender or lending partner. You can fill out our online
                form from the convenience of your home. We partner with many
                lenders or lending partners, therefore, getting connected with
                one of them is convenient as 1, 2, 3. Our online form serves as
                a connecting service to connect you with one of them.
              </p>
            </div>
          </div>
          <ShotForm/>
        </div>
      </div>
    </main>
    <!-- Why Choose Us  main part End -->
    <FooterPart/>
    </div>
</template>

<script setup>
import OtherHeader from "../components/OtherHeader.vue";
import ShotForm from "../components/ShotForm.vue";
 import FooterPart from '../components/FooterPart.vue';
  
</script>

<style  scoped>

</style>