<template>
    <div>
      <div id="container" :="getMap()"></div>
    </div>
</template>

<script>

    export default {
      methods:{
        getMap(){
          let map = new BMap.Map("container");
          // 创建地图实例
          let point = new BMap.Point(116.404, 39.915);
          // 创建点坐标
          map.centerAndZoom(point, 15);
          // 初始化地图，设置中心点坐标和地图级别
        }
      }

    }

</script>

<style>
  html{height:100%}
  body{height:100%;margin:0px;padding:0px}
  #container{height:100%}
</style>
