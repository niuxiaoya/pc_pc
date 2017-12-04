<template>
  <div class="VIP">
      <Top></Top>
      <Navs :num="3"></Navs>
      <div class="mian">

          <div class="content">
          <dl @click="info(index)"  v-for="item,index in vipInfo" :key="index">
            <dt>
              <img :src="item.icon_pic" alt="">
            </dt>
            <dd>
              <div class="detail">
                <p>{{item.name}} </p>
                <b>详情</b>
              </div>
              <p>{{item.name[1][2]}} 500万元 </p>
              <span>Supreme courtesy. Watch indispensable like air, top as basic. </span>
              <span>{{item.remark}}</span>
            </dd>
          </dl>
          <!--<dl @click="info()" v-for="item,index in vipInfo" :key="index">-->
            <!--<dt>-->
              <!--<img :src="item.icon_pic" @click="$router.push({name:'vip/detail',params:{key:index}})">-->
            <!--</dt>-->
            <!--<dd>-->
              <!--<div class="detail">-->
                <!--<p>{{item.name}} </p>-->
                <!--<b>详情</b>-->
              <!--</div>-->
              <!--<p>瑞时卡 {{item.money}} </p>-->
              <!--<span>Supreme courtesy. Watch indispensable like air, top as basic. </span>-->
              <!--<span>至高礼遇。腕表如空气，顶配即标配。</span>-->
            <!--</dd>-->
          <!--</dl>-->
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
     return{
       vipInfo:[]
     }
   },
   methods:{
     info(resut){
      console.log(resut)
       this.$router.push({
           path:'/vip/detail',
           query:{
              dataObj:resut
           }
       })
     },
   },
    mounted(){
    let self=this;
     setTimeout(()=>{
       /**
        * vip列表
        */
       self.$http.get(`${process.env.API.VIP}/vip/memlevel`).then(res=>{
         if(res.data.errcode=='0'){
           let str;
           let str1;
           let arr=[];
//           for(let i=0;i<this.vipInfo.length;i++){
//             str=this.vipInfo[i].name.split(" ")
//             str1=str[0]+str[1];
//             arr[i]=[str1,str]
//             this.vipInfo[i].name=arr[i];
//           }
           self.vipInfo = res.data.data.data
           console.log(res.data.data.data)
         }
       }).catch(err=>{
         console.log(err)
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
<style type="text/less" lang="less" scoped>
  .VIP{
    .mian{
      max-width: 1200px;
      min-width: 1000px;
      padding: 0 10px;
      padding-top: 50px;
      box-sizing: border-box;
      margin: 0 auto;
      background: #fff;
      .content{
        padding-top:160px;
        height: auto;
        margin: 0 auto;
        background: url("../../assets/img/vip/back.png");
        background-size: 100%;
        text-agin:center;
        dl{
          width: 555px;
          padding-bottom: 70px;
          margin: 0 auto;
          dt{
            width: 100%;
            height: 352px;
            img{
              border-radius: 5px;
              width: 100%;
              height: 352px;
              cursor: pointer;
              box-shadow: 1px 5px 18px #000;
            }
          }
          dd{
            .detail{
              position: relative;
              text-align: center;
              margin: 0 auto;
              display: flex;
              justify-content: center;
              p{
                font-size: 32px;
                padding-top: 30px;

              }
            }
            b{
              font-weight: normal;
              margin-top: 38px;
              border-radius: 3px;
              width: 72px;
              height: 23px;
              background-color: #000000;
              text-align: center;
              line-height: 23px;
              color: #fff;
              font-size: 14px;
              display: inline-block;
              margin-left: 38px;
            }
            p{
              text-align: center;
              font-size: 20px;
              line-height: 36px;
            }
            span{
              display: block;
              text-align: center;
              padding-top: 16px;
              color: #606060;
              &:first-child{
                padding-top: 25px;
              }
            }
          }
        }
      }
    }
  }
</style>
