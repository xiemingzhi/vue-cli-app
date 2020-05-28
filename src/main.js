import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// eslint-disable-next-line no-console
console.log('main', process.env.VUE_APP_SECRET)

new Vue({
  render: h => h(App),
}).$mount('#app')
