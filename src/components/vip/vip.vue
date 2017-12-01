<template>
  <div class="VIP">
      <Top></Top>
      <Navs :num="3"></Navs>
      <div class="vips">
        <div class="title">
          Join SWISS TIME VIP enjoy unlimited glory and honor
        </div>
        <div class="content">
          <dl>
            <dt>
              <img src="../../assets/img/bdfl.jpg" alt="">
            </dt>
            <dd>
              <div class="detail">
                <p>Swiss Time VIP </p>
                <b>详情</b>
              </div>
              <p>瑞时卡 500万元 </p>
              <span>Supreme courtesy. Watch indispensable like air, top as basic. </span>
              <span>至高礼遇。腕表如空气，顶配即标配。</span>
            </dd>
          </dl>
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
    components: {
      Top,  //头部
      Navs, //导航
      Foot  //公共底部
    },
  }
</script>
<style type="text/less" lang="less" scoped>
  .VIP{
    .vips{
        margin:0 auto;
        max-width: 1200px;
        min-width:1000px;
        box-sizing: border-box;
        padding: 0 70px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title{
          text-align: center;
          height: auto;
          line-height: 160px;
          margin-bottom: 20px ;
          font-size: 34px;
        }
      .content{
        width: 555px;
        height: auto;
        margin: 0 auto;
        dl{
          padding-bottom: 70px;
          dt{
            img{
              border-radius: 5px;
              width: 100%;
              height: 352px;
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
