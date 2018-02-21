import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'
import store from './store'
import VueLazyload from 'vue-lazyload'
import {flexible} from 'common/js/flexible'

fastclick.attach(document.body)
flexible(window, window['lib'] || (window['lib'] = {}))
Vue.config.productionTip = false

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
