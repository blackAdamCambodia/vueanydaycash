<template>
    <div class="footer-copyright">
          <div class="container">
            <div class="copyright">
              <a href="./" class="logo" title="AnyDayCash.com">
                <anyDayCashLogo/>
              </a>
              <p class="copyright-content">
                Copyright ©
                <span data-jsw-current-year="">2023</span> AnyDayCash.com. All
                Rights Reserved
              </p>
            </div>
          </div>
        </div>
</template>

<script setup>
import anyDayCashLogo from './icons/anyDayCashLogo.vue';
</script>

<style  scoped>

.footer-copyright {
    border-top: 1px solid #e8e9ef;
}
.copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
    padding-bottom: 24px;
}
.logo {
    display: block;
    width: 134px;
    height: 17px;
}
.copyright-content {
    
    margin-bottom: 0;
    font-weight: 500;
    font-size: .875rem;
    line-height: 1.2;
    text-align: center;
    letter-spacing: .8px;
    color: #696a73;
}
</style>