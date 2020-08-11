// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/components/ef/index.css'
import Axios from 'axios'
import audio from 'vue-mobile-audio'
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  // 高德的key
  key: '2ecb7cb38685fa9e4cb212fb10c8e142',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});

Vue.config.productionTip = false
Vue.use(audio)
Vue.use(ElementUI, {size: 'small'})
Vue.use(Axios)
Vue.prototype.$axios = Axios

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: {App},
    template: '<App/>'
})

axios.interceptors.request.use(config => {
return config;
})
