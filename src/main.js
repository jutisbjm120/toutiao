import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/js/rem'
window.axios=axios

Vue.config.productionTip = false
Vue.filter("getimg",(res)=>{
  return "image"+res.split("img")[1];
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
