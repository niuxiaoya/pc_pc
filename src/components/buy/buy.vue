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
            <li v-for="item in brand"  @click="tab1(item)">
              <p class="tag1" @click="tab1(item)" >{{item.name}}</p>
            </li>
          </ul>
        </div>
        <div class="isShowBox sexBox padd" v-if="navNum==2">
          <div class="sex">
            <p class="tab2" @click="tab2(item)" v-for="item in fineness">{{item.name}}</p>
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
              <p class="tab2" @click="tab4(item)" v-for="item in sex">{{item.name}}</p>
            </div>
        </div>
        <div class="isShowBox" v-if="navNum==5">
            <ul class="quality">
             <li @click="tab5(item)" v-for="item in material">{{item.name}}</li>
            </ul>
        </div>
        <div class="isShowBox" v-if="navNum==6" style="padding: 0">
          <div class="left">
             <ul class="uls ul">
              <li v-for="item,i in moreList" :key="i" v-if="i==0 || i==2">
                <div @click="change(item, i)">
                  <p>{{item.title}} <img src="../../assets/img/buy/more.png" :class="{'imgShow':item.isSel}"></p>
                </div>
                <div v-if="item.isSel">
                    <el-radio-group v-model="item.model">
                      <el-radio v-for="el,k in item.data" :key="k" :label="el.id">{{ el.name }}</el-radio>
                    </el-radio-group>
                </div>
              </li>
               <li v-for="item,i in moreList" :key="i" v-if="i==4">
                 <div @click="change(item, i)">
                   <p>{{item.title}} <img src="../../assets/img/buy/more.png" :class="{'imgShow':item.isSel}"></p>
                 </div>
                 <div v-if="item.isSel">
                   <div v-if="item.type == 'checkbox'">
                     <el-checkbox-group v-model="item.model">
                       <el-checkbox v-for="el,k in item.data" :key="k" :label="el.manage.id">{{ el.manage.name }}</el-checkbox>
                     </el-checkbox-group>
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
          <ul class="priceSel">
            <li @click="navNum = (navNum != 7)?7:0" :class="{'navActive':navNum==6}">
              品牌
              <img src="../../assets/img/buy/xjt.png" v-if="navNum!=6">
              <img src="../../assets/img/buy/close.png" v-if="navNum==6">
            </li>
          </ul>
        </p>
        <p class="sel">
          <input type="text" v-model="keyword" @keyup.enter="search()" placeholder="请输入关键字">
          <span class="imgs"><img src="../../assets/img/search.png" alt=""></span>
        </p>
        <div class="seNews" v-if="navNum==7">
          <div class="sex">
            <p  @click="tab7(item)" v-for="item in contentNews">{{item}}</p>
          </div>
        </div>
      </div>
      <ul class="tab">
        <li v-if="value1"  @click="clear(1)">{{value1.name}}<i><img src="../../assets/img/buy/close.png"></i></li>
        <li v-if="value2" @click="clear(2)">{{value2.name}}<i><img src="../../assets/img/buy/close.png"></i></li>
        <li v-if="value3" @click="clear(3)">{{value3}}<i><img src="../../assets/img/buy/close.png"></i></li>
        <li v-if="value4" @click="clear(4)">{{value4.name}}<i><img src="../../assets/img/buy/close.png"></i></li>
        <li v-if="value5" @click="clear(5)">{{value5.name}}<i><img src="../../assets/img/buy/close.png"></i></li>
        <li v-if="value6" @click="clear(7)">{{value6}}<i><img src="../../assets/img/buy/close.png"></i></li>
      </ul>
      <ul class="tab">
        <li v-for="(item,key) in values" @click="clears(item,key)">{{item}}<i><img src="../../assets/img/buy/close.png"></i></li>
      </ul>
      <div class="content">
        <ul>
           <li v-for="item in content" >
             <!--@click="openDetail(item)"-->
            <dl>
              <dt>
              <img :src="item.cover_pic">
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
        brand:[],// 品牌
        material:[],// 表壳材质
        fineness:[],// 成色
        moeny1:'',//最小值
        moeny2:'',//最大值
        sex:[
          {
            pid:1,
            name: '男性',
          },
          {
            pid:2,
            name: '女性',
          },
          {
            pid:3,
            name: '中性',
          },
        ],//性别
        functionss:[],// 复杂功能
        movement:[],// 机芯类型
        shape:[],// 表盘形状
        contentNews:[
          "最新",
          "人气",
          "价格升序",
          "价格降序",
        ],
        currentPage1: 5,
        p: 1,  // 当前页码
        value1:"",
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        exchange_status:'',//已售
        values:[],
        content:[],
        pagecount:0,
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
        let self=this
