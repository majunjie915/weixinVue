<template>
    <div class="collect-oil">
      <div>
        <div class="flex">
          <img class="img-portrait" src="/static/image/collect.png" alt="">
          <div style="margin-left: -1.2rem">
            <p class="title">中关村1号加油站</p>
            <div class="flex">
              <img class="img-activity" src="/static/image/yqfq.png" alt="">
              <img class="img-activity" src="/static/image/yqfq.png" alt="">
            </div>
          </div>
          <img class="img-collect" src="/static/image/collect.png" alt="">
        </div>
        <div class="dotted"></div>
        <div class="flex1">
          <button @click="linkTo('/refuel-before')">一键加油</button>
          <span>距您1.5km</span>
          <img src="/static/image/gohere.png" alt="">
        </div>
        <div class="solid"></div>
      </div>
      <div>
        <div class="flex">
          <img class="img-portrait" src="/static/image/collect.png" alt="">
          <div style="margin-left: -1.2rem">
            <p class="title">中关村1号加油站</p>
            <div class="flex">
              <img class="img-activity" src="/static/image/yqfq.png" alt="">
              <img class="img-activity" src="/static/image/yqfq.png" alt="">
            </div>
          </div>
          <img class="img-collect" src="/static/image/collect.png" alt="">
        </div>
        <div class="dotted"></div>
        <div class="flex1">
          <button @click="linkTo('/refuel-before')">一键加油</button>
          <span>距您11.5km</span>
          <img src="/static/image/gohere.png" alt="">
        </div>
        <div class="solid"></div>
      </div>
      <div>
        <div class="flex">
          <img class="img-portrait" src="/static/image/collect.png" alt="">
          <div style="margin-left: -1.2rem">
            <p class="title">中关村1号加油站</p>
            <div class="flex">
              <img class="img-activity" src="/static/image/yqfq.png" alt="">
              <img class="img-activity" src="/static/image/scsq.png" alt="">
            </div>
          </div>
          <img class="img-collect" src="/static/image/collect.png" alt="">
        </div>
        <div class="dotted"></div>
        <div class="flex1">
          <button>一键加油</button>
          <span>距您11.5km</span>
          <img src="/static/image/gohere.png" alt="">
        </div>
        <div class="solid"></div>
      </div>
      <div>
        <div class="flex">
          <img class="img-portrait" src="/static/image/collect.png" alt="">
          <div style="margin-left: -1.2rem">
            <p class="title">中关村1号加油站</p>
            <div class="flex">
              <img class="img-activity" src="/static/image/yqfq.png" alt="">
              <img class="img-activity" src="/static/image/hyzj.png" alt="">
            </div>
          </div>
          <img class="img-collect" src="/static/image/collect.png" alt="">
        </div>
        <div class="dotted"></div>
        <div class="flex1">
          <button>一键加油</button>
          <span>距您11.5km</span>
          <img src="/static/image/gohere.png" alt="">
        </div>
        <div class="solid"></div>
      </div>
    </div>
</template>

<script>

    export default {
      methods:{
        linkTo(path){
          this.$router.push(path)
        }
      }
    }

</script>

<style scoped>
  .collect-oil .flex{
    display: flex;display: -webkit-flex;justify-content: space-between;
  }
  .collect-oil .dotted{
    width:5.8rem;
    border-bottom: 0.02rem dotted #C2C7CE;
    margin:0.2rem 0 0.2rem 1.7rem;
  }
  .collect-oil .solid{
    width:7.1rem;
    border-bottom: 0.02rem solid #C2C7CE;
    margin:0.4rem 0 0 0.4rem;
  }
  .collect-oil .img-portrait{
    width:1rem;
    height:1rem;
    margin: 0.4rem 0 0 0.4rem;
  }
  .collect-oil .img-activity{
    width:1.44rem;
    height:0.36rem;
    margin: 0.14rem 0.2rem 0 0;
  }
  .collect-oil .img-collect{
    width:0.6rem;
    height:0.6rem;
    margin: 0.5rem 0.38rem 0 0;
  }
  .collect-oil .title{
    font-family: "PingFangSC-Semibold";
    font-size: 0.36rem;
    line-height:0.5rem;
    margin-top: 0.4rem;
    color: #4A4D51;
  }
  .collect-oil .flex1{
    display: flex;display: -webkit-flex;align-items:center;
    width:5.8rem;margin-left: 1.7rem;justify-content: space-between;
  }
  .collect-oil .flex1>button{
    border: 0.02rem solid #4080E8;
    border-radius: 0.08rem;
    font-size: 0.28rem;
    color: #4080E8;
    padding:0.1rem 0.3rem;
  }
  .collect-oil .flex1>span{
    font-size: 0.28rem;
    color: #8A9499;
    margin-right: -1.5rem;
  }
  .collect-oil .flex1>img{
    height:0.28rem;
    margin-right: 0.52rem;
  }
</style>
