<template>
    <div class="register">
      <h3 class="title">验证码登录</h3>
      <ul class="userInfo">
        <li>
          <input type="tel" placeholder="请输入手机号" v-model="mobile"
                 @blur="verificationTel" :class="{isError: this.isError}" />
        </li>
        <li style="width: 3.7rem;float: left">
          <input type="password" placeholder="请输入验证码" v-model="code" @blur="verificationCode" />
        </li>
        <button v-show="showWord" @click="getCode">获取验证码</button>
        <button v-show="!showWord" class="count">{{count}} s后重发</button>
        <li>
          <img src="../../static/image/checked@2x.png" class="checkedImg" />
          同意<router-link to="/memberRules" style="color: #267FF0;">《会员章程》</router-link>
        </li>
      </ul>
      <p class="complete" @click="register" v-show="isComplete">完成</p>
      <p class="complete" @click="verificationAll" v-show="!isComplete">完成</p>

      <p class="toast" v-show="isToast">{{toastMessage}}</p>
    </div>
</template>

<script>

    export default {
      name: "register",
      data () {
        return {
          mobile: "",
          code: "",
          isToast: false,
          toastMessage: "",
          isError: false,
          isComplete: false,
          showWord: true,
          count: '',
          timer: null,
        };
      },
      mounted () {

      },
      methods: {
        verificationTel: function(){
          let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$/;
          if (!reg.test(this.mobile)){
            this.toastMessage = "手机号输入有误";
            this.isToast = true;
            this.isError = true;
            setTimeout( () => {
              this.isToast = false;
            } ,2000)
          }else{
            this.isComplete = true;
          }
        },
        verificationCode: function(){
          if (!/^\d{4}$/.test(this.code)){
            this.toastMessage = "请输入4位数的验证码";
            this.isToast = true;
            this.isError = true;
            setTimeout( () => {
              this.isToast = false;
            } ,2000)
          }else{
            this.isComplete = true;
          }
        },
        verificationAll: function(){
          if(this.isError){
            this.toastMessage = "请输入正确的手机号或验证码";
            this.isToast = true;
            setTimeout( () => {
              this.isToast = false;
            } ,2000)
          }
        },
        register: function(){
          this.$router.push("/");
        },
        getCode(){
          const TIME_COUNT = 60;
          if (!this.timer) {
            this.count = TIME_COUNT;
            this.showWord = false;
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--;
              } else {
                this.showWord = true;
                clearInterval(this.timer);
                this.timer = null;
              }
            }, 1000)
          }
        }
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
  .register .toast{
    position: fixed;
    top: 3.36rem;
    left:1.54rem;
    opacity: 0.5;
    background: #000000;
    border-radius: 0.08rem;
    width: 4.42rem;
    height: 0.68rem;
    line-height: 0.68rem;
    text-align: center;
    color: #ffffff;
    font-size: 0.28rem;
    letter-spacing: 0.03rem;
  }
  .register .userInfo input.isError{
    color: #EF5859;
  }
</style>