//        order=vgfvcgf=&diameter_l=""&diameter_h=""}&
//    price_l=${self.money1 || 0}&price_h=${self.money2 || -1}&material_id=""&shape_id=""&function_id=""&fineness_id=""&gender=""&movement_id=""&p=""&rows=10
        let url = `${process.env.API.MARKET}/market/buyer/goodsList`    //  接口地址
//          ?title=${self.keyword}&brand_id=${self.value1}&fineness_id=${self.value2}&price_l=${self.money1 || 0}&price_h=${self.money2 || -1}&gender=${self.value4}
        console.log(self.value2)
        this.$http.get(url, {
          params: {
            p: p,     //  页码
            rows: 12,   //  每页多少条
            title:self.keyword, //关键字
            brand_id:self.value1.pid,// 品牌
            price_l:self.money1,
            price_h:self.money2?self.money2:-1,
            fineness_id: self.value2.pid,  //成色
            gender: self.value4.pid,   //性别
            material_id: self.value5.pid,   //表壳材质
//            exchange_status: self.values
          }
        }).then(res => {
          this.content = []
//          let data = []
//          let rows = 7   //  每页要显示的条数
//          for(let k=0; k<rows; k++) {
//            data.push({
//              img:require("../../assets/img/bdfl.jpg"),
//              title:"标题" + Math.random() * 80,
//              cont:"1",
//              price:"1111",
//              city_name:"bhjdswcx",
//              pv:1
//            })
//          }
          this.pagecount = res.data.page.total_pages  //  总共多少页
          this.content = res.data.data
        }).catch(() => {
          this.content = []
          this.p = 1
          this.currentPage1 = 1
        })
      },
      clear(index,k){
        this.getList(1)
        switch (index){
          case 1:
            this.value1=""
            break;
            this.getList(1)
          case 2:
            this.value2=""
            break;
            this.getList(1)
          case 3:
            this.value3=""
            break;
            this.getList(1)
          case 4:
            this.value4=""
            break;
            this.getList(1)
          case 5:
            this.value5=""
            break;
            this.getList(1)
          case 7:
            this.value6=""
            break;
            this.getList(1)
        }
      },
      clears(item,key){
        // this.value5=""
//            console.log(this.values)
        for(let i=0;i<this.values.length;i++){
          return this.values.splice(i,1)
//          if(this.values[0]){
//            this.exchange_status=k
//            conosle.log(k)
//          }
        }

        console.log(1,this.values)
        console.log(1)
        this.getList(1)
      },
      tab1(index) {
        switch (index){
          case index:
            this.value1=index;
            this.navNum=""
            break;
        }
        this.getList(1)
      },
      tab2(index) {
        switch (index){
          case index:
            this.value2=index;
            this.navNum=""
            break;
        }
        this.getList(1)
      },
      tab3(index){
        switch (index){
          case 1:
            this.moeny1=""
            this.moeny2=""
            break;
          case 2:
            this.getList(1)
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
        this.getList(1)
      },
      tab5(index) {
        switch (index){
          case index:
            this.value5=index;
            this.navNum=""
            break;
        }
        this.getList(1)
      },
      tab6(index) {
        let listValue=[];
        this.values="";
        switch (index){
          case 1:
//            this.value4=index;
//            this.navNum=""
            for(let i=0;i<this.moreList.length;i++){
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
                    if(model[k] === data[i].id) {
                      listValue.push(data[i].name)
                      break;
                    }
                  }
                }
              }else {
                for(let i=0,len=data.length; i<len;i++) {
                  if(model === data[i].id) {
                    console.log(data[0])
                    listValue.push(data[i])
                    break;
                  }
                }

              }
            }
            this.values=listValue;
            this.navNum=""
            break;
        }
        this.getList(1)
      },
      tab7(index) {
        switch (index){
          case index:
            this.value6=index;
            this.navNum=""
            break;
        }
        this.getList(1)
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
      },
      /**
       * 跳转详情页
       */
      openDetail(item) {
        this.$router.push(`/buy/detail?id=${item.gid}`)
      },
    },
    created(){
    },
    mounted() {
      let self = this

      let title = ['售卖状态', '机芯类型', '表盘形状', '表盘直径', '复杂功能']
      for (let i = 0; i < 5; i++) {
        this.moreList.push({
          isSel: false,
          title: title[i],
          model: i === 4 ? [] : '',
          type: i === 4 ? 'checkbox' : 'radio',
          data: i === 0 ? [{id: "sale", name: '在售'}, {id: "sold" , name:'已售' }] : [],
          data: i === 3 ? [{id: "sale", name: '在售'}, {id: "sold" , name:'已售' }] : [],
        })
      }


      this.getList(1)

      setTimeout(() => {
        let self = this;
        //        全部请求
//        self.$http.get(`${process.env.API.MARKET}/market/buyer/goodsList`).then(res=>{
//        //                                        ${process.env.API.MARKET}/market/buyer/goodsList
//          self.content = res.data.data
//          console.log(res.data.data)
//        }).catch(err=>{
//          console.log(err)
//        })
        // 成色
        self.$http.get(`http://apidev.swisstimevip.com:8000/dict/v1/dict/fineness`).then(res => {
        //          console.log(res.data.data)
          self.fineness = res.data.data
        }).catch(err => {
          console.log(err)
        })
        // 品牌
        self.$http.get(`http://apidev.swisstimevip.com:8000/dict/v1/dict/brand?is_pc=1`).then(res=>{
          self.brand = res.data.data
          let arr = []
          for (let value in self.brand) {
            arr[value]={
              name:self.brand[value].name,
              pid:self.brand[value].id
            }
            arr = arr.concat(self.brand[value].name)
          }
          self.brand = arr
        }).catch(err=>{
          console.log(err)
        })
      //表壳材质
        self.$http.get(`http://apidev.swisstimevip.com:8000/dict/v1/dict/material`).then(res=>{
          self.material = res.data.data
        }).catch(err=>{
          console.log(err)
        })

        //      复杂功能
        self.$http.get(`http://apidev.swisstimevip.com:8000/dict/v1/dict/function`).then(res=>{
          self.functionss = res.data.data
          console.log( res.data.data)
        }).catch(err=>{
          console.log(err)
        })
      }, 500)
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
          let getData = (obj) => {
            if(obj.list && obj.list.data.length <= 0) {
              obj.list.data = []
                that.$http.get(obj.url).then(res=>{
                 if(parseInt(res.data.errcode) === 0) {
              ///  to do result
                  let data = []
                 obj.list.data = res.data.data
                   console.log(res.data.data)
                 }else {
                  obj.data = []
                 }
                  }).catch(err=>{
                    console.log(err)
                  })
            }
          }

          /**
           * 机芯类型
           */
          that.movement=getData({
            list: that.moreList[1],
            url: `http://apidev.swisstimevip.com:8000/dict/v1/dict/movement`
          })
          /**
           * 表盘形状
           */
          getData({
            list: that.moreList[2],
            url: `http://apidev.swisstimevip.com:8000/dict/v1/dict/shape`
          })
          /**
           * 表盘直径
           */
          // getData({
          //   list: that.moreList[3],
          //   url: `http://apidev.swisstimevip.com:8000/dict/v1/dict/brand?is_pc=1`
          // })
          /**
           * 复杂功能
           */
          getData({
            list: that.moreList[4],
            url: `http://apidev.swisstimevip.com:8000/dict/v1/dict/function`
          })

        }
      }

    }
  }
</script>
<style lang="less" scoped type="text/less">
  .Buy{
    .mian{
      box-sizing:border-box;
      max-width: 1200px;
      min-width: 1000px;
      padding: 40px 10px 60px;
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
              width: 16%;
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
        position: relative;
        padding-bottom: 20px;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        justify-content: space-between;
        .seNews{
          width:145px;
          transition: all .4s;
          position: absolute;
          top: 30px;
          left: 42px;
          background:#f1f1f1;
          border: 2px solid #ccc;
          box-sizing: border-box;
          border-top:none;
          p{
            cursor: pointer;
            line-height: 28px;
             padding-left:10px;
            box-sizing: border-box;
            color: #666;
            width:143px;
            &:hover{
              background: #333;
              color: #ebebeb;
            }
          }
        }
        p{
          cursor: pointer;
          display: flex;
            .priceSel{
              width:145px;
              height: 30px;
              border: #ccc solid 1px;
              background: #f1f1f1;
              color: #666;
              line-height: 30px;
              display: flex;
              box-sizing: border-box;
              padding: 0 10px;
              li{
                width:145px;
                display: flex;
                justify-content: space-between;
                align-items: center;
              }
          }
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
            width: 31.8%;
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
                  object-fit: cover
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
