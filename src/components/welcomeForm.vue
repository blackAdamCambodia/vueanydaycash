<template>
    <div>
        <section class="auth-form-holder">
        <div class="container">
          <h1 class="form-title">Your Loan Is Moments Away</h1>
          <form
            action="./form"
            class="auth-form"
            data-jsw-auth-form="phone"
            novalidate=""
          >
            <div class="auth-form__row">
              <div class="auth-form__title">Welcome Back!</div>
              <div class="auth-form__sub-title">
                Sign in to request a loan faster by using a pre-filled form.
              </div>
            </div>
            <div class="auth-form__row" >
              <input
                type="tel"
                class="input"
                name="phoneNumber"
                
                placeholder="Phone Number"
                
              />
              <span
                class="field-error"
                
              ></span>
            </div>
            <div class="auth-form__row" >
              <input
                type="tel"
                class="input"
                name="ssn4"
                
                placeholder="Last 4 Digits of SSN"
                aria-label="Last 4 Digits of SSN"
              />
              <span class="field-error"></span>
            </div>
            <div class="auth-form__row">
              <button type="submit" class="btn signInBtn">Sign in</button>
            </div>
            <div class="auth-form__row">
              <div class="auth-form__new-request">
                <a href="./form" class="auth-form__new-request-link"
                  >Submit New Request</a
                >
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
</template>

<script setup>
  
</script>

<style  scoped>

.auth-form-holder {
    padding-top: 60px;
    padding-bottom: 60px;
}
.form-title {
    position: relative;
    margin-top: 0;
    margin-bottom: 40px;
    font-weight: 400;
    font-size: 1.375rem;
    line-height: 1.2;
    color: #696a73;
    text-align: center;
}
.auth-form {
    max-width: 400px;
    width: 100%;
    padding: 50px 40px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 15px 42px rgba(9,15,30,.08);
    border: 1px solid #e8e9ef;
}
.auth-form__row {
    position: relative;
    margin-bottom: 12px;
}
.auth-form__title {
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 1.5rem;
    color: #2b335c;
}
.auth-form__sub-title, 
.auth-form__title,
.auth-form__new-request {
    text-align: center;
}
.auth-form__sub-title {
    font-size: .875rem;
    color: #696a73;
    line-height: 1.2;
}
.auth-form__row {
    position: relative;
    margin-bottom: 12px;
}
.auth-form .btn {
    width: 100%;
    justify-content: center;
}
.signInBtn:hover {
    color: #fff;
    background-color: #00659e;
    box-shadow: 0 15px 22px rgba(29,39,130,.1);
}
.auth-form__new-request-link {
    font-size: 1rem;
    color: #696a73;
}
.form-title::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    max-width: 322px;
    width: 100%;
    height: 29px;
    margin-top: 5px;
    background-repeat: no-repeat;
    background-position: top center;
    background-image: url(../assets/img/form-title-dotted.svg);
}
</style>