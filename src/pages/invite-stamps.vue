<template>
    <div ref="wrapper" class="invite-stamps">
      <div class="r-bg-container">
        <div class="top">
          <div class="left">
            <p style="font-size: 0.48rem;margin-top: 0.26rem">￥<span style="font-size: 0.8rem">20</span></p>
            <p>满<span>199</span>元可用</p>
          </div>
          <div class="right">
            <p>双十二满减活动</p>
            <p style="padding-top: 0.3rem">仅汽油产品可用</p>
          </div>
        </div>
        <div class="bottom">
          <p>适用于海淀黄庄站</p>
        </div>
      </div>
      <div v-if="isShow" style="position: relative">
        <input class="input1" type="text" v-model="phone" maxlength="11" @blur="verificationPhone" placeholder="请输入电话号码">
        <input class="input1 input2"  type="password" maxlength="4" v-model="code" @blur="verificationCode" placeholder="4位验证码">
        <yd-button v-show="show" @click.native="getCode" class="m-button">获取验证码</yd-button>
        <yd-button v-show="!show" class="m-button">{{count}}s后重发</yd-button>
        <p class="reg" v-show="isReg">{{message}}</p>
      </div>
      <yd-button size="large" class="m-btn">点击领取</yd-button>
    </div>
</template>

<script>

    export default {
      data(){
        return{
          isShow:true, //判断是否关注
          phone:'',
          code:'',
          isReg:false,
          show:true,
          count: '',
          message: '',
          timer: null
        }
      },
      methods:{
        verificationPhone(){
          let reg=11 && /^(0|86|17951)?(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$/;
          if(this.phone==''){
            this.isReg=true
            this.message="手机号输入有误"
            setTimeout( () => {
              this.isReg=false
              this.message=""
            },2000);
            return false
          }else if(!reg.test(this.phone)){
            this.isReg=true
            this.message="手机号输入有误"
            setTimeout( () => {
              this.isReg=false
              this.message=""
            },2000);
            return false
          }else{
            this.isReg=false
            return false
          }
        },
        getCode() {
          const TIME_COUNT = 60;
          if (!this.timer) {
            this.count = TIME_COUNT;
            this.show = false;
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--;
              } else {
                this.show = true;
                clearInterval(this.timer);
                this.timer = null;
              }
            }, 1000)
          }
        },
        verificationCode: function(){
          if (!/^\d{4}$/.test(this.code)){
            this.message = "请输入4位数的验证码";
            this.isReg = true;
            setTimeout( () => {
              this.isReg = false;
              this.code = "";
            } ,2000)
          }else{
            this.isComplete = true;
          }
        },

      },

    }

</script>

<style scoped>
  .invite-stamps .reg{
    text-align: center;
    width:4.4rem;
    height: 0.68rem;
    opacity: 0.5;
    background: #000000;
    border-radius: 0.08rem;
    position: absolute;
    font-size: 0.28rem;
    line-height: 0.68rem;
    color: #FFFFFF;
    left:0;
    top: 0.55rem;
    margin-left: 1.55rem;
  }
  .invite-stamps .input1{
     display: block;
     border: none;
    background: none;
    width: 5.5rem;
     height: 0.72rem;
    margin:0 auto;
     border-bottom: 0.02rem solid #ccc;
     font-family: 'PingFangSC-Semibold';
     font-size: 0.32rem;
     padding-left:0.2rem;
     color: #FFFFFF;
     margin-top: 0.3rem;
    box-sizing: border-box;
  }
  .invite-stamps .input2{
     width: 3.7rem !important;
    margin-left: 1rem;
   }
  .invite-stamps .m-button{
     width: 1.6rem;
    height:0.72rem;
    position: absolute;
    right:0;
    top: 1.05rem;
    margin-right: 1rem;
    font-size: 0.24rem;
    padding: 0;
    background: none;
    border: 0.02rem solid #ccc;
    box-sizing: border-box;
    color: #ccc;
   }
   ::placeholder{
     color: #fff;
   }
  .invite-stamps{
    height:100vh;
    background-image: url('/static/image/activityBg@2x.png');
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
    padding-top: 1.2rem;
  }
  .invite-stamps .r-bg-container{
    width: 6.7rem;
    height:2.4rem;
    margin: 0 0.4rem;
    background: url("../../static/image/coupon@2x.png") 0 0 no-repeat;
    background-size: 100%;
  }
  .invite-stamps .top{
    display: flex;
    justify-content: flex-start;
    height: 1.84rem;
  }
  .invite-stamps .top .left{
    width: 2.48rem;
    text-align: center;
    font-size: 0.24rem;
    color: #EF5859;
  }
  .invite-stamps .content li.unused .left{
    color: #EF5859;
  }
  .invite-stamps .top .right{
    font-size: 0.24rem;
    color: #85959B;
    margin-top: 0.26rem;
  }
  .invite-stamps .top .right>p:nth-child(1){
    font-size: 0.32rem;color: #4A4D51;font-family: 'PingFangSC-Medium';line-height:0.44rem;
    padding-top:0.18rem;
  }
  .invite-stamps .bottom{
    display: flex;
    justify-content: space-between;
    height:0.54rem;
    line-height: 0.54rem;
    font-size: 0.24rem;
    color: #85959B;
    padding: 0 0.4rem;
  }
  .invite-stamps .m-btn{
    background: #FDE174;
    box-shadow: 0 0.08rem 0.2rem 0 rgba(188,58,59,0.50);
    border-radius: 0.66rem;
    width: 3.6rem;
    height:0.92rem;
    margin: 0.8rem auto;
    color: #EF5859;
  }
</style>
