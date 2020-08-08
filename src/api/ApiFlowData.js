import request from "@/api/base/request";
import md5 from 'js-md5';

export function getFlowData(cardId) {
  return request({
    // url:'fcgi-bin/nlp/nlp_textchat?'+getChatParams(text),
    url:'/flow/list?id='+cardId,
    method: 'get'
  })
}

export function getNodeId() {
  return request({
    // url:'fcgi-bin/nlp/nlp_textchat?'+getChatParams(text),
    url:'/flow/getNodeId',
    method: 'get'
  })
}

export function updateFlow(data) {
  return request({
    // url:'fcgi-bin/nlp/nlp_textchat?'+getChatParams(text),
    url:'/flow/update',
    method: 'post',
    data:data
  })
}

// export function deleteNode(data) {
//   return request({
//     // url:'fcgi-bin/nlp/nlp_textchat?'+getChatParams(text),
//     url:'/flow/update',
//     method: 'post',
//     data:data
//   })
// }

export function getCardsByCurrent(current){
  return request({
    // url:'fcgi-bin/nlp/nlp_textchat?'+getChatParams(text),
    method: 'get',
    url: '/flow/cards',
    params:{
      current:current
    }
  })
}

export function getCardFirstOne(){
  return request({
    // url:'fcgi-bin/nlp/nlp_textchat?'+getChatParams(text),
    method: 'get',
    url: '/flow/cards',
    params:{
      size:1
    }
  })
}

export function searchCard(name){
  return request({
    // url:'fcgi-bin/nlp/nlp_textchat?'+getChatParams(text),
    method: 'post',
    url: '/flow/searhCard',
    params:{
      text:name
    }
  })
}

function getChatParams(value,text) {
  let messageId = value;
  let content = text;
  // let app_key = 'AWNcQGMMWi0OUceN';
  // let nonce_str = 'fa577ce340859f9fe';
  // let question = encodeURIComponent(text);
  // let session = 10000;
  // let time_stamp = parseInt(Date.now() / 1000);
  //
  // let params = 'app_id=' + app_id + '&nonce_str=' + nonce_str + '&question=' + question + '&session=' + session + '&time_stamp=' + time_stamp + '&app_key=' + app_key;
  // let sign = md5(params).toUpperCase()
  let params = 'messageId='+messageId+'&content='+content
  return params
}
