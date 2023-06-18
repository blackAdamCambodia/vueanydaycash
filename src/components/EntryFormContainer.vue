<template>
   <div class="entry-form-container">
              <div class="main-form">
                <div class="progress-bar">
                  <div class="progress-bar-container">
                    <div class="progress-line" style="width: 5%"></div>
                    <span class="progress-percentage">5%</span>
                  </div>
                </div>
                <hr class="hr-line" />
                <div class="form-container">
                  <div class="form-title">
                    <p>How Much Do You Need?</p>
                  </div>
                  <div class="btn-group">
                    <a href="">
                      <button class="btn-radio" type="button">
                        Up to $500
                      </button>
                    </a>
                    <a href="">
                      <button class="btn-radio" type="button">
                        $500 to $1000
                      </button>
                    </a>
                    <a href="">
                      <button class="btn-radio" type="button">
                        $1000 to $2500
                      </button>
                    </a>
                    <a href="">
                      <button class="btn-radio" type="button">
                        $2500 to $5000
                      </button>
                    </a>
                    <a href="">
                      <button class="btn-radio" type="button">
                        Above $5000
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
</template>

<script setup>

</script>

<style scoped>

.entry-form-container {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 546px;
    border-radius: 20px;
    border: 1px solid #e8e9ef;
    background: #fff;
    font-family: "Montserrat",sans-serif;
    color: #242f65;
    box-shadow: 0 15px 42px rgba(9,15,30,.08);
}

button.btn-radio {
    width: 100%;
    padding: 0 20px 0 20px;
    font-family: inherit;
    font-size: 24px;
    transition: .15s;
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    height: auto;
    min-height: 54px;
    border-radius: 54px;
    padding-top: 5px;
    padding-bottom: 5px;
    line-height: 1.1;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    background: #0075B7;
    user-select: none;
    border:none;
    margin-bottom: 20px;
}
.active {
    background: #38b7ff;
}
.btn-group {
    width: 94%;
    margin: 10px auto;
}
.btn-group a {
    text-decoration: none;
}

.form-container {
    max-width: 495px;
    margin: 26px auto;
    padding-top: 11px;
    padding-bottom: 13px;
}
.form-title {
    margin-top: 10px;
    text-align: center;
    font-size: 23px;
    margin-bottom: 20px;
    font-weight: 600;
    color: #242f65;
}
.progress-bar {
    position: relative;
    top: 20px;
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    background: 0 0;
    border: none;
    font: inherit;
    left: -22px;
}
.progress-bar-container {
    height: 6px;
    width: 100%;
    position: relative;
    background: #e8e9ef;
    border: none;
    border-radius: 8px;
}
.progress-line {
    position: absolute;
    left: 0;
    top: -1px;
    right: 0;
    bottom: -1px;
    border-radius: 4px;
    background: #03c899;
    transition: .3s linear;
}
.progress-percentage {
    position: absolute;
    right: -33px;
    font-size: 13px;
    font-weight: 600;
    top: -6px;
}
.hr-line {
    position: relative;
    border: none;
    border-bottom: 1px solid #e8e9ef;
    top: 35px;
}

</style>