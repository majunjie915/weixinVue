<template>
  <div class="order-details">
    <div class="m-flex m-head">
      <img style="width:1rem;height: 1rem;margin-right: 0.4rem" src="/static/image/yishoucang.png" alt="">
      <div>
        <p>海淀中关村1号加油站</p>
        <div class="m-flex">
          <span>加油升数：56升</span>
          <span>实付金额：<i>200元</i></span>
        </div>
        <time>2017-05-12 12:30:45</time>
      </div>
    </div>
    <div class="bg"></div>
    <div class="flex S">商品详情</div>
    <div class="flex flex-fi flex-lr">
      <span class="left">订单编号</span>
      <span class="right">2234556888</span>
    </div>
    <div class="flex flex-lr flex-bt">
      <span class="left">油品</span>
      <span class="right">95#</span>
    </div>
    <div class="flex flex-lr flex-bt">
      <span class="left">单价</span>
      <span class="right">5元/升</span>
    </div>
    <div class="flex flex-lr flex-bt">
      <span class="left">加油升数</span>
      <span class="right">45升</span>
    </div>
    <div class="flex flex-lr flex-bt">
      <span class="left">应付金额</span>
      <span class="right">¥ 250.00</span>
    </div>
    <div class="flex flex-lr flex-bt">
      <span class="left">优惠金额</span>
      <span class="right red">- ¥ 50.00</span>
    </div>
    <div class="flex flex-lr flex-bt">
      <span class="left">优惠券</span>
      <span class="right red">- ¥ 50.00</span>
    </div>
    <div class="flex flex-lr flex-bt" style="border-bottom:0.02rem solid #DCE2EA;">
      <span class="left">积分抵扣</span>
      <span class="right red">- ¥ 25.00</span>
    </div>
    <div class="flex flex-lr flex-bt">
      <span class="left LEFT">实付金额</span>
      <span class="right RED">¥ 200.00</span>
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
  .order-details .S{
    font-size: 0.32rem;
    color: #4A4D51;
    padding:0.38rem 0 0.2rem 0;
    border-bottom:0.02rem solid #DCE2EA;
  }
  .order-details .red{
    color: #EF5859 !important;
  }
  .order-details .RED{
    font-size: 0.32rem !important;
    color: #EF5859 !important;
    padding-top: 0.3rem !important;
  }
  .order-details .LEFT{
    font-size: 0.32rem !important;
    color: #4A4D51 !important;
    padding-top: 0.3rem !important;
  }
  .order-details .m-head{
    padding: 0.4rem;
  }
  .order-details .m-head>div>p{
    font-size: 0.36rem;
    line-height: 0.5rem;
    color: #4A4D51;
  }
  .order-details .m-flex>span{
    font-size: 0.28rem;
    line-height: 0.4rem;
    color: #8A9499;
  }
  .order-details .m-flex>span{
    margin:0.16rem 0.4rem 0.12rem 0;
  }
  .order-details .m-flex>span>i{
    font-family: 'PingFangSC-Semibold';
    color: #EF5859;
  }
  .order-details .m-head time{
    font-size: 0.28rem;
    color: #C2C7CE;
  }
  .order-details .m-flex{
    display: flex;display: -webkit-flex;;
  }
  .order-details .flex{
    display: flex;display: -webkit-flex; width:90%;  margin-left:5%;margin-right: 5%;
  }
  .order-details .bg{
    width:100%;
    height:0.2rem;background: #EFF2F3;
  }
  .order-details .flex-head{
    padding: 0.64rem 0 0.6rem 0;border-bottom: 0.02rem dotted #C2C7CE;
  }
  .order-details .my-img{  width:0.6rem;  height:0.6rem;margin: 0 0.4rem 0 0.2rem}
  .order-details .my-order{font-size: 0.4rem;
    line-height:0.56rem;
    color: #4A4D51;}
  .order-details .left{
    font-size: 0.28rem;
    line-height:0.4rem;
    color: #88959A;
  }
  .order-details .flex-fi{
    padding: 0.3rem 0;
  }
  .order-details .flex-bt{
    padding-bottom:0.3rem;}
  .order-details .flex-lr{ justify-content: space-between;}
  .order-details .right{
    font-size: 0.28rem;
    color: #4A4D51;
    line-height: 0.42rem;
  }



</style>
