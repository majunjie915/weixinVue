<template>
  <div class="reful-before">
    <div class="head">
      <p>尊敬的张先森，你好！欢迎光临海淀黄庄加油站！</p>
    </div>
    <div>
      <div style="min-height: 1.84rem">
        <span class="left">油枪</span>
        <input class="input input1" readonly v-model="num"  @focus="isShowO"  placeholder="请输入油枪号" type="number">
        <em class="em" :="getNum()">{{number}}</em>
      </div>
      <div style="min-height: 1.6rem">
        <span style="padding-top: 0.56rem" class="left">金额</span>
        <input class="input input2" readonly @focus="isShowM"  v-model="message" placeholder="加油金额（10-9999）">
      </div>
    </div>
    <ul class="re-ul">
      <li :class="message==L?'active':''" v-for="L in list" @click="defaultM">{{L}}</li>
    </ul>
    <div class="keyboard" v-show="isShow">
      <div class="keyhead"></div>
      <div class="keytitle">
        <p :="getNum()">{{numberList}}</p>
        <p>优惠<i>4.65</i>元（每升优惠0.20元）</p>
      </div>
      <div>
        <ul class="nb-ul">
          <li v-for="nb in nbList"  @click="add">{{nb}}</li>
          <li @click="close">清空</li>
          <li @click="add">0</li>
          <li>.</li>
        </ul>
        <ul class="cp-ul">
          <li @click="subtract">x</li>
          <li @click="linkTo('/order-confirmation')">支付</li>
        </ul>
      </div>
    </div>
    <div class="keyboard" v-show="isShow2">
      <div class="keyhead"></div>
      <div class="keytitle">
        <p :="getNum()">{{numberList}}</p>
        <p>优惠<i>4.65</i>元（每升优惠0.20元）</p>
      </div>
      <div>
        <ul class="nb-ul">
          <li v-for="nb in nbList" @click="addM">{{nb}}</li>
          <li @click="closeM">清空</li>
          <li @click="addM">0</li>
          <li @click="addMD">.</li>
        </ul>
        <ul class="cp-ul">
          <li @click="subtractM">x</li>
          <li @click="linkTo('/order-confirmation')">支付</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return{
        message:'', //加油金额
        num:'',     //输入油枪号
        number:'',  //显示的油号
        numberList:'请输入油枪号',  //键盘顶部显示的油枪号与对应的油号
        isShow:false,//自定义键盘 默认不弹出
        isShow2:false,//自定义键盘 默认不弹出
        list:[       //默认加油金额列表
          100,200,300,400
        ],
        nbList:[   //自定义键盘 左侧
          1,2,3,4,5,6,7,8,9
        ]
      }
    },
    computed:{

    },
    methods:{
      //判断输入的油枪号数字  更改对应显示的油号
      getNum(){
        if(this.num==1){
          this.number='92#'
          this.numberList='1号油枪，国五92#车用汽油'
          return false
        }else if(this.num==2){
          this.number='93#'
          this.numberList='2号油枪，国五93#车用汽油'
          return false
        } else if(this.num==3){
          this.number='95#'
          this.numberList='3号油枪，国五95#车用汽油'
          return false
        }else if(this.num==4){
          this.number='97#'
          this.numberList='4号油枪，国五97#车用汽油'
          return false
        } else {
          this.number=''
          this.numberList='请输入油枪号'
          return false
        }
      },
      linkTo(path){
        this.$router.push(path)
      },
      defaultM(e){//选择默认金额 键盘为金额输入
        this.message=e.currentTarget.innerHTML
        this.isShow2=true
        this.isShow=false
        return false
      },
      isShowO(){ //油枪键盘
        this.isShow=true
        this.isShow2=false
        return false
      },
      isShowM(){ //金额键盘
        this.isShow2=true
        this.isShow=false
        return false
      },

      add(e){//油枪输入
        this.num=this.num+e.currentTarget.innerHTML
        return false
      },
      addM(e){//金额输入
        this.message=this.message+e.currentTarget.innerHTML
        return false
      },
      addMD(){//金额输入小数点
        if(this.message.indexOf('.')>0){
          this.message=this.message
        }else{
          this.message=this.message+'.'
        }

        return false
      },
      close(){ //油枪输入为空
        this.num=''
        return false
      },
      closeM(){ //金额输入为空
        this.message=''
        return false
      },
      subtract(){// 油枪输入退一格
        this.num=this.num.slice(0,this.num.length-1)
        return false
      },
      subtractM(){//金额输入退一格
        this.message=this.message.slice(0,this.message.length-1)
        return false
      }
    }
  }

