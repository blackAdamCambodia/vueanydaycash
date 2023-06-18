<template>
    <div>
        <OtherHeader/> 
         <!-- Contact main part start -->
    <main class="main-content main-content--short-form">
      <div class="container">
        <div class="row">
          <div class="col col--text">
            <div class="content-details">
              <h1>Contact Us</h1>
              <h2>Contact Info</h2>
              <p>AnyDayCash.com</p>
              <p>
                Customer Acquisition LLC, Springates Building, Lower Government
                Road, Charlestown,
              </p>
              <p>Saint Kitts and Nevis</p>
              <h2>Contact Form</h2>
              <p>
                For questions, please visit our
                <a href="/faq.html">Questions Page</a> for a list of answers to
                commonly asked questions.
              </p>
              <p>
                For more information on how we connect you with a lender, please
                visit our <a href="/howItWorks.html">How It Works Page</a>.
              </p>
              <p>
                For loan related questions, please contact your lender directly.
                If your question is not addressed on our Questions Page and is
                not a lender-specific question, you can email us at
                support@AnyDayCash.com and we will do our best to get back to
                you.
              </p>
            </div>
          </div>
          <ShotForm/>
        </div>
      </div>
    </main>
    <!-- Contact  main part End -->
    <FooterPart/>
    </div>
</template>

<script setup>
import OtherHeader from "../components/OtherHeader.vue";
import ShotForm from "../components/ShotForm.vue";
 import FooterPart from '../components/FooterPart.vue';
   
</script>

<style  scoped>
.content-details a:hover {
    text-decoration: none;
}
.content-details h2 {
    font-weight: 600;
    color: #2b335c;
    margin-top: 25px;
    margin-bottom: 10px;
    font-size: 24px;
}
.content-details p strong {
    color: #2b335c;
}
.short-form__e-signature a, .content-details a {
    color: #0075b7;
    text-decoration: underline;
}
</style>