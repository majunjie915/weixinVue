<template>
    <div class="myInvitation">
      <div class="noInvitation" v-if="!hasInvitation">
        <img src="../../static/image/noInvitation@2x.png">
        <p>暂无邀请</p>
      </div>
      <div v-else v-for="item in [1,2,3]">
        <h3 class="title">
          <span></span>
          中华加油站-好友邀请券
        </h3>
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
        <p style="font-size: 0.24rem;color: #8A9499;text-align: center">
          满5人领取，您即可获得10元中化加油券一张，加油即减
        </p>
        <p style="font-size: 0.28rem;color: #8A9499;text-align: center;margin: 0.6rem 0 0.4rem;">
          已有<span>3</span>人参与，
          还差<span>2</span>人
        </p>
        <p class="invited">
          <img src="/static/image/checked@2x.png" v-for="item in [1,2,3]" />
          <img src="/static/image/noneGray@2x.png" v-for="item in [1,2]" />
        </p>
        <p class="continue">继续邀请</p>
        <p class="deadline">截止日期：2017-12-30 12:00:00</p>
        <div class="blank10"></div>
      </div>
    </div>
</template>

<script>

    export default {
      name: "myInvitation",
      data () {
        return {
          hasInvitation: true
        };
      }
    }

</script>

<style scoped="">
  .myInvitation{
    padding-top: 0.01rem;
  }
  .myInvitation .noInvitation img{
    width: 2.58rem;
    margin: 1.2rem auto 0.4rem;
  }
  .myInvitation .noInvitation {
    color: #494D51;
    font-size: 0.32rem;
    text-align: center;
  }
  .myInvitation .title{
    font-size: 0.32rem;
    color: #4A4D51;
    margin-top: 0.4rem;
  }
  .myInvitation .title span{
    border-left: solid 0.08rem #4080E8;
    display: inline-block;
    height: 0.36rem;
    margin-right: 0.32rem;
    vertical-align: middle;
  }
  .myInvitation .coupon{
    width: 6.7rem;
    height: 2.4rem;
    background: url("../../static/image/coupon@2x.png") 0 0 no-repeat;
    background-size: 100%;
    margin: 0.36rem 0.4rem 0.3rem;
    padding-top: 0.22rem;
  }
  .myInvitation .coupon li{
    display: flex;
  }
  .myInvitation .coupon li .left{
    width: 2.46rem;
    text-align: center;
    color: #EF5859;
    font-size: 0.48rem;
  }
  .myInvitation .coupon li .right{
    color: #4A4D51;
    font-size: 0.32rem;
    padding-top: 0.24rem;
  }
  .myInvitation .coupon li .right p{
    font-size: 0.24rem;
    color: #85959B;
    margin-top: 0.3rem;
  }
  .myInvitation .invited{
    display: flex;
    justify-content: center;
  }
  .myInvitation .invited img{
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.2rem;
    border-radius: 50%;
  }
  .myInvitation .continue{
    background: rgba(239,88,89,0.10);
    border: 0.02rem solid #EF5859;
    border-radius: 1.2rem;
    width: 2.9rem;
    height: 0.8rem;
    line-height: 0.8rem;
    margin: 0.4rem auto;
    text-align: center;
    font-size: 0.32rem;
    color: #EF5859;
  }
  .myInvitation .deadline{
    font-size: 0.24rem;
    color: #C2C7CE;
    text-align: center;
    margin-bottom: 0.6rem;
  }
</style>