</script>

<style>

  .reful-before .head{
    width:100%;
    height:0.6rem;
    background: #4080E8;
  }
  .reful-before .head>p{
    font-size: 0.24rem;line-height: 0.6rem;
    color: #fff;  padding-left:0.4rem;
    box-sizing: border-box;
  }
  .reful-before .left{
    display: block;
    font-size: 0.64rem;
    line-height: 0.9rem;
    height: 0.9rem;
    color: #4A4D51;
    padding: 0.8rem 0.4rem 0 0.4rem;
    float: left;
  }
  .reful-before .em{
    font-size: 0.36rem;
    line-height:0.5rem;
    color: #4A4D51;
    font-family:"PingFangSC-Semibold";
    float: left;
    padding:1rem 0 0 0.6rem;
    display: block;
  }
  .reful-before .input{
    border: 0.02rem solid #D9E5FA;
    border-radius: 0.08rem;
    display: block;
    height:1.2rem;
    box-sizing: border-box;
    font-size: 0.48rem;
    color: #4080E8;
    float: left;
    text-align: center;padding:0 0.22rem;
  }
  .reful-before input::-webkit-input-placeholder{
    color: #C2C7CE;opacity:1;
    -ms-text-align-last: left;
    text-align-last: left;
    font-size: 0.36rem;
    line-height:0.36rem;
  }
  .reful-before .input1{
    width:3rem;
    margin-top:0.64rem;
  }
  .reful-before .input2{
    width:4.76rem;
    margin-top:0.4rem;
  }
  .reful-before .re-ul>li{
    float: left;
    width:1.04rem;
    height:0.8rem;
    box-sizing: border-box;
    border: 0.02rem solid #D9E5FA;
    border-radius: 0.08rem;
    font-size: 0.32rem;
    text-align: center;
    line-height:0.8rem;
    color: #4A4D51;
    margin:0.4rem 0.2rem 0 0;
  }
  .reful-before .re-ul>li:nth-child(1){
    margin-left: 2.08rem;
  }
  .reful-before .active{
    background: #4080E8;
    color: #fff !important;
  }
  .reful-before .keyboard{
    position: fixed;
    bottom:0;
    width:7.5rem;
    height: 6.22rem;
    background: #C2C7CE;
    z-index: 100;
    box-sizing: border-box;
    transition: all 0.5s linear;
  }
  .reful-before .keyhead{
    height:0.2rem;background: #EFF2F3;
  }
  .reful-before .keytitle{
    height:1.7rem;background: #fff;
    box-sizing: border-box;
  }
  .reful-before .keytitle>p{
    color: #4A4D51;
    font-family:"PingFangSC-Semibold";
    text-align: center;}
  .reful-before .keytitle>p:nth-child(1){
    font-size: 0.28rem;
    line-height:0.4rem;
    padding-top:0.32rem;
  }
  .reful-before .keytitle>p:nth-child(2){
    font-size: 0.36rem;
    line-height:0.5rem;
    padding-top:0.08rem;
  }
  .reful-before .keytitle>p>i{ color: #4986E9 }
  .reful-before .nb-ul{ width:5.28rem;float: left}
  .reful-before .nb-ul>li{
    width:1.6rem;
    height:0.92rem;
    background: #fff;
    font-size: 0.5rem;
    line-height: 0.92rem;
    color: #4A4D51;
    float: left;
    margin:0.12rem 0 0 0.12rem;
    text-align: center;
    border-radius: 0.1rem;
    font-family: "PingFangSC-Semibold"
  }
  .reful-before .nb-ul>li:nth-child(10){
    font-size: 0.32rem;
  }
  .reful-before .cp-ul{float: left}
  .cp-ul>li{
    width:2.1rem; background: #fff;color: #4A4D51; border-radius: 0.1rem;
    margin-top:0.12rem;color: #4A4D51;
    text-align: center;  font-family: "PingFangSC-Semibold"
  }
  .cp-ul>li:nth-child(1){
    height:0.92rem;
    line-height:0.92rem;
    position: relative;
    font-size: 0.36rem;
  }

  .cp-ul>li:nth-child(2){
    height:3.04rem;
    line-height:3.04rem;
    font-size: 0.5rem;
  }
  .input1:focus,.input2:focus{
    border: 0.02rem solid #4080E8;
  }
</style>
