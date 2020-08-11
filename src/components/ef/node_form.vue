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
                      <el-select v-model="node.nodeType" placeholder="请选择"  @change="save">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="名称">
                        <el-input @keyup.native="save" v-model="node.name"></el-input>
                    </el-form-item>
                  <el-form-item label="文案类型">
                  <el-select v-model="node.resource.type" placeholder="请选择"  @change="save">
                    <el-option
                      v-for="item in options3"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                    </el-form-item>
                    <el-form-item label="文案内容" >
                      <el-input @keyup.native="save" :autosize="{ minRows: 6, maxRows: 99}" type="textarea" v-model="node.resource.url"></el-input>
                      <el-upload
                        class="upload-demo"
                        action="/upload/one"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :on-success="uploadSuccess"
                        :data="type2"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :show-file-list="false"
                      >
                        <el-button size="small" type="primary" icon="el-icon-picture"></el-button>
                        <!--                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                      </el-upload>
                      <el-upload
                        class="upload-demo"
                        action="/upload/one"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :on-success="uploadVoiceSuccess"
                        :data="type3"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :show-file-list="false"
                      >
                        <el-button size="small" type="primary" icon="el-icon-microphone"></el-button>
                        <!--                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                      </el-upload>
                    </el-form-item>

                    <el-form-item label="left坐标">
                        <el-input @keyup.native="save" v-model="node.left"></el-input>
                    </el-form-item>
                    <el-form-item label="top坐标">
                        <el-input @keyup.native="save" v-model="node.top"></el-input>
                    </el-form-item>
                    <el-form-item label="ico图标">
                        <el-input @keyup.native="save" v-model="node.ico"></el-input>
                    </el-form-item>
<!--                    <el-form-item>-->
<!--                        <el-button icon="el-icon-close">重置</el-button>-->
<!--                        <el-button type="primary" icon="el-icon-check" @click="save">保存</el-button>-->
<!--                      <el-button type="primary" icon="el-icon-check" @click="commit">提交</el-button>-->
<!--                    </el-form-item>-->
                </el-form>

                <el-form :model="line" ref="dataForm" label-width="80px" v-show="type === 'line'">
                  <el-form-item label="类型">
                    <!--                        <el-input v-model="node.type" ></el-input>-->
                    <el-select v-model="line.linkType" placeholder="请选择" @change="saveLine">
                      <el-option
                        v-for="item in options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                    <el-form-item label="条件">
                      <el-input @keyup.native="saveLine" v-model="line.label"></el-input>
                    </el-form-item>
                  <el-form-item label="关键词">
                    <el-input @keyup.native="saveLine" v-model="line.keyWords"></el-input>
                  </el-form-item>
<!--                    <el-form-item>-->
<!--                        <el-button icon="el-icon-close">重置</el-button>-->
<!--                        <el-button type="primary" icon="el-icon-check" @click="saveLine">保存</el-button>-->
<!--                    </el-form-item>-->
                </el-form>
            </div>
<!--            <div class="el-node-form-tag"></div>-->
        </div>
    </div>

</template>

<script>
    import { cloneDeep } from 'lodash'
    import { updateFlow} from '@/api/ApiFlowData'
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
                  label: '未拒绝'
                }],
                options3: [{
                  value: 1,
                  label: '文字'}, {
                  value: 2,
                  label: '图片'
                }, {
                  value: 3,
                  label: '语音'
                }],
                  value: '',
                  flow: {},
                  type2:{
                  type:2
                  },
                  type3:{
                    type:3
                  }
              }
        },
        methods: {
          uploadSuccess(res){
            console.log(res)
            var url = "http://192.168.30.38:8080/download?fileName="+res.data.url;
            this.data.nodeList.filter((node) => {
              if (node.id === this.node.id) {
                node.resource.url = res.data.url;
                node.resource.type = 2
                // this.save();
                this.$emit('repaintEverything')
              }
            })
          },
          uploadVoiceSuccess(res){
            var url = "http://192.168.30.38:8080/download?fileName="+res.data.url;
            this.data.nodeList.filter((node) => {
              if (node.id === this.node.id) {
                node.resource.url = res.data.url;
                node.resource.type = 3
                this.$emit('repaintEverything')
              }
            })
          },
          handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePreview(file) {
            console.log(file);
          },
          handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
          },
          beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
          },
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
                this.$emit('setLineLabel', this.line.from, this.line.to, this.line.label, this.line.linkType, this.line.keyWords)
            },
          //保存内容
            save () {
                this.data.nodeList.filter((node) => {
                    if (node.id === this.node.id) {
                        node.name = this.node.name
                        // node.content = this.node.content
                        // node.resource.url = this.node.content
                        node.left = this.node.left
                        node.top = this.node.top
                        node.xCoordinate = this.node.left.substring(0,this.node.left.length-2)
                        node.yCoordinate = this.node.top.substring(0,this.node.top.length-2)
                        node.nodeName = this.node.name
                        node.nodeId = this.node.id
                        node.resource.url = this.node.resource.url
                        node.resource.type =this.node.resource.type
                      node.nodeType = this.node.nodeType
                      this.$emit('repaintEverything')
                        console.log("save")
                        console.log(this.data)
                    }
                })
            },
            commit (){
              // this.save();
              //提交先保存
              this.data.nodeList.filter((node) => {
                if (node.id === this.node.id) {
                  node.name = this.node.name
                  // node.content = this.node.content
                  // node.resource.url = this.node.content
                  node.left = this.node.left
                  node.top = this.node.top
                  node.nodeType = this.node.nodeType
                  node.xCoordinate = this.node.left.substring(0,this.node.left.length-2)
                  node.yCoordinate = this.node.top.substring(0,this.node.top.length-2)
                  node.nodeId = this.node.id
                  // node.keyWords = this.node.keyWords
                  this.$emit('repaintEverything')
                  var data = this.data;
                  // console.log(t)
                  console.log(data)
                }
                //提交到上级模块
                // this.$emit('commitFlow',data);
                // console.log(this.$emit('getDataFlow'))

                updateFlow(data).then(res=>{
                  if (res.code==0){
                    this.$message.success(res.msg);
                  }else{
                    this.$message.error("失败");

                  }
                }).catch(error=>{
                  // this.$message.error("error")
                  console.log(error)
                });
                // axios({
                //   method: 'post',
                //   url: '/flow/update',
                //   data: data,
                //   // headers: {'Origin': '127.0.0.1'}
                // }).then(function(response){
                //   console.log(response.status);
                //   // if (response.status==200){
                //   //   return true;
                //   // }else{
                //   //   return false;
                //   // }
                // }).catch(function (error) {
                //   console.log(error)
                // });
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
