<template>
<!--  <div ref="card">-->
  <el-card class="box-card" shadow="hover">
    <div slot="header" class="clearfix">
<!--      <span style="font-size: 20px">{{card.title}}</span>-->
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{'列表内容 ' + o }}
    </div>
    <el-button style="float: left; padding: 3px 0" type="text">测试</el-button>
    <el-button style="float: left; padding: 3px 0" type="text">话术设置</el-button>
    <el-dropdown>
  <span class="el-dropdown-link" style="float: right">
    下拉菜单<i class="el-icon-arrow-down el-icon--right" ></i>
  </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-card>
<!--  </div>-->
</template>

<script>
    export default {
        name: 'nodeCard',
        props: {
          card: Object,
          activeElement: Object
        },
        data () {
          return {
          }
        },

    }

</script>

<style scoped>

</style>
