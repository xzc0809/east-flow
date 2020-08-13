<template>
    <div v-if="easyFlowVisible" style="height: calc(100vh);">
        <el-row>
            <!--顶部工具菜单-->
            <el-col :span="24">
                <div class="ef-tooltar">
                    <el-link type="primary" :underline="false" >{{flowName}}</el-link>
                    <el-divider direction="vertical"></el-divider>
                    <el-button type="text" icon="el-icon-delete" size="large" @click="deleteElement" :disabled="!this.activeElement.type"></el-button>
                    <el-divider direction="vertical"></el-divider>
                    <el-button type="text" icon="el-icon-download" size="large" @click="downloadData"></el-button>
                    <el-divider direction="vertical"></el-divider>
<!--                    <el-button type="text" icon="el-icon-plus" size="large" @click="zoomAdd"></el-button>-->
<!--                    <el-divider direction="vertical"></el-divider>-->
<!--                    <el-button type="text" icon="el-icon-minus" size="large" @click="zoomSub"></el-button>-->
                    <div style="float: right;margin-right: 57%">
                      <el-button type="primary" icon="el-icon-add" @click="dialogFormVisible = true">新增模板</el-button>
                      <el-button type="primary" icon="el-icon-check" @click="commitFlow">提交流程修改</el-button>
                      <el-dialog title="新增模板" :visible.sync="dialogFormVisible" style="height: 100%">
                        <el-form :model="form">
                          <el-form-item label="模板名称" :label-width="formLabelWidth">
                            <el-input v-model="form.name" autocomplete="off"></el-input>
                          </el-form-item>
<!--                          <el-form-item label="" :label-width="formLabelWidth">-->
<!--                            <el-select v-model="form.region" placeholder="请选择活动区域">-->
<!--                              <el-option label="区域一" value="shanghai"></el-option>-->
<!--                              <el-option label="区域二" value="beijing"></el-option>-->
<!--                            </el-select>-->
<!--                          </el-form-item>-->
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                          <el-button @click="dialogFormVisible = false">取 消</el-button>
                          <el-button type="primary" @click="addTemp">确 定</el-button>
                        </div>

                      </el-dialog>
                      <el-button plain round icon="el-icon-document" @click="dataInfo" size="mini">流程信息</el-button>
                      <!--                        <el-button plain round @click="dataReloadA" icon="el-icon-refresh" size="mini">切换流程A</el-button>-->
<!--                        <el-button plain round @click="dataReloadB" icon="el-icon-refresh" size="mini">切换流程B</el-button>-->
<!--                        <el-button plain round @click="dataReloadC" icon="el-icon-refresh" size="mini">切换流程C</el-button>-->
<!--                        <el-button plain round @click="dataReloadD" icon="el-icon-refresh" size="mini">自定义样式</el-button>-->
                    </div>

                </div>
            </el-col>
        </el-row>
        <div style="display: flex;height: calc(100% - 47px);">
<!--          <el-scrollbar v-infinite-scroll="loadCardList">-->
<!--          <ul v-infinite-scroll="getDataCard2">-->

          <div style="width: 280px;border-right: 1px solid #dce3e8;overflow:auto" v-infinite-scroll="loadCardList" >
            <div style="margin-top: 15px;">
              <el-input type="text" v-model="form.cardName" @keyup.enter.native="searchCard">
                <el-button slot="append" icon="el-icon-search" @click="searchCard"></el-button>
              </el-input>
            </div>
            <template v-for="card in cardList" >
              <nodeCard
                :card="card"
                @clickCard="clickCard"
                @showMsgDialog="showMsgDialog"
                @initCardName="initCardName"
              >
               </nodeCard>
<!--                <loadFirstMsg ref="loadFirstMsg"></loadFirstMsg>-->
            </template>

            <el-dialog title="测试模板" :visible.sync="isShowMsgDialog" style="height:100%">
                <Chat style="max-height: 860px"
                 ref="chat"
                ></Chat>
            </el-dialog>
            <p v-if="loading">加载中...</p>
            <p v-if="noMore">没有更多了....</p>
          </div>
<!--          </ul>-->
<!--          </el-scrollbar>-->
            <div style="width: 130px;border-right: 1px solid #dce3e8;">
                <node-menu @addNode="addNode" ref="nodeMenu"></node-menu>
            </div>
