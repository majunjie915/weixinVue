<template>
    <div class="menberIndex">
      <div class="top">
        <p>壹化加油<br>会员卡</p>
        <p class="cardNum">6950 1010 5266 0001 352</p>
      </div>
      <ul class="items">
        <li>
         <router-link to="memberPoints"> 积分
          <p>100</p></router-link>
        </li>
        <li>
          <router-link to="balance">余额
          <p>0.00元</p></router-link>
        </li>
        <li>
          <router-link to="coupon/all/unused">优惠券
          <p>查看</p></router-link>
        </li>
      </ul>
      <button class="wxPay">微信支付</button>
      <ul class="types">
        <router-link to="myInvitation"><li>我的邀请</li></router-link>
        <router-link to="memberInfo"><li>会员卡详情</li></router-link>
        <router-link to="expensesRecord"><li>消费记录</li></router-link>
        <li>人脸识别</li>
      </ul>
    </div>
</template>

<script>

    export default {
      name: "memberIndex",
      data () {
        return {

        };
      },
      mounted () {

      },
      methods: {

      }
    }

</script>

<style scoped="">
  .menberIndex{
    text-align: center;
  }
  .menberIndex .top{
    border:  0.02rem solid #ccc;
    border-radius: 0.08rem;
    box-sizing: border-box;
    margin: 0.3rem;
    padding: 0.4rem;
  }
  .menberIndex .items{
    display: flex;
    justify-content: space-around;
    margin: 0.4rem 0;
  }
  .menberIndex .items li{
    width:33%;
    border-right: solid 0.01rem #ccc;
    text-align: center;
  }
  .menberIndex .items li:last-of-type{
    border-right:none;
  }
  .menberIndex .wxPay{
    margin: 0.4rem auto;
    background: transparent;
    border: solid 0.02rem seagreen;
    padding: 0.2rem 0.8rem;
    border-radius: 0.16rem;
    color: seagreen;
  }
  .menberIndex .types{
    text-align: left;
    margin: 0.2rem 0.3rem;
    line-height: 1.2rem;
  }
  .menberIndex .types li{
    border-top:solid 0.01rem #ccc;
  }
</style>
