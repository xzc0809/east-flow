import request from "@/api/base/request";
import md5 from 'js-md5';
import axios from 'axios'

export function getChatResponse(value,text) {
    return request({
        // url:'fcgi-bin/nlp/nlp_textchat?'+getChatParams(text),
       url:'/InboundMessageNotification/sip?'+getChatParams(value,text),
      method: 'get'
    })
}

export function loadFirstMsgApi(flowId) {
  return request({
    // url:'fcgi-bin/nlp/nlp_textchat?'+getChatParams(text),
    url:'/outboundMessage/text?flowId='+flowId,
    method: 'get'
  })
}

// function getChatParams(messageId,text) {
//     let app_id = 2151744249;
//     let app_key = 'AWNcQGMMWi0OUceN';
//     let nonce_str = 'fa577ce340859f9fe';
//     let question = encodeURIComponent(text);
//     let session = 10000;
//     let time_stamp = parseInt(Date.now() / 1000);
//
//     let params = 'app_id=' + app_id + '&nonce_str=' + nonce_str + '&question=' + question + '&session=' + session + '&time_stamp=' + time_stamp + '&app_key=' + app_key;
//     let sign = md5(params).toUpperCase()
//
//     return params+'&sign='+sign
// }

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

export function getImage(url) {
  return request({
    // url:'fcgi-bin/nlp/nlp_textchat?'+getChatParams(text),
    url:'/download?fileName='+url,
    method: 'get'
  })
}
