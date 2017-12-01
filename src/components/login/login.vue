<template>
  <div class="Information">
      <Top></Top>
      <!--<Navs :num="4"></Navs>-->
      <div class="mian">
        <div class="login">
            <h2>登录</h2>
            <div class="phone">
                <input type="tel" placeholder='请输入手机号码' v-model="phone">
                <p class="reminder" v-if="info">{{info}}</p>
            </div>
            <div class="code">
                <input type="text" placeholder='请输入6位验证码'>
                <p class="verification">获取验证码</p>
            </div>
            <div class="checks">
                <input type="checkbox" name="" id="">登录即同意<span>《用户协议》</span>
            </div>
            <button class="btn" @click="sub">登录</button>
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
        phone:"",
        info:"",
      }
    },
    methods:{
      sub () {
        let self = this
        let reg = /^1(3|4|5|7|8)\d{9}$/
        var regNum = /^\d{6}$/
        if (!self.phone) {
//          self.$toast('手机号不能为空')
          this.info="手机号不能为空"
          return false
        }

//        if(self.postData.country_code==86) {
//          if (!reg.test(self.postData.tel)) {
//            self.$toast('手机号错误')
//            return false
//          }
//        }
//        if (!self.postData.code) {
//          self.$toast('验证码不能为空')
//          return false
//        } else if (!regNum.test(self.postData.code)) {
//          self.$toast('验证码错误')
//          return false
//        } else {
//          self.$indicator.open();
//          self.$fun.postObj.post_data(self,`${process.env.API.USER}/login`,self.postData,'/login')
//        }
      }
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
      max-width: 1200px;
      min-width: 1000px;
      padding: 50px 0 30px;
      margin: 0 auto;
      background: #fff;
      .login{
          width: 472px;
          height: 308px;
          margin: 192px auto;
          h2{
            color: #333;
            font-weight: normal;
            margin-bottom: 30px;
          }
          .phone{
              width: 472px;
              height: 79px;
              input{
                  width: 100%;
                  box-sizing: border-box;
                  height: 50px;
                  border: 1px solid #ccc;
                  outline:medium;
                  padding-left: 15px;
                  padding-right: 15px;
              }
              .reminder{
                  font-size: 13px;
                  color: #c11c23;
                  padding-top: 6px;
              }

          }
          .code{
              position: relative;
              input{
                width: 292px;
                box-sizing: border-box;
                height: 50px;
                border: 1px solid #ccc;
                outline:medium;
                padding-left: 15px;
                padding-right: 15px;
              }
              .verification{
                cursor: pointer;
                  position: absolute;
                  top: 0;
                  right: 0;
                  width: 180px;
                  height: 50px;
                  background: #333;
                  text-align: center;
                  line-height: 50px;
                  font-size: 16px;
                  color: #fff;
              }
          }
          .checks{
              margin-top: 33px;
              font-size: 12px;
              color: #999;
              span{
                  color: #333;
              }
          }
          .btn{
            cursor: pointer;
              width: 472px;
              height: 50px;
              text-align: center;
              line-height: 50px;
              color: #fff;
              font-size: 15px;
              background: #181818;
              margin-top: 30px;
          }
      }
    }
  }
</style>
