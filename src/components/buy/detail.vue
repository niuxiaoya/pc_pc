<template>
  <div class="Buy">
    <Top></Top>
    <Navs :num="1"></Navs>
    <div class="mian">
      <div class="title">
        <p>腕表信息</p>
        <p><img src="" alt=""> 收藏</p>
      </div>
      <div class="content">
          <div class="left">
              <div class="img">
                <img src="" alt="">
              </div>
            <div class="imgs">
              <img src="" alt="">
              <img src="" alt="">
              <img src="" alt="">
              <img src="" alt="">
              <img src="" alt="">
              <img src="" alt="">
              <img src="" alt="">
              <img src="" alt="">
              <img src="" alt="">
              <img src="" alt="">
            </div>
          </div>
          <div class="right"></div>
      </div>
      <div class="info">
        <div class="tit">
          基本信息
        </div>
        <ul class="cont">
          <li>
            <p>品牌</p> <span>爱彼</span>
          </li>
          <li>
            <p>品牌</p> <span>爱彼</span>
          </li>
          <li>
            <p>品牌</p> <span>爱彼</span>
          </li>
          <li>
            <p>品牌</p> <span>爱彼</span>
          </li>
          <li>
            <p>品牌</p> <span>爱彼</span>
          </li>
          <li>
            <p>品牌</p> <span>爱彼</span>
          </li>
          <li>
            <p>品牌</p> <span>爱彼</span>
          </li>
          <li>
            <p>品牌</p> <span>爱彼</span>
          </li>
        </ul>
      </div>
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

      }
    },
    mounted() {

    },
    components: {
      Top,  //头部
      Navs, //导航
      Foot  //公共底部
    },
  }
</script>
<style lang="less" scoped type="text/less">
  .Buy{
    .mian{
      box-sizing:border-box;
      max-width: 1200px;
      min-width: 1000px;
      padding: 60px 0px 100px;
      margin: 0 auto;
      box-sizing: border-box;
      background: #fff;
      .title{
        display: flex;
        justify-content: space-between;
        font-size: 24px;
        color: #333;
        padding:0 10px;
        p{
          &:last-child{
            font-size: 16px;
            color: #999;
          }
        }
      }
      .content{
        margin-top: 30px;
        padding:  0 40px 60px;
        box-sizing: border-box;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        justify-content: space-between;
        .left{
          width: 52%;
          .img{
            width: 100%;
            height: 627px;
            border:1px solid #ebebeb;
            box-sizing: border-box;
            img{
              /*width: 333px;*/
              /*height: 543px;*/
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .imgs{
            display: flex;
            flex-wrap: wrap;
            img{
              width: 17.2%;
              max-height: 115px;
              min-height: 100px;
              display: inline-block;
              margin-top: 15px;
              margin-right: 15px;
              border: solid 2px #ccc;
              &:nth-child(5n){
                margin-right: 0;
              }
            }
          }
        }
        .right{
          width: 40%;
        }
      }
      .info{
        padding:60px 30px 0px;
        box-sizing: border-box;
        .tit{
          color: #333333;
          font-size: 24px;
          border-bottom: solid 1px #e5e5e5;
          padding-bottom: 30px;
        }
        .cont{

        }
      }
    }
  }
</style>
<style type="text/less" lang="less">

</style>
