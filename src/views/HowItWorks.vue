<template>
  <div>
    <OtherHeader />
    <!-- How It Works main part start -->
    <main class="main-content main-content--short-form">
      <div class="container">
        <div class="row">
          <div class="col col--text">
            <div class="content-details checkMarkIcon">
              <h1>How It Works</h1>
              <p>
                Requesting a loan is easy with AnyDayCash.com. Fill out one easy form on
                AnyDayCash.com and your inquiry will be submitted to our large network of lenders.
                Loan amounts range from $100 to $5,000 (exact amounts vary based on lender programs
                and your state of residence). You can have a response from one of our lenders the
                same day, and often within minutes. Once your loan is approved, you will be
                redirected to the lender's website where you can review the terms of the loan,
                including details about all the applicable rates and fees. If you accept these
                terms, the lender will deposit money directly into your bank account as quickly as
                the next day.
              </p>
              <p>
                <strong>Most lenders have the following requirements to be approved:</strong>
              </p>
              <p>To be accepted by most lenders in our network, you should:</p>
              <ul>
                <li>Be employed at your present job for at least 90 days.</li>
                <li>Be a US citizen or a permanent resident, and over the age of 18.</li>
                <li>Have an income of around $1,000 per month after tax deductions.</li>
                <li>Have a checking account in your name.</li>
                <li>Provide a working telephone number for your home and work.</li>
                <li>Provide a valid email address.</li>
              </ul>
              <h2>Quick Inquiry Process</h2>
              <p>
                Through our secure technology, we will find a lender in our network that is willing
                to take work with you based on the information you submit. Once we have a lender
                ready to work with you, that lender will contact you to get any additional
                information they might need (such as verification of employment, pay stubs, etc.).
              </p>
              <h2>Cash Sent Directly to You</h2>
              <p>
                After your lender has taken and approved your request, cash will be deposited
                directly into your bank account. That means you don’t have to take a trip to the
                bank to endorse and deposit a check or pay check-cashing fees.
              </p>
              <h2>Private and Secure</h2>
              <p>
                We use industry-recognized security and advanced encryption technology to protect
                your personal information.
              </p>
              <h2>Automated Repayment</h2>
              <p>
                If you authorize your lender to take payment via automatic withdrawals (known as
                "ACH transfers"), then your loan payments will be paid automatically directly from
                your bank account. This means each payment will be on time and you won’t have to
                worry about missing any payments or incurring any late fees.
              </p>
              <h2>Late Payments</h2>
              <p>
                Late payment policies can differ among lenders. Please make sure you read and
                understand the loan agreement and your lender’s late payment policy before accepting
                the loan. In some states, late fees may be limited by law. In other states, late
                payments may allow the lender to charge late fees and may accelerate the loan making
                it due in full immediately.
              </p>
              <p>
                NOTE: Before agreeing to a loan, please make sure you can make your loan payments in
                full and on time. We support the responsible use of loans and recognize that nobody
                knows your situation better than you.
              </p>
              <h2>Loan Extensions</h2>
              <p>
                State law may limit or prohibit a lender’s ability to extend or "roll over" your
                loan. Consult with your lender if you need a loan extension.
              </p>
              <h2>Loan Default</h2>
              <p>
                If you can’t make your loan payments on time, you may be in default of your loan
                obligations. Late payments and loan defaults may adversely affect your credit and
                may make it difficult to obtain future loans.
              </p>
            </div>
          </div>
          <ShotForm/>
        </div>
      </div>
    </main>
    <!-- How It Works  main part End -->
    <FooterPart />
  </div>
</template>

<script setup>
import OtherHeader from '../components/OtherHeader.vue'
import ShotForm from "../components/ShotForm.vue";
import FooterPart from '../components/FooterPart.vue'
</script>

<style scoped>
.checkMarkIcon ul {
    list-style: disc outside url(../assets/img/icon-check-mark.svg);
}
.content-details li {
    margin-top: 10px;
    margin-bottom: 10px
}
</style>
