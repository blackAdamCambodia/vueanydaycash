<template>
    <section class="profit">
          <div class="container">
            <h2 class="profit-title">
              Get a&nbsp;Loan Today <br />for a&nbsp;Better Tomorrow
            </h2>
            <div class="profit-content">
              <p>
                We commit to connecting you with an approved lender. We also
                made the process simple. No need to visit hundreds of websites
                and fill out numerous paperwork. We recognize a personal loan is
                a private matter. Reasons for needing money range from critical
                automobile maintenance, unexpected medical expenses, etc.
              </p>
            </div>
            <a href="./form" target="_blank" class="btn profit-btn">
              Get Started
              <svg
                class="icon profit-icon btn__icon btn__icon--header"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                />
                <use xlink:href="#arrow"></use>
              </svg>
            </a>
          </div>
        </section>
</template>

<script setup>

</script>

<style scoped>
    
.profit {
    text-align: center;
    padding-top: 48px;
    padding-bottom: 48px;
}
.profit-title {
    margin-top: 12px;
    margin-bottom: 12px;
    color: #2b335c;
    font-weight: 700;
    font-size: 2.75rem;
    line-height: 1.2;
}
.profit-content {
    max-width: 720px;
    margin: 12px auto 24px;
    font-size: .875rem;
    line-height: 1.2;
    color: #696a73;
}
.profit-btn {
    max-width: 220px;
    margin-left: auto;
    margin-right: auto;
}
.profit-btn:hover {
    color: #fff;
    background-color: #00659e;
    box-shadow: 0 15px 22px rgba(29,39,130,.1);
}
.profit-icon{
    fill: #fff;
    stroke: #fff;
}
</style>