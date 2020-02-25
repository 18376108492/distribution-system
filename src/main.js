import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'

import {getRequest} from './utils/api.js'
import {putRequest} from './utils/api.js'
import {deleteRequest} from './utils/api.js'
import {postRequest} from './utils/api.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.getRequest=getRequest
Vue.prototype.putRequest=putRequest
Vue.prototype.deleteRequest=deleteRequest
Vue.prototype.postRequest=postRequest


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
