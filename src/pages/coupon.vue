<template>
    <div class="coupon">
      <ul class="nav">
        <li>
          <p @click="showStation">
            <i class="overflowEllipsis">{{curStation}}</i>
            <span>({{stationItems.length}})</span>
            <img src="/static/image/downArrow@2x.png" />
          </p>
          <div v-show="isStationShow">
            <p v-for="item in stationItems"  v-bind:class="{selected:stationId==item.id}"
               v-bind:id="item.id" @click="selectStation">
              {{item.name}}
            </p>
          </div>
        </li>
        <li>
          <p @click="showStatus">
            <i>{{curStatus}}</i>
            <span>({{statusItems.length}})</span>
            <img src="/static/image/downArrow@2x.png" />
          </p>
          <div v-show="isStatusShow">
            <p v-for="item in statusItems" :id="item.id"
               :class="{selected: statusId==item.id}" @click="selectStatus">{{item.name}}</p>
          </div>
        </li>
      </ul>
      <div v-if="stationItems.length==0 || statusItems.length==0" class="content">
        <img src="/static/image/noCoupon@2x.png" style="width: 2.58rem;margin: 1.6rem auto 0.4rem;" />
        <p style="font-size: 0.32rem;color: #494D51;text-align: center">暂无优惠券</p>
      </div>
      <div v-else>
        <section class="content" @click="hideToast">
          <div v-if="false">
            <p style="font-size: 0.32rem;color: #494D51;margin: 4.74rem 2.9rem;">暂无优惠券</p>
          </div>
          <ul v-else-if="true">
            <li v-for="item in [1,2,3,4]" style="margin-top: 0.4rem;" :class="{unused:statusId=='unused',used:statusId=='used',expired:statusId=='expired'}">
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
                <!--<p style="color: #4A4D51;" v-if="statusId=='unused'">距您<span>1.3</span>km</p>-->
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
</template>

<script>

    export default {
      name: "coupon",
      data () {
        return {
          stationItems: [
            { name: "全部",id: "all" },{ name: "中化福建一号加油站",id: 1 },{ name: "北体加油站",id: 2 }
          ],
          statusItems: [
            { name: "未使用", id: "unused" },{ name: "已使用", id: "used" },{ name: "已过期",id: "expired" }
          ],
          curStation: "全部",
          curStatus: "未使用",
          isStationShow: false,
          stationId: "all",
          isStatusShow: false,
          statusId: "unused"
        };
      },
      mounted () {
        var curHashArr = location.hash.split("/");
        this.stationId = curHashArr[curHashArr.length-2];
        this.statusId = curHashArr[curHashArr.length-1];
        for (var i = 0; i<this.stationItems.length; i++){
          if (this.stationItems[i].id==curHashArr[curHashArr.length-2]){
            this.curStation = this.stationItems[i].name;
          }
        }
      },
      methods: {
        showStation: function(){
          if(this.stationItems.length!=0){
            this.isStationShow = true;
            this.isStatusShow = false;
          }
        },
        showStatus: function () {
          if (this.statusItems.length!=0){
            this.isStatusShow = true;
            this.isStationShow = false;
          }
        },
        selectStation: function (e){
          this.curStation = e.currentTarget.innerHTML.trim();
          this.stationId = e.currentTarget.id;
          location.hash = "#/coupon/"+e.currentTarget.id+"/"+this.statusId;
          this.isStationShow = false;
        },
        selectStatus: function (e) {
          this.curStatus = e.currentTarget.innerHTML.trim();
          this.statusId = e.currentTarget.id;
          location.hash = "#/coupon/"+this.stationId+"/"+e.currentTarget.id;
          this.isStatusShow = false;
        },
        hideToast: function () {
          this.isStationShow = false;
          this.isStatusShow = false;
        }
      }
    }

</script>

<style scoped="">
  .coupon .nav{
    display: flex;
    justify-content: space-around;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background: #ffffff;
    width: 100%;
  }
  .coupon .nav li{
    width:40%;
    padding: 0 5%;
    text-align: center;
    position: relative;
  }
  .coupon .nav li>p{
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.28rem;
    color: #494D51;
    display: flex;
    justify-content: center;
  }
  .coupon .nav li>p i{
    display: block;
    max-width: 80%;
    height:0.8rem;
  }
  .coupon .nav li>p span{
    display: block;
  }
  .coupon .nav li div{
    background: #ffffff;
    border: solid 0.01rem blue;
    position: absolute;
    z-index: 2;
    width: 2.3rem;
  }
  .coupon .nav li div p{
    padding:0.1rem 0.2rem;
    border-bottom: solid 0.01rem #ccc;
  }
  .coupon .nav li p img{
    width: 0.12rem;
    height: 0.08rem;
    position: relative;
    top: 0.4rem;
    left: 0.2rem;
  }
  .coupon .selected{
    background: blue;
    color: white;
  }
  .coupon .content{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    position: absolute;
    padding-top: 0.8rem;
    box-sizing: border-box;
  }
  .coupon .content li{
    width: 6.7rem;
    height:2.4rem;
    margin: 0 0.4rem;
    background: url("../../static/image/couponGray@2x.png") 0 0 no-repeat;
    background-size: 100%;
  }
  .coupon .content li.unused{
    background: url("../../static/image/coupon@2x.png") 0 0 no-repeat;
    background-size: 100%;
  }
  .coupon .top{
    display: flex;
    justify-content: flex-start;
    height: 1.84rem;
  }
  .coupon .top .left{
    width: 2.48rem;
    text-align: center;
    font-size: 0.24rem;
    color: #85959B;
  }
  .coupon .content li.unused .left{
    color: #EF5859;
  }
  .coupon .top .right{
    font-size: 0.24rem;
    color: #85959B;
    margin-top: 0.26rem;
  }
  .coupon .bottom{
    display: flex;
    justify-content: space-between;
    height:0.54rem;
    line-height: 0.54rem;
    font-size: 0.24rem;
    color: #85959B;
    padding: 0 0.4rem;
  }
</style>
