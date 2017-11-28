// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import weChat from 'vue-wechat-title'
import 'vue-ydui/dist/ydui.base.css'
import {Icons} from 'vue-ydui/dist/lib.rem/icons'
import {Button, ButtonGroup} from 'vue-ydui/dist/lib.rem/button'
import {CellGroup, CellItem} from 'vue-ydui/dist/lib.rem/cell'
import {Switch} from 'vue-ydui/dist/lib.rem/switch'
import {Rate} from 'vue-ydui/dist/lib.rem/rate'
import {TextArea} from 'vue-ydui/dist/lib.rem/textarea'

// 引用API文件

import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api
Vue.config.productionTip = false

Vue.component(Icons.name, Icons)

Vue.component(Button.name, Button)
Vue.component(ButtonGroup.name, ButtonGroup)
Vue.component(CellGroup.name, CellGroup)
Vue.component(CellItem.name, CellItem)
Vue.component(Switch.name, Switch)
Vue.component(Rate.name, Rate)
Vue.component(TextArea.name, TextArea)

Vue.use(weChat)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
