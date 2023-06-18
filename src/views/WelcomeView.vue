<template>
    <div>
        <FormHeader/> 
     <!-- welcome main part start -->
    <main class="main-content welcome-content">
     <welcomeForm/>
    </main>
    <!-- Welcome  main part End -->
    <FooterPart/>
    </div>
</template>

<script setup>
import FormHeader from '../components/FormHeader.vue';
import welcomeForm from '../components/welcomeForm.vue';
import FooterPart from '../components/FooterPart.vue';
  
</script>

<style scoped>


</style>