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
                <el-input v-model="text" placeholder="请输入聊天内容..." class="input" @keyup.enter.native="send"/>
                <el-button plain type="info" class="send" @click="send">发送</el-button>
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
    import axios from "axios";
    import {getDataA} from './ef/data_A'

    Vue.directive('scroll', {
        inserted(el) {
            el.scrollIntoView()
        }
    })

    export default {
        name: "Chat",
        components: {LeftItem, RightItem},
        data: () => {
            return {
                text: '',
                messageId:0,
                msglist: [{
                    id: 1,
                    type: 1,
                    content: '欢迎你！',
                    me: false
                }],
                flowId:null
            }
        },
      mounted :function() {
        // this.$nextTick(() => {
        //   this.loadFirstMsg()
        // })
        },
      methods: {
          //重载会话
            reloadMsg(){
              this.msglist=[{id:1,type:1,content:'暂无开场白'}];
              this.loadFirstMsg(this.flowId);
            },
            send() {
                if (this.text) {
                    this.msglist.push({
                        id: this.msglist[this.msglist.length - 1].id + 1,
                        type: 1,
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
                    } else {
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
                        type: type,
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
              // axios({
              //   method: 'get',
              //   url: '/outboundMessage/text',
              //   params:{
              //     flowId : flowId
              //   }
              // }).then((response)=>{
              //   var data = response.data;
              //   // console.log(data)
              //   // resolve(data)
              //   this.msglist[0].content=data.content
              //   this.messageId=data.messageId
              //   // console.log(this.msglist)
              //   // return data;
              // }).catch(function (error) {
              //   // reject(data)
              //   console.log(error)
              // });
            // })

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
