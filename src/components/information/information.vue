<template>
  <div class="Information">
      <Top></Top>
      <Navs :num="4"></Navs>
      <div class="mian">
        <div class="title">
          资讯
        </div>
        <div class="info" v-for="item in dataList">
          <dl @click="info()">
            <dt>
              <img :src="item.img" alt="">
            </dt>
            <dd>
              <p>
                {{item.p}}
              </p>
              <span>
                {{item.span}}
              </span>
            </dd>
          </dl>
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
<script>
 import Top from '@/components/top'
 import Navs from '@/components/nav'
 import Foot from '@/components/foot'
  export default {
    data(){
      return {
        pagecount:5,
        p:1,
        dataList:[
          {
            p:"你的价格可以买劳力士保罗纽曼代托纳",
            span:"我敢肯定，许多你的Instagram照片推送的消息和图像的一个观看过去数天的保罗纽曼代托纳6239拥有劳力士保罗纽曼本人。对于门外汉来说，劳力士保罗纽曼daytonas红色细节特征非常罕见的，因此会更有收藏价值。的名字并不是来自任何官方合作，而事实上，保罗·纽曼曾穿了这种特定的手表。所以我们现在说的是手表，这种样式命名，然后收集产生的现象这手表是最狂热的手表收集，并且仅仅因为这一理由，而不是任何钟表，因而成为...",
            img:require("../../assets/img/bdfl.jpg")
          },
          {
            p:"你的价格可以买劳力士保罗纽曼代托纳",
            span:"我敢肯定，许多你的Instagram照片推送的消息和图像的一个观看过去数天的保罗纽曼代托纳6239拥有劳力士保罗纽曼本人。对于门外汉来说，劳力士保罗纽曼daytonas红色细节特征非常罕见的，因此会更有收藏价值。的名字并不是来自任何官方合作，而事实上，保罗·纽曼曾穿了这种特定的手表。所以我们现在说的是手表，这种样式命名，然后收集产生的现象这手表是最狂热的手表收集，并且仅仅因为这一理由，而不是任何钟表，因而成为...",
            img:require("../../assets/img/bdfl.jpg")
          },
          {
            p:"你的价格可以买劳力士保罗纽曼代托纳",
            span:"我敢肯定，许多你的Instagram照片推送的消息和图像的一个观看过去数天的保罗纽曼代托纳6239拥有劳力士保罗纽曼本人。对于门外汉来说，劳力士保罗纽曼daytonas红色细节特征非常罕见的，因此会更有收藏价值。的名字并不是来自任何官方合作，而事实上，保罗·纽曼曾穿了这种特定的手表。所以我们现在说的是手表，这种样式命名，然后收集产生的现象这手表是最狂热的手表收集，并且仅仅因为这一理由，而不是任何钟表，因而成为...",
            img:require("../../assets/img/bdfl.jpg")
          }
        ]
      }
    },
    methods:{
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
              p:"你的价格可以买劳力士保罗纽曼代托纳",
            span:"我敢肯定，许多你的Instagram照片推送的消息和图像的一个观看过去数天的保罗纽曼代托纳6239拥有劳力士保罗纽曼本人。对于门外汉来说，劳力士保罗纽曼daytonas红色细节特征非常罕见的，因此会更有收藏价值。的名字并不是来自任何官方合作，而事实上，保罗·纽曼曾穿了这种特定的手表。所以我们现在说的是手表，这种样式命名，然后收集产生的现象这手表是最狂热的手表收集，并且仅仅因为这一理由，而不是任何钟表，因而成为...",
            img:require("../../assets/img/bdfl.jpg")
            })
          }

        //  this.pagecount = 1   //  总共多少页

          this.dataList = data
       /* }).catch(() => {
          this.content = []
          this.p = 1
          this.currentPage1 = 1
        })*/
      },
      info(){
        this.$router.push('/information/detail')
      }
    },
    mounted(){
      setTimeout(()=>{
        let self = this;
        //        全部请求
        self.$http.get(`${process.env.API.MARKET}/market/buyer/goodsList`).then(res=>{
          //                                        ${process.env.API.MARKET}/market/buyer/goodsList
          self.content = res.data.data
          console.log(res.data.data)
        }).catch(err=>{
          console.log(err)
        })
      })
    },
    components: {
      Top,  //头部
      Navs, //导航
      Foot  //公共底部
    },
  }
</script>
<style type="text/less" lang="less" scoped>
  .Information{
    .mian{
      box-sizing:border-box;
      max-width: 1200px;
      min-width: 1000px;
      padding: 50px 10px 30px;
      margin: 0 auto;
      background: #fff;
      .title{
        font-size: 24px;
        color: #333;
        padding:0 0 20px 30px;
        font-weight: bold;
      }
      .info{
        dl{
          padding: 20px 30px;
          height: 290px;
          box-sizing:border-box;
          display: flex;
          transition:all .5s;
          cursor: pointer;
          &:hover{
            background:#e6e6e6;
          }
          dt{
            height: 100%;
            max-width: 380px;
            padding-right: 30px;
            img{
              max-width: 380px;
              height: 100%;
            }
          }
          dd{
            p{
              font-size: 16px;
              color: #333;
              font-weight: bold;
            }
            span{
              padding-top: 20px;
              color: #666;
              display: block;
              line-height: 30px;
            }
          }
        }
      }
      .page{
        /*padding: 40px 30px 60px;*/
        display: flex;
        border-bottom: 1px solid #e9e9e9;
        padding: 20px 0;
        justify-content: flex-end;
      }
    }
  }
</style>
