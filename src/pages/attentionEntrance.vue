<template>
    <div class="attentionEntrance">
      <img src="/static/image/attentionGet@2x.png" class="attentionCoupon" />
      <div class="scanBox">
        <img src="/static/image/cesi.png" style="width: 3.42rem;height: 3.42rem;" />
      </div>
      <p class="scanNotice">关注油站二维码领取</p>
      <p class="joinNotice">关注油站服务号后，进入消息页面参与活动</p>
    </div>
</template>

<script>

    export default {}

</script>

<style scoped="">
  .attentionEntrance {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("/static/image/activityBg@2x.png") 0 0 no-repeat;
    background-size: 100%;
  }
  .attentionEntrance .attentionCoupon{
    width: 5.36rem;
    margin: 0.8rem auto 1rem;
  }
  .attentionEntrance .scanBox{
    width: 4.22rem;
    height: 4.22rem;
    border:solid 0.01rem #fff;
    margin:0 auto;
    padding: 0.4rem;
  }
  .attentionEntrance .scanNotice{
    color: white;
    font-size: 0.32rem;
    text-align: center;
    margin: 0.4rem 0 0.2rem;
  }
  .attentionEntrance .joinNotice{
    color: white;
    font-size: 0.28rem;
    text-align: center;
  }
</style>
