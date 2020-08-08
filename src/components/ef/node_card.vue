<template>
  <div class="box-card">
<!--    <el-scrollbar style="max-height: 200px">-->
  <div ref="card"
       @click = "clickCard" >
    <el-card class="box-card"  :shadow.sync="shadow">
    <div slot="header" class="clearfix">
      <span style="font-size: 20px">{{card.flowName}}</span>
    </div>
    <div  class="text item">
      {{'创建时间' +card.creataTime  }}
    </div>
    <div  class="text item">
      状态:{{ +card.state==1?'可用':'制作中'  }}
    </div>
<!--    <el-dropdown>-->
<!--  <span class="el-dropdown-link" style="float: right">-->
<!--    下拉菜单<i class="el-icon-arrow-down el-icon&#45;&#45;right" ></i>-->
<!--  </span>-->
<!--      <el-dropdown-menu slot="dropdown">-->
<!--        <el-dropdown-item>黄金糕</el-dropdown-item>-->
<!--        <el-dropdown-item>狮子头</el-dropdown-item>-->
<!--        <el-dropdown-item>螺蛳粉</el-dropdown-item>-->
<!--      </el-dropdown-menu>-->
<!--    </el-dropdown>-->
  </el-card>
  </div>
<!--    </el-scrollbar>-->

    <el-button style="float: left; padding: 3px 0;margin-left: 30px" type="text" @click="clickCard">打开流程图</el-button>
    <el-button style="float: left; padding: 3px 0" type="text" @click="showMsgDialog">测试</el-button>
    <!--    <el-button style="float: left; padding: 3px 0" type="text" @click>话术设置</el-button>-->
    <br/>
    <br/>
  </div>
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
            shadow:"hover"
          }
        },
        methods:{
          clickCard(){
            // console.log(this.card.id)
            this.$emit('clickCard',this.card.id)
            this.$emit('initCardName',this.card.flowName);
            // this.shadow="always";
          },
          showMsgDialog(){
            // console.log(e)
            this.$emit('showMsgDialog',this.card.id)
          }
        }

    }

</script>

<style scoped>

</style>
