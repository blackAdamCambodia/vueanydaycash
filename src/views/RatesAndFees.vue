<template>
    <div>
        <OtherHeader/> 
    <!-- Rates & Fees main part start -->
    <main class="main-content main-content--short-form">
      <div class="container">
        <div class="row">
          <div class="col col--text">
            <div class="content-details">
              <h1>Rates &amp; Fees</h1>
              <p>
                AnyDayCash.com’s service is always free. AnyDayCash.com is not a
                lender or lending partner and does not provide lending services
                directly to consumers. Based on the information you submit,
                AnyDayCash.com searches its database housing its network of
                lenders and lending partners to connect you with a lender or
                lending partner and that may offer you a loan.
              </p>
              <p>
                The Truth in Lending Act requires full disclosure of all loan
                fees and interest rates that borrowers may incur. All fees and
                rate information should be disclosed to you by your lender or
                lending partner at the time of approval. Upon the conclusion of
                lender or lending partner approval, most lenders and lending
                partners will direct you to an e-signature page. This page is
                provided to you by the lender or lending partner to which you
                were connected.
              </p>
              <p><strong>Full Disclosure of Terms</strong></p>
              <p>
                The lender or lending partner provides documents that contain
                all fees and rate information pertaining to the loan being
                offered to you by the lender or lending partner. Please review
                the fee and rate information provided to you by your lender or
                lending partner at this time thoroughly and completely before
                agreeing to the terms of the loan. You are under no obligation
                to accept these terms. If you decide the loan terms detailed in
                the lender or lending partner contract are acceptable and wish
                to proceed with the loan process, e-sign the page and await
                transfer of your funds.
              </p>
              <p>
                The loan fees and interest rates are determined solely by your
                lender or lending partner, with specific amounts determined
                based upon the information you submitted to the lender or
                lending partner. AnyDayCash.com has no control or knowledge of
                the loan details between you and your lender or lending partner.
                You are under no obligation to continue with the request process
                if you find a particular lender’s or lending partner’s loan
                terms unsuitable.
              </p>
              <p><strong>Late Payment Policy</strong></p>
              <p>
                Lenders and lending partners have varying policies regarding
                late payments. Review the late payment policy detailed in the
                loan documents provided to you by your lender or lending partner
                before appending your e-signature, and thereby agreeing to the
                loan terms. All lenders and lending partners, however, must
                abide by applicable laws, rules, and regulations regarding late
                payment fees.
              </p>
              <p><strong>Non-payment Policy</strong></p>
              <p>
                Additional fees or charges may apply to you in the event that
                you are unable to repay your loan. AnyDayCash.com uses
                commercially reasonable efforts to work only with reputable
                lenders and lending partners dedicated to pursuing collections
                of past due accounts with conduct that is fair and reasonable.
              </p>
              <p><strong>Loan Renewal Policy</strong></p>
              <p>
                Loan renewal policies are largely governed by state regulatory
                legislation. In states where rollovers, or repayment term
                extensions, are allowed, interest rates, along with any late
                fees that may be assessed, can add a substantial dollar amount
                to the end price of your loan.
              </p>
            </div>
          </div>
          <ShotForm/>
        </div>
      </div>
    </main>
    <!-- Rates & Fees  main part End -->
    <FooterPart/>
    </div>
</template>

<script setup>
import OtherHeader from "../components/OtherHeader.vue";
import ShotForm from "../components/ShotForm.vue";
 import FooterPart from '../components/FooterPart.vue';
  
</script>

<style lang="scss" scoped>

</style>