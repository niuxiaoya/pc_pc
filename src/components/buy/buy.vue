<template>
  <div class="Buy">
    <Top></Top>
    <Navs :num="1"></Navs>
    <div class="mian">
      <div class="mins">
        <ul class="nav">
          <li @click="navNum = 1" :class="{'navActive':navNum==1}">
            品牌
            <img src="../../assets/img/buy/xjt.png" v-if="navNum!=1">
            <img src="../../assets/img/buy/close.png" v-if="navNum==1">
          </li>
          <li @click="navNum = 2" :class="{'navActive':navNum==2}">
            成色
            <img src="../../assets/img/buy/xjt.png" v-if="navNum!=2">
            <img src="../../assets/img/buy/close.png" v-if="navNum==2">
          </li>
          <li @click="navNum = 3" :class="{'navActive':navNum==3}">
            价格
            <img src="../../assets/img/buy/xjt.png" v-if="navNum!=3">
            <img src="../../assets/img/buy/close.png" v-if="navNum==3">
          </li>
          <li @click="navNum = 4" :class="{'navActive':navNum==4}">
            性别
            <img src="../../assets/img/buy/xjt.png" v-if="navNum!=4">
            <img src="../../assets/img/buy/close.png" v-if="navNum==4">
          </li>
          <li @click="navNum = 5" :class="{'navActive':navNum==5}">
            表壳材质
            <img src="../../assets/img/buy/xjt.png" v-if="navNum!=5">
            <img src="../../assets/img/buy/close.png" v-if="navNum==5">
          </li>
          <li @click="navNum = 6" :class="{'navActive':navNum==6}">
            更多
            <img src="../../assets/img/buy/xjt.png" v-if="navNum!=6">
            <img src="../../assets/img/buy/close.png" v-if="navNum==6">
          </li>
        </ul>
        <div class="isShowBox" v-if="navNum==1">
          <ul class="uls">
            <li>
              <div>
                <p>a</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
              </div>
            </li>
            <li>
              <div>
                <p>b</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
              </div>
            </li>
            <li>
              <div>
                <p>c</p>
                <p>1</p>
              </div>
            </li>
            <li>
              <div>
                <p>d</p>
                <p>1</p>
                <p>1</p>
              </div>
            </li>
            <li>
              <div>
                <p>e</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
              </div>
            </li>
            <li>
              <div>
                <p>f</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
              </div>
            </li>
            <li>
              <div>
                <p>d</p>
                <p>1</p>
                <p>1</p>
              </div>
            </li>
            <li>
              <div>
                <p>e</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
              </div>
            </li>
            <li>
              <div>
                <p>f</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
              </div>
            </li>
            <li>
              <div>
                <p>d</p>
                <p>1</p>
                <p>1</p>
              </div>
            </li>
            <li>
              <div>
                <p>e</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
              </div>
            </li>
            <li>
              <div>
                <p>f</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="isShowBox sexBox padd" v-if="navNum==2">
          <div class="sex">
            <p>男士</p>
            <p>女士</p>
            <p>中性</p>
          </div>
        </div>
        <div class="isShowBox" v-if="navNum==3" style="padding: 0">
            <div class="price">
              <p>价格区间（万元）</p>
              <div>
                <input type="text">
                <input type="text">
                <span></span>
              </div>
            </div>
            <div class="btn">
              <button>重置</button>
              <button>确认</button>
            </div>
        </div>
        <div class="isShowBox sexBox" v-if="navNum==4">
            <div class="sex">
              <p>男士</p>
              <p>女士</p>
              <p>中性</p>
            </div>
        </div>
        <div class="isShowBox" v-if="navNum==5">
            <ul class="quality">
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
            </ul>
        </div>
        <div class="isShowBox" v-if="navNum==6" style="padding: 0">
          <ul class="uls ul">
            <li>
              <div  @click="isSel0=!isSel0">
                <p>d <img src="../../assets/img/buy/more.png" :class="{'imgShow':isSel0}"></p>
              </div>
              <div v-if="isSel0">
                111
              </div>
            </li>
            <li>
              <div  @click="isSel1=!isSel1">
                <p>d <img src="../../assets/img/buy/more.png" :class="{'imgShow':isSel1}"></p>
              </div>
              <div v-if="isSel1">
                111
              </div>
            </li>
            <li>
              <div  @click="isSel2=!isSel2">
                <p>d <img src="../../assets/img/buy/more.png" :class="{'imgShow':isSel2}"></p>
              </div>
              <div v-if="isSel2">
                111
              </div>
            </li>
            <li>
              <div  @click="isSel3=!isSel3">
                <p>d <img src="../../assets/img/buy/more.png" :class="{'imgShow':isSel3}"></p>
              </div>
              <div v-if="isSel3">
                111
              </div>
            </li>
            <li>
              <div  @click="isSel4=!isSel4">
                <p>d <img src="../../assets/img/buy/more.png" :class="{'imgShow':isSel4}"></p>
              </div>
              <div v-if="isSel4">
                111
              </div>
            </li>
          </ul>
          <div class="btn">
            <button>重置</button>
            <button>确认</button>
          </div>
        </div>
      </div>


      <div class="selet">
        <p>
          <span>筛选</span>
          <el-select v-model="value2" placeholder="价格升序">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled">
            </el-option>
          </el-select>
        </p>
        <p class="sel">
          <input type="text" placeholder="请输入关键字">
        </p>
      </div>
      <div class="content">
        <ul>
           <li v-for="item in content">
            <dl>
              <dt>
              <img :src="item.img">
              </dt>
              <dd>
                <p>{{item.title}}</p>
                <p>{{item.cont}}</p>
                <p>{{item.price}}</p>
                <p>
                <span>{{item.city_name}}</span>
                <span>{{item.pv}}次浏览量</span>
                 </p>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
      <div class="page">
        <!--<span class="item" @click="handlerPage(1)">首页</span>-->
        <!--<el-pagination layout="prev,pager,next" :page-count="pagecount" @current-change="handlerPage"></el-pagination>-->
        <!--<span class="item" @click="handlerPage(pagecount)">尾页</span>-->
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
        navNum:"",
        isSel:false,
        isSel1:false,
        isSel0:false,
        isSel2:false,
        isSel3:false,
        isSel4:false,
        show2:false,
        show3: false,
        radio1:1,
        macket:[],//所有
        brand:[],// 品牌
        material:[],// 表壳材质
        fineness:[],// 成色
        functionss:[],// 复杂功能
        movement:[],// 机芯类型
        shape:[],// 表盘形状
        currentPage1: 5,
        options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
