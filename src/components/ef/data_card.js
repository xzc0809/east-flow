const axios = require('axios');
var data_card = {
  name: '流程A',
  cardList: [
    {
      id: 'nodeA',
      title: '流程A-节点A',
      keyWord:["a","b","c"],
      content: 'hello',
      type: 'task',
      left: '26px',
      top: '161px',
      ico: 'el-icon-user-solid'
    },
    {
      id: 'nodeB',
      title: '流程A-节点A',
      keyWord:["a","b","c"],
      content: 'hello',
      type: 'task',
      left: '340px',
      top: '161px',
      ico: 'el-icon-goods'
    },
    {
      id: 'nodeC',
      title: '流程A-节点A',
      keyWord:["a","b","c"],
      content: 'hello',
      type: 'task',
      left: '739px',
      top: '161px',
      ico: 'el-icon-present'
    }
  ],
  lineList: [{
    from: 'nodeA',
    to: 'nodeB'
  }, {
    from: 'nodeB',
    to: 'nodeC'
  }]
}

function get(){
  // axios.get('http://192.168.30.38:8080/flow/list?id=1')
  axios.get('http://www.kuaidi100.com/query?type=yuantong&postid=11111111111')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function getDataCard() {
  // get()
  return data_card
}