<!--          <div style="width: 230px;border-right: 1px solid #dce3e8;">-->
<!--            <nav-menu @addNode="addNode" ref="nodeMenu"></nav-menu>-->
<!--          </div>-->
            <div id="efContainer" ref="efContainer" class="container" v-flowDrag>

                <template v-for="node in data.nodeList">
                    <flow-node
                            :id="node.id"
                            :key="node.id"
                            :node="node"
                            :activeElement="activeElement"
                            @changeNodeSite="changeNodeSite"
                            @nodeRightMenu="nodeRightMenu"
                            @clickNode="clickNode"
                    >
                    </flow-node>
                </template>
                <!-- 给画布一个默认的宽度和高度 -->
                <div style="position:absolute;top: 2000px;left: 2000px;">&nbsp;</div>
            </div>

            <div style="width: 250px;border-left: 1px solid #dce3e8;background-color: #FBFBFB;height: 100%" >
                <flow-node-form ref="nodeForm" @setLineLabel="setLineLabel" @repaintEverything="repaintEverything"></flow-node-form>

            </div>
<!--          </el-drawer>-->

        </div>

        <!-- 流程数据详情 -->
        <flow-info v-if="flowInfoVisible" ref="flowInfo" :data="data"></flow-info>
    </div>

</template>

