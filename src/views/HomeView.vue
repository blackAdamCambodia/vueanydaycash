<script setup>
import MainHeader from '../components/MainHeader.vue';
import EntryPart from '../components/EntryPart.vue'
import AdvantagesPart from '../components/AdvantagesPart.vue';
import ReviewPart from '../components/ReviewPart.vue'
import ProfitPart from '../components/ProfitPart.vue';
import FooterPart from '../components/FooterPart.vue'


</script>

<template>
  <div>
    <MainHeader/>
    <main class="main-content">
      <EntryPart/>
      <AdvantagesPart/>
      <ReviewPart/>
      <ProfitPart/>
    </main>
    <FooterPart/>
  </div>
</template>

