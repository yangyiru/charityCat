<template>
  <div class="signup">
    <div class="signup-container">
      <p class="title">欢迎加入公益猫</p>
      <p class="title-sub">注册帐号</p>
      <form action="" class="signup-form">
        <div class="input-container">
          <label for="name">昵称:</label>
          <input type="text" id="name" placeholder="请输入您的昵称">
        </div>
        <div class="input-container">
          <label for="password">密码:</label>
          <input type="password" id="password" placeholder="请输入6位以上字符密码">
        </div>
        <div class="input-container">
          <label for="email">邮箱:</label>
          <input type="text" id="email" placeholder="请输入您的常用邮箱">
        </div>
        <div class="input-container">
          <label for="identify">验证码:</label>
          <input type="text" id="identify" placeholder="请输入验证码">
          <button class="identify">获取验证码</button>
        </div>
        <p>点击注册帐号，表示同意<a href="">服务条款</a>和<a href="">隐私条款</a></p>
        <p><input type="submit" class="signup-btn" name="" id="" value="注册"></p>
        <p>已有账号，直接<a href="">登录</a></p>
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

  .signup{
    background: #ffffff;
    overflow: hidden;
    .signup-container{
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
      .signup-form{
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
          font-size: 16px;
          color: #666666;
          text-align: center;
          font-family: 'PingFangSC', sans-serif;
          a{
            color: $btnBg;
          }
        }
        p:first-of-type{
          margin-top: 24px;
        }
        p:last-of-type{
          margin-top: 24px;
        }
        .signup-btn{
          margin-top: 30px;
          @include btn(350px, 60px, 30px);
        }
      }
    }
  }
</style>
