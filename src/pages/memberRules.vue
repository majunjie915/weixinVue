<template>
    <div class="memberRules">
      <ul>
        <li>
          已到账的积分可按照兑换价格，直接兑换油站优惠券账的积分可按照兑换价格。
        </li>
        <li>
          已到账的积分可按照兑换价格，直接兑换油站优惠券账的积分可按照兑换价格。
        </li>
        <li>
          已到账的积分可按照兑换价格，直接兑换油站优惠券账的积分可按照兑换价格。
        </li>
        <li>
          已到账的积分可按照兑换价格，直接兑换油站优惠券账的积分可按照兑换价格。
        </li>
        <li>
          已到账的积分可按照兑换价格，直接兑换油站优惠券账的积分可按照兑换价格。
        </li>
      </ul>
      <p>壹化加油保留在法律允许范围内的解释权</p>
    </div>
</template>

<script>

    export default {
      created () {
        this.$api.get('/wxc/test', null, r => {
          console.log(r)
        })
      }
    }

</script>

<style scoped="">
  .memberRules{
    border-top: solid 0.01rem transparent;
    padding: 0.6rem 0.98rem;
  }
  .memberRules li{
    list-style: disc;
    font-size: 0.28rem;
    color: #85959B;
    margin-bottom: 0.3rem;
  }
  .memberRules p{
    font-size: 0.28rem;
    color: #85959B;
    position: absolute;
    bottom: 0.32rem;
  }
</style>
