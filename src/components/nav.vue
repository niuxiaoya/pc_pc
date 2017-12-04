<template>
  <div class="nav">
    <ul>
      <li v-for="(item,index) in dataList"  @click="open(index)" :class="{'topActive':num==index}">{{item.name}}</li>
      <li class="lis">
        <i><img src="../assets/img/people.png" alt="" @click="openLogin" ></i>
        <i><img src="../assets/img/shop.png" alt=""></i>
      </li>
    </ul>
  </div>
</template>
<script type="javascript">
  export default {
    props: {
      num: Number
    },
    data () {
      return {
        dataList: [
          {
            name: '首页',
          },
          {
            name: '直买',
          },
          {
            name: '直售',
          },
          {
            name: '会籍',
          },
          {
            name: '资讯',
          },
          {
            name: '关于我们',
          },
        ],
      }
    },
    methods: {
      open(index){
        switch (index){
          case 0:
            this.$router.push('/')
            break;
          case 1:
            this.$router.push('/buy')
            break;
          case 2:
//            this.$router.push('/wealthmanag')
            break;
          case 3:
            this.$router.push('/vip')
            break;
          case 4:
           this.$router.push('/information')
            break;
          case 6:
           this.$router.push('/about')
           console.log(1)
            break;
        }
      },
      openLogin(){
        this.$router.push('/login')
      }
    }
  }
</script>
<style lang="less" scoped type="text/less">
  .nav{
    position: relative;
    height: 55px;
    background: #0a0a0a;
    color: #fff;
    display: flex;
    justify-content: center;
    ul{
      position: relative;
      display: flex;
      li{
        position: relative;
        cursor: pointer;
        padding: 15px 30px 8px;
        color: #ccc;
        font-size: 18px;
        &.topActive {
          &:before {
            position: absolute;
            width: 31px;
            height: 1px;
            background: #fff;
            content: '';
            bottom: 10px;
            left: calc(50% - 17px);
          }
        }
      }
      .lis{
        /*position: absolute;*/
        /*right: -200px;*/
        /*top: 0;*/
        display: flex;
        justify-content: center;
        align-items: center;
        i{
          display: inline-block;
          padding-right: 20px;
          img{
            object-fit: cover;
          }
        }
      }
    }
  }
</style>
<style lang="less" type="text/less">

</style>
