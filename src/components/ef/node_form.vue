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
                        :on-success="uploadSuccess"
                        :data="type3"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :show-file-list="false"
                      >
                        <el-button size="small" type="primary" icon="el-icon-microphone"></el-button>
                        <!--                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                      </el-upload>
                      <el-upload
                        class="upload-demo"
                        action="/upload/one"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :on-success="uploadSuccess"
                        :data="type4"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :show-file-list="false"
                      >
                        <el-button size="small" type="primary" icon="el-icon-video-camera-solid"></el-button>
                        <!--                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                      </el-upload>
                      <el-popover
                        placement="right"
                        width="1%"
                        trigger="click"
                        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                        :v-model="visible">
                        <el-amap-search-box class="search-box" :search-option="searchOption" v-model="position" :on-search-result="onSearchResult"></el-amap-search-box>
                                            <el-button plain type="primary" class="send" @click="saveLocation"  >确定</el-button>
                        <el-amap :vid="amap-Demo"  :center="center" :map-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo" style="width: 600px;height: 380px">
                          <el-amap-marker v-for="marker in markers" :position="marker" ></el-amap-marker>
                        </el-amap>
                        <el-button slot="reference" type="primary" icon="el-icon-location-outline" @click="visible = !visible"></el-button>
                      </el-popover>
                      <el-popover
                        placement="right"
                        width="1%"
                        trigger="click"
                        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                        >
                        <upload-temp></upload-temp>
                        <el-button type="primary" slot="reference" icon="el-icon-files" ></el-button>
                      </el-popover>

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
    import {amapManager} from 'vue-amap'
    import {uploadTemp} from '@/components/template/uploadTemp'
    import UploadTemp from '../template/uploadTemp'
    // import UploadTemp from './template/uploadTemp'
    const axios = require('axios');

    export default {
      components: {UploadTemp},
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
                  label: '语音',
                },{
                  value: 4,
                  label: '视频'
                },{
                  value: 5,
                  label: '位置'
                }],
                  value: '',
                  flow: {},
                  type2:{
                  type:2
                  },
                  type3:{
                    type:3
                  },
                  type4:{
                    type:4
                  },
                zoom: 12,
                center: [119.30, 26.08],
                amapManager,
                events: {
                  init(map) {
                    AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
                      const marker = new SimpleMarker({
                        iconLabel: 'A',
                        iconStyle: 'red',
                        map: map,
                        position: map.getCenter(),
                        visibleArrow:false
                      });
                    });
                  }
                },
                markers: [
                  [119.30, 26.08],
                ],
                searchOption: {
                  city: '福州',
                  citylimit: true
                },
                mapCenter: [119.30, 26.08]
            }
        },
        methods: {
          saveLocation(){
            this.data.nodeList.filter((node) => {
              if (node.id === this.node.id) {
                // node.resource.resourceId=res.data.resourceId
                node.resource.url = this.title+","+this.center[0]+","+this.center[1];
                node.resource.type = 5;
                // this.save();
                this.$emit('repaintEverything')
              }
            })
          },
          onSearchResult(pois) {
            this.title = pois[0].name;
            let latSum = 0;
            let lngSum = 0;
            if (pois.length > 0) {
              pois.forEach(poi => {
                let {lng, lat} = poi;
                lngSum += lng;
                latSum += lat;
                this.markers=[[poi.lng, poi.lat]];
              });
              let center = {
                lng: lngSum / pois.length,
                lat: latSum / pois.length
              };
              this.center = [center.lng, center.lat];
            }
          },
          uploadSuccess(res){
            console.log(res)
            var url = "http://192.168.30.38:8080/download?fileName="+res.data.url;
            this.data.nodeList.filter((node) => {
              if (node.id === this.node.id) {
                // node.resource.resourceId=res.data.resourceId
                node.resource.url = res.data.url;
                node.resource.type = res.data.type;
                // this.save();
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
