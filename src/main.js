import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')