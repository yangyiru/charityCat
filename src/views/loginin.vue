<template>
  <div class="loginin">
    <div class="loginin-container">
      <p class="title">欢迎加入公益猫</p>
      <p class="title-sub">登录</p>
      <form action="" class="signup-form">
        <div class="input-container">
          <label for="name">邮箱:</label>
          <input type="text" autocomplete="off" id="name" placeholder="请输入您的邮箱">
        </div>
        <div class="input-container">
          <label for="password">密码:</label>
          <input type="password" id="password" placeholder="请输入6位以上字符密码">
        </div>
        <p class="remenber">
          <span>
            <input type="checkbox" name="" id="">
            30天记得我
          </span>
          <a href="/forget">忘记密码?</a>
        </p>
        <p><input type="submit" class="loginin-btn" name="" id="" value="登录"></p>
        <p>已没有账号？<a href="">注册帐号</a></p>
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

  .loginin{
    background: #ffffff;
    overflow: hidden;
    .loginin-container{
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
        .remenber{
          display: flex;
          align-items: center;
          text-align: left;
          justify-content: space-between;
          font-size: 12px;
          color: $btnBg;
          span{
            display: flex;
            align-items: center;
            input{
            width: 15px;
            height: 15px;
            border: 1px solid #999999;
            border-radius: 3px;
            background: #cccccc;
            }
          }
        }
        .loginin-btn{
          @include btn(350px, 60px, 30px);
        }
      }
    }
  }
</style>
