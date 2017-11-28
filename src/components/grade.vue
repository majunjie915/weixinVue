<template>
  <div>
    <div>
      <p class="my-pf">评分</p>
    </div>
    <yd-cell-item>
      <span slot="left" class="my-left">综合评分：</span>
      <yd-rate slot="left" v-model="rate4" color="#CED2D8" active-color="#FFCF00"></yd-rate>
      <span slot="right">{{rate4}}分</span>
    </yd-cell-item>
    <yd-cell-group title="" >
      <yd-cell-item>
        <yd-textarea  slot="right" placeholder="留言不超过50个字" maxlength="50"></yd-textarea>
      </yd-cell-item>
    </yd-cell-group>
    <yd-button class="my-button" size="large" type="primary">提交评价</yd-button>
  </div>
</template>

<script>

    export default {
      data(){
        return{
          ydswitch: true,
          rate4:5
        }
      }
    }

</script>

<style>
  .yd-textarea{
    border: 0.02rem dotted #E0E3E6;
    border-radius: 0.08rem;
    width:98%;
    margin:0 auto;
    padding:0.24rem;
  }
  ::-webkit-input-placeholder{color:#C2C7CE }
  .yd-textarea>textarea{
    color: #C2C7CE;
    font-size: 0.28rem;
  }
  .yd-cell::after{
    border: none !important;
  }
  .yd-cell-item::after{
    border: none !important;
  }

  .rate-active{font-size: 0.34rem}
  .yd-rate{font-size: 0.34rem !important}
  .my-button{
    width:92%;margin:0 auto;border-radius: 0.08rem;
    height:0.82rem;color: #4080E8;background: #EFF5FF;border: 0.02rem solid #4080E8;
  }
  .my-button:active {
    background-color: #ddd !important;
  }
  .my-left{
    font-size: 0.32rem;
    color: #4A4D51;
  }
  .my-pf{
    font-size: 0.36rem;
    text-align: center;
    color: #494D51;
    padding-top:0.4rem;
  }
</style>
