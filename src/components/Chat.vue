<template>
    <div class="container" >
      <el-scrollbar style="max-height: 1000px ;overflow-x: hidden" >
        <div class="list" id="list" ref="list" style="height: 800px" >
            <ul>
                <li v-for="(item,index) in msglist" :key="index">
                    <RightItem :id="item.id" :type="item.type" :content="item.content" :title="item.title" v-if="item.me"></RightItem>
                    <LeftItem :id="item.id" :type="item.type" :content="item.content" :title="item.title" v-else></LeftItem>
                    <div v-scroll style="height: 0"></div>
                </li>
            </ul>
        </div>

      </el-scrollbar>
        <div class="bottom">
            <div class="line"></div>
            <div class="input-send">
              <el-button plain type="warning" class="send" @click="reloadMsg">重开</el-button>
                <el-input v-model="text" placeholder="请输入聊天内容..." class="input" @keyup.enter.native="send(1)"/>
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
                :file-list="fileList"
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
                :file-list="fileList"
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
                :file-list="fileList"
                :show-file-list="false"
              >
                <el-button size="small" type="primary" icon="el-icon-video-camera-solid"></el-button>
                <!--                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
              </el-upload>
              <el-popover
                placement="bottom"
                width="100%"
                trigger="click"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                v-model="visible">
                <el-amap-search-box class="search-box" :search-option="searchOption" v-model="position" :on-search-result="onSearchResult"></el-amap-search-box>
                <el-button plain type="primary" class="send" @click="sendLocation(1)" >发送位置</el-button>
                <el-amap :vid="amap-Demo"  :center="center" :map-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo" style="width: 600px;height: 380px">
                  <el-amap-marker v-for="marker in markers" :position="marker" ></el-amap-marker>
                </el-amap>
                <el-button slot="reference" type="primary" icon="el-icon-location-outline" @click="visible = !visible"></el-button>
              </el-popover>
                <el-button plain type="info" class="send" @click="send(1)" >发送</el-button>
            </div>

        </div>

    </div>
</template>

<script>
    import Vue from "vue";
    import {getChatResponse} from "@/api/ApiChat";
    import {loadFirstMsgApi} from "@/api/ApiChat";
    import LeftItem from "@/components/LeftItem";
    import RightItem from "@/components/RightItem";
    import voice from "@/components/voice";
    // import { AMapManager } from 'vue-amap';
    import {getImage} from "@/api/ApiChat";
    import axios from "axios";
    import {getDataA} from './ef/data_A';
    import {amapManager} from 'vue-amap'
    import {mapSearchBox} from  '@/components/mapSearchBox'

    Vue.directive('scroll', {
        inserted(el) {
            el.scrollIntoView()
        }
    })

    export default {
        name: "Chat",
        components: {LeftItem, RightItem , voice ,mapSearchBox},
        data: () => {
            return {
              text: '',
              title: '',//位置标题
              messageId: 0,
              msglist: [{
                id: 1,
                type: 1,
                content: '欢迎你！',
                me: false,
                title:'测试标题'
              }],
              flowId: null,
              fileList: [],
              type2: {
                type: 2
              },
              type3: {
                type: 3
              },
              type4: {
                type: 4
              },
              type5: {
                type: 5
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
      mounted :function() {
        // this.$nextTick(() => {
        //   this.loadFirstMsg()
        // })
        },
      methods: {
          sendLocation(){
            this.text = this.center
            if (this.center){
            this.send(5)
            }
            console.log(this.center)
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
            console.log(res.data)
            var url = "http://192.168.30.38:8080/download?fileName="+res.data.url;
            this.text = url;
            this.send(res.data.type)
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
          //重载会话
            reloadMsg(){
              this.msglist=[{id:1,type:1,content:'暂无开场白'}];
              this.loadFirstMsg(this.flowId);
            },
            send(type) {
                if (this.text) {
                    this.msglist.push({
                        id: this.msglist[this.msglist.length - 1].id + 1,
                        type: type,
                        content: this.text,
                        title: this.title,
                        me: true,
                        messageId:this.msglist[0].messageId
                    })
                    if (this.text === '图片') {
                        this.msglist.push({
                            id: this.msglist[this.msglist.length - 1].id + 1,
                            type: 2,
                            content: 'http://6emm.hxzdhn.com/img/2020/06/28/jausoellbtf.jpg',
                            me: false
                        })
                    }else if(this.text === '语音'){
                        this.msglist.push({
                          id: this.msglist[this.msglist.length - 1].id + 1,
                          type: 3,
                          content: 'http://1252014125.vod2.myqcloud.com/46740e39vodcq1252014125/1db79a9a5285890783173288539/ZOaFuTmGs30A.mp3',
                          me: false
                        })
                    }
                    else if(this.text === '视频'){
                      this.msglist.push({
                        id: this.msglist[this.msglist.length - 1].id + 1,
                        type: 4,
                        content: 'https://vod-dpy.bhbcdn.com/cv-vod_b323de_1554893977654.mp4',
                        me: false
                      })
                    }
                    else if(this.text === '位置'){
                      this.msglist.push({
                        id: this.msglist[this.msglist.length - 1].id + 1,
                        title:'位置接收测试',
                        type: 5,
                        content: [119.30, 26.08],
                        me: false
                      })
                    }
                    else if(this.text === '卡片'){
                      this.msglist.push({
                        id: this.msglist[this.msglist.length - 1].id + 1,
                        title:'卡片',
                        type: 6,
                        content: [119.30, 26.08],
                        me: false
                      })
                    }
                    else {
                        this.getResponse(this.messageId,this.text)
                    }
                    this.text = ''
                }
            },
            getResponse(messageId,text) {
                getChatResponse(messageId,text).then(res => {
                  console.log(res)
                    if (res.data.type!=1 && res.data.type!=5 && res.data.type!=6){
                      var url = "http://192.168.30.38:8080/download?fileName="+res.data.url
                    }else{
                      var url = res.data.url
                    }
                    this.msglist.push({
                        id: this.msglist[this.msglist.length - 1].id + 1,
                        type: res.data.type,
                        content: url,
                        title:this.title,
                        me: false,

                    })
                })
            },
         loadFirstMsg(flowId){
            // return new Promise((resolve, reject) => {
            //   var data = null;
           //不相等，则重新加载
                if (this.flowId != flowId && this.flowId != null){
                  this.flowId = flowId;
                  this.reloadMsg();
                }
                this.flowId = flowId
                loadFirstMsgApi(flowId).then(res=>{
                  console.log(res)
                  this.msglist[0].content=res.content;
                  this.messageId=res.messageId
                });
          }
        }
    }
</script>

<style scoped lang="scss">
    .container {
        ul {
            padding: 0;
            margin: 0;
        }

        li {
            list-style: none;

        }

        .list {
            width: 100%;
            height: 100%;
            margin-bottom: 45px;
        }

        .bottom {
            width: 100%;
            /*position: fixed;*/
            bottom: 0;

            .line {
                width: 100%;
                height: 1px;
                background-color: #ddd;
            }

            .input-send {
                display: flex;
                justify-content: space-between;
                background-color: #fff;

                .input {
                    padding-right: 10px;
                }

                .send {
                    width: 80px;
                    height: 30px;
                    margin-top: 7px;
                    margin-right: 10px;
                }
            }

        }
    }


</style>
