<template>
    <div class="container" >
      <el-scrollbar style="max-height: 500px ;overflow-x: hidden" >
        <div class="list" id="list" ref="list" style="height: 280px" >
            <ul>
                <li v-for="(item,index) in msglist" :key="index">
                    <RightItem :id="item.id" :type="item.type" :content="item.content" v-if="item.me"></RightItem>
                    <LeftItem :id="item.id" :type="item.type" :content="item.content" v-else></LeftItem>
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
                :on-success="uploadVoiceSuccess"
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
                <el-button plain type="info" class="send" @click="send(1)">发送</el-button>
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

    Vue.directive('scroll', {
        inserted(el) {
            el.scrollIntoView()
        }
    })

    export default {
        name: "Chat",
        components: {LeftItem, RightItem , voice},
        data: () => {
            return {
              text: '',
              messageId: 0,
              msglist: [{
                id: 1,
                type: 1,
                content: '欢迎你！',
                me: false
              }],
              flowId: null,
              fileList: [],
              type2: {
                type: 2
              },
              type3: {
                type: 3
              }
            }
        },
      mounted :function() {
        // this.$nextTick(() => {
        //   this.loadFirstMsg()
        // })
        },
      methods: {
          uploadSuccess(res){
            console.log(res.data)
            var url = "http://192.168.30.38:8080/download?fileName="+res.data.url;
            this.text = url;
            this.send(2)
          },
          uploadVoiceSuccess(res){
            var url = "http://192.168.30.38:8080/download?fileName="+res.data.url;
            this.text = url;
            this.send(3);
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
                    else {
                        this.getResponse(this.messageId,this.text)
                    }
                    this.text = ''
                }
            },
            getResponse(messageId,text) {
                getChatResponse(messageId,text).then(res => {
                    console.log(res)
                    let content =''
                    let type =1;
                  if (res.code===0){
                      // res.data.type;
                      if (res.data.type === 2){
                        type = 2
                        content =res.data.url;
                      }else{
                        type =1;
                        content=res.data;
                      }
                    }else{
                    type =1;
                      content=res.msg;
                  }
                    this.msglist.push({
                        id: this.msglist[this.msglist.length - 1].id + 1,
                        type: 4,
                        content: content,
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
