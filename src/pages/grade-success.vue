<template>
    <div class="grade-success">
      <img v-if="isShow" src="/static/image/success.png" alt="评论成功">
      <img v-if="!isShow" src="/static/image/error.png" alt="评论失败">
      <p v-if="isShow">评论成功</p>
      <p v-if="!isShow">评论失败</p>
    </div>
</template>

<script>

    export default {
      data(){
        return{
          isShow:true
        }

      }
    }

</script>

<style scoped>
 .grade-success img{
   width: 1rem;
   height:1rem;
   display: block;
   margin:0 auto;
   margin-top:3.28rem;
 }
 .grade-success p{
   font-size: 0.44rem;
   text-align: center;
   padding-top: 0.4rem;
   color: #4A4D51;
 }
</style>
