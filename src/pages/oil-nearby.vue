<template>
  <div class="oil-nearby">
    <div id="container" style="width:100%; height:100vh"></div>
    <div id="tip">点击地图上的点标记，打开所添加的自定义信息窗体</div>
    <!--<div id="city"></div>-->
    <select  name="citiName" id="ctNm" @change="getCt"  v-model="selected">
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <i class="my-i"></i>
    <div id="myPageTop" style="display: none">
      <table>
        <tr>
          <td>
            <input id="tipinput"/>
          </td>
        </tr>
      </table>
    </div>
    <div class="header" v-show="!isShow">
      <div class="top">
        <a @click="packUp">收起列表↓</a>
      </div>
      <div v-for="L in list">
        <div class="flex">
          <img class="img-portrait" src="/static/image/collect.png" alt="">
          <div style="margin-left: -1.2rem">
            <p class="title">中关村1号加油站</p>
            <div class="flex">
              <img class="img-activity" src="/static/image/yqfq.png" alt="">
              <img class="img-activity" src="/static/image/yqfq.png" alt="">
            </div>
          </div>
          <img class="img-collect" @click="linkTo('/oil-details')" src="/static/image/collect.png" alt="">
        </div>
        <div class="dotted"></div>
        <div class="flex1">
          <button @click="linkTo('/refuel-before')">一键加油</button>
          <span>距您1.5km</span>
          <img src="/static/image/gohere.png" alt="">
        </div>
        <div class="solid"></div>
      </div>
    </div>
    <div class="footer" v-show="isShow">
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
          <img class="img-collect" @click="linkTo('/oil-details')" src="/static/image/collect.png" alt="">
        </div>
        <div class="dotted"></div>
        <div class="flex1">
          <button @click="linkTo('/refuel-before')">一键加油</button>
          <span>距您1.5km</span>
          <img src="/static/image/gohere.png" alt="">
        </div>
      </div>
      <div class="bottom">
        <a @click="getMore">点击获取更多↑</a>
      </div>
    </div>
  </div>
