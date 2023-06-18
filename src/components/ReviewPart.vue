<template>
     <section class="review">
          <div class="container review-content">
            <div class="client-image">
              <img src="../assets/img/review--desktop.jpg" alt="client image" />
            </div>
            <div class="testomonials">
              <div class="review-quote">
                <p>
                  I got a loan offer right away without a lot of hassle and I
                  truly appreciate the speedy service.
                </p>
              </div>
            </div>
          </div>
        </section>
</template>

<script setup>

</script>

<style  scoped>

.review {
    display: grid;
    grid-template-columns: calc(50vw + 375px) 1fr;
    grid-template-rows: min-content;
    background-color: #fff;
}
.review::before {
    grid-column: 1/2;
    grid-row: 1/-1;
    content: "";
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: #f6f6f9;
    background-image: url(../assets/img/dotted-patterne.svg);
    background-repeat: no-repeat;
    background-position: top 6px right 770px;
    background-size: 332px;
}
.review-content {
    grid-row: 1/-1;
    grid-column: 1/-1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 60px;
    padding-bottom: 60px;
}
.client-image{
    width: 346px;
    height: 443px;
}
.client-image img {
    width: 100%;
    border-radius: 20px;
}
.testomonials{
    max-width: 645px;
}
.review-quote{
    margin: 24px 0;
    color: #2b335c;
    font-weight: 700;
    font-size: 2.75rem;
    line-height: 1.2;
}
</style>