<template>
  <div class="top">
      <div class="img">
        <img src="../assets/img/logos.png" alt="" @click="fn">
      </div>
  </div>
</template>
<script>
  export default {
    props: {
      num: Number
    },
    methods:{
      fn(){
         this.$router.push('/')
      }
    }
  }
</script>
<style lang="less" scoped type="text/less">

</style>
<style lang="less" type="text/less">
    .top{
      height: 140px;
      width: 100%;
      text-align: center;
      background: #131313;
      .img{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          cursor: pointer;
          object-fit: cover;
          width: 179px;
          height: 98px;
        }
      }
      P{
        color: #fff;
        line-height: 54px;
      }
    }
</style>
