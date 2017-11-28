<template>
    <div class="oil-details">
      <div class="head">
        <img src="/static/image/cesi.png" alt="">
      </div>
      <div class="container">
        <p>中化石油北京分公司</p>
        <img class="absolute" @click="srcM" :src="src1" alt="已收藏">
        <yd-cell-item style="margin-top:-0.35rem;">
          <yd-rate slot="left" color="#FFCF00" active-color="#FFCF00" size="0.3rem" v-model="Math.floor(rate)" :readonly="true"></yd-rate>
          <span slot="left" class="grade">{{rate}}分</span>
          <span slot="right" class="collect">{{alt}}</span>
        </yd-cell-item>
      </div>
      <div>
        <div class="flex pl flex-c">
          <img class="site" src="/static/image/site.png">
          <span class="title">北京市海淀区天创科技大厦</span>
        </div>
        <div class="flex pl flex-c-1">
          <img class="site" src="/static/image/phone.png">
          <i class="phone">010-51600088</i>
          <span class="distance">距您1.5km</span>
          <img class="gohere" src="/static/image/gohere.png" alt="">
        </div>
      </div>
      <div class="bg"></div>
      <div class="oil-c">
        <p class="oil-title">油价信息</p>
        <div style="padding:0.4rem 0 0.2rem 0;">
          <div v-for="L in list1" class="flex flex-sale">
            <span>92#汽油</span>
            <span>直降0.5</span>
            <span>6.85元/升</span>
          </div>
        </div>
      </div>

      <div class="bg"></div>

      <div class="oil-c">
        <p class="oil-title">优惠活动信息</p>
        <div style="padding:0.4rem 0 0.2rem 0;">
          <div class="flex flex-sale-1">
            <img src="/static/image/redbag.png" alt="">
            <span>会员消费满200元，赠15元汽车优惠券</span>
          </div>
          <div class="flex flex-sale-1">
            <img src="/static/image/redbag.png" alt="">
            <span>会员消费满250元，赠优惠券</span>
          </div>
        </div>
      </div>

      <div class="bg"></div>

      <div class="oil-c">
        <p class="oil-title">服务项目</p>
        <div style="padding:0.4rem 0 0.2rem 0;">
          <div class="flex-evaluate">
            <span>品牌联盟</span>
            <span>品牌</span>
            <span>品牌</span>
            <span>品牌</span>
            <span>品牌</span>
            <span>品牌</span>
            <span>品牌好</span>
            <span>品牌</span>
          </div>
        </div>
      </div>

      <div class="bg"></div>

      <div class="oil-c">
        <p class="oil-title P">评论：3580条</p>
        <ul>
          <li class="flex-P">
            <img class="img-P" src="/static/image/weishoucang.png" alt="">
            <div class="flex-P-C">
              <p>李小花</p>
              <yd-cell-item class="m-P">
                <yd-rate slot="left" color="#FFCF00" active-color="#FFCF00" size="0.3rem" v-model="Math.floor(rate1)" :readonly="true"></yd-rate>
                <span slot="left" class="grade">{{rate1}}分</span>
              </yd-cell-item>
              <div><span>优惠力度很大，以后可以常来，服务的小哥哥态度也很好。</span></div>
              <time>09-23</time>
            </div>
          </li>
          <li class="flex-P">
            <img class="img-P" src="/static/image/weishoucang.png" alt="">
            <div class="flex-P-C">
              <p>李小花</p>
              <yd-cell-item class="m-P">
                <yd-rate slot="left" color="#FFCF00" active-color="#FFCF00" size="0.3rem" v-model="Math.floor(rate1)" :readonly="true"></yd-rate>
                <span slot="left" class="grade">{{rate1}}分</span>
              </yd-cell-item>
              <div><span>优惠力度很大，以后可以常来，服务的小哥哥态度也很好。优惠力度很大，以后可以常来，服务的小哥哥态度也很好</span></div>
              <time>09-23</time>
            </div>
          </li>
        </ul>
        <a>查看更多评论<i></i></a>
      </div>
      <!--弹窗-->
      <div v-show="isShow">
        <img  @click="isShow=!isShow" class="close" src="/static/image/close@2x.png" alt="关闭">
        <div class="model"></div>
        <div class="r-bg">
          <p>恭喜您获得20元优惠券一张</p>
          <p>已放到我的优惠券</p>
        </div>
        <div class="r-bg-container">
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
        </div>
      </div>
    </div>
