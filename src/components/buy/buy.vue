<template>
  <div class="Buy">
      <Top></Top>
      <Navs :num="1"></Navs>
      <div class="mian">
          <div class="nav">
            <el-col :span="4">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item>双皮奶</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :span="4">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item>双皮奶</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :span="4">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item>双皮奶</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :span="4">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item>双皮奶</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :span="4">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item>双皮奶</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :span="4">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item>双皮奶</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
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
      width: 1200px;
      min-width: 1024px;
      padding: 40px 0 60px;
      margin: 0 auto;
      .nav{
        text-align: center;
        height: 50px;
        border-right: 1px solid #ccc;
      }
    }
  }
</style>
<style type="text/less" lang="less">
  .Buy{
      .el-col-4{
        text-align: center;
        padding: 15px 0;
        box-sizing:box-sizing;
        border-color: 1px solid #ccc;
        background: #f1f1f1;
        border: 1px solid #ccc;
        border-right: none;
        .el-dropdown{
          cursor: pointer;
        }
      }
  }
</style>
