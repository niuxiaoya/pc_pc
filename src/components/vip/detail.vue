<template>
  <div class="VipDeatil">
    <Top></Top>
    <Navs :num="4"></Navs>
    <div class="mian">
      <div class="title">
        <div class="matter">当前位置 : 会籍 > 详情</div>
      </div>
      <div class="content">

      </div>
      <div class="page">

      </div>
    </div>
    <Foot></Foot>
  </div>
</template>
<script>
  import Top from '@/components/top'
  import Navs from '@/components/nav'
  import Foot from '@/components/foot'
  export default {
    data(){
      return {

      }
    },
    components: {
      Top,  //头部
      Navs, //导航
      Foot  //公共底部
    },
  }
</script>
<style type="text/less" lang="less" scoped>
  .VipDeatil{
    .mian{
      max-width: 1200px;
      min-width: 1000px;
      padding-top: 50px;
      margin: 0 auto;
      background: #fff;
      .title{
        height: 88px;
        font-size: 16px;
        color: #999;
        padding-left: 30px;
        padding-right: 30px;
        border-bottom: 1px solid #e6e6e6;
        overflow: hidden;
        .matter{
          float: left;
        }

      }
      .content{
        background: url("../../assets/img/vip/back.png");
        height: 1500px;
      }
    }
  }
</style>
