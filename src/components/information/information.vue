<template>
  <div class="Information">
      <Top></Top>
      <Navs :num="4"></Navs>
      
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
<style lang="less" scoped type="text/less">
  .story {
    min-width: 1024px;
    max-width: 1200px;
  }
</style>
<style type="text/less" lang="less" scoped>
  .Information{
    .banners{
        margin:0 auto;
        width: 1220px;
        min-width:1220px;
        img{
          width: 100%;
          height: auto;
        }
    }
  }
</style>
