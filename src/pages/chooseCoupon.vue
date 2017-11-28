<template>
  <div class="chooseCoupon">
      <section class="content">
        <div v-if="false">
          <p style="font-size: 0.32rem;color: #494D51;margin: 4.74rem 2.9rem;">暂无优惠券</p>
        </div>
        <ul v-else-if="true">
          <li v-for="(item,index) in couponList" style="margin-top: 0.4rem;"
              :class="{selected: item.selected==true}" @click="chooseCoupon" :data-index="index">
            <div class="top">
              <div class="left">
                <p style="font-size: 0.48rem;margin-top: 0.26rem">￥<span style="font-size: 0.8rem">20</span></p>
                <p>满<span>199</span>元可用</p>
              </div>
              <div class="right">
                <p style="font-size: 0.32rem;color: #4A4D51;">双十二满减活动</p>
                <p style="margin: 0.08rem 0;">2017.12.12至2017.12.12</p>
                <p>仅汽油产品可用</p>
              </div>
            </div>
            <div class="bottom">
              <p>适用于海淀黄庄站</p>
              </div>
          </li>
        </ul>
      </section>
  </div>
</template>

<script>

  export default {
    name: "coupon",
    data () {
      return {
        couponList: [
          { selected: true },{ selected: false },{ selected: false }
        ]
      };
    },
    mounted () {

    },
    methods: {
      chooseCoupon: function(e){
        let that = this;
        let couponList = that.couponList;
        let index = e.currentTarget.getAttribute("data-index");
        for (let i=0; i<couponList.length; i++){
          if (i==index){
            couponList[i].selected = true;
          }else{
            couponList[i].selected = false;
          }
        }
      }
    }
  }

</script>

<style scoped="">
  .chooseCoupon .content{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    position: absolute;
    box-sizing: border-box;
  }
  .chooseCoupon .content li{
    width: 6.7rem;
    height:2.4rem;
    margin: 0 0.4rem;
    background: url("../../static/image/coupon@2x.png") 0 0 no-repeat;
    background-size: 100%;
    opacity: 0.5;
  }
  .chooseCoupon .content li.selected{
    opacity: 1;
  }
  .chooseCoupon .top{
    display: flex;
    justify-content: flex-start;
    height: 1.84rem;
  }
  .chooseCoupon .top .left{
    width: 2.48rem;
    text-align: center;
    font-size: 0.24rem;
    color: #EF5859;
  }
  .chooseCoupon .top .right{
    font-size: 0.24rem;
    color: #85959B;
    margin-top: 0.26rem;
  }
  .chooseCoupon .bottom{
    display: flex;
    justify-content: space-between;
    height:0.54rem;
    line-height: 0.54rem;
    font-size: 0.24rem;
    color: #85959B;
    padding: 0 0.4rem;
  }
</style>
