<script setup>
import EntryFormContainer from './EntryFormContainer.vue';
import EntryProtection from './EntryProtection.vue';


</script>

<template>
  <div>
    <section class="entry">
          <div class="container entry-container">
            <div class="entry-content">
              <h1 class="entry-title">
                Get the help
                <br />
                You Need
                <br />
                Today
              </h1>
            </div>
            <EntryFormContainer/>
          </div>
          <EntryProtection/>
        </section>
  </div>
</template>
<style scoped>
.entry {
    display: grid;
    grid-template-rows: auto 128px;
    grid-template-columns: calc(50vw + 360px) 1fr;
    padding-bottom: 0;
    min-height: 732px;
    
}
.entry::before {
    grid-row: 1/span 2;
    grid-column: 1/span 1;
    height: 100%;
    content: "";
    background-color: #545365;
    background-position: top right;
    background-repeat: no-repeat;
    background-size: 1380px;
    background-image: linear-gradient(rgba(108,125,158,0) 582px,#0f192c 732px),url(../assets/img/entry-bg--desktop.jpg);
}
.entry::after {
    grid-area: 1/2/-1/-1;
    height: 100%;
    content: "";
    background-color: #f6f6f9;
    background-image: url(../assets/img/dotted-patterne.svg);
    background-repeat: no-repeat;
    background-position: left 25px bottom 8px;
    background-size: 322px;
}

.entry-container {
    display: flex;
    justify-content: space-between;
    grid-column: 1/3;
    grid-row: 1/2;
    padding-top: 96px;
    align-items: center;
}
.entry-content {
    margin-top: 26px;
    margin-bottom: 26px;
}
.entry-title {
    margin-top: 0;
    margin-bottom: 20px;
    font-family: Montserrat,Arial,sans-serif;
    font-weight: 700;
    font-size: 4rem;
    color: #fff;
}



</style>