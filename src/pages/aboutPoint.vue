<template>
    <div class="aboutPoint">
      <h3>Q1：积分可以兑换什么？</h3>
      <ul>
        <li>积分作为会员的下单奖励，可以直接抵扣加油费用，积分消费即可用。</li>
      </ul>
      <h3>Q2：怎么获得积分？</h3>
      <ul>
        <li>
          下单奖励积分：每完成1笔在线支付订单（订单实际支付金额 ≥20元），即可获得1元奖励金；
        </li>
        <li>任务奖励积分：完成任务即可获得对应积分，积分在任务完成后可直接领取。</li>
      </ul>
      <h3>Q3：积分的兑换条件？</h3>
      <ul>
        <li>已到账的积分可按照兑换价格，直接兑换油站优惠券。</li>
      </ul>
      <p>壹化加油保留在法律允许范围内的解释权。</p>
    </div>
</template>

<script>

    export default {
      name: "aboutPoint",
      data () {
        return {

        };
      }
    }

</script>

<style scoped="">
  .aboutPoint{
    padding:0.01rem 0.4rem;
  }
  .aboutPoint h3{
    margin-top: 0.6rem;
    margin-bottom: 0.16rem;
    font-size: 18px;
    color: #494D51;
  }
  .aboutPoint ul li{
    list-style: disc;
    margin-left: 0.84rem;
    font-size: 14px;
    color: #85959B;
  }
  .aboutPoint p{
    margin-top:0.2rem;
    font-size: 14px;
    color: #85959B;
  }
</style>
