<template>
    <div class="order-confirmation">
      <yd-cell-group>
        <yd-cell-item class="my-cell-item">
          <span slot="left" class="yd-cell-icon1">订单确认</span>
        </yd-cell-item>
        <yd-cell-item style="padding-top:0.35rem;">
          <span slot="left" class="yd-cell-icon">92#国五汽油</span>
          <span slot="right" class="yd-cell-icon">¥ 100.00</span>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left" class="yd-cell-icon">直降优惠</span>
          <span slot="right" class="yd-cell-icon">- ¥ 4.66</span>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left" class="yd-cell-icon">优惠券</span>
          <span slot="right" class="yd-cell-icon">- ¥ 5.00</span>
        </yd-cell-item>
      </yd-cell-group>
      <div class="bg"></div>
      <yd-cell-group class="my-cell">
        <yd-cell-item arrow  class="my-cell-item">
          <span class="yd-cell-icon2" slot="left">使用优惠券</span>
          <span class="yd-cell-icon3" slot="right">满50元减5元</span>
        </yd-cell-item>
      </yd-cell-group>

      <yd-cell-group  class="my-cell">
        <yd-cell-item type="label" >
          <div slot="left">可用20积分抵20.00元</div>
          <yd-switch slot="right" v-model="ydswitch"></yd-switch>
        </yd-cell-item>
      </yd-cell-group>
      <div class="bg"></div>

      <yd-cell-group>
        <yd-cell-item>
          <span slot="left" class="yd-cell-icon my-left">待支付</span>
          <span slot="right" class="yd-cell-icon my-right">¥ 90.35</span>
        </yd-cell-item>
      </yd-cell-group>

      <yd-button class="my-button" size="large" @click.native="linkTo('/order-success')" type="primary">微信支付</yd-button>
    </div>
</template>

<script>

    export default {
      data(){
        return{
          ydswitch: true
        }
      },
      methods:{
        linkTo(path){
          this.$router.push(path)
        }
      }
    }

</script>

<style scoped>
  .order-confirmation .yd-cell-item::after{
    border: none !important;
  }
  .order-confirmation .yd-cell-icon{
    font-family: "PingFangSC-Light";
    font-size: 0.28rem;
    color: #4A4D51;
  }
  .order-confirmation .yd-cell-icon1{
    font-family: "PingFangSC-Regular";
    font-size: 0.32rem;
    color: #4A4D51;
  }
  .order-confirmation .yd-cell-icon2{
    font-family: "PingFangSC-Regular";
    font-size: 0.28rem;
    color: #4A4D51;
  }
  .order-confirmation .yd-cell-icon3{
    font-family: "PingFangSC-Regular";
    font-size: 0.28rem;
    color: #EF5859;
  }
  .order-confirmation .yd-cell:after {
    border: none;
  }
  .order-confirmation .bg{
    width:100%;
    height:0.2rem;background: #EFF2F3;
  }
  .order-confirmation .my-cell{
    margin-bottom:0;
  }
  .order-confirmation .my-left{
    font-size: 0.36rem;
    font-family: "PingFangSC-Semibold";
    color: #494D51;
    line-height:0.5rem;
  }
  .order-confirmation .my-right{
    font-family: "PingFangSC-Semibold";
    font-size: 0.36rem;
    color: #EF5859;
    line-height:0.5rem;
  }
  .order-confirmation .my-button{
    width:92%;margin:0 auto;border-radius: 0.08rem;
    height:0.82rem;background: #4080E8;
    color: #fff;
  }
  .order-confirmation .my-button:active{
    background: #10aeff !important;
  }
  .order-confirmation .my-cell-item>.yd-cell-left,.order-confirmation .my-cell-item>.yd-cell-right{
    border-bottom:0.02rem solid #DCE2EA;
  }
</style>
