<template>
    <div class="successfulGet">
      <img src="/static/image/getted@2x.png" style="width: 1rem;margin: 1.8rem auto 0.2rem;" />
      <p style="font-size: 0.36rem;color: #4A4D51;text-align: center">领取成功</p>
      <router-link to="/"><p class="toView">去卡券包查看</p></router-link>
    </div>
</template>

<script>

    export default {
      name: "successfulGet"
    }

</script>

<style scoped="">
  .successfulGet{
    padding-top: 0.01rem;
  }
  .successfulGet .toView{
    font-size: 0.32rem;
    color: #4080E8;
    width: 3.7rem;
    height:0.8rem;
    line-height: 0.8rem;
    border:solid 0.01rem #4080e8;
    border-radius: 0.08rem;
    text-align: center;
    margin: 1rem auto;
  }
</style>
