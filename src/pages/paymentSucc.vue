<template>
  <div class="paymentSucc">
      <ul class="coupon">
        <li>
          <div class="left">
            <p>
              ￥
              <span style="font-size: 0.8rem">20</span>
            </p>
            <p style="font-size: 0.24rem;margin-top: 0.06rem">满199元可用</p>
          </div>
          <div class="right">
            双12满减活动
            <p>仅汽油产品可用</p>
          </div>
        </li>
        <li style="font-size: 0.24rem;margin: 0.44rem;color: #85959B;">适用于海淀黄庄站</li>
      </ul>
      <p style="font-size: 0.24rem;color: #fff;text-align: center">
        满5人领取，您即可获得10元中化加油券一张，加油即减
      </p>
      <p style="font-size: 0.28rem;color: #fff;text-align: center;margin: 0.6rem 0 0.4rem;">
        已有<span>3</span>人参与，
        还差<span>2</span>人
      </p>
      <p class="invited">
        <img src="../../static/image/checked@2x.png" v-for="item in [1,2,3]" />
        <img src="../../static/image/none@2x.png" v-for="item in [1,2]" />
      </p>
    <p class="notice">成功邀请3名好友，您还可以获得一张满199减10元面额的加油券</p>
    <p class="continue">继续邀请</p>
    </div>
</template>

<script>

  export default {
    name: "myInvitation",
    data () {
      return {

      };
    }
  }

</script>

<style scoped="">
  .paymentSucc{
    padding-top: 0.01rem;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("../../static/image/activityBg@2x.png") 0 0 no-repeat;
    background-size: 100%;
  }
  .paymentSucc .coupon{
    width: 6.7rem;
    height: 2.4rem;
    background: url("../../static/image/coupon@2x.png") 0 0 no-repeat;
    background-size: 100%;
    margin: 0.8rem 0.4rem 0.3rem;
    padding-top: 0.22rem;
  }
  .paymentSucc .coupon li{
    display: flex;
  }
  .paymentSucc .coupon li .left{
    width: 2.46rem;
    text-align: center;
    color: #EF5859;
    font-size: 0.48rem;
  }
  .paymentSucc .coupon li .right{
    color: #4A4D51;
    font-size: 0.32rem;
    padding-top: 0.24rem;
  }
  .paymentSucc .coupon li .right p{
    font-size: 0.24rem;
    color: #85959B;
    margin-top: 0.3rem;
  }
  .paymentSucc .invited{
    display: flex;
    justify-content: center;
  }
  .paymentSucc .invited img{
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.2rem;
    border-radius: 50%;
  }
  .paymentSucc .continue{
    background: #FDE174;
    box-shadow: 0 4px 10px 0 rgba(188,58,59,0.50);
    border-radius: 0.66rem;
    width: 2.9rem;
    height: 0.8rem;
    line-height: 0.8rem;
    margin: 0.3rem auto;
    text-align: center;
    font-size: 0.32rem;
    color: #EF5859;
  }
  .paymentSucc .notice{
    font-size: 0.36rem;
    color: #FFFFFF;
    letter-spacing: 0;
    text-shadow: 0 1px 2px rgba(239,88,89,0.50);
    width: 5.94rem;
    text-align: center;
    margin: 1rem auto 0;
  }
</style>
