import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Geocoder from '@pderas/vue2-geocoder'

Vue.config.productionTip = false
Vue.use(Geocoder, {
  defaultCountryCode: null, // e.g. 'CA'
  defaultLanguage: null, // e.g. 'en'
  defaultMode: 'address', // or 'lat-lng'
  googleMapsApiKey: process.env.VUE_APP_SECRET
})
// eslint-disable-next-line no-console
console.log(process.env.VUE_APP_SECRET)

new Vue({
  render: h => h(App),
}).$mount('#app')
