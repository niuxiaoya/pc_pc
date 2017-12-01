<template>
  <div class="About">
      <Top></Top>
      <Navs :num="6"></Navs>
      <div class="banners">
        <img src="../../assets/img/auout/about.png" alt="">
      </div>
      <Foot></Foot>
  </div>
</template>
<script>
 import Top from '@/components/top'
 import Navs from '@/components/nav'
 import Foot from '@/components/foot'
  export default {
    components: {
      Top,  //头部
      Navs, //导航
      Foot  //公共底部
    },
  }
</script>
<style type="text/less" lang="less" scoped>
  .About{
    .banners{
        min-width: 1000px;
        max-width: 1200px;
        margin:0 auto;
        img{
          width: 100%;
          height: auto;
        }
    }
  }
</style>