</template>

<script>

    export default {
      data(){
        return{
          rate:4.8, //评分
          rate1:4, //评分
          list1:[1,2,3],
          page: 1,
          pageSize: 1,
          isShow:true,
          src1:"/static/image/yishoucang.png",
          src2:"/static/image/weishoucang.png",
          alt:'已收藏'
        }
      },
      methods:{
        srcM(e){
          if(e.currentTarget.alt=='已收藏'){
            e.currentTarget.alt='未收藏'
            e.currentTarget.src=this.src2
            this.alt='收藏有礼'
            return false
          }else{
            e.currentTarget.alt='已收藏'
            e.currentTarget.src=this.src1
            this.alt='已收藏'
            return false
          }

        }
      }
    }

</script>

<style scoped>
  .oil-details .close{
    width:0.814rem;
    height:0.814rem;
    position: fixed;
    top:7.7rem;
    z-index:222;
    margin-left: 3.36rem;
  }
  .oil-details .r-bg-container{
    width: 6.7rem;
    height:2.4rem;
    margin: 0 0.4rem;
    background: url("../../static/image/coupon@2x.png") 0 0 no-repeat;
    background-size: 100%;
    position: fixed;z-index: 233;
    top:3.6rem;
  }
  .oil-details .top{
    display: flex;
    justify-content: flex-start;
    height: 1.84rem;
  }
  .oil-details .top .left{
    width: 2.48rem;
    text-align: center;
    font-size: 0.24rem;
    color: #EF5859;
  }
  .oil-details .content li.unused .left{
    color: #EF5859;
  }
  .oil-details .top .right{
    font-size: 0.24rem;
    color: #85959B;
    margin-top: 0.26rem;
  }
  .oil-details .bottom{
    display: flex;
    justify-content: space-between;
    height:0.54rem;
    line-height: 0.54rem;
    font-size: 0.24rem;
    color: #85959B;
    padding: 0 0.4rem;
  }
  .oil-details .model{
    position: fixed;  top: 0;  right: 0;
    bottom: 0;  left: 0;  overflow: hidden;
    outline: 0;  -webkit-overflow-scrolling: touch;
    background-color: rgb(0, 0, 0);  filter: alpha(opacity=60);
    background-color: rgba(0, 0, 0, 0.6);  z-index: 199;
  }
  .oil-details .r-bg{
    background-image: linear-gradient(-180deg, #F88E8F 0%, #EF5859 99%);
    -webkit-background-image: linear-gradient(-180deg, #F88E8F 0%, #EF5859 99%);
    border-radius: 0.2rem;
    width:5.5rem;
    height:4.7rem;
    position: fixed;
    top:2.5rem;margin-left:1rem;z-index: 222;
  }
  .oil-details .r-bg>p:nth-child(1){
    font-size: 0.36rem;
    text-align: center;
    color: #FFFFFF;
    line-height: 0.5rem;
    padding-top: 0.38rem;
  }
  .oil-details .r-bg>p:nth-child(2){
    font-size: 0.32rem;
    text-align: center;
    color: #FFFFFF;
    opacity: 0.8;
    padding-top:2.9rem;
  }
  .oil-details .oil-c>a{
    text-align: center;
    display: block;
    width:100%;
    font-size: 0.32rem;
    color: #4080E8;
    position: relative;
    margin:0.3rem 0 0.52rem 0;
  }
  .oil-details .oil-c>a>i{
    display: inline-block;
    width:0.2rem;
    height:0.2rem;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    border: 0.02rem solid #4080E8;
    border-top: none;
    border-right:none;
    margin-top: -0.2rem;
    margin-left: 0.1rem;
    position: absolute;
    top:0.25rem;
  }
  .oil-details .yd-cell-item:not(:last-child):after {
    border-bottom: none !important;
  }
  .oil-details .flex-P-C{
    margin-left: 0.3rem;
    border-bottom:0.02rem solid #DCE2EA;
  }
  .oil-details .m-P{
    margin-top:-0.3rem !important;margin-left: -0.1rem !important;padding-left:0 !important;
  }
  .oil-details .flex-P-C>p{
    font-size: 0.32rem;
    line-height:0.44rem;
    color: #4A4D51;
  }
  .oil-details .flex-P-C>div{
    margin-top: -0.2rem;

  }
  .oil-details .flex-P-C>div>span{
    font-size: 0.28rem;
    line-height:0.4rem;
    color: #8A9499;
    display: block;
  }
  .oil-details .flex-P-C>time{
    text-align: right;
    font-size: 0.24rem;
    color: #C2C7CE;
    line-height:0.34rem;
    padding-bottom: 0.2rem;
  }
  .oil-details .flex-P{
    display: flex;display: -webkit-flex;margin: 0.4rem 0 0.2rem 0;
  }
  .oil-details .img-P{
    width:1rem;height: 1rem;
  }
  .oil-details .bg{
    width:100%;
    height:0.2rem;background: #EFF2F3;
  }
  .oil-details .P{
    font-size: 0.36rem;padding-bottom: 0.3rem;border-bottom: 0.02rem solid #DCE2EA;
  }
  .oil-details .flex-evaluate{
    display: flex;display: -webkit-flex; flex-direction: row;flex-wrap: wrap;
  }
  .oil-details .flex-evaluate>span{
    border: 0.02rem solid #E0E3E6;
    border-radius: 0.06rem;
    font-size: 0.28rem;
    line-height:0.38rem;
    color: #8A9499;
    padding:0.05rem 0.2rem;
    margin:0 0.3rem 0.3rem 0;
  }
  .oil-details .flex-sale{justify-content: space-between;
    padding-bottom:0.2rem;}
  .oil-details .flex-sale-1{
    padding-bottom:0.2rem;}
  .oil-details .flex-sale-1>img{
    width:0.36rem;height: 0.32rem;
  }
  .oil-details .flex-sale-1>span{
    font-size: 0.28rem;
    color: #8A9499;padding-left: 0.12rem;
  }
  .oil-details .flex-sale>span:nth-child(1){
    font-size: 0.28rem;
    color: #8A9499;
  }
  .oil-details .flex-sale>span:nth-child(2){
    font-size: 0.28rem;
    color: #EF5859;
    width: 60%;
    text-align: right;
  }
  .oil-details .flex-sale>span:nth-child(3){
    font-size: 0.28rem;
    color: #4A4D51;
  }
  .oil-details .oil-c{
    padding:0 0.4rem;
  }
  .oil-details .oil-c .oil-title{
    font-size: 0.32rem;
    color: #4A4D51;
    line-height: 0.28rem;
    padding-top:0.4rem;
  }
  .oil-details .site{
    width:0.22rem;
    height:0.3rem;
    margin-right:0.2rem;
  }
  .oil-details .flex-c{
    padding-top: 0.4rem;
  }
  .oil-details .flex-c-1{
    padding: 0.3rem 0 0.36rem 0; justify-content: space-between;
  }
  .oil-details .title{
    font-size: 0.28rem;
    color: #8A9499;
    line-height: 0.32rem;
  }
  .oil-details .pl{
    padding-left:0.4rem;
  }
  .oil-details .phone{
    font-size: 0.28rem;
    width:43%;
    color: #4080E8;
  }
  .oil-details .distance{
    font-size: 0.24rem;
    color: #4A4D51;
    width:40%;
    text-align: right;
  }
  .oil-details .gohere{
    height:0.298rem;
    margin-right:0.4rem;
  }
  .oil-details .flex{
    display: flex;display: -webkit-flex;align-items: center;
  }
  .oil-details .head>img{
    width:100%;
    height:3.6rem;
    vertical-align: bottom;
  }
  .oil-details .container{
    background: #4080E8;
    width:100%;position: relative;
    height:1.6rem;box-sizing: border-box;
  }
  .oil-details .container>p{
    font-family: 'PingFangSC-Semibold';
    font-size: 0.4rem;
    color: #FFFFFF;
    line-height:0.56rem;
    padding: 0.3rem 0 0.14rem 0.4rem;
  }
  .oil-details .yd-cell-item {
    padding-left: .3rem;
  }
  .oil-details .grade{
    font-size: 0.24rem;
    line-height:0.22rem;
    color: #FFCF00;
    padding-left:0.2rem;
  }
  .oil-details .collect{
    font-size: 0.24rem;
    line-height:0.32rem;
    color: #FFFFFF;
    text-align: center;
    width: 29%;
    padding-right: 0.26rem;
  }
  .oil-details .absolute{
   position: absolute;
    width:1.5rem;
    right: 0.22rem;
    top:-0.5rem;
    z-index:100;
  }
</style>
