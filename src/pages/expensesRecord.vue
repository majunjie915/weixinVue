<template>
    <div v-if="expenssesData.length==0" class="expensesRecord">
      <img src="../../static/image/noRecord@2x.png" style="width:2.58rem;margin: 1.6rem auto 0.4rem;" />
      <p style="text-align: center;font-size: 0.32rem;color: #494D51;">暂无消费记录</p>
    </div>
    <ul class="expensesRecord" v-else>
      <li v-for="item in expenssesData">
        <div class="left">
          <img src="../../static/image/coupon@2x.png"/>
        </div>
        <div class="right">
          <h3 class="name">
            海淀中关村1号加油站
            <img src="../../static/image/rightArrow@2x.png" />
          </h3>
          <p class="amount">
            <i>加油升数：<span>{{item.amount}}</span>升</i>
            <i style="display: inline-block;margin-left: 0.4rem">实付金额：<span style="color: #EF5859;">{{item.price}}</span></i>
          </p>
          <p class="time" style="color: #C2C7CE;margin-top: 0.12rem">2017-05-12 12:30:45</p>
          <p v-if="item.isComment" class="commented">已评价</p>
          <p v-else class="toComment">立即评价</p>
        </div>
      </li>
    </ul>
</template>

<script>

    export default {
      name: "expensesRecord",
      data () {
        return {
          expenssesData: [
            { amount: 56.03, price: "200元", isComment: false },
            { amount: 56, price: "199.21元", isComment: true },
            { amount: 56.03, price: "200元", isComment: false }
          ]
        };
      },
      mounted () {

      },
      methods: {

      }
    }

</script>

<style scoped="">
  .expensesRecord{
    padding-top: 0.01rem;
    background: #f5f5f5;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .expensesRecord li{
    display: flex;
    background: #fff;
    margin-bottom: 0.2rem;
  }
  .expensesRecord li .left{
    margin-left: 0.3rem;
    margin-right: 0.24rem;
  }
  .expensesRecord li .left img{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-top: 0.5rem;
  }
  .expensesRecord li .right{
    font-size: 0.28rem;
    color: #88959A;
    margin-right: 0.3rem;
    width: 5.85rem;
  }
  .expensesRecord li .right .name{
    margin-top: 0.4rem;
    font-size: 0.36rem;
    color: #4A4D51;
    margin-bottom: 0.12rem;
  }
  .expensesRecord li .right .name img{
    float: right;
    width: 0.14rem;
    margin-top: 0.1rem;
  }
  .expensesRecord li .right .commented{
    float: right;
    padding: 0.1rem 0.28rem;
    border: solid 0.01rem #C2C7CE;
    border-radius: 0.08rem;
    margin: 0.2rem 0 0.4rem;
  }
  .expensesRecord li .right .toComment{
    float: right;
    padding: 0.1rem 0.28rem;
    border: solid 0.01rem #2B7EF0;
    border-radius: 0.08rem;
    margin: 0.2rem 0 0.4rem;
    color: #2B7EF0;
  }
</style>
