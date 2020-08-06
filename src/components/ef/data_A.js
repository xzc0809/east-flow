var data_A = {
    flow:{},
    name: '流程A',
    nodeList: [],
    //     {
    //         id: 'nodeA',
    //         name: '流程A-节点A',
    //         content: 'hello',
    //         type: 'task',
    //         left: '26px',
    //         top: '161px',
    //         ico: 'el-icon-user-solid'
    //     },
    //     {
    //         id: 'nodeB',
    //         name: '流程A-节点B',
    //         content: 'hello',
    //         type: 'task',
    //         left: '340px',
    //         top: '161px',
    //         ico: 'el-icon-goods'
    //     },
    //     {
    //         id: 'nodeC',
    //         name: '流程A-节点C',
    //         content: 'hello',
    //         type: 'task',
    //         left: '739px',
    //         top: '161px',
    //         ico: 'el-icon-present'
    //     }
    // ],
    lineList: []
}
var data_flow = {flow:{}}
const axios = require('axios');
export function getDataA(cardId){
    axios({
      method: 'get',
      url: '/flow/list',
      params:{
        id : cardId
      }
      // headers: {'Origin': '127.0.0.1'}
    }).then(function(response){
      var data = response.data;
      // console.log(response.data.nodeList);
      console.log(data);
      var nodeList = data.nodeList;
      var lineList = data.lineList;

      for (var i=0;i<nodeList.length;i++){
          nodeList[i].id =nodeList[i].nodeId+'';
          nodeList[i].name = nodeList[i].nodeName;
          nodeList[i].left = nodeList[i].xCoordinate+'px';
          nodeList[i].top = nodeList[i].yCoordinate+'px';
          nodeList[i].type = nodeList[i].type;
          nodeList[i].ico =  'el-icon-present';
          nodeList[i].state = 'success';
          // nodeList[i].from = nodeList[i].sourceNode;
          // nodeList[i].to = nodeList[i].targetNoe;
          // nodeList[i].label = nodeList[i].linkname;
          // data_A.lineList[i].from = nodeList[i].sourceNode;
          // data_A.lineList[i].to = nodeList[i].targetNoe;
          // data_A.lineList[i].label = nodeList[i].linkname;
      }
      for (var i= 0;i<lineList.length;i++){
        lineList[i].from = lineList[i].sourceNode+'';
        lineList[i].to = lineList[i].targetNoe+'';
        lineList[i].label = lineList[i].linkName;
        lineList[i].linkType = lineList[i].linkType;
        lineList[i].keyWords = lineList[i].keyWords;
      }
      data_A.nodeList = nodeList;
      // data_A.lineList=[];
      data_A.lineList = lineList;
      // data_flow.flow = data.flow;
      data_A.flow.id = cardId;
      console.log(data_A)
    }).catch(function (error) {
      console.log(error)
  });
  return data_A;
}

export function getDataFlow () {
    // get()
    return data_flow;
}
