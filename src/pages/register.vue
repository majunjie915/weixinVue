<template>
    <div class="register">
      <h3 class="title">验证码登录</h3>
      <ul class="userInfo">
        <li><input type="number" placeholder="请输入手机号" /></li>
        <li style="width: 3.7rem;float: left">
          <input type="number" placeholder="请输入验证码" />
        </li>
        <button>获取验证码</button>
        <li>
          <img src="../../static/image/checked@2x.png" class="checkedImg" />
          同意<router-link to="/memberRules" style="color: #267FF0;">《会员章程》</router-link>
        </li>
      </ul>
      <p class="complete">完成</p>
    </div>
</template>

<script>

    export default {
      name: "register",
      data () {
        return {

        };
      },
      mounted () {

      },
      methodes: {

      }
    }

</script>

<style scoped="">
  .register{
    border-top:solid 0.01rem transparent;
  }
  .register .title{
    margin: 0.8rem 0.6rem;
    font-size: 0.48rem;
    color: #4A4D51;
  }
  .register .userInfo{
    margin: 0 1rem;
    line-height:1rem;
  }
  .register .userInfo button{
    width: 1.6rem;
    height: 0.72rem;
    line-height: 0.72rem;
    border:solid 0.01rem #C2C7CE;
    display: block;
    float: left;
    margin-top: 0.34rem;
    margin-left: 0.2rem;
    font-size: 0.24rem;
    color: #8A9499;
  }
  .register .userInfo li{
    border-bottom: solid 0.01rem #C2C7CE;
  }
  .register .userInfo li:last-of-type{
    border-bottom: none;
    font-size: 0.28rem;
    color: #8A9499;
  }
  .register .userInfo input{
    height: 1rem;
    border:none;
    font-size: 0.32rem;
    color: #4A4D51;
  }
  .register .checkedImg{
    width: 0.28rem;display: inline;vertical-align: center;
    position: relative;
    top: 0.04rem;margin-right: 0.15rem;
  }
  .register .complete{
    width: 5.5rem;
    height: 0.8rem;
    line-height: 0.8rem;
    background: #4080E8;
    border-radius: 0.08rem;
    margin-left: 1rem;
    font-size: 0.32rem;
    color: #FFFFFF;
    text-align: center;
  }
</style>
