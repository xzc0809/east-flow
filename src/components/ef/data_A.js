var data_A = {
    name: '流程A',
    nodeList: [{}],
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
    lineList: [{
        from: '1',
        to: '2'
    }, {
        from: '2',
        to: '3'
    }]
}
const axios = require('axios');
export function getDataA(){
    axios({
      method: 'get',
      url: '/flow/list',
      params:{
        id : 1
      }
      // headers: {'Origin': '127.0.0.1'}
    }).then(function(response){
      var data = response.data;
      console.log(response.data.nodeList);
      // data_A.nodeList = data.nodeList;
      var nodeList = data.nodeList;
      // var nodeList2 = [{
      //           id :'',
      //           name :'',
      //           content :'',
      //           type :'',
      //           left :'',
      //           top :'',
      //           ico :'',
      //           state :''
      // }];
      // for (var i=0;i<nodeList.length;i++){
      //     nodeList[i].id = nodeList[i].nodeId;
      //     nodeList[i].name = nodeList[i].nodeName;
      //     nodeList[i].left = nodeList[i].xCoordinate+'px';
      //     nodeList[i].top = nodeList[i].yCoordinate+'px';
      //     nodeList[i].type = 'task';
      //     nodeList[i].ico =  'el-icon-present';
      //     nodeList2[i].state = 'success';
      // }
      data_A.nodeList = nodeList;
      console.log(nodeList2);

    }).catch(function (error) {
      console.log(error)
  });
  return data_A;
}

// export function getDataA () {
//     get()
//     return data_A
// }
