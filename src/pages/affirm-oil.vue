<template>
    <div class="affirm-oil">
      <div>
        <div class="head"  v-show="isShow<500?true:false">
          <p>请像加油员确认当前油站名称</p>
        </div>
        <div class="container">
          <div class="flex" >
            <div class="flex-66 flex-text">海淀黄庄站</div>
            <div class="flex-text"><100m</div>
          </div>
          <div class="flex">
            <div class="flex-66 flex-station">当前位置</div>
            <div class="flex-station">距离油站</div>
          </div>
        </div>
        <div class="flex flex-bt">
          <div class="flex-89">
            <span class="my-span1">海淀黄庄站d</span>
            <span class="my-span2">距离<1000m</span>
          </div>
          <img class="my-img" :src="srcGX" alt="">
        </div>
        <div class="flex flex-bt">
          <div class="flex-89">
            <span class="my-span1">西土城站</span>
            <span class="my-span2">距离1.2km</span>
          </div>
          <img class="my-img" :src="srcWX" alt="">
        </div>
        <div class="flex flex-bt" style="border-bottom:none;">
          <div class="flex-89">
            <span class="my-span1">芍药居站</span>
            <span class="my-span2">距离10.23km</span>
          </div>
          <img class="my-img" :src="srcWX" alt="">
        </div>
        <div class="bg"></div>
        <yd-button class="my-button" size="large" type="primary" @click.native="linkTo('/refuel-before')">确认油站</yd-button>
      </div>

    </div>
</template>

<script>

    export default {
      data(){
        return{
          isShow:100,
          srcWX:'/static/image/weixuan.png',
          srcGX:'/static/image/gouxuan.png',
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

  .affirm-oil .bg{
    width:100%;
    height:0.2rem;background: #EFF2F3;
  }
  .affirm-oil .head{
    width:100%;
    height:0.6rem;
    background: #EF5859;
  }
  .affirm-oil .head>p{
    font-size: 0.24rem;line-height: 0.6rem;
    color: #fff;
    text-align: center;
    box-sizing: border-box;
  }
  .affirm-oil .container{
    width:100%;
    height:2.66rem;
    background: #EFF2F3;
  }
  .affirm-oil .flex{
    display: flex;
    display: -webkit-flex;
  }
  .affirm-oil .flex-66{
    width:66%;
    padding-left:0.8rem;
  }
  .affirm-oil .flex-text{
    font-family: "PingFangSC-Semibold";
    font-size: 0.48rem;
    line-height:0.66rem;
    color: #4A4D51;
    margin-top:0.8rem;
  }
  .affirm-oil .flex-station{
    font-family: "PingFangSC-Light";
    font-size: 0.28rem;
    line-height:0.4rem;
    color: #8A9499;
  }
  .affirm-oil .my-button{
    width:6.7rem;margin:0 auto;border-radius: 0.08rem;
    height:0.82rem;background: #EFF5FF;color: #4080E8;
    border:0.02rem solid #4080E8;
    margin-top:0.4rem;
  }
  .affirm-oil .my-button:active{
    background: #DDD;
  }
  .affirm-oil .flex-89{
    width:89%;
  }
  .affirm-oil .flex-89>span{
    font-size: 0.28rem;
    line-height:0.4rem;
  }
  .affirm-oil .my-img{
    width:0.4rem;
    height:0.4rem;
  }
  .affirm-oil .my-span1{
    color: #4A4D51;padding-right: 0.3rem;
  }
  .affirm-oil .my-span2{
    color: #8A9499;
  }
  .affirm-oil .flex-bt{
    width:7.1rem;
    margin-left: 0.4rem;
    border-bottom:0.02rem solid #C2C7CE;
    box-sizing: border-box;padding: 0.3rem 0;
  }
</style>
