<template>
  <div class="forget">
    <div class="forget-container">
      <p class="title">欢迎加入公益猫</p>
      <p class="title-sub">忘记密码</p>
      <form action="" class="forget-form">
        <div class="input-container">
          <label for="email">邮箱:</label>
          <input type="text" autocomplete="off" id="email" placeholder="请输入您的邮箱">
        </div>
        <div class="input-container">
          <label for="password">新密码:</label>
          <input type="password" id="password" placeholder="请输入新密码">
        </div>
        <div class="input-container">
          <label for="repassword">新密码:</label>
          <input type="text" id="repassword" placeholder="请再次输入新密码">
        </div>
        <div class="input-container">
          <label for="identify">验证码:</label>
          <input type="text" id="identify" placeholder="请输入验证码">
          <button class="identify">获取验证码</button>
        </div>
        <p><input type="submit" class="forget-btn" name="" id="" value="确认修改"></p>
        <p>改变主意，直接<a href="/loginin">登录</a></p>
      </form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/variables.scss";

  .forget{
    background: #ffffff;
    overflow: hidden;
    .forget-container{
      width: 400px;
      height: auto;
      margin: 180px auto 0;
      p{
        margin: 0;
      }
      .title{
        text-align: center;
        color: #333333;
        font-size: 60px;
        font-family: 'HyleMiaoTIJ', sans-serif;
        letter-spacing: -4px;
      }
      .title-sub{
        margin-top: 30px;
        text-align: center;
        color: $btnBg;
        font-size: 40px;
        font-family: 'PingFangSC', sans-serif;
      }
      .forget-form{
        margin-top: 60px;
        .input-container{
          margin-top: 20px;
          height: 44px;
          line-height: 44px;
          border-bottom: 2px solid #999999;
          label{
            display: inline-block;
            width: 84px;
            font-size: 22px;
            color: #333333;
            font-family: 'PingFangSC', sans-serif;
          }
          input{
            height: 24px;
            font-size: 16px;
            border: 0;
            outline: none;
          }
          .identify{
            float: right;
            margin-top: 10px;
            @include btn(80px,30px,14px);
          }
        }
        p{
          margin-top: 30px;
          font-size: 16px;
          color: #666666;
          text-align: center;
          font-family: 'PingFangSC', sans-serif;
          a{
            color: $btnBg;
          }
        }
        .forget-btn{
          @include btn(350px, 60px, 30px);
        }
      }
    }
  }
</style>
