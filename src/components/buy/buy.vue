<template>
  <div class="Buy">
    <Top></Top>
    <Navs :num="1"></Navs>
    <div class="mian">
      <div class="mins">
        <ul class="nav">
          <li @click="navNum = (navNum != 1)?1:0" :class="{'navActive':navNum==1}">
            品牌
            <img src="../../assets/img/buy/xjt.png" v-if="navNum!=1">
            <img src="../../assets/img/buy/close.png" v-if="navNum==1">
          </li>
          <li  @click="navNum = (navNum != 2)?2:0" :class="{'navActive':navNum==2}">
            成色
            <img src="../../assets/img/buy/xjt.png" v-if="navNum!=2">
            <img src="../../assets/img/buy/close.png" v-if="navNum==2">
          </li>
          <li @click="navNum = (navNum != 3)?3:0"  :class="{'navActive':navNum==3}">
            价格
            <img src="../../assets/img/buy/xjt.png" v-if="navNum!=3">
            <img src="../../assets/img/buy/close.png" v-if="navNum==3">
          </li>
          <li  @click="navNum = (navNum != 4)?4:0"  :class="{'navActive':navNum==4}">
            性别
            <img src="../../assets/img/buy/xjt.png" v-if="navNum!=4">
            <img src="../../assets/img/buy/close.png" v-if="navNum==4">
          </li>
          <li  @click="navNum = (navNum != 5)?5:0" :class="{'navActive':navNum==5}">
            表壳材质
            <img src="../../assets/img/buy/xjt.png" v-if="navNum!=5">
            <img src="../../assets/img/buy/close.png" v-if="navNum==5">
          </li>
          <li @click="navNum = (navNum != 6)?6:0;tab6(1);" :class="{'navActive':navNum==6}">
            更多
            <img src="../../assets/img/buy/xjt.png" v-if="navNum!=6">
            <img src="../../assets/img/buy/close.png" v-if="navNum==6">
          </li>
        </ul>
        <div class="isShowBox" v-if="navNum==1">
          <ul class="uls">
            <li v-for="item in brand"  @click="tab1(i)">
              {{i}

              <!--<div>-->
                <!--&lt;!&ndash;<p>{{item.num}}</p>&ndash;&gt;-->
                <!---->
              <!--</div>-->
              <p class="tag1" @click="tab1(i)" v-for="i in item.content">{{i}}</p>
            </li>
          </ul>
        </div>
        <div class="isShowBox sexBox padd" v-if="navNum==2">
          <div class="sex">
            <p class="tab2" @click="tab2(item.name)" v-for="item in fineness">{{item.name}}</p>
          </div>
        </div>
        <div class="isShowBox" v-if="navNum==3" style="padding: 0">
            <div class="price">
              <p>价格区间（万元）</p>
              <div>
                <input type="number" v-model="moeny1">
                <input type="number" v-model="moeny2">
                <span></span>
              </div>
            </div>
            <div class="btn">
              <button @click="tab3(1)">重置</button>
              <button @click="tab3(2)">确认</button>
            </div>
        </div>
        <div class="isShowBox sexBox" v-if="navNum==4">
            <div class="sex">
              <p class="tab2" @click="tab4(item)" v-for="item in sex">{{item}}</p>
            </div>
        </div>
        <div class="isShowBox" v-if="navNum==5">
            <ul class="quality">
             <li @click="tab5(item.name)" v-for="item in material">{{item.name}}</li>
            </ul>
        </div>
        <div class="isShowBox" v-if="navNum==6" style="padding: 0">
          <div class="left">
             <ul class="uls ul">
              <li v-for="item,i in moreList" :key="i" v-if="i==0 || i==2 || i==4">
                <div @click="change(item, i)">
                  <p>{{item.title}} <img src="../../assets/img/buy/more.png" :class="{'imgShow':item.isSel}"></p>
                </div>
                <div v-if="item.isSel">
                  <div v-if="item.type == 'checkbox'">
                    <el-checkbox-group v-model="item.model">
                      <el-checkbox v-for="el,k in item.data" :key="k" :label="el.id">{{ el.name }}</el-checkbox>
                    </el-checkbox-group>
                  </div>
                  <div v-else>
                    <el-radio-group v-model="item.model">
                      <el-radio v-for="el,k in item.data" :key="k" :label="el.id">{{ el.name }}</el-radio>
                    </el-radio-group>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="right">
             <ul class="uls ul">
              <li v-for="item,i in moreList" :key="i" v-if="i==1 || i==3">
                <div @click="change(item, i)">
                  <p>{{item.title}} <img src="../../assets/img/buy/more.png" :class="{'imgShow':item.isSel}"></p>
                </div>
                <div v-if="item.isSel">


                    <el-radio-group v-model="item.model">
                      <el-radio v-for="el,k in item.data" :key="k" :label="el.id">{{ el.name }}</el-radio>
                    </el-radio-group>
                  </div>

              </li>
            </ul>
          </div>

          <div class="btn">
            <button @click="tab6(1)" >重置</button>
            <button @click="tab6(2)" >确认</button>
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
          <input type="text" v-model="keyword" @keyup.enter="search()" placeholder="请输入关键字">
          <span class="imgs"><img src="../../assets/img/search.png" alt=""></span>
        </p>
      </div>
      <ul class="tab">
        <li v-if="value1"  @click="clear(1)">{{value1}}<i><img src="../../assets/img/buy/close.png"></i></li>
        <li v-if="value2" @click="clear(2)">{{value2}}<i><img src="../../assets/img/buy/close.png"></i></li>
        <li v-if="value3" @click="clear(3)">{{value3}}<i><img src="../../assets/img/buy/close.png"></i></li>
        <li v-if="value4" @click="clear(4)">{{value4}}<i><img src="../../assets/img/buy/close.png"></i></li>
        <li v-if="value5" @click="clear(5)">{{value5}}<i><img src="../../assets/img/buy/close.png"></i></li>
        <li v-for="item in values" @click="clear(6)">{{item}}<i><img src="../../assets/img/buy/close.png"></i></li>
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
        <el-pagination layout="prev,pager,next" :page-count="pagecount" @current-change="handlerPage"></el-pagination>
        <!--<span class="item" @click="handlerPage(pagecount)">尾页</span>-->
        <span class="item">页数  <i>{{ p }}</i> / <i>{{pagecount}}</i></span>
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
        brand:[
          {
            num:'A',
            content:[
              "的位于一个财富",
              "的位于一个财富",
              "的位于一个财富",
            ]
          },
          {
            num:'A',
            content:[
              "的位于一个财富",
              "的位于一个财富",
            ]
          },
          {
            num:'A',
            content:[
              "的位于一个财富",
            ]
          },
        ],// 品牌
        material:[
          {
            "id": 1,
            "goods_kind_id": 2,
            "name": "白金",
            "remark": "",
            "pid": 3,
            "lang": "zh-cn",
            "goods_kind_name": "手表"
          },
          {
            "id": 2,
            "goods_kind_id": 2,
            "name": "碳纤维",
            "remark": "碳纤维，黑陶瓷，钛合金",
            "pid": 5,
            "lang": "zh-cn",
            "goods_kind_name": "手表"
          },
          {
            "id": 3,
            "goods_kind_id": 2,
            "name": "精钢",
            "remark": "陶瓷，精钢",
            "pid": 6,
            "lang": "zh-cn",
            "goods_kind_name": "手表"
          },
          {
            "id": 4,
            "goods_kind_id": 2,
            "name": "钛合金",
            "remark": "钛合金，陶瓷",
            "pid": 8,
            "lang": "zh-cn",
            "goods_kind_name": "手表"
          },
          {
            "id": 5,
            "goods_kind_id": 2,
            "name": "玫瑰金",
            "remark": "18K玫瑰金,陶瓷",
            "pid": 12,
            "lang": "zh-cn",
            "goods_kind_name": "手表"
          },
          {
            "id": 6,
            "goods_kind_id": 2,
            "name": "陶瓷",
            "remark": "黑陶瓷",
            "pid": 13,
            "lang": "zh-cn",
            "goods_kind_name": "手表"
          },
          {
            "id": 7,
            "goods_kind_id": 2,
            "name": "黄金 ",
            "remark": "18K黄金 ",
            "pid": 20,
            "lang": "zh-cn",
            "goods_kind_name": "手表"
          },
          {
            "id": 8,
            "goods_kind_id": 2,
            "name": "铂金",
            "remark": "",
            "pid": 24,
            "lang": "zh-cn",
            "goods_kind_name": "手表"
          },
          {
            "id": 9,
            "goods_kind_id": 2,
            "name": "抛光蓝宝石水晶",
            "remark": "",
            "pid": 25,
            "lang": "zh-cn",
            "goods_kind_name": "手表"
          },
          {
            "id": 10,
            "goods_kind_id": 2,
            "name": "镀金",
            "remark": "",
            "pid": 26,
            "lang": "zh-cn",
            "goods_kind_name": "手表"
          },
          {
            "id": 11,
            "goods_kind_id": 2,
            "name": "钛金属",
            "remark": "",
            "pid": 27,
            "lang": "zh-cn",
            "goods_kind_name": "手表"
          },
          {
            "id": 12,
            "goods_kind_id": 2,
            "name": "锻造碳",
            "remark": "",
            "pid": 28,
            "lang": "zh-cn",
            "goods_kind_name": "手表"
          },
          {
            "id": 73,
            "goods_kind_id": 1,
            "name": "不锈钢",
            "remark": "",
            "pid": 29,
            "lang": "zh-cn",
            "goods_kind_name": "手表"
          }
        ],// 表壳材质
        fineness:[
          {
            "id": 1,
            "goods_kind_id": 1,
            "name": "99成新",
            "details": "99成新",
            "pid": 7,
            "lang": "zh-cn",
            "goods_kind_name": "手表"
          },
          {
            "id": 2,
            "goods_kind_id": 1,
            "name": "未使用",
            "details": "未使用",
            "pid": 8,
            "lang": "zh-cn",
            "goods_kind_name": "手表"
          },
          {
            "id": 3,
            "goods_kind_id": 1,
            "name": "95新",
            "details": "95新",
            "pid": 9,
            "lang": "zh-cn",
            "goods_kind_name": "手表"
          },
          {
            "id": 4,
            "goods_kind_id": 1,
            "name": "90成新",
            "details": "90成新",
            "pid": 10,
            "lang": "zh-cn",
            "goods_kind_name": "手表"
          },
          {
            "id": 5,
            "goods_kind_id": 1,
            "name": "98新",
            "details": "98新",
            "pid": 11,
            "lang": "zh-cn",
            "goods_kind_name": "手表"
          },
          {
            "id": 6,
            "goods_kind_id": 1,
            "name": "95成新",
            "details": "95成新",
            "pid": 12,
            "lang": "zh-cn",
            "goods_kind_name": "手表"
          }
        ],// 成色
        moeny1:'',//最小值
        moeny2:'',//最大值
        sex:[
          '男性',
          '女性',
          '中性'
        ],//性别
        functionss:[],// 复杂功能
        movement:[],// 机芯类型
        shape:[],// 表盘形状
        currentPage1: 5,
        p: 1,  // 当前页码
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
        values:[],
        content:[],
        pagecount:5,
        keyword: '', //  关键字

        moreList: []
      }

    },
    methods: {
      /**
       * 点击页码获取数据
       * */
      handlerPage(val) {
        if(val > 0 && val <= this.pagecount) {
          this.getList(val)
          this.p = val
        }
      },

      /**
       * 获取记录列表
       * 参数 p: 页码
       * */
      getList(p) {
        let url = ''    //  接口地址
       /* this.$http.get(url, {
          params: {
            keyword: this.keyword,
            p: p,     //  页码
            rows: 7   //  每页多少条
          }
        }).then(res => {*/
          this.content = []
          let data = []
          let rows = 7   //  每页要显示的条数
          for(let k=0; k<rows; k++) {
            data.push({
              img:require("../../assets/img/bdfl.jpg"),
              title:"标题" + Math.random() * 80,
              cont:"1",
              price:"1111",
              city_name:"bhjdswcx",
              pv:1
            })
          }

        //  this.pagecount = 1   //  总共多少页

          this.content = data
       /* }).catch(() => {
          this.content = []
          this.p = 1
          this.currentPage1 = 1
        })*/
      },
      clear(index){
        switch (index){
          case 1:
            this.value1=""
            break;
          case 2:
            this.value2=""
            break;
          case 3:
            this.value3=""
            break;
          case 4:
            this.value4=""
            break;
          case 5:
            this.value5=""
            break;
          case 6:
            // this.value5=""
            console.log(this.values)
            for(let i=0;i<this.values.length;i++){
              console.log(this.values[i])
              return this.values.splice(i,1)
            }
            break;
        }
      },
      tab1(index) {
        switch (index){
          case index:
            this.value1=index;
            this.navNum=""
            break;
        }
      },
      tab2(index) {
        switch (index){
          case index:
            this.value2=index;
            this.navNum=""
            break;
        }
      },
      tab3(index){
        switch (index){
          case 1:
            this.moeny1=""
            this.moeny2=""
            break;
          case 2:
            console.log(this.moeny1)
            this.value3=this.moeny1+"万 - "+this.moeny2+"万";
            this.navNum=""
            break;
        }
      },
      tab4(index) {
        switch (index){
          case index:
            this.value4=index;
            this.navNum=""
            break;
        }
      },
      tab5(index) {
        switch (index){
          case index:
            this.value5=index;
            this.navNum=""
            break;
        }
      },
      tab6(index) {
        let listValue=[];
        this.values="";
        switch (index){
          case 1:
//            this.value4=index;
//            this.navNum=""
            for(let i=0;i<this.moreList.length;i++){
              console.log(this.moreList[i].model)
              this.moreList[i].model=this.moreList[i].type === 'checkbox' ? [] : ''
            }
            break;
          case  2:
            for(let i=0;i<this.moreList.length;i++){
              let model = this.moreList[i].model
              let data = this.moreList[i].data

              if(this.moreList[i].type === 'checkbox') {
                for(let i=0,len=data.length; i<len;i++) {
                  for(let k in model) {
                    if(model[k] === data[i].value) {
                      listValue.push(data[i].label)
                      break;
                    }
                  }
                }
              }else {
                for(let i=0,len=data.length; i<len;i++) {
                  if(model === data[i].value) {
                    listValue.push(data[i].label)
                    break;
                  }
                }

              }
            }
            this.values=listValue;
            this.navNum=""
            break;
        }
      },
      /**
       * 关键词搜索
       * */
      search () {
        this.getList(1)
      },
      /**
       * 更多
       */
      change(item, index){
//        switch (index){
//          case index:
//            this.isSel=!this.isSel
//            break;
//        }
        item.isSel=!item.isSel
      }
    },
    created(){

    },
    mounted(){
      let self = this

      let title = ['售卖状态', '机芯类型', '表盘形状', '表盘直径', '复杂功能']
      for(let i=0; i<5; i++) {
        this.moreList.push({
          isSel: false,
          title: title[i],
          model: i === 4 ? [] : '',
          type: i === 4 ? 'checkbox' : 'radio',
          data: i === 0 ? [{label: '在售', value: 1}, {label: '已售', value: 2}] : []
        })
      }


      this.getList(1)

       setTimeout(()=>{
         let self = this;
         self.$http.get(`http://apidev.swisstimevip.com:8000/dict/v1/dict/brand?is_pc=1`).then(res=>{
              self.brand = res.data.data
              console.log(self.brand)
              console.log(res.data)
         }).catch(err=>{
               console.log(err)
         })

         // 成色
         self.$http.get(`http://apidev.swisstimevip.com:8000/dict/v1/dict/fineness`).then(res=>{
           console.log(res.data.data)
           self.fineness = res.data.data
         }).catch(err=>{
           console.log(err)
         })
       },500)
//      self.$http.get(`http://apidev.swisstimevip.com:8000/dict/v1/market/buyer/goodsList`).then(res=>{
//        self.macket = res.data.data
//        console.log(res.data)
//      }).catch(err=>{
//        console.log(err)
//      })
//// 品牌
//      self.$http.get(`http://apidev.swisstimevip.com:8000/dict/v1/dict/brand?is_pc=1`).then(res=>{
//        self.brand = res.data.data
//        console.log(self.brand)
//      }).catch(err=>{
//        console.log(err)
//      })
////表壳材质
//      self.$http.get(`http://apidev.swisstimevip.com:8000/dict/v1/dict/material`).then(res=>{
//        self.material = res.data.data
//      }).catch(err=>{
//        console.log(err)
//      })

//      //      复杂功能
//      self.$http.get(`http://apidev.swisstimevip.com:8000/dict/v1/dict/function`).then(res=>{
//        self.functionss = res.data.data
//      }).catch(err=>{
//        console.log(err)
//      })
//      //      机芯类型
//      self.$http.get(` http://apidev.swisstimevip.com:8000/dict/v1/dict/movement`).then(res=>{
//        self.movement = res.data.data
//      }).catch(err=>{
//        console.log(err)
//      })
//      //      表盘形状
//      self.$http.get(`http://apidev.swisstimevip.com:8000/dict/v1/dict/shape `).then(res=>{
//        self.shape = res.data.data
//      }).catch(err=>{
//        console.log(err)
//      })
    },
    components: {
      Top,  //头部
      Navs, //导航
      Foot  //公共底部
    },
    watch: {
      navNum (val) {
        let that = this
        if(val === 6) {
          if(that.moreList && that.moreList.length && that.moreList[1].data.length <= 0) {
            //  获取数据

            //  机芯类型
          //  that.$http.get(`http://apidev.swisstimevip.com:8000/dict/v1/dict/brand?is_pc=1`).then(res=>{
           //   if(parseInt(res.data.errcode) === 0) {
                ///  to do result

                let data = []
                for(let i=0; i<10; i++) {
                  data.push({
                    value: Math.random(),
                    label: `机芯${Math.random()}`
                  })
                }

                let cache = that.moreList[1]
                cache.data = data
                that.moreList.splice(1, 1, cache)

        //      }else {
            //    that.moreList[1].data = []
           //   }
            /*}).catch(err=>{
              console.log(err)
            })*/
          }
          if(that.moreList && that.moreList.length && that.moreList[2].data.length <= 0) {
            //  获取数据

            //  表盘形状
            //  that.$http.get(`http://apidev.swisstimevip.com:8000/dict/v1/dict/brand?is_pc=1`).then(res=>{
            //   if(parseInt(res.data.errcode) === 0) {
            ///  to do result

            let data1 = []
            data1=  [{
              "id": 1,
              "goods_kind_id": 2,
              "name": "圆形",
              "remark": "",
              "pid": 1,
              "lang": "zh-cn",
              "goods_kind_name": "手表"
            },
              {
                "id": 2,
                "goods_kind_id": 2,
                "name": "酒桶形",
                "remark": "",
                "pid": 2,
                "lang": "zh-cn",
                "goods_kind_name": "手表"
              },
              {
                "id": 3,
                "goods_kind_id": 2,
                "name": "八边形",
                "remark": "",
                "pid": 3,
                "lang": "zh-cn",
                "goods_kind_name": "手表"
              },
              {
                "id": 4,
                "goods_kind_id": 1,
                "name": "鹦鹉螺",
                "remark": "鹦鹉螺",
                "pid": 4,
                "lang": "zh-cn",
                "goods_kind_name": "手表"
              },
              {
                "id": 5,
                "goods_kind_id": 1,
                "name": "鹅蛋形",
                "remark": "鹅蛋形",
                "pid": 5,
                "lang": "zh-cn",
                "goods_kind_name": "手表"
              },
              {
                "id": 6,
                "goods_kind_id": 1,
                "name": "正方形",
                "remark": "正方形",
                "pid": 6,
                "lang": "zh-cn",
                "goods_kind_name": "手表"
              },
              {
                "id": 7,
                "goods_kind_id": 1,
                "name": "十二边形",
                "remark": "十二边形",
                "pid": 7,
                "lang": "zh-cn",
                "goods_kind_name": "手表"
              },
              {
                "id": 8,
                "goods_kind_id": 1,
                "name": "发动机形",
                "remark": "发动机形",
                "pid": 8,
                "lang": "zh-cn",
                "goods_kind_name": "手表"
              },
              {
                "id": 9,
                "goods_kind_id": 1,
                "name": "橄榄形",
                "remark": "橄榄形",
                "pid": 9,
                "lang": "zh-cn",
                "goods_kind_name": "手表"
              },
              {
                "id": 10,
                "goods_kind_id": 1,
                "name": "长方形",
                "remark": "长方形",
                "pid": 10,
                "lang": "zh-cn",
                "goods_kind_name": "手表"
              }]
//            for(let i=0; i<10; i++) {
//              data1.push({
//                value: Math.random(),
//                label: `形状${Math.random()}`
//              })
//            }

            let cache1 = that.moreList[2]
            cache1.data = data1
            that.moreList.splice(2, 1, cache1)

            //      }else {
            //    that.moreList[1].data = []
            //   }
            /*}).catch(err=>{
              console.log(err)
            })*/
          }
          if(that.moreList && that.moreList.length && that.moreList[3].data.length <= 0) {
            //  获取数据

            //  表盘直径
            //  that.$http.get(`http://apidev.swisstimevip.com:8000/dict/v1/dict/brand?is_pc=1`).then(res=>{
            //   if(parseInt(res.data.errcode) === 0) {
            ///  to do result

            let data1 = []
            for(let i=0; i<10; i++) {
              data1.push({
                value: Math.random(),
                label: `直径${Math.random()}`
              })
            }

            let cache1 = that.moreList[3]
            cache1.data = data1
            that.moreList.splice(3, 1, cache1)

            //      }else {
            //    that.moreList[1].data = []
            //   }
            /*}).catch(err=>{
              console.log(err)
            })*/
          }
          if(that.moreList && that.moreList.length && that.moreList[4].data.length <= 0) {
            //  获取数据
            //  机芯类型
            //  that.$http.get(`http://apidev.swisstimevip.com:8000/dict/v1/dict/brand?is_pc=1`).then(res=>{
            //   if(parseInt(res.data.errcode) === 0) {
            ///  to do result

            let data4 = []
            for(let i=0; i<10; i++) {
              data4.push({
                value: Math.random(),
                label: `复杂${Math.random()}`
              })
            }

            let cache4 = that.moreList[4]
            cache4.data = data4
            that.moreList.splice(4, 1, cache4)

            //      }else {
            //    that.moreList[1].data = []
            //   }
            /*}).catch(err=>{
              console.log(err)
            })*/
          }
        }
      }
    }
  }
