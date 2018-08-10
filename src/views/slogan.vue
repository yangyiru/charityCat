<template>
  <div class="wrapper">
    <div class="slogan-container">
      <div class="slogan-image">
        <img src="../assets/img/slogancats.png" alt="公益猫" />
      </div>
      <p class="slogan">关于猫de公益</p>
      <section>
        <blockquote class="quote">
          <p>如果你无法简洁的表达你的想法，那只说明你还不够了解它。</p>
          <p>-- 阿尔伯特·爱因斯坦</p>
        </blockquote>
      </section>
      <section class="button-group">
        <button>加入我们</button>
        <button>逛逛社区</button>
      </section>
    </div>

  </div>
</template>

<script>
export default {
  name: 'slogan'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/style/variables.scss";

.wrapper {
  background-color: $bg;
  height: 100%;
  .slogan-container {
    width: 800px;
    margin:auto;
  }
  .slogan-image {
    padding: 180px 0 30px 0;
    text-align: center;
  }
  .slogan {
    text-align: center;
    color: #333333;
    font-size: 60px;
    font-family: 'HyleMiaoTIJ', sans-serif;
  }
  .quote {
    color: #333333;
    font-size: 20px;
    text-align: center;
    font-family: 'PingFangSCRegular', sans-serif;
    padding: 60px 0 80px 0;
    p:nth-child(2) {
      text-align: right;
    }
  }
  .button-group {
    text-align: center;
    button {
      background-color: $btnBg;
      border: none;
      font-family:'PingFangSCRegular', sans-serif;
      font-size: 24px;
      color: #ffffff;
      width: 200px;
      height: 60px;
      border-radius: 5px;
    }
    button:first-child {
      margin-right: 45px;
    }
    button:nth-child(2) {
      margin-left: 45px;
    }
  }
}

</style>