</template>
<script>
  import AMap from 'AMap'
  var map
  var marker
  export default {
    data(){
      return{
        isShow:true,
        list:[1,2,3,4,5,6,7],
        selected: '北京',
        options: [
          { text: '北京', value: '北京' },
          { text: '福州', value: '福州' },
          { text: '厦门', value: '厦门' }
        ]
      }
    },
    mounted: function () {
      this.init()
    },
    methods: {
      linkTo(path){
        this.$router.push(path)
      },
      getMore(){ //点击获取更多
        this.isShow=false
        return false
      },
      packUp(){ //收起列表
        this.isShow=true
        return false
      },
      init: function () {
        map = new AMap.Map('container', {
          center: [116.397428, 39.90923],
          resizeEnable: true,
          zoom: 14
        })
        //addMarker();
        //添加marker标记
        var lnglats = [
          [116.37, 39.92],
          [116.38, 39.92],
          [116.39, 39.92],
          [116.40, 39.91]
        ];
        var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});
        for (var i = 0, marker; i < lnglats.length; i++) {
          var marker = new AMap.Marker({
            position: lnglats[i],
            map: map
          });
         // marker.content = '我是第' + (i + 1) + '个Marker';
          marker.on('click', markerClick);
          marker.emit('click', {target: marker});
        }
        function markerClick(e) {
          infoWindow.open(map, e.target.getPosition());
        }
        map.setFitView();
      /*  function addMarker() {
          map.clearMap();
          var marker = new AMap.Marker({
            map: map,
            position: [116.397428, 39.90923],
//            icon: new AMap.Icon({  //自定义图标
//              size: new AMap.Size(40, 50),  //图标大小
//              image: "http://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png",
//              imageOffset: new AMap.Pixel(0, -60)
//            })
          });
          //鼠标点击marker弹出自定义的信息窗体
          AMap.event.addListener(marker, 'click', function () {
            infoWindow.open(map, marker.getPosition());
          })
        }*/
        AMap.plugin(['AMap.ToolBar', 'AMap.Scale','AMap.Geolocation','AMap.CitySearch','AMap.Autocomplete','AMap.PlaceSearch'], function () {
          map.addControl(new AMap.ToolBar())
          map.addControl(new AMap.Scale())
          map.addControl(new AMap.Geolocation())
        })

        //实例化信息窗体
        var content = [];
        content.push("/static/image/success.png");
        content.push("中化石油");
        content.push("降");
        content.push("券");
        //console.dir(content);

        var infoWindow = new AMap.InfoWindow({
          isCustom: true,  //使用自定义窗体
          content: createInfoWindow(content),
          offset: new AMap.Pixel(16, -45)
        });

        //构建自定义信息窗体
        function createInfoWindow(content) {
          var html=`
          <div class="info">
            <i></i>
             <img src=${content[0]}>
            <div>
              <p>${content[1]}</p>
               <div>
                 <span>${content[2]}</span>
                 <span>${content[3]}</span>
                 </div>
             </div>
          </div> `;
          return html;
        }

//        //关闭信息窗体
//        function closeInfoWindow() {
//          map.clearInfoWindow();
//        }
//        showCityInfo();
//        function showCityInfo() {
//          //实例化城市查询类
//          var citysearch = new AMap.CitySearch();
//          //自动获取用户IP，返回当前城市
//          citysearch.getLocalCity(function(status, result) {
//            if (status === 'complete' && result.info === 'OK') {
//              if (result && result.city && result.bounds) {
//                var cityinfo = result.city;
//                var citybounds = result.bounds;
//                document.getElementById('city').innerHTML = '您在'+cityinfo;
//                //地图显示当前城市
//                map.setBounds(citybounds);
//              }
//            } else {
//              document.getElementById('city').innerHTML = result.info;
//            }
//          });
//        }



        //输入提示
        var autoOptions = {
          input: "tipinput"
        };
        var auto = new AMap.Autocomplete(autoOptions);
        var placeSearch = new AMap.PlaceSearch({
          map: map
        });  //构造地点查询类
        AMap.event.addListener(auto, "select", select);//注册监听，当选中某条记录时会触发
        function select(e) {
          placeSearch.setCity(e.poi.adcode);
          placeSearch.search(e.poi.name);  //关键字查询查询
        }

      },
      getCt() {//根据select获取当前城市 地位到选中城市
        var cityName = this.selected+'市';
         console.log(cityName)
        if (!cityName) {
          cityName = '北京市';
        }
        map.setCity(cityName);
      }
    }
  }
