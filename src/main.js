import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import store from './store';
import VueNativeSock from 'vue-native-websocket'

Vue.use(VueNativeSock, process.env.VUE_APP_SERVER_HOST, { store: store })

Vue.config.productionTip = false

// eslint-disable-next-line no-console
console.log('main', process.env.VUE_APP_SECRET)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
