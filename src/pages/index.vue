<template>
  <div class="wraps">
    <div class="fixed">
      <img src="../assets/img/kefu.png" alt="">
    </div>
    <Top></Top>
    <Navs :num="0"></Navs>
    <!--banner-->
    <Banners></Banners>

    <div class="center">
        <!--content内容-->
      <div class="surface">
          <div class="title">
              <div class="left">
                <p>{{dataList.title.tit}}</p>
                <span>{{dataList.title.cont}}</span>
              </div>
              <div class="right">
                <p>查看全部 ></p>
              </div>
          </div>
          <div class="shops">
            <dl class="commodity" v-for="item in data">
              <dt>
                <img :src="item.cover_pic" alt="">
              </dt>
              <dd>
                <p>{{item.title}}</p>
                <span>{{item.price}}</span>
                <button>
                  立即购买
                </button>
              </dd>
            </dl>
          </div>
        </div>

      <div class="surface">
        <div class="title titles">
          <div class="left">
            <p>{{tab1.title.tit}}</p>
            <span>{{tab1.title.cont}}</span>
          </div>
          <div class="right">
            <p>查看全部
              >
              <!--<img src="../assets/img/yj.png" alt="">-->
            </p>
          </div>
        </div>

        <div class="market">
          <div class="navs">
            <span v-for="(i,index) in datas" :class="{'navActive':navId == i.id}"  @click="demos(i)" :id="i.id">
              {{i.name}}
            </span>
          </div>

          <div class="list" v-if="bData.length!=0 && datas.length!=0">
            <div class="jts">
              <i class="z" @click="jjs"></i>
              <i class="y" @click="adds"></i>
            </div>

            <div class="marckshop" v-for="(i,$index) in bData">
              <el-carousel trigger="click"  :autoplay="false">
                <el-carousel-item v-for="item in i.file_pic" :key="item">
                  <img :src="item">
                </el-carousel-item>
              </el-carousel>
              <p>{{i.title}}</p>
              <p>${{i.price}}</p>
              <div class="hidden">
                <div class="hbtn">
                  立即购买
                </div>
              </div>
            </div>
          </div>
          <div class="over" v-else="bData.length==0">
            <!--<span class="load" v-loading="loading"></span>-->
            <img src="../assets/img/icon.png" alt="">
            <span> 暂无数据...</span>
          </div>
        </div>
      </div>

      <div class="surface">
        <div class="title titles">
          <div class="left">
            <p>{{tab2.title.tit}}</p>
            <span>{{tab2.title.cont}}</span>
          </div>
          <div class="right">
            <p>查看全部 ></p>
          </div>
        </div>

        <div class="market">
          <div class="navs">
            <span v-for="(i,index) in content" :class="{'navActive':navIds == i.id }" @click="demo(i)">
                 {{i.title}}
            </span>
          </div>

          <div class="list" v-if="pData.length!=0">
            <div class="jts">
              <i class="z" @click="jj"></i>
              <i class="y" @click="add"></i>
            </div>

            <div class="marckshop" v-for="(i,$index) in pData">
              <el-carousel trigger="click"  :autoplay="false">
              <el-carousel-item v-for="item in i.file_pic" :key="item">
                <img :src="item">
              </el-carousel-item>
            </el-carousel>
              <p>{{i.title}}</p>
              <p>${{i.price}}</p>
              <div class="hidden">
                <div class="hbtn">
                  立即购买
                </div>
              </div>
            </div>
          </div>
          <div class="over" v-else="pData.length==0">
            <!--<span class="load" v-loading="loadings"></span>-->
            <img src="../assets/img/icon.png" alt="">
            <span> 暂无数据...</span>
          </div>
        </div>
      </div>

        <!--品牌故事-->
       <Story></Story>
        <!--品牌保障-->
       <Guarantee></Guarantee>
    </div>
    <Foot></Foot>
  </div>
