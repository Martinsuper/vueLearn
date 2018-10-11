<template>
  <div id="myindex">
    <div id="app">
      <el-row class="tac">
        <el-col :span="12">
          <el-menu default-active="2"
                   class="el-menu-vertical-demo"
                   @open="handleOpen" @close="handleClose" router>
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">博客首页</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-document"></i>
              <span slot="title">写文章</span>
            </el-menu-item>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>博客分类</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组</template>
                <el-menu-item index="1">按照日期分类</el-menu-item>
                <el-menu-item index="1">按照更新时间</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">设置</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
      <router-view></router-view>
    </div>
    <div id="thisPage">
      <h1>hello world</h1>
    </div>
  </div>

</template>

<script>
export default {
  name: 'learnVue1',
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  #app {
    width: 500px;
    height: 500px;
  }
  #thisPage{
    position:absolute;
    top:100px;
    left:300px;
  }
</style>
