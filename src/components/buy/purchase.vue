<template>
  <div class="Purchase">
    <Top></Top>
    <Navs :num="1"></Navs>
    <div class="mian">

    </div>
    <Foot></Foot>
  </div>
</template>
<script type="javascript">
  import Top from '@/components/top'
  import Navs from '@/components/nav'
  import Foot from '@/components/foot'
  export default {
    data(){
      return {
        dataList:"",
        id:'',
      }
    },
    created(){
      this.id=this.$route.query.id
      console.log(this.$route.query.id)
    },
    mounted() {
      setTimeout(()=>{
        let self=this;
        this.$http.get(`http://apidev.swisstimevip.com:8000/market/v1/market/buyer/orderplace`,{params:{
          gid:this.$route.query.id
        }}).then(res=>{
          if(res.data.manage.length!=0) {
//            res.data.manage.file_pic=res.data.manage.file_pic.split(",")
//            this.dataList=res.data.manage
            console.log(res.data)

          }
        }).catch(() => {

        })
      },500)

    },
    components: {
      Top,  //头部
      Navs, //导航
      Foot  //公共底部
    },
  }
</script>
<style lang="less" scoped type="text/less">
  .Purchase{
    .mian{
      box-sizing:border-box;
      max-width: 1200px;
      min-width: 1000px;
      padding: 60px 0px 100px;
      margin: 0 auto;
      box-sizing: border-box;
      background: #fff;

    }
  }
</style>
<style type="text/less" lang="less">

</style>