</template>
<script type="javascript">
  import Top from '@/components/top'
  import Navs from '@/components/nav'
  import Banners from '@/components/index/banners'
//  故事
  import Story from '@/components/index/story'
//  保障
  import Guarantee from '@/components/index/guarantee'
  import Foot from '@/components/foot'
  export default {
    data () {
      return {
        navNum:0,
        navId:1,
        navIds:1,
        bData:'',
        datas:'',
        loading: true,
        loadings: true,
        arr:[],
        brandData:{
          brand:""
//          document.getElementsByClassName("navs")[0].getElementsByTagName("span")[2].id
        },
        postData: {
          money1: '60',
          money2: '80',
        },
        pData:'',
        img:"",
        dataList:
          {
            type:1,
            title:{
                tit:"THE NEW TABLE SHELVES",
                cont:"新表上架"
            },
          },
        tab1:
          {
            type:0,
            title:{
              tit:"THOUSANDS OF BRANDS",
              cont:"万千品牌"
            },

          },
        data:[
          {
            cont:"海使型",
            price:"$3,000",
            img:[
              {
                photo:require('../assets/img/bdfl.jpg'),
              },
            ]
          }
        ],
        tab2:
          {
            title:{
              tit:"THOUSANDS OF BRANDS",
              cont:"大噶专区",
            },
          },
        content:[
          {
            id:1,
            title:"60-80万",
          },
          {
            id:2,
            title:"80-100万",
          },
          {
            id:3,
            title:"100-200万",
          },
          {
            id:4,
            title:"200万以上",
          },
        ],
        news:null,
      }
    },
    created(){


    },
    methods:{
//     价格商品 数据变化
      change(){
        switch (this.navIds){
          case 1:
            this.postData.money1=60
            this.postData.money2=80
            this.getPrice()
            break;
          case 2:
            this.postData.money1=80
            this.postData.money2=100
            this.getPrice()
            break;
          case 3:
            this.postData.money1=100
            this.postData.money2=200
            this.getPrice()
            break;
          case 4:
            this.postData.money1=200
            this.postData.money2=
            this.getPrice()
            break
        }
      },
//      左箭头
      jj(){
        if(this.navIds>1){
          this.navIds--
          this.change()

        }else{
          this.navIds=4;
          this.change()
        }
      },
//      右箭头
      add(){
        if(this.navIds<4){
          this.navIds++
          this.change()
        }else{
          this.navIds=1;
          this.change()
        }
      },
//     品牌商品 数据变化
      changes(){
        this.brandData.brand==this.navId;
        this.getMacket()
      },
      jjs(){
        for(var i=0;i<this.arr.length;i++){
          if(this.arr[i]==this.navId){
            if(i==0){
              this.navId=this.arr.length-1
              return  this.getMacket()
            }else {
              this.navId=this.arr[i-1]
              return  this.getMacket()
            }
          }
        }

      },

      adds(){
        for(var i=0;i<this.arr.length;i++){
          if(this.arr[i]==this.navId){
            if(i==this.arr.length-1){
              this.navId=this.arr[0]
              return this.getMacket()
            }else {
              this.navId=this.arr[i+1]
              return this.getMacket()
            }
          }
        }
      },
//      价格区域数据变化
      demo(i){
        this.navIds = i.id
        this.change()
      },
//      品牌区域数据变化
      demos(i){
        this.navId = i.id
        this.changes()
      },
//      价格请求
      getPrice(){
        this.pData="";
        this.loadings=true
        setTimeout(() => {
          this.$http.get(`${process.env.API.MARKET}/market/buyer/goodsList?price_l=${this.postData.money1 || 0}&price_h=${this.postData.money2|| -1}&rows=3`).then(res=>{
            if(res.data.data.length!=0){
              for(var i=0;i<res.data.data.length;i++){
                if(res.data.data[i].file_pic.length!=0){
                  res.data.data[i].file_pic=res.data.data[i].file_pic.split(",")
                }
              }
              this.pData=res.data.data;
            }

          }).catch(err=>{

          })
        },500)
      },
//      品牌请求
      getMacket(){
        this.bData="";
        this.loading=true
        setTimeout(()=>{
          this.brandData.brand=this.navId;
          this.$http.get(`${process.env.API.MARKET}/market/buyer/goodsList?brand_id=${this.brandData.brand}&rows=3`).then(res=>{
            if(res.data.data.length!=0){;
              for(var i=0;i<res.data.data.length;i++){
                if(res.data.data[i].file_pic.length!=0){
                  res.data.data[i].file_pic=res.data.data[i].file_pic.split(",")
                }
              }
              this.bData=res.data.data;
            }else{

            }

          }).catch(err=>{
//          console.log(err)
          })
        },500)
      }

    },

    mounted(){
//      新品
      this.$http.get(`${process.env.API.MARKET}/market/buyer/goodsList?rows=3`).then(res=>{
        if(res.data.data.length!=0){
          this.data=res.data.data;
        }
      }).catch(err=>{
        console.log(err)
      })

//      品牌手表全部请求
      this.$http.get(`${process.env.API.DICT}/dict/brand?is_pc=1`).then(res=>{
        if(res.data.data.length!=0){
          this.datas=res.data.data//.splice(0,5);
          console.log(res.data)
          this.navId=this.datas[0].id
          for(var i=0;i<this.datas.length;i++){
              this.arr.push(this.datas[i].id)
          }
        }
      }).catch(err=>{
        console.log(err)
      })

//      品牌手表
      this.getMacket()
//      价格请求
      this.getPrice()

    },
    components: {
      Top,  //头部
      Navs, //导航
      Banners,  //banner
      Story,   //品牌故事
      Guarantee,  //客服保障
      Foot  //公共底部
    },
  }
