// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import weChat from 'vue-wechat-title'
import 'vue-ydui/dist/ydui.base.css'
import {Icons} from 'vue-ydui/dist/lib.rem/icons'

// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api

Vue.config.productionTip = false

Vue.component(Icons.name, Icons)

Vue.use(weChat)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
