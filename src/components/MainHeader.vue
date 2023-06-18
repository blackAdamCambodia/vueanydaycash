<template>
    <header class="header">
        <div class="container">
          <div class="header-content">
            <a href="/" class="logo" title="AnyDayCash.com">
             <anyDayCashLogo/>
            </a>
            <div class="header-navigation">
              <nav class="nav nav-header">
                <ul class="nav-list-header">
                  <li class="nav-item">
                    <RouterLink to="./aboutUs" class="header-nav-link" >About Us</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="header-nav-link" to="./question">FAQs</RouterLink>
                  </li>
                </ul>
              </nav>
            </div>
            <p class="header-caption">“From $100 to $5,000 for your needs”</p>
            <RouterLink to="/welcome" target="_blank" class="header-btn btn"
              >Return Customer
              <svg
                class="icon btn__icon btn__icon--header"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                />
                <use xlink:href="#arrow"></use>
              </svg>
            </RouterLink>
          </div>
        </div>
      </header>
</template>

<script setup>
import anyDayCashLogo from './icons/anyDayCashLogo.vue';
import { RouterLink } from 'vue-router';

</script>

<style scoped>

</style>