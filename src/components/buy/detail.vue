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
                <img :src="dataList.cover_pic" alt="">
              </div>
            <div class="imgs">
              <img :src="item" v-for="item in dataList.file_pic" alt="">
            </div>
          </div>
          <div class="right">
            <p class="tit">{{dataList.title}}</p>
            <div class="price">
              <p>{{dataList.price}}<span>{{dataList.original_price}}</span></p>
              <p>
                <img src="../../assets/img/map.png" alt="">
                3521
              </p>
            </div>
            <div class="button">
              <p @click="buy">立即购买</p>
              <p>联系客服</p>
            </div>
            <div class="map">
              <p><span>发货时间</span><span>5-15天</span></p>
              <p><span>所在地</span><span>{{dataList.city_name}}</span></p>
            </div>
            <div class="regulations">
                <p>
                  <img src="../../assets/img/buy/more.png" alt="">
                   免运费
                </p>
                <span>所有名表免运费</span>
                <p>
                  <img src="../../assets/img/buy/more.png" alt="">
                  免运费
                </p>
                <span>支持3天退换，三天内且瑞时会标签未撕方可退货</span>
                <p>
                  <img src="../../assets/img/buy/more.png" alt="">
                  免运费
                </p>
                <span>{{dataList.title}}</span>
            </div>
          </div>
      </div>
      <div class="info">
        <div class="tit">
          基本信息
        </div>
        <ul class="cont">
          <li>
            <p>品牌</p> <span>{{dataList.brand_name}}</span>
          </li>
          <li>
            <p>表盘材质</p> <span>{{dataList.material_name}}</span>
          </li>
          <li>
            <p>机芯类型</p> <span>{{dataList.movement_name}}</span>
          </li>
          <li>
            <p>复杂功能</p> <span>{{dataList.function_name}}</span>
          </li>
          <li>
            <p>表盘形状</p> <span>{{dataList.market_price}}</span>
          </li>
          <li>
            <p>成色</p> <span>{{dataList.fineness_name}}</span>
          </li>
          <li>
            <p>表盘直径</p> <span>{{dataList.diameter}}mm</span>
          </li>
          <li>
            <p>发布时间</p> <span>{{dataList.publish_time}}</span>
          </li>
        </ul>
        <div class="introduce">
          <div class="tits">商品介绍</div>
          <div class="appraisal">
            <img src="../../assets/img/map.png" alt="">{{dataList.publish_user}}
          </div>
          <p>{{dataList.details}}</p>
        </div>
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
        dataList:"",
      }
    },
//    created(){
//      console.log(this.$route.query)
//    },
    mounted() {
      setTimeout(()=>{
        let self=this;
//
        this.$http.get(`http://apidev.swisstimevip.com:8000/market/v1/market/buyer/watchinfo`,{params:{
          gid:this.$route.query.id
        }}).then(res=>{
          if(res.data.manage.length!=0) {
            res.data.manage.file_pic=res.data.manage.file_pic.split(",")
            this.dataList=res.data.manage

          }
        }).catch(() => {

        })
      },500)

    },
    methods:{
      buy(){
        this.$router.push(`/buy/purchase?id=${this.dataList.gid}`)
      }
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
              object-fit: cover;
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
              width: 16.6%;
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
          display: flex;
          flex-direction: column;
          .tit{
            line-height: 40px;
            color: #333;
            font-size: 18px;
          }
          .price{
            display: flex;
            justify-content: space-between;
            p{
              font-size: 22px;
              line-height: 40px;
              color: #333333;
              span{
                color: #cccccc;
                font-size: 16px;
                padding-left: 15px;
                text-decoration: line-through;
                img{
                  padding-right: 10px;
                }
              }
              &:last-child{
                font-size: 15px;
                color: #999;
              }
            }
          }
          .button{
            padding-top: 22px;
            padding-bottom: 8px;
            border-bottom: 1px solid #e6e6e6;
            p{
              cursor: pointer;
              width: 100%;
              height: 61px;
              transition: all .4s;
              text-align: center;
              line-height: 61px;
              border: 1px solid #ccc;
              box-sizing: border-box;
              color: #333;
              margin-bottom: 20px;
              &:hover{
                background-color: #333333;
                color: #fafafa;

              }
            }
          }
          .map{
            line-height: 60px;
            p{
              display: flex;
              justify-content: space-between;
              border-bottom: solid 1px #e6e6e6;
              color: #999;
              span{
                &:last-child{
                  color: #333;
                }
              }
            }
          }
          .regulations{
            max-height: 410px;
            min-height: 200px;
            border: 1px solid #e6e6e6;
            box-sizing: border-box;
            margin-top: 28px;
            padding: 0 20px 30px 55px;
            p{
              color: #333;
              font-size: 18px;
              padding-top: 35px;
              position: relative;
              img{
                position: absolute;
                left: -30px;
                top: 38px;
              }
            }
            span{
              color: #999;
              font-size: 14px;
              display: block;
              padding-top: 20px;
            }
          }
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
          display: flex;
          flex-wrap: wrap;
          li{
            width: 47.6%;
            border-bottom: 1px solid #e5e5e5;
            display: flex;
            line-height: 50px;
            p{
              color: #999;
              width: 143px;
            }
            span{
              color: #333;
            }
            &:nth-child(2n-1){
              margin-right: 45px;
            }
          }
        }
        .introduce{
          border-top:1px solid #e6e6e6;
          padding: 60px 187px 100px 32px;
          .tits{
            font-size: 24px;
            color: #333333;
          }
          .appraisal{
            padding: 25px 0 20px 38px;
            line-height: 30px;
            color: #999;
            position: relative;
            img{
              position: absolute;
              left: 0;
            }
          }
          p{
            font-size: 14px;
            color: #999999;
            padding-top: 12px;
          }
        }
      }
    }
  }
</style>
<style type="text/less" lang="less">

</style>
