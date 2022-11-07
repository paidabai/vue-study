import Vue from 'vue'

import App from './App.vue'

import './assets/base.css'

new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
})
