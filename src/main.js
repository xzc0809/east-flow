// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/components/ef/index.css'
import Axios from 'axios'
Vue.config.productionTip = false

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