</script>
<style lang="less" scoped type="text/less">
  .Buy{
    .mian{
      max-width: 1200px;
      min-width: 1000px;
      padding: 40px 0 60px;
      margin: 0 auto;
      box-sizing: border-box;
      .nav{
        text-align: center;
        border: 1px solid #ccc;
        height: 45px;
        display: flex;
        margin-bottom: 20px;
        position: relative;
        li{
          /*border-right: 1px solid #ccc;*/
          cursor: pointer;
          flex: 1;
          height: 45px;
          line-height: 45px;
          border-right: none;
          text-align: center;
          color: #666;
          font-size: 16px;
          background: #f1f1f1;
          transition: all .4s;
          position: relative;
          &:before{
            content: '';
            width: 1px;
            height: 45px;
            background: #ccc;
            position: absolute;
            right: 0;
            top: 0;
          }
          &:last-child{
            &:before{
              content: '';
              width: 0;
              height: 0;
            }
          }
          /*&:last-child{*/
            /*border-right: 1px solid #ccc;*/
          /*}*/
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
            padding-bottom: 10px;
            .tag1{
              cursor: pointer;
            }
            li{
              width: 20%;
              padding-right: 40px;
              box-sizing: border-box;
              p{
                cursor: pointer;
                padding-left: 20px;
                border-bottom: 1px solid #e6e6e6;
                line-height: 50px;
                &:first-child{
                  /*border-bottom: 1px solid #ccc;*/
                  /*color: #333;*/
                  /*font-weight: bold;*/
                  /*&:hover{*/
                    /*background: none;*/
                  /*}*/
                }
                &:hover{
                  background: #fafafa;
                  font-weight: bold;
                }
              }
            }
          }
          .left{
            float: left;
            width: 50%
          }
          .right{
            float: right;
            width: 50%
          }
          .ul{
            display: block;
            padding: 0 40px;
            li{
              width: 100%;
              height: auto;
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
            clear: both;
            text-align: right;
            border-top: 1px solid #ccc;
            margin-top: 40px;
            padding-top: 20px;
            padding-bottom: 15px;
            button{
              cursor: pointer;
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
            padding-bottom: 10px;
            li{
              cursor: pointer;
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
          position: relative;
          input{
            width: 227px;
            height: 37px;
            border: #ccc solid 1px;
            padding: 0 30px 0 10px;
            box-sizing: border-box;
          }
          .imgs{
            position: absolute;
            right: 5px;
            top: 10px;
          }
        }
      }
      .tab{
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        flex-wrap: wrap;
        li{
          cursor: pointer;
          margin-bottom: 20px;
          display: flex;
          justify-content: space-between;
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
          i{
            padding-left: 10px;
          }
        }
      }
      .content{
        padding-bottom: 40px;
        border-bottom: 2px solid #e9e9e9;
        ul{
          display: flex;
          flex-wrap: wrap;
          li{
            width: 32%;
            max-width: 386px;
            max-height: 533px;
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
          background: none;
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
    .el-radio-group{
      width: 100%;
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
    .el-checkbox{
      width: 49%;
      margin-left: 0;
      padding-bottom: 18px;
      .el-checkbox__inner{
        background: #fff;
        &:after{
          border-color: #333;
        }
      }
    }
  }

</style>