</script>
<style type="text/less" scoped lang="less">
  body{
    position: relative;
    width: 100%;
    height: 100%;
  }
    .wraps{
      background: #fafafa;
      min-width: 1024px;
      position: relative;
      .fixed{
        position: absolute;
        bottom: 386px;
        right: 52px;
        z-index: 999;
        width: 86px;
        height: 86px;
        border-radius: 50%;
        background: #fff;
        text-align: center;
        line-height: 86px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .center{
        margin: 0 auto;
        min-width: 1024px;
        max-width: 1200px;
        padding-top: 30px;
        .surface{
          min-width: 1024px;
          max-width: 1200px;
          padding-top: 100px;
          .title{
            position: relative;
            height: 115px;
            .left{
              position: absolute;
              left: 0;
              top: 0;
              p{
                font-size: 32px;
                color: #333;
                padding-bottom: 15px;
              }
              span{
                font-size: 20px;
                color: #999;
              }
            }
            .right{
              position: absolute;
              right: 0;
              top: 28px;
              cursor: pointer;
              font-size: 14px;
              color: #333;
              p{
                color: #333;
                font-size: 14px;
              }
            }
          }
          .titles{
            height: 128px;
          }
          .shops{
            max-width: 1200px;
            min-width: 1024px;
            height: 528px;
            display: flex;
            justify-content: space-between;
            .commodity{
              width: 364px;
              background: #fff;
              text-align: center;
              dt{
                img{
                  width: 100%;
                  height: 306px;
                  object-fit: cover;
                }
              }
              dd{
                padding:14px 35px 20px;
                text-align: center;
                p{
                  font-size: 18px;
                  color: #333;
                  font-weight: bold;
                }
                span{
                  font-size: 18px;
                  color: #333;
                  padding-top: 35px;
                  position: relative;
                  display: block;
                  &:before {
                    position: absolute;
                    width: 38px;
                    height: 2px;
                    background: #acacac;
                    content: '';
                    bottom: -15px;
                    left: calc(50% - 7px);
                  }
                }
                button{
                  display: inline-block;
                  margin-top: 35px;
                  width: 180px;
                  height:40px;
                  box-sizing: border-box;
                  border: 1px solid #ccc;
                  line-height: 40px;
                  background: #fff;
                  cursor: pointer;
                  transition: all 0.5s;
                  &:hover{
                    background: #333;
                    color: #fff;
                  }
                }
              }
            }
          }
          .market{
            .navs{
              .navActive{
                background: #333;
                color: #fff;
              }
              span{
                cursor: pointer;
                display: inline-block;
                padding: 10px 20px;
                border: 1px solid #ccc;
                box-sizing: border-box;
                margin-right: 20px;
                transition: all 0.5s;
                &:hover{
                  background: #333;
                  color: #fff;
                }
              }
            }
            .over{
              padding: 50px;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              border-bottom: 1px solid #eaeaea;
              min-height: 100px!important;
              .load{
                margin-bottom: 20px;
                margin-left: -40px;
                display: inline-block;
              }
              img{
                text-align: center;
              }
              span{
                text-align: center;
                height: 40px;
                line-height: 40px;
                font-size: 14px;
                color: #a59f9f;
              }
            }
            .list{
              position: relative;
              padding: 80px 80px 100px;
              display: flex;
              border-bottom: 1px solid #eaeaea;
              .jts{
                transition: all 1s;
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                i{
                  width: 32px;
                  height: 53px;
                  position: absolute;
                  top: 220px;
                  cursor: pointer;
                }
                .z{
                  left: 0;
                  background: url("../assets/img/zjts.png");
                  &:hover{
                    background: url("../assets/img/hzjt.png");
                  }
                }
                .y{
                  right: 0;
                  background: url("../assets/img/yjts.png");
                  &:hover{
                    background: url("../assets/img/hyjt.png");
                  }
                }
              }
              .marckshop{
                width: 320px;
                transition:all .5s;
                cursor: pointer;
                position: relative;
                text-align: center;
                height: 404px;
                margin-right: 30px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                &:last-child{
                  margin-right: 0!important;
                }
                  .hbtn{
                    position: absolute;
                    display: none;

                  }
                  .zjt{
                    display: none;
                    position: absolute;
                    left: -7px;
                    top: 125px;
                    img{
                      object-fit: cover;
                      width: 15px;
                      height: 25px;
                    }
                  }
                  .yjt{
                    display: none;
                    position: absolute;
                    right: -7px;
                    top: 125px;
                    img{
                      object-fit: cover;
                      width: 15px;
                      height: 25px;
                    }
                  }
                &:hover{
                  .zjt,.yjt,hbtn{
                    display: block;
                  }
                  .zjt{

                  }
                  .yjt{
                  }
                  .hbtn{
                    display: block;
                    margin-top: 20px;
                    left: 50%;
                    margin-left: -70px;
                    width: 140px;
                    height:40px;
                    box-sizing: border-box;
                    border: 1px solid #ccc;
                    line-height: 40px;
                    background: #fff;
                    cursor: pointer;
                    text-align: center;
                    transition: all 0.5s;
                    &:hover{
                      background: #333;
                      color: #fff;
                    }
                  }
                }

                img{
                  width:160px;
                  height: 278px;
                  padding-bottom: 20px;
                  object-fit: cover;
                }
                p{
                  text-align: center;
                  padding-top: 10px;
                  color: #333;
                }
              }
            }
          }
        }
      }
    }
</style>
<style type="text/less" lang="less">
    .wraps{
      background: #fff;
      .center{
        .market{
          .marckshop{
            .el-carousel__container {
              height: 278px;
              overflow: hidden;
              object-fit: cover;
            }
            .el-carousel__item{
              img{
                height: 278px;
                object-fit: cover;
              }
            }
            .el-carousel__indicator{
              display: none;
            }
            .circular{
              circle{
                background: #ccc!important;
              }
            }
          }
        }
      }
    }
</style>
