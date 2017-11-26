<template>
    <section class="memberPoints">
      <div class="top">
        <p class="aboutPoints">
          <router-link to="aboutPoint"><yd-icon name="question" size="0.32rem" color="#4080E8"></yd-icon>
          关于积分</router-link>
        </p>
        <span class="curPoints">当前积分(个)</span>
        <p class="points">{{ point }}</p>
      </div>
      <div class="blank10"></div>
      <div class="bottom">
        <h3 class="title">积分明细</h3>
        <ul class="pointList">
          <li v-for="item in listData">
            <p>{{item.title}}</p>
            <span>{{item.date}}</span>
            <span :class="item.add ? 'add' : ''">{{item.points}}</span>
          </li>
        </ul>
      </div>
    </section>
</template>

<script>
    import utils from "../utils/index"
    export default {
      name: "memberPoint",
      data () {
        return {
          point: "1145",
          listData: [
            {
              title: "加油赠送",
              date: "2017-09-01 12:12:12",
              points: "+10",
              add: true
            },
            {
              title: "加油赠送",
              date: "2017-09-01 12:12:12",
              points: "+10",
              add: true
            },
            {
              title: "加油赠送",
              date: "2017-09-01 12:12:12",
              points: "+10",
              add: true
            },
            {
              title: "加油抵扣",
              date: "2017-09-01 12:12:12",
              points: "-10",
              add: false
            },
            {
              title: "加油赠送",
              date: "2017-09-01 12:12:12",
              points: "+10",
              add: true
            }
          ]
        };
      },
      mounted () {
        this.point = utils.formatNum(this.point)
      },
      methods: {

      },
      computed: {

      }
    }

</script>

<style scoped="">
  .memberPoints {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #494D51;
  }
  .memberPoints .top{
    padding: 0.3rem 0.4rem 0;
  }
  .memberPoints .aboutPoints{
    text-align: right;
    color: #4080E8;
  }
  .memberPoints .curPoints{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #88959A;
    display: block;
    margin-top:-0.12rem;
  }
  .memberPoints .points{
    font-family: PingFangSC-Regular;
    font-size: 48px;
    color: #4080E8;
    margin:0.1rem 0 0.36rem;
  }
  .memberPoints .bottom .title{
    border-bottom: solid 0.01rem #f5f5f5;
    padding-left: 0.4rem;
    line-height: 1.04rem;
  }
  .memberPoints .pointList{
    margin-left: 0.4rem;
  }
  .memberPoints .pointList li{
    border-bottom: solid 0.01rem #f5f5f5;
    height:1.5rem;
    padding: 0.3rem 0;
    line-height: 0.45rem;
    position: relative;
  }
  .memberPoints .pointList li p{
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #494D51;
  }
  .memberPoints .pointList li span{
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #88959A;
  }
  .memberPoints .pointList li span:last-of-type{
    position: absolute;
    right: 0.4rem;
    bottom:0.6rem;
    font-family: PingFangSC-Regular;
    font-size: 0.6rem;
    color: #000;
  }
  .memberPoints .pointList li span.add{
    color: #2B7EF0;
  }
</style>
