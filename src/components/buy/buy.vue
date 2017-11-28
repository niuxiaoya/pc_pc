<template>
  <div class="Buy">
    <Top></Top>
    <Navs :num="1"></Navs>
    <div class="mian">
      <!--<div class="nav">-->
        <!--<el-select v-model="value1" placeholder="品牌">-->
          <!--<el-option-->
            <!--v-for="item in brand"-->
            <!--:key="item.id"-->
            <!--:label="item.name"-->
            <!--:value="item.name"-->
            <!--:disabled="item.disabled">-->
          <!--</el-option>-->
        <!--</el-select>-->
        <!--<el-select v-model="value2" placeholder="成色">-->
          <!--<el-option-->
            <!--v-for="item in fineness"-->
            <!--:key="item.id"-->
            <!--:label="item.name"-->
            <!--:value="item.name"-->
            <!--:disabled="item.disabled">-->
          <!--</el-option>-->
        <!--</el-select>-->
        <!--<el-select v-model="value2" placeholder="价格">-->
          <!--<el-option-->
            <!--v-for="item in fineness"-->
            <!--:key="item.id"-->
            <!--:label="item.name"-->
            <!--:value="item.name"-->
            <!--:disabled="item.disabled">-->
          <!--</el-option>-->
        <!--</el-select>-->
        <!--<el-select v-model="value2" placeholder="性格">-->
          <!--<el-option-->
            <!--v-for="item in fineness"-->
            <!--:key="item.id"-->
            <!--:label="item.name"-->
            <!--:value="item.name"-->
            <!--:disabled="item.disabled">-->
          <!--</el-option>-->
        <!--</el-select>-->
        <!--<el-select v-model="value2" placeholder="表壳材质">-->
          <!--<el-option-->
            <!--v-for="item in fineness"-->
            <!--:key="item.id"-->
            <!--:label="item.name"-->
            <!--:value="item.name"-->
            <!--:disabled="item.disabled">-->
          <!--</el-option>-->
        <!--</el-select>-->
        <!--<el-select v-model="value2" placeholder="更多">-->
          <!--&lt;!&ndash;<el-option&ndash;&gt;-->
            <!--&lt;!&ndash;v-for="item in fineness"&ndash;&gt;-->
            <!--&lt;!&ndash;:key="item.id"&ndash;&gt;-->
            <!--&lt;!&ndash;:label="item.name"&ndash;&gt;-->
            <!--&lt;!&ndash;:value="item.name"&ndash;&gt;-->
            <!--&lt;!&ndash;:disabled="item.disabled">&ndash;&gt;-->
          <!--&lt;!&ndash;</el-option>&ndash;&gt;-->
        <!--</el-select>-->
      <!--</div>-->
      <div class="nav">
        <el-select v-model="value1" placeholder="价格升序">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.label"
            :disabled="item.disabled">
          </el-option>
        </el-select>
        <el-select v-model="value2" placeholder="价格升序">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.label"
            :disabled="item.disabled">
          </el-option>
        </el-select>
        <el-select v-model="value3" placeholder="价格升序">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.label"
          :disabled="item.disabled">
        </el-option>
      </el-select>
        <el-select v-model="value4" placeholder="价格升序">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.label"
            :disabled="item.disabled">
          </el-option>
        </el-select>
        <el-select v-model="value5" placeholder="价格升序">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.label"
            :disabled="item.disabled">
          </el-option>
        </el-select>
        <el-select v-model="value2" placeholder="价格升序">
          <!--<el-option-->
            <!--v-for="item in options2"-->
            <!--:key="item.value"-->
            <!--:label="item.label"-->
            <!--:value="item.value"-->
            <!--:disabled="item.disabled">-->
          <!--</el-option>-->
        </el-select>

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
      <ul class="tab">
        <li v-if="value1">{{value1}}<i><img src="../../assets/img/buy/close.png"></i></li>
        <li v-if="value2">{{value1}}<i><img src="../../assets/img/buy/close.png"></i></li>
        <li v-if="value3">{{value1}}<i><img src="../../assets/img/buy/close.png"></i></li>
        <li v-if="value4">{{value1}}<i><img src="../../assets/img/buy/close.png"></i></li>
        <li v-if="value5">{{value1}}<i><img src="../../assets/img/buy/close.png"></i></li>
        <li v-if="value6">{{value1}}<i><img src="../../assets/img/buy/close.png"></i></li>
      </ul>
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
        border-right: 1px solid #ccc;
        display: flex;
        margin-bottom: 20px;
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
    .nav{
      .el-select{
        flex: 1;
        .el-input__inner{
          height: 45px;
          border-radius: 0;
          border-right: none;
          text-align: center;
          color: #666;
          font-size: 16px;
        }
        .el-input__icon {
          right:50px;
        }
      }
    }
    .selet{
      .el-input__inner{
        height: 30px;
        width: 145px;
        border-radius: 0;
        color: #666;
        font-size: 16px;
      }
    }
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
  }
</style>
