<template>
    <div class="order-success">
      <div class="flex flex-head">
        <img class="my-img" src="/static/image/shengxiao.png" alt="">
        <span class="my-order">订单支付200元！</span>
      </div>
      <div class="flex flex-fi flex-lr">
        <span class="left">优惠金额</span>
        <span class="rt">直降优惠2元优惠券抵扣10元</span>
      </div>
      <div class="flex flex-lr flex-bt">
        <span class="left">油号</span>
        <span class="right">92#</span>
      </div>
      <div class="flex flex-lr flex-bt">
        <span class="left">油量</span>
        <span class="right">40L</span>
      </div>
      <div class="flex flex-lr flex-bt">
        <span class="left">获得积分</span>
        <span class="right">40积分</span>
      </div>
      <div class="flex flex-lr flex-bt">
        <span class="left">交易时间</span>
        <span class="right">2017-10-31  16:20</span>
      </div>
      <div class="bg"></div>
      <div>
        <p class="title">恭喜您获得20元优惠券一张</p>
        <div class="img-bg">
          <div class="img-bg-head"></div>
          <div class="img-bg-in">
            <i>¥</i>
            <em>20</em>
            <span>双十二满减活动</span>
          </div>
          <div class="img-bg-in">
            <p>满199元可用</p>
            <div>海淀黄庄站适用 ( 仅限汽油产品 )</div>
          </div>
        </div>
      </div>

      <div>
        <div class="friend">
          成功邀请3名好友，您还可以获得一张满199减10元面额的加油券
        </div>
        <yd-button class="my-btn">邀请好友</yd-button>
      </div>

    </div>
</template>

<script>

    export default {
       components:{

       }
    }

</script>

<style scoped>
  .order-success .flex{
    display: flex;display: -webkit-flex; width:90%;  margin-left:5%;margin-right: 5%;
  }
  .order-success .bg{
    width:100%;
    height:0.2rem;background: #EFF2F3;
  }
  .order-success .flex-head{
    padding: 0.64rem 0 0.6rem 0;border-bottom: 0.02rem dotted #C2C7CE;
  }
  .order-success .my-img{  width:0.6rem;  height:0.6rem;margin: 0 0.4rem 0 0.2rem}
  .order-success .my-order{font-size: 0.4rem;
    line-height:0.56rem;
    color: #4A4D51;}
  .order-success .left{
    font-size: 0.28rem;
    line-height:0.4rem;
    color: #88959A;
  }
  .order-success .flex-fi{
    padding: 0.3rem 0;
  }
  .order-success .flex-bt{
    padding-bottom:0.3rem;}
  .order-success .flex-lr{ justify-content: space-between;}
  .order-success .rt{
    font-family: "PingFangSC-Semibold";
    font-size: 0.28rem;
    color: #4A4D51;
    width:1.98rem;
    text-align: right;
    line-height: 0.42rem;
  }
  .order-success .right{
    font-size: 0.28rem;
    color: #4A4D51;
    line-height: 0.42rem;
  }
  .order-success .title{
    font-size: 0.36rem;
    line-height:0.5rem;
    text-align: center;
    color: #EF5859;
    padding:0.6rem 0 0.5rem 0;
  }
  .order-success .img-bg{
    width:6.7rem;
    height:2.2rem;
    border-radius: 0.12rem;
    margin: 0 auto;
    box-shadow: 0 0.04rem 0.08rem 0 #E0E3E6;
    box-sizing: border-box;
  }
  .order-success .img-bg-head{
    height:0.12rem;
    width:100%;
    background: #EF5859;
    border-radius: 0.12rem 0.12rem 0 0;
  }
  .order-success .img-bg-in{display: flex;display: -webkit-flex;}
  .order-success .img-bg-in>i{
    font-size: 0.48rem;
    line-height:0.66rem;
    color: #EF5859;
    display: inline-block;
    padding: 0.56rem 0 0 0.54rem;
  }
  .order-success .img-bg-in>em{
    font-size: 0.8rem;
    color: #EF5859;
    line-height:1.12rem;
    display: inline-block;
    padding:0.24rem 0.6rem 0 0;
  }
  .order-success .img-bg-in>span{
    font-size: 0.32rem;
    color: #4A4D51;
    line-height:0.44rem;
    display: inline-block;
    padding-top: 0.52rem;
  }
  .order-success .img-bg-in>p{
    font-size: 0.24rem;
    line-height: 0.34rem;
    color: #EF5859;
    padding:0 0.6rem 0 0.54rem;
  }
  .order-success .img-bg-in>div{
    font-size: 0.24rem;
    line-height: 0.34rem;
    color: #85959B;
  }
  .order-success .friend{
    width:5.96rem;font-size: 0.28rem;
    line-height:0.4rem;
    color: #EF5859;
    text-align: center;
    padding-top:0.6rem;
    margin:0 auto;
  }
  .order-success .my-btn{
    font-size: 0.32rem;
    color: #EF5859;
    background: rgba(239,88,89,0.1);
    border: 0.02rem solid #EF5859;
    border-radius: 1.2rem;
    width:2.9rem;
    height:0.8rem;
    margin:0 auto;
    display: block;
    margin-top: 0.3rem;
  }
  .order-success .my-btn:active{
    background: rgba(239,88,89,0.2);
  }
</style>
