<template>
    <div>
        <div class="ef-node-form">
            <div class="ef-node-form-header">
                编辑
            </div>
            <div class="ef-node-form-body">
                <el-form :model="node" ref="dataForm" label-width="80px" v-show="type === 'node'">
                    <el-form-item label="类型">
<!--                        <el-input v-model="node.type" ></el-input>-->
                      <el-select v-model="node.nodeType" placeholder="请选择" @change="changeType">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="名称">
                        <el-input v-model="node.name"></el-input>
                    </el-form-item>
                    <el-form-item label="文案内容">
                      <el-input type="textarea" v-model="node.content"></el-input>
                    </el-form-item>
                    <el-form-item label="left坐标">
                        <el-input v-model="node.left"></el-input>
                    </el-form-item>
                    <el-form-item label="top坐标">
                        <el-input v-model="node.top"></el-input>
                    </el-form-item>
                    <el-form-item label="ico图标">
                        <el-input v-model="node.ico"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button icon="el-icon-close">重置</el-button>
                        <el-button type="primary" icon="el-icon-check" @click="save">保存</el-button>
                      <el-button type="primary" icon="el-icon-check" @click="commit">提交</el-button>
                    </el-form-item>
                </el-form>

                <el-form :model="line" ref="dataForm" label-width="80px" v-show="type === 'line'">
                  <el-form-item label="类型">
                    <!--                        <el-input v-model="node.type" ></el-input>-->
                    <el-select v-model="line.linkType" placeholder="请选择" @change="changeType">
                      <el-option
                        v-for="item in options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                    <el-form-item label="条件">
                      <el-input v-model="line.label"></el-input>
                    </el-form-item>
                  <el-form-item label="关键词">
                    <el-input v-model="line.keyWords"></el-input>
                  </el-form-item>
                    <el-form-item>
                        <el-button icon="el-icon-close">重置</el-button>
                        <el-button type="primary" icon="el-icon-check" @click="saveLine">保存</el-button>
                    </el-form-item>
                </el-form>
            </div>
<!--            <div class="el-node-form-tag"></div>-->
        </div>
    </div>

</template>

<script>
    import { cloneDeep } from 'lodash'
    const axios = require('axios');

    export default {
        data () {
            return {
                visible: true,
                // node 或 line
                type: 'node',
                node: {},
                line: {},
                data: {},
                options: [{
                    value: 0,
                    label: '开始'}, {
                        value: 1,
                        label: '流程'
                }, {
                    value: 2,
                    label: '结束'
                }],
              options2: [{
                value: 1,
                label: '一般'}, {
                value: 2,
                label: '已拒绝'
              }],
                value: '',
                flow: {}
            }
        },
        methods: {
            /**
             * 表单修改，这里可以根据传入的ID进行业务信息获取
             * @param data
             * @param id
             */
            nodeInit (data, id) {
                this.type = 'node'
                this.data = data
                data.nodeList.filter((node) => {
                    if (node.id === id) {
                        this.node = cloneDeep(node)
                    }
                })
            },
            lineInit (line) {
                this.type = 'line'
                console.log(line)
                this.line = line
            },
            // 修改连线
            saveLine () {
                this.$emit('setLineLabel', this.line.from, this.line.to, this.line.label, this.line.lineType, this.line.keyWords)
            },
            save () {
                this.data.nodeList.filter((node) => {
                  /**数据参考*/
                  // nodeList[i].id =nodeList[i].nodeId+'';
                  // nodeList[i].name = nodeList[i].nodeName;
                  // nodeList[i].left = nodeList[i].xCoordinate+'px';
                  // nodeList[i].top = nodeList[i].yCoordinate+'px';
                  // nodeList[i].type = 'task';
                  // nodeList[i].ico =  'el-icon-present';
                  // nodeList[i].state = 'success';
                    if (node.id === this.node.id) {
                        node.name = this.node.name
                        node.content = this.node.content
                        node.left = this.node.left
                        node.top = this.node.top
                        node.xCoordinate = this.node.left.substring(0,this.node.left.length-2)
                        node.yCoordinate = this.node.top.substring(0,this.node.top.length-2)
                        node.nodeName = this.node.name
                        node.nodeId = this.node.id;
                        // node.type =
                        this.$emit('repaintEverything')
                        console.log(this.data)
                      // axios({
                      //   method: 'post',
                      //   url: '/flow/list',
                      //   params:{
                      //     id : node.id
                      //   }
                      //   // headers: {'Origin': '127.0.0.1'}
                      // }).then(function(response){
                      //
                      // }).catch(function (error) {
                      //   console.log(error)
                      // });
                    }
                })
            },
            commit (){
              this.data.nodeList.filter((node) => {
                if (node.id === this.node.id) {
                  node.name = this.node.name
                  node.content = this.node.content
                  node.left = this.node.left
                  node.top = this.node.top
                  node.nodeType = this.node.nodeType
                  this.$emit('repaintEverything')
                  var data = this.data;
                  // console.log(t)
                }
                // console.log(this.$emit('getDataFlow'))
                axios({
                  method: 'post',
                  url: '/flow/update',
                  data: data,
                  // headers: {'Origin': '127.0.0.1'}
                }).then(function(response){
                   console.log(response);
                }).catch(function (error) {
                  console.log(error)
                });
              })
            },
            changeType (e){
             console.log(e)
            }
        }
    }
</script>

<style>
    .el-node-form-tag {
        position: absolute;
        top: 50%;
        margin-left: -15px;
        height: 40px;
        width: 15px;
        background-color: #fbfbfb;
        border: 1px solid rgb(220, 227, 232);
        border-right: none;
        z-index: 0;
    }
</style>
