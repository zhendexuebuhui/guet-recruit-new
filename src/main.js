import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import '../static/css/mystyle.css'
import $ from 'jquery'
import axios from 'axios'
Vue.use(ElementUI)
Vue.use($)
new Vue({
  el: '#app',
  render: h => h(App)

  

})