</script>
<style>
  .my-i{
    display: block;
    position: fixed;
    width: 0;
    height: 0;
    left: 0;
    top:0.82rem;
    margin-left: 1.1rem;
    border-left: 0.08rem solid transparent;
    border-right: 0.08rem solid transparent;
    border-top: 0.1rem solid #000;
  }
  #myPageTop{
    position: fixed;
    z-index: 10001;
    top:0.6rem;
    right:0;
  }
  #city,#ctNm{
    position: fixed;
    z-index: 10001;
    top:0.6rem;
    left:0;
    margin-left: 0.3rem;
    font-family: 'PingFangSC-Semibold';
    font-size: 0.36rem;
    color: #4A4D51;
    border: none;
    background: #fff;
  }
  .amap-info>div{
    bottom: 27px !important;
    left: 4px !important;
  }
  .info{
    height:0.95rem;
    width:2.16rem;
    background: #f5f5f5;
    box-shadow: 0 0.04rem 0.2rem 0 rgba(0,0,0,0.20);
    border-radius: 2rem;
    display: flex;
    position: relative;
  }
  .info>i{
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    right: 1rem;
    bottom:-0.25rem;
    border-left: 0.15rem solid transparent;
    border-right: 0.15rem solid transparent;
    border-top: 0.3rem solid #f5f5f5;
  }
  .info>img{
    width: 0.6rem;
    height: 0.6rem;
    margin: 0.16rem;
  }
  .info>div>p{
    font-size: 0.24rem;
    width: 0.96rem;
    height:0.34rem;
    line-height: 0.34rem;
    margin-top: 0.16rem;
    overflow: hidden; white-space: nowrap;text-overflow: ellipsis;
    color: #4A4D51;
  }
  .info>div>div>span{
    -webkit-text-size-adjust:none;
    font-size: 0.16rem;
    padding: 0 0.1rem;
    border-radius: 0.08rem;
    color: #fff;
  }
  .info>div>div>span:nth-child(1){
    background:#12D0C2;
    margin-right:0.1rem;
  }
  .info>div>div>span:nth-child(2){
    background: #EF5859;
  }






 .oil-nearby .amap-geolocation-con{
    bottom:4rem !important;
  }
 .oil-nearby .bottom{
   background: #EFF2F3;
   height:0.82rem;
   line-height: 0.82rem;
   text-align: center;
   margin-top: 0.22rem !important;
 }
 .oil-nearby .top{
   background: #EFF2F3;
   height:0.8rem;
   line-height: 0.8rem;
   text-align: center;
 }
 .oil-nearby .bottom>a,.oil-nearby .top>a{
   font-size: 0.28rem;
   color: #8A9499;
 }

 .oil-nearby .footer{
   transition: all 0.5s linear;
   -webkit-transition: all 0.5s linear;
   width:100%;
   height:3.48rem;
   position: fixed;
   bottom:0;
   left:0;
   background: #fff;
   z-index: 100001;
 }
 .oil-nearby .header{
   transition: all 0.5s linear;
   -webkit-transition: all 0.5s linear;
   width:100%;
   min-height:100vh;
   position:absolute;
   top:0;
   left:0;
   background: #fff;
   z-index: 100001;
 }
 .oil-nearby .footer>div{
   width: 7.5rem;margin:0 auto;
 }
 .oil-nearby .flex{
   display: flex;display: -webkit-flex;justify-content: space-between;
 }
 .oil-nearby .dotted{
   width:5.8rem;
   border-bottom: 0.02rem dotted #C2C7CE;
   margin:0.2rem 0 0.2rem 1.7rem;
 }

 .oil-nearby .img-portrait{
   width:1rem;
   height:1rem;
   margin: 0.4rem 0 0 0.4rem;
 }
 .oil-nearby .img-activity{
   width:1.44rem;
   height:0.36rem;
   margin: 0.14rem 0.2rem 0 0;
 }
 .oil-nearby .img-collect{
   width:0.6rem;
   height:0.6rem;
   margin: 0.5rem 0.38rem 0 0;
 }
 .oil-nearby .title{
   font-family: "PingFangSC-Semibold";
   font-size: 0.36rem;
   line-height:0.5rem;
   margin-top: 0.4rem;
   color: #4A4D51;
 }
 .oil-nearby .flex1{
   display: flex;display: -webkit-flex;align-items:center;
   width:5.8rem;margin-left: 1.7rem;justify-content: space-between;
 }
 .oil-nearby .flex1>button{
   border: 0.02rem solid #4080E8;
   border-radius: 0.08rem;
   font-size: 0.28rem;
   color: #4080E8;
   padding:0.1rem 0.3rem;
 }
 .oil-nearby .flex1>span{
   font-size: 0.28rem;
   color: #8A9499;
   margin-right: -1.5rem;
 }
 .oil-nearby .flex1>img{
   height:0.28rem;
   margin-right: 0.52rem;
 }
 .oil-nearby .solid{
   width:7.1rem;
   border-bottom: 0.02rem solid #C2C7CE;
   margin:0.4rem 0 0 0.4rem;
 }
</style>
