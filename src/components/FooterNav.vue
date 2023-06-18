<template>
    <div class="footer-nav">
          <div class="container">
            <nav class="footer-nav-items" >
              <ul class="nav-list">
                <li class="nav-item">
                  <RouterLink to="./howitworks" class="nav-link"> How It Works </RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="./aboutUs" class="nav-link"> About Us </RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="./whychooseus" class="nav-link"> Why Choose Us </RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="./question" class="nav-link"> Questions </RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="./definitions" class="nav-link"> Definitions </RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="./ratesandfees" class="nav-link">
                    Rates &amp; Fees
                  </RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="./lendingpolicy" class="nav-link">
                    Lending Policy
                  </RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="./privacypolicy" class="nav-link">
                    Privacy Policy
                  </RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="./termsofuse" class="nav-link"> Terms of Use </RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="./disclaimer" class="nav-link"> Disclaimer </RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="./contact" class="nav-link"> Contact </RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="./eConsent" class="nav-link"> E-Consent </RouterLink>
                </li>
              </ul>
            
            </nav>
          </div>
        </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style  scoped>
.footer-nav-items {
    padding: 48px;
    background-color: #f6f6f9;
    border-radius: 15px;
}
.nav-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    -moz-column-gap: 24px;
    column-gap: 24px;
    margin: 0;
    padding: 0;
    list-style: none;
}
.nav-link {
    display: inline-block;
    padding: 12px 10px;
    font-size: .875rem;
    line-height: 1.2;
    color: #2b335c;
    text-decoration: none;
}
.nav-link:hover {
    color: #0075b7;
    text-decoration: underline;
}
</style>