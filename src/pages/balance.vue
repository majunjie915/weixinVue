<template>
    <ul class="balance">
        <li class="curBalance">
          当前余额
          <i><span>0</span>元</i>
        </li>
    </ul>
</template>

<script>

    export default {
      name: "balance"
    }

</script>

<style scoped="">
  .balance .curBalance{
    padding: 0 0.4rem;
    height: 0.8rem;
    line-height: 0.8rem;
    border-bottom: solid 0.01rem #f5f5f5;
    font-size: 0.32rem;
  }
  .balance .curBalance i{
    float: right;
  }
  .balance .curBalance i span{
    font-size: 0.4rem;
  }
</style>