//          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value1:"",
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        content:[
          {
            img:require("../../assets/img/bdfl.jpg"),
            title:"标题",
            cont:"1",
            price:"1111",
            city_name:"bhjdswcx",
            pv:1,
          }
        ]
      }

    },
    methods: {
      /**
       * 点击页码获取数据
       * */
//      handlerPage(val) {
//        if(val > 0 && val <= this.pagecount) {
//          this.getList(val)
//        }
//      },

//      /**
//       * 获取记录列表
//       * 参数 p: 页码
//       * */
//      getList(p) {
//        let data = []
//        let rows = 7   //  每页要显示的条数
//        for(let k=0; k<rows; k++) {
//          data.push({
//            time: '2017-10-25 14:38:13',
//            ip: '666666',
//            // address: `登录${p}`,
//            money:'BTC',
//            procedure:'0,3324',
//            sum:'12.000',
//            newmoney:0.0005,
//            remack:`666666${p}`
//          })
//        }
//
//        this.list = data
//      },
    },
    mounted(){
      let self = this
      self.$http.get(`http://apidev.swisstimevip.com:8000/dict/v1/market/buyer/goodsList`).then(res=>{
        self.macket = res.data.data
        console.log(res.data)
      }).catch(err=>{
        console.log(err)
      })
// 品牌
      self.$http.get(`http://apidev.swisstimevip.com:8000/dict/v1/dict/brand?is_pc=1`).then(res=>{
        self.brand = res.data.data
        console.log(self.brand)
      }).catch(err=>{
        console.log(err)
      })
//表壳材质
      self.$http.get(`http://apidev.swisstimevip.com:8000/dict/v1/dict/material`).then(res=>{
        self.material = res.data.data
      }).catch(err=>{
        console.log(err)
      })
// 成色
      self.$http.get(`http://apidev.swisstimevip.com:8000/dict/v1/dict/fineness`).then(res=>{
        self.fineness = res.data.data
      }).catch(err=>{
        console.log(err)
      })
      //      复杂功能
      self.$http.get(`http://apidev.swisstimevip.com:8000/dict/v1/dict/function`).then(res=>{
        self.functionss = res.data.data
      }).catch(err=>{
        console.log(err)
      })
      //      机芯类型
      self.$http.get(` http://apidev.swisstimevip.com:8000/dict/v1/dict/movement`).then(res=>{
        self.movement = res.data.data
      }).catch(err=>{
        console.log(err)
      })
      //      表盘形状
      self.$http.get(`http://apidev.swisstimevip.com:8000/dict/v1/dict/shape `).then(res=>{
        self.shape = res.data.data
      }).catch(err=>{
        console.log(err)
      })
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
      width: 1200px;
      min-width: 1024px;
      padding: 40px 0 60px;
      margin: 0 auto;
      .nav{
        text-align: center;
        height: 45px;
        display: flex;
        margin-bottom: 20px;
        position: relative;
        li{
          cursor: pointer;
          flex: 1;
          height: 45px;
          border: 1px solid #ccc;
          line-height: 45px;
          border-right: none;
          text-align: center;
          color: #666;
          font-size: 16px;
          background: #f1f1f1;
          transition: all .4s;
          &:last-child{
            border-right: 1px solid #ccc;
          }
          /*&:hover{*/
            /*background: #333;*/
            /*color: #fff;*/
          /*}*/
        }
        .navActive{
          background: #333;
          color: #fff;
        }
      }
      .mins{
        position: relative;
        .isShowBox{
          position: absolute;
          left: 0;
          right: 0;
          top: 47px;
          background: #fff;
          border: 2px solid #ccc;
          box-sizing: border-box;
          padding: 0 40px;
          padding-right: 0;
          z-index: 100;
          height: auto;
          border-top: none;
          &:first-child{
            padding-bottom: 46px;
          }
          .uls{
            display: flex;
            flex-wrap: wrap;
            li{
              width: 20%;
              padding-right: 40px;
              box-sizing: border-box;
              p{
                padding-left: 20px;
                border-bottom: 1px solid #e6e6e6;
                line-height: 50px;
                &:first-child{
                  border-bottom: 1px solid #ccc;
                  color: #333;
                  font-weight: bold;
                  &:hover{
                    background: none;
                  }
                }
                &:hover{
                  background: #fafafa;
                  font-weight: bold;
                }
              }
            }
          }
          .ul{
            padding: 0 40px;
            li{
              width: 48.2%;
              border-bottom: 1px solid #ccc;
              padding-left: 20px;
              padding-right: 0;
              &:nth-child(2n-1){
                margin-right: 40px;
              }
              p{
                border: none!important;
                transition: all .4s;
                padding-left: 0;
                img{
                  float: right;
                  margin-top: 20px;
                  &.imgShow{
                    transform: rotate(135deg);
                  }
                }
              }
            }
          }
          .price{
            padding-top: 40px;
            width: 512px;
            margin: 0 auto;
            p{
              font-size: 16px;
              color: #666;

            }
            div{
              padding-top: 20px;
              display: flex;
              justify-content: space-between;
              position: relative;
              width: 512px;
              height: 52px;
              input{
                border: 1px solid #ccc;
                width: 160px;
                height: 52px;
                padding:  0 10px;
                box-sizing: border-box;
              }
              span{
                position: absolute;
                display: block;
                left: 180px;
                top: 40px;
                width: 150px;
                height: 1px;
                color: #ccc;
                border-bottom: 1px solid #ccc;
              }
            }

          }
          .btn{
            text-align: right;
            border-top: 1px solid #ccc;
            margin-top: 40px;
            padding-top: 20px;
            padding-bottom: 15px;
            button{
              box-sizing: border-box;
              display: inline-block;
              width: 160px;
              height: 46px;
              border: 1px solid #ccc;
              color: #999;
              font-size: 16px;
              background: none;
              transition: all .4s;
              &:first-child{
                margin-right: 20px;
              }
              &:last-child{
                margin-right: 40px;
              }
              &:hover{
                background: #333;
                color: #ebebeb;
              }
            }
          }
          .quality{
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            padding-bottom: 2px;
            li{
              width: 16.5%;
              height: 48px;
              line-height: 48px;
              padding-left: 20px;
              border-bottom: 1px solid #ccc;
              margin-right: 40px;
              box-sizing: border-box;
              color: #666;
              font-size: 16px;
              &:hover{
                background: #fafafa;
                color: #333;
                font-weight: bold;
              }
            }
          }
        }
        .sexBox{
          width: 16.7%;
          height: auto;
          left:50%;
          padding-left: 0;
          .sex{
            display: flex;
            flex-direction: column;
            p{
              height: 50px;
              border-bottom: 1px solid #e6e6e6;
              text-align: center;
              line-height: 50px;
              box-sizing: border-box;
              color: #666;
              cursor: pointer;
              &:last-child{
                border-bottom: none;
              }
              &:hover{
                color: #000;
                font-weight: bold;
              }
            }
          }
        }
        .padd{
          left:16.7%
        }
      }
      .selet{
        padding-bottom: 20px;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        justify-content: space-between;
        p{
          span{
            font-size: 16px;
            color: #666;
            padding-right: 10px;
          }
        }
        .sel{
          input{
            width: 227px;
            height: 37px;
            border: #ccc solid 1px;
            padding: 0 30px 0 10px;
            box-sizing: border-box;
          }
        }
      }
      .tab{
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        li{
          width: 132px;
          height: 30px;
          background: #999;
          color: #ebebeb;
          font-size: 16px;
          line-height: 30px;
          box-sizing: border-box;
          padding: 0 10px;
          margin-right: 20px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
      }
      .content{
        padding-bottom: 40px;
        border-bottom: 2px solid #e9e9e9;
        ul{
          display: flex;
          flex-wrap: wrap;
          li{
            width: 386px;
            height: 533px;
            background: #fff;
            margin-right: 20px;
            box-sizing: border-box;
            margin-bottom: 20px;
            padding: 10px 10px 20px;
            cursor: pointer;
            &:nth-child(3n){
              margin-right: 0;
            }
            &:hover{
              /*border: 2px solid #ccc;*/
            }
            dl{
              dt{
                width: 100%;
                height: 376px;
                text-align: center;
                padding-bottom: 10px;
                box-sizing: border-box;
                border-bottom: 1px solid #e6e6e6;
                img{
                  max-width: 320px;
                  height: 100%;
                }
              }
              dd{
                p{
                  color: #333;
                  padding-top: 10px;
                  &:nth-child(1){
                    font-weight: bold;
                  }
                  &:nth-child(3){
                    font-size: 18px;
                  }
                  &:nth-child(4){
                    color: #999;
                    display: flex;
                    justify-content: space-between;
                    span{

                    }
                  }
                }
              }
            }
          }
        }
      }
      .page{
        display: flex;
        border-bottom: 1px solid #e9e9e9;
        padding: 20px 0;
        justify-content: flex-end;

      }
    }
  }
</style>
<style type="text/less" lang="less">
  .Buy{
    .page{
      .item{
        font-size: 16px;
        color: #666;
        height: 16px;
        line-height: 30px;
        cursor: pointer;
      }
      .el-pagination{
        .btn-prev,.btn-next{
          border: none!important;
        }
        .el-pager{
          .number,.btn-quicknext,.btn-quickprev{
            border: none;
            font-size: 16px;
            color: #666;
          }
          .active{
            color: #333;
            background: none;
            border: 1px solid #333;
          }
        }
      }
    }
    .el-radio{
      width: 48%;
      padding-bottom: 18px;
      margin-left: 0;
      .is-checked{
        .el-radio__inner{
          background: none;
          border: 1px solid #000;
          &:after{
            background: #000!important;
          }
        }
      }
    }
  }

</style>
