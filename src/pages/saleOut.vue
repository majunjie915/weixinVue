<template>
    <div class="saleOut">
      <p class="message">{{this.$route.params.message}}</p>
    </div>
</template>

<script>

    export default {
      data () {
        return {

        };
      },

    }

</script>

<style scoped>
  .saleOut{
    padding-top: 0.01rem;
  }
  .saleOut .message{
    font-size: 0.32rem;
    margin: 0.5rem auto;
    text-align: center;
  }
</style>