<script>
    import draggable from 'vuedraggable'
    // import { jsPlumb } from 'jsplumb'
    // 使用修改后的jsplumb
    import './jsplumb'
    import { easyFlowMixin } from '@/components/ef/mixins'
    import flowNode from '@/components/ef/node'
    import nodeMenu from '@/components/ef/node_menu'
    import FlowInfo from '@/components/ef/info'
    import nodeCard from '@/components/ef/node_card'
    import navMenu from  '@/components/ef/navMenu'
    import imgTemp from  '@/components/template/ImgTemp'
    import FlowNodeForm from './node_form'
    import Chat from '@/components/Chat'
    import lodash from 'lodash'
    import { getDataA } from './data_A'
    import { getDataB } from './data_A'
    import { getDataC } from './data_C'
    import { getDataD } from './data_D'
    import { getFlowData} from '@/api/ApiFlowData'
    import { getNodeId} from '@/api/ApiFlowData'
    import { getCardsByCurrent} from '@/api/ApiFlowData'
    import { getCardFirstOne} from '@/api/ApiFlowData'
    import { searchCard} from '@/api/ApiFlowData'
    // import inf from '@/components/ef/inf'
    import { getDataCard } from './data_card'

    import Node from './node'
    const axios = require('axios');
    export default {
        data () {
            return {
                flowName:null,
                drawer: false,
                direction: 'rtl',
                // jsPlumb 实例
                jsPlumb: null,
                // 控制画布销毁
                easyFlowVisible: true,
                // 控制流程数据显示与隐藏
                flowInfoVisible: false,
                // 是否加载完毕标志位
                loadEasyFlowFinish: false,
                // 数据
                data: {},
                // 激活的元素、可能是节点、可能是连线
                activeElement: {
                    // 可选值 node 、line
                    type: undefined,
                    // 节点ID
                    nodeId: undefined,
                    // 连线ID
                    sourceId: undefined,
                    targetId: undefined
                },
                zoom: 0.5,
                editVisible: false,
                nodeId:null,
              gridData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }],
              dialogTableVisible: false,
              dialogFormVisible: false,
              form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
                cardName: ''
              },
              formLabelWidth: '120px',
              cardList:[],
              isShowMsgDialog :false,
              current:0,
              totalPage:1,
              loading:true,
              noMore:false

            }
        },
        // 一些基础配置移动该文件中
        mixins: [easyFlowMixin],
        components: {
          Node,
            draggable, flowNode, nodeMenu, FlowInfo, FlowNodeForm, nodeCard ,navMenu ,Chat ,imgTemp
        },
        directives: {
            'flowDrag': {
                bind (el, binding, vnode, oldNode) {
                    if (!binding) {
                        return
                    }
                    el.onmousedown = (e) => {
                        if (e.button == 2) {
                            // 右键不管
                            return
                        }
                        //  鼠标按下，计算当前原始距离可视区的高度
                        let disX = e.clientX
                        let disY = e.clientY
                        el.style.cursor = 'move'
                        document.onmousemove = function (e) {
                            // 移动时禁止默认事件
                            e.preventDefault()
                            const left = e.clientX - disX
                            disX = e.clientX
                            el.scrollLeft += -left

                            const top = e.clientY - disY
                            disY = e.clientY
                            el.scrollTop += -top
                        }

                        document.onmouseup = function (e) {
                            el.style.cursor = 'auto'
                            document.onmousemove = null
                            document.onmouseup = null
                        }
                    }
                }
            }
        },
        mounted () {
            this.jsPlumb = jsPlumb.getInstance()
            this.$nextTick(() => {
                // 默认加载流程A的数据、在这里可以根据具体的业务返回符合流程数据格式的数据即可
              getCardFirstOne().then(res=>{
                var id = res.data.records[0].id;
                var flowName =res.data.records[0].flowName;
                getFlowData(id).then(res=>{
                  // if (this.cardList != null){
                    this.dataReload(getDataB(res,id))
                    this.flowName = flowName
                  // }
                });
              })

            })
          // this.current =0;
          // this.loa;
        },
        methods: {
          searchCard() {
            console.log(this.form.cardName);
            // if (searchCard === '' )
            searchCard(this.form.cardName).then(res=>{
              // console.log(res.data.records)
              this.cardList =[];
              this.current=1;
              this.cardList =res.data.records;
            })
            // alert(this.form.cardName)
            // var me = this;
            // var cardName= this.form.cardName;
            // this.cardList = this.cardList.filter(function (card) {
            // })
          },
          loadCardList () {
              this.current=this.current+1
              this.getDataCard2(this.current);
            },
          commitFlow () {
            console.log("commitFlow")
            if (this.$refs.nodeForm.commit()){
              this.$notify({
                title: '成功',
                message: '这是一条成功的提示消息',
                type: 'success'
              });
            }else{

            }
          },
          showMsgDialog (cardId) {
            this.isShowMsgDialog = true;
            setTimeout(()=>{
              this.$refs.chat.loadFirstMsg(cardId)
            },30);

            // })

          },
          clickCard (cardId) {
            getFlowData(cardId).then(res=>{
              // this.dataReload(getDataA(res))
              this.dataReload(getDataB(res,cardId))
            });
            // this.dataReload(getDataA(cardId))
          },
          initCardName(flowName){
            console.log(flowName)
            this.flowName = flowName;
          },
          //新增模板
          addTemp(){
            // console.log(this.form.name)
            let name = this.form.name;
            axios({
              method: 'post',
              url: '/flow/add',
              params:{
                flowName : name
              }
            }).then((response)=>{
              // this.getDataCard2();
              // this.getDataCard2();
              // var data = response.data;
              // console.log(data)
              // resolve(data);
              // return response.data+'';
            }).catch(function (error) {
              // reject(error);
              console.log(error)
            })
          },
            // 返回唯一标识
           getUUID () {
             return new Promise((resolve, reject) => {
               var data = null;
               getNodeId().then(res=>{
                 data=res+''
                 resolve(data)
               }).catch(error=>{
                 reject(error);
               })
               // axios({
               //   method: 'get',
               //   url: '/flow/getNodeId',
               //
               //   // params:{
               //   //   id : 1
               //   // }
               // }).then((response)=>{
               //   data = response.data+'';
               //   console.log(data)
               //   // if (data == null){
               //   //   this.getUUID();
               //   //   return;
               //   // }
               //   resolve(data);
               //   // return response.data+'';
               // }).catch(function (error) {
               //   reject(error);
               //   console.log(error)
               // });
             })
              // return data;
            },
            getDataCard2(current){
              if (current ==1 ){
                this.cardList = [] ;
              }
              setTimeout(()=>{
                getCardsByCurrent(current).then(res=>{
                  //获取总页数
                  this.totalPage = Math.ceil(res.data.total/10.0);
                  if (this.current>=this.totalPage){
                    this.loading = false;
                    this.noMore = true;
                  }
                  // this.cardList.push(res.data.records);
                  for(var i=0;i<res.data.records.length;i++){
                    this.cardList.push(res.data.records[i])
                  }
                  // this.cardList=this.cardList.append();
                  console.log(this.cardList);
                })
              },200)
            },
            jsPlumbInit () {
                this.jsPlumb.ready(() => {
                    // 导入默认配置
                    this.jsPlumb.importDefaults(this.jsplumbSetting)
                    // 会使整个jsPlumb立即重绘。
                    this.jsPlumb.setSuspendDrawing(false, true)
                    // 初始化节点
                    this.loadEasyFlow()
                    // 单点击了连接线, https://www.cnblogs.com/ysx215/p/7615677.html
                    this.jsPlumb.bind('click', (conn, originalEvent) => {
                        console.log(conn)
                        this.activeElement.type = 'line'
                        this.activeElement.sourceId = conn.sourceId
                        this.activeElement.targetId = conn.targetId
                        this.$refs.nodeForm.lineInit({
                            from: conn.sourceId,
                            to: conn.targetId,
                            label: conn.getLabel(),
                            linkType:conn.linkType,
                            keyWords:conn.keyWords
                        })
                        this.drawer=true;
                    })
                    // 连线
                    this.jsPlumb.bind('connection', (evt) => {
                        let from = evt.source.id
                        let to = evt.target.id
                        console.log(evt)
                        if (this.loadEasyFlowFinish) {
                            this.data.lineList.push({from: from, to: to ,sourceNode: from ,targetNoe: to })
                        }
                    })

                    // 删除连线回调
                    this.jsPlumb.bind('connectionDetached', (evt) => {
                        this.deleteLine(evt.sourceId, evt.targetId)
                    })

                    // 改变线的连接节点
                    this.jsPlumb.bind('connectionMoved', (evt) => {
                        this.changeLine(evt.originalSourceId, evt.originalTargetId)
                    })

                    // 连线右击
                    this.jsPlumb.bind('contextmenu', (evt) => {
                        console.log('contextmenu', evt)
                    })

                    // 连线
                    this.jsPlumb.bind('beforeDrop', (evt) => {
                        console.log(evt)
                        let from = evt.sourceId
                        let to = evt.targetId
                        if (from === to) {
                            this.$message.error('节点不支持连接自己')
                            return false
                        }
                        if (this.hasLine(from, to)) {
                            this.$message.error('该关系已存在,不允许重复创建')
                            return false
                        }
                        if (this.hashOppositeLine(from, to)) {
                            this.$message.error('不支持两个节点之间连线回环')
                            return false
                        }
                        this.$message.success('连接成功')
                        return true
                    })

                    // beforeDetach
                    this.jsPlumb.bind('beforeDetach', (evt) => {
                        console.log('beforeDetach', evt)
                    })
                    this.jsPlumb.setContainer(this.$refs.efContainer)
                })
            },
            // 加载流程图
            loadEasyFlow () {
                // 初始化节点
                for (var i = 0; i < this.data.nodeList.length; i++) {
                    let node = this.data.nodeList[i]
                    // 设置源点，可以拖出线连接其他节点
                    this.jsPlumb.makeSource(node.id, this.jsplumbSourceOptions)
                    // // 设置目标点，其他源点拖出的线可以连接该节点
                    this.jsPlumb.makeTarget(node.id, this.jsplumbTargetOptions)
                    this.jsPlumb.draggable(node.id, {
                        containment: 'parent',
                        stop: function (el) {
                        }
                    })
                }
                // 初始化连线
                for (var i = 0; i < this.data.lineList.length; i++) {
                    let line = this.data.lineList[i]
                    var connParam = {
                        source: line.from,
                        target: line.to,
                        label: line.label ? line.label : '',
                        connector: line.connector ? line.connector : '',
                        anchors: line.anchors ? line.anchors : undefined,
                        paintStyle: line.paintStyle ? line.paintStyle : undefined
                    }
                    var conn = this.jsPlumb.connect(connParam,this.jsplumbConnectOptions)
                    conn.linkType = line.linkType;
                    conn.keyWords = line.keyWords;

                }
                this.$nextTick(function () {
                    this.loadEasyFlowFinish = true
                })
            },
            setLineLabel (from, to, label,linkType,keyWords) {
                var conn = this.jsPlumb.getConnections({
                    source: from,
                    target: to
                })[0]
                if (!label || label === '') {
                    conn.removeClass('flowLabel')
                    conn.addClass('emptyFlowLabel')
                } else {
                    conn.addClass('flowLabel')
                }
                conn.setLabel({
                    label: label
                })
                conn.linkType =linkType;
                conn.keyWords = keyWords;
                this.data.lineList.forEach(function (line) {
                  console.log(line)
                    if (line.from == from && line.to == to) {
                        line.label = label
                        line.linkName = label
                        line.linkType = linkType
                        line.keyWords= keyWords
                    }
                })
            },
            // 删除激活的元素
            deleteElement () {
                if (this.activeElement.type === 'node') {
                    this.deleteNode(this.activeElement.nodeId)
                } else if (this.activeElement.type === 'line') {
                    this.$confirm('确定删除所点击的线吗?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        var conn = this.jsPlumb.getConnections({
                            source: this.activeElement.sourceId,
                            target: this.activeElement.targetId
                        })[0]
                        this.jsPlumb.deleteConnection(conn)
                    }).catch(() => {
                    })
                }
            },
            // 删除线
            deleteLine (from, to) {
                this.data.lineList = this.data.lineList.filter(function (line) {
                    if (line.from == from && line.to == to) {
                        return false
                    }
                    return true
                })
            },
            // 改变连线
            changeLine (oldFrom, oldTo) {
                this.deleteLine(oldFrom, oldTo)
            },
            // 改变节点的位置
            changeNodeSite (data) {
                for (var i = 0; i < this.data.nodeList.length; i++) {
                    let node = this.data.nodeList[i]
                    if (node.id === data.nodeId) {
                        node.left = data.left
                        node.top = data.top
                        node.xCoordinate=data.left.substring(0,data.left.length-2)
                        node.yCoordinate=data.top.substring(0,data.top.length-2)

                    }
                }
            },
            /**
             * 拖拽结束后添加新的节点
             * @param evt
             * @param nodeMenu 被添加的节点对象
             * @param mousePosition 鼠标拖拽结束的坐标
             */
            addNode (evt, nodeMenu, mousePosition) {
                var screenX = evt.originalEvent.clientX, screenY = evt.originalEvent.clientY
                let efContainer = this.$refs.efContainer
                var containerRect = efContainer.getBoundingClientRect()
                var left = screenX, top = screenY
                // 计算是否拖入到容器中
                if (left < containerRect.x || left > containerRect.width + containerRect.x || top < containerRect.y || containerRect.y > containerRect.y + containerRect.height) {
                    this.$message.error('请把节点拖入到画布中')
                    return
                }
                left = left - containerRect.x + efContainer.scrollLeft
                top = top - containerRect.y + efContainer.scrollTop
                // 居中
                left -= 85
                top -= 16
                var nodeId = this.nodeId;
                getNodeId().then(res=>{
                  console.log("getNodeId");
                  this.nodeId=res;
                  console.log(res)
                  console.log("getNodeId");

                })
                this.getUUID().then(v=>{
                  this.nodeId = v}
                  );
               nodeId =this.nodeId;
              console.log(nodeId)

              // console.log(nodeId)
                // 动态生成名字
                var origName = nodeMenu.name
                var nodeName = origName
                var index = 1
                while (index < 10000) {
                    var repeat = false
                    for (var i = 0; i < this.data.nodeList.length; i++) {
                        let node = this.data.nodeList[i]
                        if (node.name === nodeName) {
                            nodeName = origName + index
                            repeat = true
                        }
                    }
                    if (repeat) {
                        index++
                        continue
                    }
                    break
                }
                /**拖动节点到画布*/

                  var node = {
                    id: nodeId,
                    name: nodeName,
                    nodeType: nodeMenu.nodeType,
                    left: left + 'px',
                    top: top + 'px',
                    ico: nodeMenu.ico,
                    nodeId:nodeId,
                    resource:{
                      id:'',
                      url:''
                    },
                    state: 'success',
                    nodeName: nodeName,
                    xCoordinate: left,
                    yCoordinate: top,
                  }


                /**
                 * 这里可以进行业务判断、是否能够添加该节点
                 */
              this.data.nodeList.push(node)
                this.$nextTick(function () {
                    this.jsPlumb.makeSource(nodeId, this.jsplumbSourceOptions)
                    this.jsPlumb.makeTarget(nodeId, this.jsplumbTargetOptions)
                    this.jsPlumb.draggable(nodeId, {
                        containment: 'parent'
                    })
                })
            },
            /**
             * 删除节点
             * @param nodeId 被删除节点的ID
             */
            deleteNode (nodeId) {
                this.$confirm('确定要删除节点' + nodeId + '?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    closeOnClickModal: false
                }).then(() => {
                    /**
                     * 这里需要进行业务判断，是否可以删除
                     */
                    this.data.nodeList = this.data.nodeList.filter(function (node) {
                        if (node.id === nodeId) {
                            // 伪删除，将节点隐藏，否则会导致位置错位
                            // node.show = false
                          axios({
                            method: 'post',
                            url: '/flow/delete',
                            params:{
                              nodeId : nodeId
                            }
                          }).then((response)=>{
                            data = response.data+'';
                            console.log(data)
                            // return response.data+'';
                          }).catch(function (error) {
                            console.log(error)
                          });
                            return false
                        }
                        return true
                    })
                    this.$nextTick(function () {
                        this.jsPlumb.removeAllEndpoints(nodeId)
                    })
                }).catch(() => {
                })
                return true
            },

            // 是否具有该线
            hasLine (from, to) {
                for (var i = 0; i < this.data.lineList.length; i++) {
                    var line = this.data.lineList[i]
                    if (line.from === from && line.to === to) {
                        return true
                    }
                }
                return false
            },
            // 是否含有相反的线
            hashOppositeLine (from, to) {
                return this.hasLine(to, from)
            },
            nodeRightMenu (nodeId, evt) {
                this.menu.show = true
                this.menu.curNodeId = nodeId
                this.menu.left = evt.x + 'px'
                this.menu.top = evt.y + 'px'
            },
            repaintEverything () {
                console.log('重绘')
                this.jsPlumb.repaint()
            },
            // 流程数据信息
            dataInfo () {
                this.flowInfoVisible = true
                this.$nextTick(function () {
                    this.$refs.flowInfo.init()
                })
            },
            // 加载流程图
            dataReload (data) {
                this.easyFlowVisible = false

              // this.data.nodeList = []
                // this.data.lineList = []
                // setTimeout(()=>{
                //   data = lodash.cloneDeep(data)
                //   this.easyFlowVisible = true
                //   this.data = data
                //
                // },0)
                this.$nextTick(() => {
                    data = lodash.cloneDeep(data)
                  this.easyFlowVisible = true
                  this.data = data
                    this.$nextTick(() => {
                        this.jsPlumb = jsPlumb.getInstance()
                        this.$nextTick(() => {
                            this.jsPlumbInit()
                        })
                    })
                })
            },
            // 模拟载入数据dataA
            dataReloadA () {
                this.dataReload(getDataA())
            },
            // 模拟载入数据dataB
            dataReloadB () {
                this.dataReload(getDataB())
            },
            // 模拟载入数据dataC
            dataReloadC () {
                this.dataReload(getDataC())
            },
            // 模拟载入数据dataD
            dataReloadD () {
                this.dataReload(getDataD())
            },
            zoomAdd () {
                if (this.zoom >= 1) {
                    return
                }
                this.zoom = this.zoom + 0.1
                this.$refs.efContainer.style.transform = `scale(${this.zoom})`
                this.jsPlumb.setZoom(this.zoom)
            },
            zoomSub () {
                if (this.zoom <= 0) {
                    return
                }
                this.zoom = this.zoom - 0.1
                this.$refs.efContainer.style.transform = `scale(${this.zoom})`
                this.jsPlumb.setZoom(this.zoom)
            },
            // 下载数据
            downloadData () {
                this.$confirm('确定要下载该流程数据吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    closeOnClickModal: false
                }).then(() => {
                    var datastr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.data, null, '\t'))
                    var downloadAnchorNode = document.createElement('a')
                    downloadAnchorNode.setAttribute('href', datastr)
                    downloadAnchorNode.setAttribute('download', 'data.json')
                    downloadAnchorNode.click()
                    downloadAnchorNode.remove()
                    this.$message.success('正在下载中,请稍后...')
                }).catch(() => {
                })
            },
          clickNode (nodeId) {
            this.activeElement.type = 'node'
            this.activeElement.nodeId = nodeId
            this.drawer = true
            this.$refs.nodeForm.nodeInit(this.data, nodeId)
            // this.$refs.nodeForm.save();
            // console.log('hello')
          },
        }
    }
</script>
